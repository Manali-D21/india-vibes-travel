import { Star, Heart, MapPin } from 'lucide-react';
import type { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
  onClick: () => void;
}

export function DestinationCard({ destination, isFavorite, toggleFavorite, onClick }: DestinationCardProps) {
  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'Adventure':
        return '🏔️';
      case 'Chill':
        return '🏖️';
      case 'Nature':
        return '🌿';
      case 'Heritage':
        return '🏛️';
      default:
        return '✨';
    }
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* State Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#14B8A6]" />
          <span className="text-gray-700 dark:text-gray-200">{destination.state}</span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(destination.id);
          }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700 dark:text-gray-200'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#14B8A6] transition-colors">
          {destination.name}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {destination.rating}
            </span>
          </div>
          <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200">
            {getMoodEmoji(destination.mood)} {destination.mood}
          </span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {destination.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-[#14B8A6]/10 dark:bg-[#14B8A6]/20 text-[#0D9488] dark:text-[#14B8A6] rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
