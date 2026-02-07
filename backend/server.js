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
    origin: "*", // ✅ safest for deployment
    methods: ["GET", "POST"],
  })
);

app.use(express.json({ limit: "1mb" }));

/* -------------------- Root Route (IMPORTANT) -------------------- */
app.get("/", (req, res) => {
  res.send("🚀 Vibes AI backend is running");
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

/* -------------------- API Key -------------------- */
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn("⚠️ GEMINI_API_KEY not found – using fallback responses");
}

/* -------------------- Gemini Init -------------------- */
let model = null;

if (GEMINI_API_KEY) {
  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });
  } catch (err) {
    console.warn("⚠️ Gemini init failed – fallback enabled");
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

  if (msg.includes("kerala")) {
    return "Kerala’s backwaters are magical 🛶 Visit Alleppey or Kumarakom between Oct–Mar for the best experience ✨";
  }

  if (msg.includes("rajasthan")) {
    return "Rajasthan is royal and colorful 👑 Jaipur, Udaipur & Jaisalmer are must-visits from Oct–Mar 🏰";
  }

  if (msg.includes("goa")) {
    return "Goa is perfect for beaches & fun 🏖️ North Goa for nightlife, South Goa for peace 🌴";
  }

  if (msg.includes("himachal") || msg.includes("manali")) {
    return "Himachal is a mountain paradise 🏔️ Best time: Mar–Jun & Sep–Nov 🌲";
  }

  if (msg.includes("food")) {
    return "Indian food is super diverse 🍛 Don’t miss dosas, butter chicken, street food & sweets 😋";
  }

  if (msg.includes("budget")) {
    return "India is budget-friendly 💰 ₹1500–3000/day is enough for a great trip 🚆";
  }

  return "India has something for everyone 🇮🇳 Beaches, mountains, history & food — what do you want to explore? ✨";
}

/* -------------------- Chat Endpoint -------------------- */
app.post("/ai-chat", async (req, res) => {
  try {
    const { message, conversation = [] } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({ reply: "Please send a message 😊" });
    }

    // Fallback if Gemini unavailable
    if (!model) {
      return res.json({ reply: getFallbackResponse(message) });
    }

    const history = [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      ...conversation.map((m) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      })),
    ];

    const chat = model.startChat({
      history,
      generationConfig: {
        temperature: 0.75,
        topP: 0.95,
        maxOutputTokens: 800,
      },
    });

    const result = await chat.sendMessage(message);
    const reply = result.response.text().trim();

    res.json({ reply });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).json({
      reply: "Something went wrong 😔 Please try again.",
    });
  }
});

/* -------------------- Server -------------------- */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Vibes AI backend running on port ${PORT}`);
});
