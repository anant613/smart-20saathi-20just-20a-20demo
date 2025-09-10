import { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("school");

  const renderForm = () => {
    switch (role) {
      case "school":
        return (
          <form className="space-y-3">
            <h2 className="text-2xl font-bold text-blue-600 text-center">
              🏫 School Registration
            </h2>
            <input type="text" placeholder="School Name" className="w-full border rounded-lg p-3" required />
            <input type="text" placeholder="School Address" className="w-full border rounded-lg p-3" required />
            <input type="text" placeholder="City" className="w-full border rounded-lg p-3" required />
            <input type="number" placeholder="Pincode" className="w-full border rounded-lg p-3" required />
            <input type="text" placeholder="School Website (Optional)" className="w-full border rounded-lg p-3" />
            <input type="text" placeholder="Admin Full Name" className="w-full border rounded-lg p-3" required />
            <input type="email" placeholder="Admin Email" className="w-full border rounded-lg p-3" required />
            <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg p-3" required />
            <input type="password" placeholder="Password" className="w-full border rounded-lg p-3" required />
            <input type="password" placeholder="Confirm Password" className="w-full border rounded-lg p-3" required />
            <label className="flex items-center space-x-2">
              <input type="checkbox" required />
              <span>I agree to Terms & Privacy Policy</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" required />
              <span>We will obtain parental consent</span>
            </label>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
              Create School Account
            </button>
          </form>
        );

      case "parent":
        return (
          <form className="space-y-3">
            <h2 className="text-2xl font-bold text-pink-600 text-center">
              👨‍👩‍👧 Parent Registration
            </h2>
            <input type="text" placeholder="Full Name" className="w-full border rounded-lg p-3" required />
            <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg p-3" required />
            <input type="email" placeholder="Email Address" className="w-full border rounded-lg p-3" required />
            <input type="password" placeholder="Password" className="w-full border rounded-lg p-3" required />
            <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600">
              Register
            </button>
          </form>
        );

      case "conductor":
        return (
          <form className="space-y-3">
            <h2 className="text-2xl font-bold text-yellow-600 text-center">
              🚌 Bus Conductor Registration
            </h2>
            <input type="text" placeholder="Full Name" className="w-full border rounded-lg p-3" required />
            <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg p-3" required />
            <input type="number" placeholder="Set 4-6 Digit PIN" className="w-full border rounded-lg p-3" required />
            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600">
              Register
            </button>
          </form>
        );

      case "attendant":
        return (
          <form className="space-y-3">
            <h2 className="text-2xl font-bold text-green-600 text-center">
              👷 Attendant Registration
            </h2>
            <input type="text" placeholder="Full Name" className="w-full border rounded-lg p-3" required />
            <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg p-3" required />
            <input type="number" placeholder="Temporary PIN" className="w-full border rounded-lg p-3" required />
            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600">
              Register Attendant
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 p-6 relative">
      {/* fun background bubbles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>

      <div className="w-full max-w-2xl bg-white bg-opacity-95 rounded-3xl shadow-2xl p-8 z-10">
        <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          🎉 Register on Smart Saathi
        </h1>

        {/* role switcher */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <button
            onClick={() => setRole("school")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              role === "school" ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-700"
            }`}
          >
            🏫 School
          </button>
          <button
            onClick={() => setRole("parent")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              role === "parent" ? "bg-pink-500 text-white" : "bg-pink-100 text-pink-700"
            }`}
          >
            👨‍👩‍👧 Parent
          </button>
          <button
            onClick={() => setRole("conductor")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              role === "conductor" ? "bg-yellow-500 text-white" : "bg-yellow-100 text-yellow-700"
            }`}
          >
            🚌 Conductor
          </button>
          <button
            onClick={() => setRole("attendant")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              role === "attendant" ? "bg-green-500 text-white" : "bg-green-100 text-green-700"
            }`}
          >
            👷 Attendant
          </button>
        </div>

        {renderForm()}

        <div className="mt-6 text-center">
          <a href="/" className="text-blue-600 hover:underline text-lg">
            ⬅ Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

