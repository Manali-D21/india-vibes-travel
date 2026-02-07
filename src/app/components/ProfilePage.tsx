import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Heart,
  Camera,
  Edit2,
  Save,
  X,
} from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  location: string;
  dateJoined: string;
  bio: string;
  avatar: string;
  favoriteDestinations: number;
  reviewsWritten: number;
}

interface ProfilePageProps {
  onBack: () => void;
  onLogout: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function ProfilePage({
  onBack,
  onLogout,
  darkMode,
  toggleDarkMode,
}: ProfilePageProps) {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Traveler",
    email: "",
    phone: "",
    location: "",
    dateJoined: "January 2024",
    bio: "",
    avatar: "",
    favoriteDestinations: 0,
    reviewsWritten: 0,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem("indiaVibesUser");
    const favorites = localStorage.getItem("indiaVibesFavorites");

    if (userData) {
      const user = JSON.parse(userData);
      setProfile((prev) => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
        location: user.location || prev.location,
        bio: user.bio || prev.bio,
        avatar: user.avatar || prev.avatar,
      }));
    }

    if (favorites) {
      const favList = JSON.parse(favorites);
      setProfile((prev) => ({
        ...prev,
        favoriteDestinations: favList.length,
      }));
    }
  }, []);

  const handleEdit = () => {
    setEditedProfile(profile);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    // Save to localStorage
    const userData = {
      ...editedProfile,
      dateJoined: profile.dateJoined, // Keep original date
    };
    localStorage.setItem("indiaVibesUser", JSON.stringify(userData));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setEditedProfile((prev) => ({ ...prev, [field]: value }));
  };

  const profileStats = [
    {
      icon: Heart,
      label: "Favorite Places",
      value: profile.favoriteDestinations,
      color: "text-red-500",
      bgColor: darkMode ? "bg-red-900/20" : "bg-red-100",
    },

    {
      icon: User,
      label: "Reviews Written",
      value: profile.reviewsWritten,
      color: "text-blue-500",
      bgColor: darkMode ? "bg-blue-900/20" : "bg-blue-100",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode
          ? "bg-gray-900"
          : "bg-linear-to-br from-purple-50 to-indigo-100"
      }`}
    >
      <Header
        onLogout={onLogout}
        onProfileClick={() => {}} // Already on profile page
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-full transition-colors ${
            darkMode
              ? "text-gray-300 hover:text-white hover:bg-gray-800"
              : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div
              className={`rounded-3xl shadow-xl p-8 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {/* Profile Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-linear-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                      {profile.name.charAt(0)}
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <h1
                      className={`text-2xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {profile.name}
                    </h1>
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Member since {profile.dateJoined}
                    </p>
                  </div>
                </div>
                <button
                  onClick={isEditing ? handleSave : handleEdit}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    isEditing
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {isEditing ? (
                    <>
                      <Save className="w-4 h-4" />
                      Save
                    </>
                  ) : (
                    <>
                      <Edit2 className="w-4 h-4" />
                      Edit Profile
                    </>
                  )}
                </button>
              </div>

              {isEditing && (
                <button
                  onClick={handleCancel}
                  className={`mb-4 flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors ${
                    darkMode
                      ? "text-gray-400 hover:text-gray-300 hover:bg-gray-700"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <X className="w-3 h-3" />
                  Cancel
                </button>
              )}

              {/* Profile Information */}
              <div className="space-y-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedProfile.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        darkMode
                          ? "bg-gray-700 text-white placeholder-gray-400"
                          : "bg-gray-100 text-gray-900 placeholder-gray-500"
                      }`}
                    />
                  ) : (
                    <p
                      className={`px-4 py-3 rounded-xl ${
                        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100"
                      }`}
                    >
                      {profile.email || "Click edit to add your email"}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedProfile.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="Enter your phone number"
                      className={`w-full px-4 py-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        darkMode
                          ? "bg-gray-700 text-white placeholder-gray-400"
                          : "bg-gray-100 text-gray-900 placeholder-gray-500"
                      }`}
                    />
                  ) : (
                    <p
                      className={`px-4 py-3 rounded-xl ${
                        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100"
                      }`}
                    >
                      {profile.phone || "Click edit to add your phone number"}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Location
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedProfile.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      placeholder="Enter your location (e.g., Mumbai, Maharashtra)"
                      className={`w-full px-4 py-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        darkMode
                          ? "bg-gray-700 text-white placeholder-gray-400"
                          : "bg-gray-100 text-gray-900 placeholder-gray-500"
                      }`}
                    />
                  ) : (
                    <p
                      className={`px-4 py-3 rounded-xl ${
                        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100"
                      }`}
                    >
                      {profile.location || "Click edit to add your location"}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      value={editedProfile.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      rows={4}
                      placeholder="Tell others about your travel experiences and interests..."
                      className={`w-full px-4 py-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                        darkMode
                          ? "bg-gray-700 text-white placeholder-gray-400"
                          : "bg-gray-100 text-gray-900 placeholder-gray-500"
                      }`}
                    />
                  ) : (
                    <p
                      className={`px-4 py-3 rounded-xl ${
                        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100"
                      }`}
                    >
                      {profile.bio || "Click edit to add your travel bio"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Settings Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div
              className={`rounded-3xl shadow-xl p-6 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Travel Stats
              </h2>
              <div className="space-y-4">
                {profileStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl ${stat.bgColor}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${stat.bgColor} flex items-center justify-center`}
                    >
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </p>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
