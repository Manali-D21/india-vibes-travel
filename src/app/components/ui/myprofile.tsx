'use client';

import { useEffect, useState } from 'react';
import { destinations } from '@/data/destinations';

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string; email?: string }>({ name: 'Traveler' });
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load user info and favorites from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('indiaVibesUser') || '{"name":"Traveler"}');
    setUser(storedUser);

    const storedFavorites = JSON.parse(localStorage.getItem('indiaVibesFavorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const favoriteDestinations = destinations.filter((dest) => favorites.includes(dest.id));

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      {/* User Info Card */}
      <div className="bg-green-100 rounded-2xl p-6 shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Information</h2>
        <p className="text-lg"><strong>Name:</strong> {user.name}</p>
        {user.email && <p className="text-lg"><strong>Email:</strong> {user.email}</p>}
      </div>

      {/* Favorite Destinations */}
      <div className="bg-green-50 rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Favorite Destinations ❤️</h2>

        {favoriteDestinations.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favoriteDestinations.map((dest) => (
              <li
                key={dest.id}
                className="p-4 rounded-xl bg-white shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => console.log('Clicked:', dest.name)}
              >
                <h3 className="font-bold text-lg">{dest.name}</h3>
                <p className="text-gray-700">{dest.state}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You have no favorite destinations yet.</p>
        )}
      </div>
    </div>
  );
}
