import { useState } from "react";
import { Eye, EyeOff, Mountain } from "lucide-react";

interface SignUpPageProps {
  onSignUp: () => void;
  onSwitchToLogin: () => void;
}

export function SignUpPage({ onSignUp, onSwitchToLogin }: SignUpPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 4) {
      setError("Password must be at least 4 characters long");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!formData.agreedToTerms) {
      setError("Please agree to Terms & Privacy");
      return;
    }

    // Store user info in localStorage
    localStorage.setItem(
      "indiaVibesUser",
      JSON.stringify({
        name: formData.fullName,
        email: formData.email,
      }),
    );
    onSignUp();
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1710705293492-38813d6dbe27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBpbmRpYSUyMHBlYWtzfGVufDF8fHx8MTc2OTc4MzgzOHww&ixlib=rb-4.1.0&q=80&w=1080)`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#14B8A6]/20 via-[#0D9488]/20 to-[#F59E0B]/10" />
      </div>

      {/* Sign Up Card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-8 md:p-10">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mountain className="w-8 h-8 text-[#14B8A6]" />
              <span className="text-3xl font-bold text-[#14B8A6]">
                India Vibes
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#14B8A6] text-center mb-3">
              Join India Vibes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
              Start exploring 100+ amazing destinations across India
            </p>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 mb-6">
                <p className="text-red-600 dark:text-red-400 text-sm">
                  ⚠️ {error}
                </p>
              </div>
            )}

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition-all"
                  placeholder="Manali Sharma"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Password (min 4 characters)
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition-all pr-12"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition-all pr-12"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  id="terms"
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreedToTerms: e.target.checked,
                    })
                  }
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-[#14B8A6] focus:ring-[#14B8A6]"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-[#14B8A6] underline hover:text-[#0D9488]"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-[#14B8A6] underline hover:text-[#0D9488]"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-2xl bg-linear-to-r from-[#14B8A6] to-[#0D9488] text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Create My Account
              </button>
            </form>

            {/* Login link */}
            <p className="mt-8 text-center text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <button
                onClick={onSwitchToLogin}
                className="text-[#14B8A6] hover:text-[#0D9488] underline font-semibold transition-colors"
              >
                Sign In
              </button>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-white/80">
            © 2026 India Vibes. Built with ❤️ by Manali · Pune, Maharashtra
          </p>
        </div>
      </div>
    </div>
  );
}
