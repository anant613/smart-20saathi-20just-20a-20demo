import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="relative p-8 max-w-6xl mx-auto space-y-12 min-h-screen bg-gradient-to-b from-blue-500 via-green-400 to-green-700">
      {/* Decorative Trees */}
      <div className="absolute bottom-0 left-0 flex space-x-4 p-6 opacity-90">
        {/* Tree 1 */}
        <svg width="80" height="120" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="24" r="20" fill="#2E7D32" />
          <rect x="28" y="24" width="8" height="40" fill="#5D4037" />
        </svg>
        {/* Tree 2 */}
        <svg width="100" height="150" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="20" r="20" fill="#388E3C" />
          <circle cx="22" cy="35" r="15" fill="#43A047" />
          <circle cx="42" cy="35" r="15" fill="#2E7D32" />
          <rect x="28" y="35" width="8" height="40" fill="#4E342E" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 flex space-x-4 p-6 opacity-90">
        {/* Tree 3 */}
        <svg width="90" height="140" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="20" r="20" fill="#1B5E20" />
          <circle cx="22" cy="35" r="15" fill="#2E7D32" />
          <circle cx="42" cy="35" r="15" fill="#388E3C" />
          <rect x="28" y="35" width="8" height="40" fill="#3E2723" />
        </svg>
      </div>

      {/* Headline */}
      <section className="text-center relative z-10">
        <h1 className="text-4xl font-extrabold text-white drop-shadow mb-4">
          SafeTrack: Real-Time Student Transit Safety
        </h1>
        <p className="text-lg text-gray-100">
          Peace of Mind, One Scan at a Time. Ensuring Child Safety on School Buses.
        </p>
      </section>

      {/* Problem */}
      <section className="relative z-10 bg-white/90 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-3">The Problem</h2>
        <p className="text-gray-700 mb-2">
          Every day, millions of parents face anxiety wondering if their child has
          safely boarded the school bus or reached the correct drop-off point.
        </p>
        <p className="text-gray-700 mb-2">
          Traditional manual attendance systems are prone to errors and provide delayed updates.
          Emergencies or unexpected route changes lead to panic, as parents have no
          real-time visibility into their child&apos;s transit status.
        </p>
        <p className="text-gray-700">
          This lack of affordable, real-time communication in student transportation
          is a critical gap in child safety and parent-school trust.
        </p>
      </section>

      {/* Solution */}
      <section className="relative z-10 bg-white/90 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-3">The Solution</h2>
        <p className="text-gray-700 mb-2">
          <strong>BusTrackr</strong> is a low-cost, efficient solution designed to
          eliminate this uncertainty.
        </p>
        <p className="text-gray-700 mb-2">
          We leverage ubiquitous QR codes and WhatsApp to provide parents with
          instant, automated notifications on their child&apos;s boarding and exit times
          directly on the platform they use every day.
        </p>
        <p className="text-gray-700">
          Unlike expensive GPS-based systems, BusTrackr offers a minimalist,
          scalable, and incredibly affordable approach without compromising on
          reliability or accessibility.
        </p>
      </section>

      {/* Flowchart */}
      <section className="relative z-10">
        <h2 className="text-2xl font-bold text-center text-white mb-8 drop-shadow">
          How SafeTrack Works
        </h2>
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-6">
          {/* Step 1 */}
          <div className="p-4 w-64 text-center bg-blue-50 border border-blue-200 rounded-xl shadow">
            <h3 className="font-semibold">Student Boards Bus</h3>
            <p className="text-sm text-gray-600">Attendant scans QR badge</p>
          </div>
          <div className="hidden md:flex items-center">
            <div className="h-0.5 w-8 bg-gray-400"></div>
          </div>
          {/* Step 2 */}
          <div className="p-4 w-64 text-center bg-green-50 border border-green-200 rounded-xl shadow">
            <h3 className="font-semibold">Data Logged</h3>
            <p className="text-sm text-gray-600">Time + GPS location recorded</p>
          </div>
          <div className="hidden md:flex items-center">
            <div className="h-0.5 w-8 bg-gray-400"></div>
          </div>
          {/* Step 3 */}
          <div className="p-4 w-64 text-center bg-yellow-50 border border-yellow-200 rounded-xl shadow">
            <h3 className="font-semibold">WhatsApp Notification</h3>
            <p className="text-sm text-gray-600">
              Parents instantly notified on WhatsApp
            </p>
          </div>
          <div className="hidden md:flex items-center">
            <div className="h-0.5 w-8 bg-gray-400"></div>
          </div>
          {/* Step 4 */}
          <div className="p-4 w-64 text-center bg-purple-50 border border-purple-200 rounded-xl shadow">
            <h3 className="font-semibold">Peace of Mind</h3>
            <p className="text-sm text-gray-600">
              Parents know child’s journey is safe
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 bg-white/90 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Meet The Team – CodeStorm
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { name: "Akshay Shree Shukla", role: "Team Leader" },
            { name: "Anant Kapoor", role: "Developer" },
            { name: "Hardik Kaushik", role: "Presenter" },
            { name: "Mukesh Shukla", role: "Second Developer" },
            { name: "Raj Kumar", role: "Idea Innovator" },
            { name: "Tanya Kumari", role: "Second Presenter" },
          ].map((member, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-b from-green-100 to-green-200 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  member.name
                )}&background=random`}
                alt={member.name}
                className="w-16 h-16 mx-auto rounded-full mb-3 shadow-md"
              />
              <div className="text-xl font-semibold text-gray-800">
                {member.name}
              </div>
              <div className="text-sm text-gray-600">{member.role}</div>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-gray-600 font-medium">
          🚀 Made with passion and innovation by{" "}
          <span className="font-bold">Team CodeStorm</span>
        </p>
      </section>

      {/* Return Home Button */}
      <div className="text-center relative z-10">
        <Link
          to="/"
          className="px-6 py-3 bg-white/90 text-green-700 font-semibold rounded-xl shadow hover:bg-green-100 transition"
        >
          ⬅ Return to Home
        </Link>
      </div>
    </div>
  );
}
