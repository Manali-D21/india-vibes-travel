// server.js
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* -------------------- Middleware -------------------- */
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local Vite dev
      "http://localhost:3000",
      "https://*.vercel.app", // allows all Vercel preview & production domains
      // Add your real frontend URL after first deploy, example:
      "https://india-vibes-travel.vercel.app",

      // 'https://india-vibes-frontend.vercel.app',
    ],
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json({ limit: "1mb" }));

/* -------------------- API Key -------------------- */
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn(
    "⚠️ GEMINI_API_KEY not found in .env - using fallback responses",
  );
}

/* -------------------- Gemini Init -------------------- */
let genAI = null;
let model = null;

if (GEMINI_API_KEY) {
  try {
    genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", // ✅ Using current stable fast model
    });
  } catch (err) {
    console.warn("⚠️ Failed to initialize Gemini - using fallback responses");
  }
}

/* -------------------- System Prompt -------------------- */
const SYSTEM_PROMPT = `
You are Vibes AI — a warm, enthusiastic India travel assistant 🇮🇳

ONLY answer questions related to India travel:
• destinations
• itineraries
• culture
• food
• budget tips
• best time to visit
• hidden gems

Style:
• friendly
• concise
• emojis 😊🏖️🏔️

If the user asks something NOT related to India travel, reply:
"Sorry, I'm specialized in India travel — ask me about places, trips or tips in India! ✨"
`;

/* -------------------- Fallback Responses -------------------- */
function getFallbackResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("kerala") || msg.includes("backwater")) {
    return "Kerala's backwaters are absolutely magical! 🛶 Consider staying in a traditional houseboat in Alleppey or Kumarakom. The best time to visit is October to March when the weather is pleasant. You'll love the peaceful canals, coconut groves, and authentic Kerala cuisine! ✨";
  }

  if (
    msg.includes("rajasthan") ||
    msg.includes("jaipur") ||
    msg.includes("udaipur")
  ) {
    return "Rajasthan is a treasure trove of royal heritage! 🏰 Don't miss the Pink City Jaipur with its stunning Amber Fort, the romantic lake city Udaipur with its palaces, and the golden city Jaisalmer with its desert safari experiences. October to March is perfect for exploring! 👑";
  }

  if (msg.includes("goa") || msg.includes("beach")) {
    return "Goa offers the perfect blend of relaxation and adventure! 🏖️ North Goa has vibrant nightlife and water sports at Baga and Calangute beaches, while South Goa offers peaceful stretches like Palolem and Agonda. Try the delicious seafood and enjoy the Portuguese-influenced architecture! 🌴";
  }

  if (
    msg.includes("himachal") ||
    msg.includes("mountains") ||
    msg.includes("manali") ||
    msg.includes("shimla")
  ) {
    return "Himachal Pradesh is a paradise for mountain lovers! 🏔️ Manali offers adventure sports and stunning valleys, Shimla has colonial charm and cool weather, and Dharamshala provides spiritual vibes with Tibetan culture. Best visited from March to June and September to November! 🌲";
  }

  if (msg.includes("food") || msg.includes("cuisine")) {
    return "Indian cuisine is incredibly diverse! 🍛 Try authentic South Indian dosas and sambhar, North Indian butter chicken and naan, Rajasthani dal baati churma, Bengali fish curry, and don't miss street food like pani puri, vada pav, and kulfi! Each region has its unique flavors! 🌶️";
  }

  if (msg.includes("budget") || msg.includes("cheap") || msg.includes("cost")) {
    return "India is incredibly budget-friendly! 💰 You can stay in hostels for ₹500-1500/night, eat delicious meals for ₹100-300, and travel by trains/buses affordably. For mid-range comfort, budget ₹2000-4000/day. Luxury experiences are also very affordable compared to western countries! 🚂";
  }

  // General India travel response
  return "India is an incredible destination with something for everyone! 🇮🇳 From the beaches of Goa to the mountains of Himachal, from Kerala's backwaters to Rajasthan's deserts, from Delhi's history to Mumbai's energy - each place offers unique experiences. What type of experience are you looking for - adventure, relaxation, culture, or food? ✨";
}

/* -------------------- Chat Endpoint -------------------- */
app.post("/ai-chat", async (req, res) => {
  try {
    const { message, conversation = [] } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({ reply: "Please send a message 😊" });
    }

    // If no AI model available, use fallback responses
    if (!model) {
      return res.json({ reply: getFallbackResponse(message) });
    }

    /* ---- Build Gemini-safe history ---- */
    const history = [
      {
        role: "user",
        parts: [{ text: SYSTEM_PROMPT }],
      },
      ...conversation
        .filter((m) => m?.text?.trim())
        .map((m) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.text }],
        })),
    ];

    const chat = model.startChat({
      history,
      generationConfig: {
        temperature: 0.75,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1000,
      },
    });

    const result = await chat.sendMessage(message);
    let reply = result.response.text().trim();

    reply = reply.replace(/\n{3,}/g, "\n\n");

    res.json({ reply });
  } catch (err) {
    console.error("Gemini API error:", err);

    let userMessage = "Sorry, something went wrong 😔 Please try again.";

    if (err?.message?.includes("API_KEY")) {
      userMessage = "Gemini API key issue — please contact support.";
    } else if (err?.status === 429) {
      userMessage = "Too many requests ⏳ Please wait and try again.";
    } else if (err?.message?.includes("safety")) {
      userMessage = "That request was blocked by safety filters 😊";
    }

    res.status(500).json({ reply: userMessage });
  }
});

/* -------------------- Health Check -------------------- */
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    model: "gemini-2.5-flash",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

/* -------------------- Server -------------------- */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Vibes AI backend running on port ${PORT}`);
  console.log(`   → http://localhost:${PORT}`);
  console.log(`   → Health: http://localhost:${PORT}/health`);
  app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
  });
});
