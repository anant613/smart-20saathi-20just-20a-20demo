import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-b from-green-700 via-blue-800 to-blue-900 min-h-screen text-white p-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="text-6xl">🔒</div>
          <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
          <p className="text-gray-200 italic">Last Updated: September 10, 2025</p>
        </header>

        {/* Policy Sections */}
        <section className="bg-white/90 text-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">1. Information We Collect</h2>
          <p>
            We collect only the information essential for providing our safety service:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>👦 Student Information: Child's name, class, and grade.</li>
            <li>📱 Parent Information: Mobile phone number for notifications.</li>
            <li>🔗 QR Code Identifier: A unique code linked to your child's profile.</li>
            <li>🚌 Journey Data: Boarding/exit time and approximate GPS location.</li>
          </ul>
        </section>

        <section className="bg-white/90 text-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
          <p>Your data is used strictly to keep you informed about your child's safe transit:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>📩 Send real-time WhatsApp notifications.</li>
            <li>📊 Maintain secure school logs for audits.</li>
            <li>🔒 Ensure smooth functioning of the service.</li>
          </ul>
          <p className="font-semibold">❌ We never sell or use your data for advertising.</p>
        </section>

        <section className="bg-white/90 text-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">3. How We Protect Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>🔐 Secure Servers: All personal data is encrypted.</li>
            <li>🔒 HTTPS Encryption: Data transfer is fully encrypted.</li>
            <li>👨‍💻 Limited Access: Only admins can access necessary systems.</li>
            <li>📱 Minimal Storage: Attendant phones only hold daily route data.</li>
          </ul>
        </section>

        <section className="bg-white/90 text-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">4. Data Retention</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>🗑️ Journey logs auto-delete after <b>30 days</b>.</li>
            <li>📋 Parent & student info deleted on request or when a student leaves.</li>
          </ul>
        </section>

        <section className="bg-white/90 text-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">5. Your Consent</h2>
          <p>
            By using Smart saathi, you agree to the collection and use of your
            information as described here, including receiving automated WhatsApp
            alerts.
          </p>
        </section>

        <section className="bg-white/90 text-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">6. Contact Us</h2>
          <p>For any questions or requests, reach out to us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>📧 Parents: <a href="mailto:privacy@bustrackr.in" className="text-blue-600 underline">privacy@bustrackr.in</a></li>
            <li>🏫 Schools: <a href="mailto:admin@bustrackr.in" className="text-blue-600 underline">admin@bustrackr.in</a></li>
          </ul>
        </section>

        {/* Footer with Return Button */}
        <footer className="text-center space-y-4">
          <Link
            to="/"
            className="px-6 py-3 bg-white/90 text-green-700 font-semibold rounded-xl shadow hover:bg-green-100 transition"
          >
            ⬅ Return to Home
          </Link>
        </footer>
      </div>
    </div>
  );
}
