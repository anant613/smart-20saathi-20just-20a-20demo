import { Link } from "react-router-dom";

export default function Faq() {
  const faqs = [
    {
      category: "For Parents",
      items: [
        {
          q: "How will I receive the alerts? Do I need to download a new app?",
          a: "You will receive instant alerts as WhatsApp messages. No new app is required — we use WhatsApp because it's familiar, reliable, and works on almost every phone."
        },
        {
          q: "What exactly will the messages say?",
          a: `Boarding Alert: "[Child's Name] has boarded the bus at [Time]." Exit Alert: "[Child's Name] has exited the bus at [Stop Name/Landmark] at [Time]."`
        },
        {
          q: "What if the bus attendant misses scanning my child's code?",
          a: "If a scan is missed, you won’t receive an alert. However, schools maintain a digital log, and missed scans are flagged for manual follow-up."
        },
        {
          q: "Is there a subscription fee for this service?",
          a: "No, parents don’t pay. Schools bear the minimal cost as part of their safety infrastructure, far cheaper than GPS-based systems."
        },
        {
          q: "What if my child loses the QR code badge?",
          a: "The school issues a replacement for a small cost (₹10-20). The old code is deactivated to maintain security."
        }
      ]
    },
    {
      category: "For Schools & Transport Administrators",
      items: [
        {
          q: "What is the total cost of implementing this system?",
          a: "One-time: A budget Android phone (~₹5,000) + QR badges (~₹10 per student). Recurring: ~₹150/month for mobile data."
        },
        {
          q: "How does the app handle poor or no network connectivity?",
          a: "Offline-First: scans are saved locally and synced when internet returns. No data loss."
        },
        {
          q: "How do we manage student data and parent phone numbers? Is it secure?",
          a: "Data is encrypted and stored securely. Attendant’s phone only shows student names for verification."
        },
        {
          q: "What kind of training does the bus attendant need?",
          a: "Minimal — the app only scans QR codes. Training takes less than 5 minutes."
        },
        {
          q: "Can we get a digital record of attendance?",
          a: "Yes, every scan creates a timestamped, GPS-logged record, exportable for audits."
        }
      ]
    },
    {
      category: "Technical & Privacy",
      items: [
        {
          q: "How are you sending automated WhatsApp messages?",
          a: "We use the official WhatsApp Business API — secure, approved, and reliable."
        },
        {
          q: "What happens to the location data?",
          a: "It’s used only for exit alerts and journey logs. We don’t sell/share data. Privacy by design."
        },
        {
          q: "What if the phone battery dies or is damaged?",
          a: "Schools should keep a power bank + a backup phone. Since data syncs to the cloud, switching devices is instant."
        },
        {
          q: "Can this system work for multiple buses and large schools?",
          a: "Yes, it scales easily. Each bus uses its own phone, and the admin dashboard manages unlimited buses/students."
        }
      ]
    },
    {
      category: "For SIH Judges",
      items: [
        {
          q: "How is your solution different from GPS trackers?",
          a: "GPS trackers are costly and require new apps. Our solution is QR + WhatsApp — 90% cheaper and parent-friendly."
        },
        {
          q: "What is the biggest challenge?",
          a: "Human diligence (ensuring every scan). Mitigated by simple app design, audit trails, and mandatory school protocols."
        },
        {
          q: "How does your project align with government initiatives?",
          a: "It supports Digital India, Beti Bachao Beti Padhao, and child safety missions — offering a scalable solution for government schools."
        }
      ]
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-12 bg-gradient-to-b from-blue-600 via-green-500 to-green-700 min-h-screen text-white">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">FAQ – BusTrackr</h1>
        <p className="text-lg text-gray-100">
          Find answers to the most common questions from parents, schools, and judges.
        </p>
      </section>

      {/* FAQ Sections */}
      {faqs.map((section, i) => (
        <section
          key={i}
          className="bg-white/90 text-gray-800 p-6 rounded-xl shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
          {section.items.map((faq, j) => (
            <div key={j} className="border-b border-gray-300 pb-3 mb-3">
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="text-gray-700 mt-1">{faq.a}</p>
            </div>
          ))}
        </section>
      ))}

      {/* Ask Your Question Form */}
      <section className="bg-white/90 text-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Ask Your Question</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
          />
          <textarea
            placeholder="Your Question"
            rows="4"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
            Submit Question
          </button>
        </form>
      </section>

      {/* Return Home */}
      <div className="text-center">
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
