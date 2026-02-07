import { useState, useRef, useEffect } from "react";
import { Search, Bell, User, Mountain, LogOut, Moon, Sun } from "lucide-react";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onLogout: () => void;
  onProfileClick?: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({
  onSearch,
  onLogout,
  onProfileClick,
  darkMode,
  toggleDarkMode,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const user = JSON.parse(
    localStorage.getItem("indiaVibesUser") || '{"name":"Traveler"}',
  );

  // Close user menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <header
      className={`
      sticky top-0 z-50 backdrop-blur-md border-b transition-colors
      ${
        darkMode
          ? "bg-gray-900/90 border-gray-700"
          : "bg-purple-100/90 border-purple-200"
      }
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Mountain className="w-8 h-8 text-teal-600" />
            <span
              className={`text-2xl font-bold text-teal-600 ${darkMode ? "text-teal-400" : ""}`}
            >
              India Vibes
            </span>
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:block flex-1 max-w-2xl mx-8"
          >
            <div className="relative">
              <Search
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search places, beaches, treks..."
                className={`
                  w-full pl-12 pr-4 py-3 rounded-full transition-colors
                  focus:outline-none focus:ring-2 focus:ring-teal-500
                  ${
                    darkMode
                      ? "bg-gray-800 border border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border border-purple-200 text-gray-900 placeholder-gray-500"
                  }
                `}
              />
            </div>
          </form>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-purple-200 text-gray-700"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>

            {/* Notifications */}
            <button
              className={`relative p-2 rounded-full transition-colors ${
                darkMode
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-purple-200 text-gray-700"
              }`}
            >
              <Bell className="w-6 h-6" />
            </button>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-purple-200"
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0)}
                </div>
              </button>

              {showUserMenu && (
                <div
                  className={`absolute right-0 mt-2 w-64 rounded-2xl shadow-xl transition-colors ${
                    darkMode
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-orange-50 border border-purple-200"
                  }`}
                >
                  <div
                    className={`px-4 py-3 border-b ${
                      darkMode ? "border-gray-700" : "border-purple-200"
                    }`}
                  >
                    <p
                      className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
                    >
                      {user.name}
                    </p>
                    {user.email && (
                      <p
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        {user.email}
                      </p>
                    )}
                  </div>

                  <div className="py-2">
                    {/* Profile Button */}
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        onProfileClick?.();
                      }}
                      className={`w-full px-4 py-2 text-left flex items-center gap-3 transition-colors ${
                        darkMode
                          ? "text-gray-300 hover:bg-gray-700"
                          : "text-gray-700 hover:bg-purple-100"
                      }`}
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </button>

                    {/* Logout */}
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        onLogout();
                      }}
                      className={`w-full px-4 py-2 text-left flex items-center gap-3 transition-colors ${
                        darkMode
                          ? "text-red-400 hover:bg-red-900/20"
                          : "text-red-600 hover:bg-red-100"
                      }`}
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search places, beaches, treks..."
                className={`
                  w-full pl-12 pr-4 py-3 rounded-full transition-colors
                  focus:outline-none focus:ring-2 focus:ring-teal-500
                  ${
                    darkMode
                      ? "bg-gray-800 border border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border border-purple-200 text-gray-900 placeholder-gray-500"
                  }
                `}
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
