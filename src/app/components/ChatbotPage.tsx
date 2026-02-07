import { useState, useRef, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Send, Bot, User, ArrowLeft, Sparkles } from "lucide-react";

interface ChatMessage {
  role: "user" | "ai";
  text: string;
  timestamp: Date;
}

interface ChatbotPageProps {
  onBack: () => void;
  onLogout: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function ChatbotPage({
  onBack,
  onLogout,
  darkMode,
  toggleDarkMode,
}: ChatbotPageProps) {
  const [conversation, setConversation] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: "Hello! I'm your India travel assistant 🇮🇳\nAsk me anything about destinations, trips, best time to visit, budget tips, food, adventure — anything India travel related!",
      timestamp: new Date(),
    },
  ]);

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedQuestions = [
    "What are the best beaches in Maharashtra?",
    "Suggest hill stations for a weekend trip",
    "Best time to visit Kerala?",
    "Adventure activities in Himachal Pradesh",
    "Heritage sites in Rajasthan",
    "Budget-friendly destinations in South India",
  ];

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation, isLoading]);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userText = message.trim();

    const userMessage: ChatMessage = {
      role: "user",
      text: userText,
      timestamp: new Date(),
    };

    setConversation((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    const backendUrl =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

    try {
      const response = await fetch(`${backendUrl}/ai-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userText,
          conversation: conversation.map((msg) => ({
            role: msg.role,
            text: msg.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      const aiMessage: ChatMessage = {
        role: "ai",
        text: data.reply || "Sorry, I couldn't generate a reply right now 😔",
        timestamp: new Date(),
      };

      setConversation((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Chat error:", err);

      const errorMessage: ChatMessage = {
        role: "ai",
        text:
          "I'm having trouble connecting right now, but I'd love to help you explore India! 🇮🇳\n\n" +
          "Here are some amazing places to consider:\n" +
          "• Kerala Backwaters - Peaceful houseboat cruises\n" +
          "• Rajasthan Palaces - Rich heritage and stunning architecture\n" +
          "• Himachal Pradesh - Mountain adventures and scenic beauty\n" +
          "• Goa Beaches - Relaxation and vibrant nightlife\n\n" +
          "Please try asking me again in a moment! ✨",
        timestamp: new Date(),
      };

      setConversation((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-linear-to-br from-blue-50 to-indigo-100 text-gray-900"
      }`}
    >
      <Header
        onLogout={onLogout}
        onProfileClick={() => {}}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${
            darkMode
              ? "text-gray-300 hover:text-white hover:bg-gray-800"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/60"
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        {/* Chat container */}
        <div
          className={`rounded-3xl shadow-2xl overflow-hidden border ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Messages area */}
          <div className="h-112 sm:h-128 overflow-y-auto p-5 sm:p-6 space-y-5">
            {conversation.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${
                  msg.role === "user" ? "flex-row-reverse" : "flex-row"
                } animate-fade-in`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "user"
                      ? "bg-blue-500"
                      : darkMode
                        ? "bg-emerald-600"
                        : "bg-emerald-500"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>

                <div
                  className={`max-w-[80%] ${msg.role === "user" ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl shadow-sm ${
                      msg.role === "user"
                        ? "bg-blue-500 text-white"
                        : darkMode
                          ? "bg-gray-700 text-gray-100"
                          : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">
                      {msg.text}
                    </p>
                  </div>
                  <p
                    className={`text-xs mt-1.5 opacity-70 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-emerald-600" : "bg-emerald-500"
                  }`}
                >
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 rounded-full bg-current animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-current animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-current animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                    <span className="text-sm opacity-70">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions - only at start */}
          {conversation.length === 1 && (
            <div
              className={`p-5 border-t ${
                darkMode
                  ? "border-gray-700 bg-gray-900/30"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <p className="text-sm font-medium mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Quick start questions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {predefinedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setMessage(q)}
                    disabled={isLoading}
                    className={`p-3 text-left text-sm rounded-xl transition-all border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                        : "bg-white border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                    } disabled:opacity-50`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input area */}
          <div
            className={`p-4 sm:p-5 border-t flex gap-3 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about places, itineraries, best time to visit..."
              disabled={isLoading}
              rows={1}
              className={`flex-1 resize-none rounded-2xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300"
              } disabled:opacity-60`}
            />
            <button
              onClick={sendMessage}
              disabled={!message.trim() || isLoading}
              className={`px-6 rounded-2xl font-medium flex items-center justify-center min-w-18 transition-all ${
                !message.trim() || isLoading
                  ? darkMode
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
              }`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
