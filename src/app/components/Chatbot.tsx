import { useState } from "react";

export function ChatBot() {
  const [conversation, setConversation] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userText = message.trim();

    setConversation((prev) => [...prev, { role: "user", text: userText }]);
    setMessage("");

    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

    try {
      const res = await fetch(`${backendUrl}/ai-chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();

      setConversation((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setConversation((prev) => [
        ...prev,
        { role: "ai", text: "❌ Couldn't connect — is backend running?" },
      ]);
    }
  };

  return (
    <div className="p-4 border rounded max-w-md mx-auto bg-white shadow-md">
      <div className="h-64 overflow-y-auto mb-3 border-b pb-2">
        {conversation.map((c, i) => (
          <p key={i} className="mb-2">
            <strong>{c.role === "user" ? "You" : "AI"}:</strong> {c.text}
          </p>
        ))}
      </div>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask me anything about India travel..."
        className="w-full border p-3 mb-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={2}
      />

      <button
        onClick={sendMessage}
        disabled={!message.trim()}
        className={`w-full p-3 rounded font-medium transition-colors ${
          message.trim()
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Send
      </button>
    </div>
  );
}