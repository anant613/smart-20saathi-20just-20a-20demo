import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ParentDashboard() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItem = (id, label, icon = null) => (
    <button
      onClick={() => {
        setSidebar(id);
        setSidebarOpen(false); // auto close on mobile
      }}
      className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
        sidebar === id
          ? "bg-blue-600 text-white shadow"
          : "hover:bg-blue-100 text-gray-700"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </button>
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100"></div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-30 animate-spin-slow"></div>

      {/* Wrapper */}
      <div className="relative z-10 flex">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-72 bg-white/90 backdrop-blur-sm p-6 shadow-lg transform transition-transform duration-300 z-20
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        >
          <h2 className="text-xl font-bold text-blue-700 mb-6">Parent Menu</h2>
          <nav className="space-y-2">
            {sidebarItem("overview", "Overview / Home", "🏠")}
            {sidebarItem("child", "Child Profile", "👦")}
            {sidebarItem("attendance", "Attendance", "📋")}
            {sidebarItem("transport", "Transport", "🚌")}
            {sidebarItem("messages", "Messages", "✉️")}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 md:ml-0">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
              Welcome, Parent 👋
            </h1>
            <div className="flex gap-3 items-center">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow transition w-full sm:w-auto">
                + Add Child
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow transition w-full sm:w-auto">
                Contact Bus
              </button>
              {/* Sidebar toggle for mobile */}
              <button
                className="md:hidden bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                ☰
              </button>
              {/* Profile */}
              <div className="hidden sm:flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow cursor-pointer hover:shadow-md transition">
                <span className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center text-white font-bold">
                  P
                </span>
                <span>Parent</span>
              </div>
            </div>
          </header>

          {/* Dashboard cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold">Generate New QR Code</h3>
              <p className="text-sm text-gray-600 mt-2">
                For pickup verification or secure access.
              </p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition">
                Generate QR
              </button>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold">Attendance</h3>
              <p className="text-sm text-gray-600 mt-2">View child’s records.</p>
              <ul className="mt-4 text-sm space-y-1">
                <li>✅ Aarav Sharma — Present</li>
                <li>✅ Isha Patel — Present</li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold">Holidays & Notices</h3>
              <ul className="mt-4 text-sm space-y-1">
                <li>🎉 Dusshera — 30 Sept - 2 Oct</li>
                <li>🪔 Diwali Break — 18 Oct - 24 Oct</li>
              </ul>
            </div>
          </div>

          {/* Teacher messages */}
          <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold">Message Teacher</h3>
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <input
                type="text"
                placeholder="Write your message..."
                className="flex-1 border px-3 py-2 rounded-xl"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition">
                Send
              </button>
            </div>
          </div>

          {/* Coming soon */}
          <div className="mt-6 bg-gradient-to-r from-pink-100 to-yellow-100 p-6 rounded-3xl shadow-inner text-center">
            <h4 className="text-lg font-bold text-purple-700">
              ✨ More features coming soon!
            </h4>
            <p className="text-sm text-gray-700">
              Live bus tracking, notifications, community & more 🚀
            </p>
          </div>

          {/* How It Helps You Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
              How Smart Saathi Helps You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-xl transition text-center">
                <div className="text-4xl mb-3">🚌</div>
                <h3 className="text-lg font-semibold">Safe Transport</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Track your child’s bus in real-time and get alerts for safe pickups and drop-offs.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-xl transition text-center">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-lg font-semibold">Easy Attendance</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Instantly check your child’s daily attendance and get notified about absences.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-xl transition text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-lg font-semibold">Direct Communication</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Send and receive messages from teachers and school staff with ease.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
