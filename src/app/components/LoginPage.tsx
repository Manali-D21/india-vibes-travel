import { useState } from "react";
import { Eye, EyeOff, Mountain } from "lucide-react";

interface LoginPageProps {
  onLogin: () => void;
  onSwitchToSignup: () => void;
}

export function LoginPage({ onLogin, onSwitchToSignup }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }

    // Password validation
    if (password.length < 4) {
      setError("Password must be at least 4 characters long");
      return;
    }

    // 🔹 Get registered users from localStorage
    const users = JSON.parse(
      localStorage.getItem("indiaVibesUsers") || "[]"
    );

    // 🔹 Check if user exists
    const existingUser = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!existingUser) {
      setError("Invalid login. Please create an account first.");
      return;
    }

    // 🔹 Save logged-in user (session)
    localStorage.setItem(
      "indiaVibesUser",
      JSON.stringify({
        name: existingUser.name,
        email: existingUser.email,
      })
    );

    onLogin();
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1668078415471-bc8d98b843d5)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#14B8A6]/20 via-[#0D9488]/20 to-[#F59E0B]/10" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-8 md:p-10">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mountain className="w-8 h-8 text-[#14B8A6]" />
              <span className="text-3xl font-bold text-[#14B8A6]">
                India Vibes
              </span>
            </div>

            <h1 className="text-4xl font-bold text-[#14B8A6] text-center mb-3">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Sign in to continue exploring
            </p>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
                <p className="text-red-600 text-sm">⚠️ {error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border pr-12"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-[#14B8A6] text-white font-semibold"
              >
                Sign In
              </button>
            </form>

            {/* Signup */}
            <p className="mt-8 text-center text-gray-600">
              New here?{" "}
              <button
                onClick={onSwitchToSignup}
                className="text-[#14B8A6] underline font-semibold"
              >
                Create Account
              </button>
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-white/80">
            © 2026 India Vibes · Built by Manali
          </p>
        </div>
      </div>
    </div>
  );
}
