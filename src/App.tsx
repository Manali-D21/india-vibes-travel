import { useState, useEffect } from "react";
import { LoginPage } from "./app/components/LoginPage";
import { SignUpPage } from "./app/components/SignUpPage";
import { Dashboard } from "./app/components/Dashboard";
import { DestinationDetail } from "./app/components/DestinationDetail";
import { ChatbotPage } from "./app/components/ChatbotPage";
import { ProfilePage } from "./app/components/ProfilePage";
import type { Destination } from "@/data/destinations";

type Screen =
  | "login"
  | "signup"
  | "dashboard"
  | "destination-detail"
  | "chatbot"
  | "profile";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // 🔹 Check auth ONCE when app loads
  useEffect(() => {
    const user = localStorage.getItem("indiaVibesUser");
    if (user) {
      setCurrentScreen("dashboard");
    } else {
      setCurrentScreen("login");
    }

    const savedDarkMode = localStorage.getItem("indiaVibesDarkMode");
    if (savedDarkMode === "true") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("indiaVibesDarkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("indiaVibesDarkMode", "false");
    }
  };

  const handleLogin = () => {
    setCurrentScreen("dashboard");
  };

  const handleSignUp = () => {
    setCurrentScreen("dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("indiaVibesUser");
    setCurrentScreen("login");
  };

  const handleDestinationClick = (destination: Destination) => {
    setSelectedDestination(destination);
    setCurrentScreen("destination-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToDashboard = () => {
    setSelectedDestination(null);
    setCurrentScreen("dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChatbotClick = () => {
    setCurrentScreen("chatbot");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProfileClick = () => {
    setCurrentScreen("profile");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {currentScreen === "login" && (
        <LoginPage
          onLogin={handleLogin}
          onSwitchToSignup={() => setCurrentScreen("signup")}
        />
      )}

      {currentScreen === "signup" && (
        <SignUpPage
          onSignUp={handleSignUp}
          onSwitchToLogin={() => setCurrentScreen("login")}
        />
      )}

      {currentScreen === "dashboard" && (
        <Dashboard
          onDestinationClick={handleDestinationClick}
          onChatbotClick={handleChatbotClick}
          onProfileClick={handleProfileClick}
          onLogout={handleLogout}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}

      {currentScreen === "destination-detail" && selectedDestination && (
        <DestinationDetail
          destination={selectedDestination}
          onBack={handleBackToDashboard}
          onLogout={handleLogout}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}

      {currentScreen === "chatbot" && (
        <ChatbotPage
          onBack={handleBackToDashboard}
          onLogout={handleLogout}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}

      {currentScreen === "profile" && (
        <ProfilePage
          onBack={handleBackToDashboard}
          onLogout={handleLogout}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
    </>
  );
}
