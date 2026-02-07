import { useState, useMemo, useEffect, useRef } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DestinationCard } from "./DestinationCard";
import { ChevronDown, MessageCircle, X, Bot, Send } from "lucide-react";
import { destinations, states, moods } from "@/data/destinations";
import type { Destination } from "@/data/destinations";

interface DashboardProps {
  onDestinationClick: (destination: Destination) => void;
  onChatbotClick: () => void;
  onProfileClick: () => void;
  onLogout: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Dashboard({
  onDestinationClick,
  onChatbotClick,
  onProfileClick,
  onLogout,
  darkMode,
  toggleDarkMode,
}: DashboardProps) {
  const [selectedMood, setSelectedMood] = useState("All");
  const [selectedState, setSelectedState] = useState("All States");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem("indiaVibesFavorites") || "[]");
  });
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    { role: "user" | "ai"; text: string }[]
  >([
    {
      role: "ai",
      text: "Hi! I'm your travel assistant powered by Gemini AI 🇮🇳\nAsk me about destinations, best time to visit, hidden gems, food, adventure — anything India travel!",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const user = JSON.parse(
    localStorage.getItem("indiaVibesUser") || '{"name":"Traveler"}',
  );

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isChatLoading]);

  // Sync favorites
  useEffect(() => {
    localStorage.setItem("indiaVibesFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id],
    );
  };

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesMood = selectedMood === "All" || dest.mood === selectedMood;
      const matchesState =
        selectedState === "All States" || dest.state === selectedState;
      const matchesSearch =
        !searchQuery ||
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesMood && matchesState && matchesSearch;
    });
  }, [selectedMood, selectedState, searchQuery]);

  const favoriteDestinations = destinations.filter((dest) =>
    favorites.includes(dest.id),
  );

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case "Adventure":
        return "🏔️";
      case "Chill":
        return "🏖️";
      case "Nature":
        return "🌿";
      case "Heritage":
        return "🏛️";
      default:
        return "";
    }
  };

  const sendChatMessage = async () => {
    if (!chatMessage.trim() || isChatLoading) return;

    const userText = chatMessage.trim();

    setChatHistory((prev) => [...prev, { role: "user", text: userText }]);
    setChatMessage("");
    setIsChatLoading(true);

    const backendUrl =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

    try {
      const response = await fetch(`${backendUrl}/ai-chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          conversation: chatHistory.map((m) => ({
            role: m.role,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const aiReply =
        data.reply || "Hmm... I couldn't generate a reply right now.";

      setChatHistory((prev) => [...prev, { role: "ai", text: aiReply }]);
    } catch (err) {
      console.error("Chat error:", err);

      setChatHistory((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "I'm having trouble connecting to the AI service right now, but I can still help you explore India! 🇮🇳\n\n" +
            "Here are some amazing destinations you might love:\n" +
            "• Kerala Backwaters - Perfect for peaceful boat rides\n" +
            "• Rajasthan Forts - Rich history and stunning architecture\n" +
            "• Himachal Mountains - Great for adventure and nature\n" +
            "• Goa Beaches - Relaxation and vibrant culture\n\n" +
            "Try asking me again in a moment! ✨",
        },
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors ${darkMode ? "bg-gray-900" : "bg-pink-50"}`}
    >
      {/* Header */}
      <Header
        onSearch={setSearchQuery}
        onLogout={onLogout}
        onProfileClick={onProfileClick}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-teal-600 via-teal-700 to-emerald-600 text-white py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center drop-shadow-lg">
            Hey {user?.name?.split(" ")[0] || "Traveler"}, Ready for Your Next
            Maharashtra Escape?
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center mb-10 drop-shadow">
            Choose your vibe & state – explore {destinations.length}+
            destinations
          </p>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex flex-wrap justify-center gap-3">
              {moods.map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                    selectedMood === mood
                      ? "bg-white text-teal-600 shadow-lg scale-105"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {mood !== "All" && getMoodEmoji(mood)} {mood}
                </button>
              ))}
            </div>

            <div className="relative">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 rounded-full bg-white/20 text-white font-medium hover:bg-white/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 min-w-35"
              >
                {states.map((state) => (
                  <option key={state} value={state} className="text-gray-900">
                    {state}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
            </div>

            {(selectedMood !== "All" ||
              selectedState !== "All States" ||
              searchQuery) && (
              <button
                onClick={() => {
                  setSelectedMood("All");
                  setSelectedState("All States");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-full bg-white/20 text-white font-medium hover:bg-white/30 transition-all"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div
            className={`rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow ${
              darkMode ? "bg-gray-800" : "bg-yellow-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  darkMode ? "bg-red-900/70" : "bg-red-100"
                }`}
              >
                <span className="text-2xl">❤️</span>
              </div>
              <div>
                <p
                  className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  {favorites.length}
                </p>
                <p
                  className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Your Favorites
                </p>
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow ${
              darkMode ? "bg-gray-800" : "bg-yellow-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  darkMode ? "bg-blue-900/70" : "bg-blue-100"
                }`}
              >
                <span className="text-2xl">🏖️</span>
              </div>
              <div>
                <p
                  className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  12+
                </p>
                <p
                  className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Konkan Gems
                </p>
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow ${
              darkMode ? "bg-gray-800" : "bg-yellow-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  darkMode ? "bg-green-900/70" : "bg-green-100"
                }`}
              >
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <p
                  className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  {destinations.length}+
                </p>
                <p
                  className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Total Destinations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results Info */}
        {(selectedMood !== "All" ||
          selectedState !== "All States" ||
          searchQuery) && (
          <div className="mb-8">
            <p
              className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              Found {filteredDestinations.length} destinations
              {selectedMood !== "All" && ` with ${selectedMood} vibe`}
              {selectedState !== "All States" && ` in ${selectedState}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Favorite Destinations */}
        {favoriteDestinations.length > 0 &&
          !searchQuery &&
          selectedMood === "All" &&
          selectedState === "All States" && (
            <div className="mb-12">
              <h2
                className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                Your Favorite Places ❤️
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteDestinations.slice(0, 4).map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    isFavorite={favorites.includes(destination.id)}
                    toggleFavorite={toggleFavorite}
                    onClick={() => onDestinationClick(destination)}
                  />
                ))}
              </div>
              {favoriteDestinations.length > 4 && (
                <div className="text-center mt-6">
                  <p
                    className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Showing 4 of {favoriteDestinations.length} favorites
                  </p>
                </div>
              )}
            </div>
          )}

        {/* All Destinations */}
        <div>
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-12">
              <p
                className={`text-xl mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                No destinations found matching your criteria
              </p>
              <button
                onClick={() => {
                  setSelectedMood("All");
                  setSelectedState("All States");
                  setSearchQuery("");
                }}
                className="px-6 py-3 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-all"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              {selectedMood === "All" &&
                selectedState === "All States" &&
                !searchQuery &&
                favoriteDestinations.length === 0 && (
                  <h2
                    className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}
                  >
                    All Destinations
                  </h2>
                )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDestinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    isFavorite={favorites.includes(destination.id)}
                    toggleFavorite={toggleFavorite}
                    onClick={() => onDestinationClick(destination)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Floating Chatbot Button & Mini Chat */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showChatbot && (
          <button
            onClick={() => setShowChatbot(true)}
            className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-xl transition-all transform hover:scale-110 flex items-center gap-2 animate-pulse"
          >
            <Bot className="w-6 h-6" />
            <span className="hidden sm:block font-medium">Ask AI</span>
          </button>
        )}

        {showChatbot && (
          <div
            className={`w-80 sm:w-96 h-112 rounded-2xl shadow-2xl overflow-hidden border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between p-4 border-b ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-500" />
                <span
                  className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  Travel AI Assistant
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-500">Live</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={onChatbotClick}
                  className={`p-1 rounded-full hover:bg-gray-100 ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowChatbot(false)}
                  className={`p-1 rounded-full hover:bg-gray-100 ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[calc(100%-128px)] overflow-y-auto p-4 space-y-4">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${
                      msg.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-linear-to-br from-green-500 to-teal-600 text-white"
                    }`}
                  >
                    {msg.role === "user" ? "You" : "AI"}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? darkMode
                          ? "bg-blue-600 text-white"
                          : "bg-blue-500 text-white"
                        : darkMode
                          ? "bg-gray-700 text-gray-100"
                          : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}

              {isChatLoading && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-green-500 to-teal-600 flex items-center justify-center text-white">
                    AI
                  </div>
                  <div
                    className={`p-3 rounded-2xl ${
                      darkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 rounded-full bg-current animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full bg-current animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full bg-current animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                      <span className="text-sm opacity-70">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className={`p-4 border-t ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey && !isChatLoading) {
                      e.preventDefault();
                      sendChatMessage();
                    }
                  }}
                  placeholder={
                    isChatLoading
                      ? "AI is thinking..."
                      : "Ask about places, trips..."
                  }
                  disabled={isChatLoading}
                  className={`flex-1 px-4 py-2.5 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    darkMode
                      ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                      : "bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300"
                  } disabled:opacity-60`}
                />
                <button
                  onClick={sendChatMessage}
                  disabled={!chatMessage.trim() || isChatLoading}
                  className={`px-4 rounded-xl transition-all flex items-center justify-center min-w-12 ${
                    !chatMessage.trim() || isChatLoading
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-linear-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-md"
                  }`}
                >
                  {isChatLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suggestion Bar */}
      <div
        className={`fixed bottom-24 right-6 z-40 transition-all duration-300 ${
          showChatbot ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          className={`p-4 rounded-2xl shadow-xl max-w-xs ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          <p className="text-sm font-medium mb-3 flex items-center gap-2">
            <Bot className="w-4 h-4" />
            Quick travel ideas:
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={async () => {
                setSelectedMood("Chill");
                setShowChatbot(true);
                const msg = "Show me the best beach destinations in India";
                setChatHistory((prev) => [
                  ...prev,
                  { role: "user", text: msg },
                ]);
                setIsChatLoading(true);

                const backendUrl =
                  import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

                try {
                  const res = await fetch(`${backendUrl}/ai-chat`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      message: msg,
                      conversation: chatHistory.map((m) => ({
                        role: m.role,
                        text: m.text,
                      })),
                    }),
                  });
                  const data = await res.json();
                  setChatHistory((prev) => [
                    ...prev,
                    { role: "ai", text: data.reply },
                  ]);
                } catch {
                  setChatHistory((prev) => [
                    ...prev,
                    {
                      role: "ai",
                      text: "🏖️ Great choice! Try Tarkarli, Gokarna, Kovalam, Varkala, Palolem — beautiful beaches with fewer crowds!",
                    },
                  ]);
                } finally {
                  setIsChatLoading(false);
                }
              }}
              className="text-xs px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 dark:bg-blue-900/60 dark:text-blue-200 dark:hover:bg-blue-800"
            >
              🏖️ Beaches
            </button>

            <button
              onClick={async () => {
                setSelectedMood("Adventure");
                setShowChatbot(true);
                const msg =
                  "What are the best adventure destinations in India?";
                setChatHistory((prev) => [
                  ...prev,
                  { role: "user", text: msg },
                ]);
                setIsChatLoading(true);

                const backendUrl =
                  import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

                try {
                  const res = await fetch(`${backendUrl}/ai-chat`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      message: msg,
                      conversation: chatHistory.map((m) => ({
                        role: m.role,
                        text: m.text,
                      })),
                    }),
                  });
                  const data = await res.json();
                  setChatHistory((prev) => [
                    ...prev,
                    { role: "ai", text: data.reply },
                  ]);
                } catch {
                  setChatHistory((prev) => [
                    ...prev,
                    {
                      role: "ai",
                      text: "🏔️ Awesome! Try paragliding in Bir, trekking in Manali, rafting in Rishikesh, or fort treks in Maharashtra!",
                    },
                  ]);
                } finally {
                  setIsChatLoading(false);
                }
              }}
              className="text-xs px-3 py-1.5 bg-green-100 text-green-700 rounded-full hover:bg-green-200 dark:bg-green-900/60 dark:text-green-200 dark:hover:bg-green-800"
            >
              🏔️ Adventure
            </button>
          </div>
        </div>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}
