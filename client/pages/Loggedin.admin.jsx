import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";
import { Bell, Users, Bus, UserCog, Map, FileText, Settings } from "lucide-react";

export default function AdminDashboard() {
  const [section, setSection] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: <Users /> },
    {
      group: "Management",
      items: [
        { id: "students", label: "Students", icon: "🎓" },
        { id: "parents", label: "Parents", icon: "👨‍👩‍👧" },
        { id: "attendants", label: "Bus Attendants", icon: "🧑‍✈️" },
        { id: "buses", label: "Buses", icon: "🚌" },
        { id: "routes", label: "Routes & Stops", icon: "🗺️" },
      ],
    },
    {
      group: "Monitoring",
      items: [
        { id: "live-map", label: "Live Map", icon: <Map /> },
        { id: "live-attendance", label: "Live Attendance", icon: "📋" },
      ],
    },
    {
      group: "Reports & Analytics",
      items: [{ id: "reports", label: "Reports", icon: <FileText /> }],
    },
    { id: "notifications", label: "Notifications", icon: <Bell /> },
    { id: "settings", label: "Settings", icon: <Settings /> },
  ];

  // Example dummy data for charts
  const barData = [
    { name: "Boarded", students: 180 },
    { name: "Departed", students: 172 },
  ];
  const pieData = [
    { name: "Present", value: 180 },
    { name: "Absent", value: 12 },
    { name: "Pending", value: 5 },
  ];
  const COLORS = ["#4CAF50", "#F44336", "#FF9800"];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6 text-blue-700">Smart Saathi</h2>
        <nav className="space-y-2">
          {sidebarItems.map((item) =>
            item.group ? (
              <div key={item.group}>
                <p className="text-xs text-gray-500 uppercase mt-4">{item.group}</p>
                {item.items.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setSection(sub.id)}
                    className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg mt-1 ${
                      section === sub.id ? "bg-blue-600 text-white" : "hover:bg-blue-100"
                    }`}
                  >
                    <span>{sub.icon}</span>
                    {sub.label}
                  </button>
                ))}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => setSection(item.id)}
                className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                  section === item.id ? "bg-blue-600 text-white" : "hover:bg-blue-100"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            )
          )}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex justify-between items-center bg-white shadow p-4">
          <div className="flex items-center gap-6">
            <h1 className="text-lg font-bold text-blue-700">School Name</h1>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Students</p>
                <p className="font-bold">450</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Buses</p>
                <p className="font-bold">12</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Attendants</p>
                <p className="font-bold">18</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button className="relative">
              <Bell className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full cursor-pointer">
              <span className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
                A
              </span>
              <span>Admin</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {section === "dashboard" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>
              {/* Status Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-semibold">Bus A</h3>
                  <p>Status: In Transit</p>
                  <p>Students Onboard: 32</p>
                  <button className="text-blue-600 text-sm mt-2 hover:underline">
                    View Live Map →
                  </button>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-semibold">Bus B</h3>
                  <p>Status: At School</p>
                  <p>Students Onboard: 28</p>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-semibold mb-2">Students Boarded vs Departed</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={barData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="students" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-semibold mb-2">Attendance Summary</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        outerRadius={80}
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-semibold mb-2">Recent Activity</h3>
                <ul className="space-y-2 text-sm">
                  <li>✅ Rahul Sharma boarded Bus A at 7:45 AM</li>
                  <li>👤 New attendant Suresh added</li>
                  <li>📢 Announcement sent to Class 5</li>
                </ul>
              </div>
            </div>
          )}

          {section === "students" && <p>👩‍🎓 Student management module coming soon...</p>}
          {section === "parents" && <p>👨‍👩‍👧 Parent management module...</p>}
          {section === "attendants" && <p>🧑‍✈️ Attendants management module...</p>}
          {section === "buses" && <p>🚌 Bus management module...</p>}
          {section === "routes" && <p>🗺️ Routes & stops management...</p>}
          {section === "live-map" && <p>🗺️ Live Map integration...</p>}
          {section === "live-attendance" && <p>📋 Real-time attendance...</p>}
          {section === "reports" && <p>📊 Reports and analytics...</p>}
          {section === "notifications" && <p>🔔 Notifications center...</p>}
          {section === "settings" && <p>⚙️ Settings module...</p>}
        </main>
      </div>
    </div>
  );
}
