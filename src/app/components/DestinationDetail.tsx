import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  ArrowLeft,
  Heart,
  Share2,
  Star,
  MapPin,
  Calendar,
  Navigation,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Destination } from "@/data/destinations";

interface DestinationDetailProps {
  destination: Destination;
  onBack: () => void;
  onLogout: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function DestinationDetail({
  destination,
  onBack,
  onLogout,
  darkMode,
  toggleDarkMode,
}: DestinationDetailProps) {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(
      localStorage.getItem("indiaVibesFavorites") || "[]",
    );
    return favorites.includes(destination.id);
  });

  const toggleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("indiaVibesFavorites") || "[]",
    );
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((id: string) => id !== destination.id);
    } else {
      newFavorites = [...favorites, destination.id];
    }

    localStorage.setItem("indiaVibesFavorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

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
        return "✨";
    }
  };

  const nextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % destination.gallery.length);
  };

  const prevImage = () => {
    setCurrentGalleryIndex(
      (prev) =>
        (prev - 1 + destination.gallery.length) % destination.gallery.length,
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header
        onLogout={onLogout}
        onProfileClick={() => {}} // No profile navigation needed from destination detail
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-24 left-4 md:left-8 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        >
          <ArrowLeft className="w-6 h-6 text-gray-900 dark:text-white" />
        </button>

        {/* Action Buttons */}
        <div className="absolute top-24 right-4 md:right-8 flex gap-3">
          <button
            onClick={toggleFavorite}
            className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          >
            <Heart
              className={`w-6 h-6 ${
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-gray-900 dark:text-white"
              }`}
            />
          </button>
          <button className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
            <Share2 className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>
        </div>

        {/* Title & Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white/90 font-medium">
                {destination.state}
              </span>
              <span className="text-white/60">•</span>
              <span className="text-white/90">
                {getMoodEmoji(destination.mood)} {destination.mood}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(destination.rating)
                        ? "fill-[#F59E0B] text-[#F59E0B]"
                        : "text-white/40"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xl font-bold text-white">
                {destination.rating}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {destination.longDescription}
            </p>

            {/* Quick Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#14B8A6]/10 dark:bg-[#14B8A6]/20 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-[#14B8A6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Best Time to Visit
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {destination.bestTime}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#14B8A6]/10 dark:bg-[#14B8A6]/20 flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6 text-[#14B8A6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    How to Reach
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {destination.howToReach}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {destination.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#14B8A6]/10 dark:bg-[#14B8A6]/20 text-[#0D9488] dark:text-[#14B8A6] rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Suggested Activities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center mb-4">
                  <span className="text-2xl">
                    {activity.icon === "Waves" && "🌊"}
                    {activity.icon === "Fish" && "🐠"}
                    {activity.icon === "Ship" && "⛵"}
                    {activity.icon === "Sunset" && "🌅"}
                    {activity.icon === "Trees" && "🌳"}
                    {activity.icon === "Castle" && "🏰"}
                    {activity.icon === "Camera" && "📸"}
                    {activity.icon === "Church" && "⛪"}
                    {activity.icon === "Sparkles" && "✨"}
                    {activity.icon === "Mountain" && "⛰️"}
                    {activity.icon === "Footprints" && "👣"}
                    {activity.icon === "Coffee" && "☕"}
                    {activity.icon === "Tent" && "⛺"}
                    {activity.icon === "Bike" && "🚴"}
                    {activity.icon === "Music" && "🎵"}
                    {activity.icon === "ShoppingBag" && "🛍️"}
                    {activity.icon === "Museum" && "🏛️"}
                    {activity.icon === "Leaf" && "🍃"}
                    {activity.icon === "Flame" && "🔥"}
                    {activity.icon === "Stars" && "⭐"}
                    {activity.icon === "Bird" && "🦜"}
                    {activity.icon === "Home" && "🏡"}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {activity.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {activity.description}
                </p>
                {activity.price && (
                  <p className="text-sm font-semibold text-[#14B8A6]">
                    {activity.price}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hotels Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Where to Stay – Hotels
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {hotel.name}
                  </h4>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {hotel.rating}
                      </span>
                    </div>
                    <span className="text-[#14B8A6] font-bold">
                      {hotel.priceRange}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {hotel.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {hotel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Restaurants Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Eat Local – Restaurants & Traditional Food
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {destination.restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                      {restaurant.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {restaurant.rating}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Must Try:
                    </p>
                    <p className="text-[#14B8A6] font-medium">
                      {restaurant.mustTry}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {restaurant.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-[#F59E0B]/10 dark:bg-[#F59E0B]/20 text-[#F59E0B] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Photo Gallery
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-md">
            <div className="relative h-125">
              <img
                src={destination.gallery[currentGalleryIndex]}
                alt={`${destination.name} gallery ${currentGalleryIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {destination.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {destination.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentGalleryIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === currentGalleryIndex
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            {destination.gallery.length > 1 && (
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 p-4">
                {destination.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGalleryIndex(index)}
                    className={`aspect-square rounded-xl overflow-hidden ${
                      index === currentGalleryIndex
                        ? "ring-4 ring-[#14B8A6]"
                        : "opacity-60 hover:opacity-100"
                    } transition-all`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Location
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-md h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#14B8A6] mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {destination.name}, {destination.state}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Interactive map would be displayed here
              </p>
            </div>
          </div>
        </section>

        {/* User Reviews */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Traveler Reviews
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: "Priya Patel",
                rating: 5,
                review:
                  "Absolutely stunning! The beaches are pristine and the local food is incredible. Highly recommend staying at least 3 days.",
                date: "December 2025",
              },
              {
                name: "Rahul Sharma",
                rating: 5,
                review:
                  "Best travel experience in Maharashtra. The hospitality was wonderful and the sunset views are unforgettable.",
                date: "November 2025",
              },
              {
                name: "Sneha Desai",
                rating: 4,
                review:
                  "Beautiful destination with amazing photo opportunities. A bit crowded during weekends but totally worth it.",
                date: "January 2026",
              },
              {
                name: "Amit Kulkarni",
                rating: 5,
                review:
                  "Perfect getaway from city life. Peaceful, clean, and full of natural beauty. Will definitely visit again!",
                date: "December 2025",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {review.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {review.review}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
