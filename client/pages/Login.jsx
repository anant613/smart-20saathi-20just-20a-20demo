import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("admin");
  const [phoneSent, setPhoneSent] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "admin") {
      console.log("Admin login flow");
    } else if (role === "attendant") {
      console.log(phoneSent ? "Attendant Verify OTP" : "Attendant Send OTP");
      setPhoneSent(true);
    } else if (role === "parent") {
      console.log(phoneSent ? "Parent Verify OTP" : "Parent Send OTP");
      setPhoneSent(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-pink-200 to-yellow-200 relative overflow-hidden">
      {/* Fun background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-spin-slow"></div>

      {/* Main Content */}
      <main className="flex flex-1 justify-center items-center p-6 z-10 relative">
        <div className="w-full max-w-md bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8">
          <h2 className="text-center text-3xl font-bold mb-6 text-blue-700">
            Sign In to Smart Saathi
          </h2>

          {/* Role Selector */}
          <div className="flex border rounded-xl overflow-hidden mb-6">
            {["admin", "attendant", "parent"].map((r) => (
              <button
                key={r}
                className={`flex-1 py-2 capitalize font-semibold ${
                  role === r
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => {
                  setRole(r);
                  setPhoneSent(false);
                }}
              >
                {r === "admin" ? "School Admin" : r === "attendant" ? "Bus Attendant" : "Parent"}
              </button>
            ))}
          </div>

          {/* Forms */}
          <form onSubmit={handleLogin} className="space-y-4">
            {role === "admin" && (
              <>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full border rounded-lg p-3"
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full border rounded-lg p-3"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Sign In
                </button>
                <a
                  href="/forgot-password"
                  className="block text-center text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </a>
              </>
            )}

            {(role === "attendant" || role === "parent") && (
              <>
                <input
                  type="tel"
                  placeholder="Phone Number (e.g. +91)"
                  required
                  className="w-full border rounded-lg p-3"
                />
                {phoneSent && (
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    required
                    className="w-full border rounded-lg p-3"
                  />
                )}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  {phoneSent ? "Verify & Sign In" : "Send OTP"}
                </button>
                {phoneSent && (
                  <a
                    href="#"
                    className="block text-center text-sm text-blue-600 hover:underline"
                  >
                    Resend OTP?
                  </a>
                )}
              </>
            )}
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-white bg-opacity-80 text-center text-sm text-gray-700 z-10">
        <div className="space-x-4">
          <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-600">Terms of Service</a>
          <a href="/support" className="hover:text-blue-600">Contact Support</a>
        </div>
      </footer>
    </div>
  );
}

// Custom slow spin animation (add this in tailwind.config.js if not present)
// extend: { animation: { 'spin-slow': 'spin 8s linear infinite' } }
