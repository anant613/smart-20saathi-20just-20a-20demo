export default function Contact() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12 bg-gradient-to-b from-green-800 to-blue-900 text-white min-h-screen">
      {/* Part 1: Project Support */}
      <section>
        <h1 className="text-3xl font-extrabold mb-4">Smart-Saathi Support | Get in Touch</h1>
        <p className="mb-6 opacity-80">
          For demonstrations, technical support, or inquiries about implementing{" "}
          <strong>BusTrackr</strong> in your school, please reach out to our team.
        </p>

        {/* Contact Methods */}
        <div className="space-y-4">
          <p><strong>📧 Email:</strong> smartsathicustomersupport@sscs.in</p>
          <p><strong>📞 Phone:</strong> +91 9909 9099 02 <span className="opacity-70">(Mon-Sat, 10 AM - 6 PM)</span></p>

          {/* Contact Form */}
          <div className="bg-white/10 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg text-black"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg text-black"
                required
              />
              <select
                className="w-full p-3 rounded-lg text-black"
                required
              >
                <option>Choose Subject</option>
                <option>Partnership Inquiry</option>
                <option>Technical Support</option>
                <option>General Info</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded-lg text-black"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-200 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Part 2: Government Helplines */}
      <section>
        <h1 className="text-3xl font-extrabold mb-4">National Emergency & Child Safety Helplines</h1>
        <p className="mb-4 opacity-80">
          In case of any emergency or to report a crime against a child, please immediately
          contact the relevant national helplines. These are official government resources
          operating 24/7.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-white/20 text-left rounded-lg overflow-hidden">
            <thead className="bg-white/20">
              <tr>
                <th className="p-3">Helpline Service</th>
                <th className="p-3">Phone Number</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="p-3">National Emergency Number</td>
                <td className="p-3 font-bold">112</td>
                <td className="p-3">Police, Fire, and Ambulance services</td>
              </tr>
              <tr>
                <td className="p-3">Women & Child Safety Helpline</td>
                <td className="p-3 font-bold">1091</td>
                <td className="p-3">Safety and security of women & children</td>
              </tr>
              <tr>
                <td className="p-3">Childline India</td>
                <td className="p-3 font-bold">1098</td>
                <td className="p-3">24-hour free emergency phone service for children</td>
              </tr>
              <tr>
                <td className="p-3">National Cyber Crime Helpline</td>
                <td className="p-3 font-bold">1930</td>
                <td className="p-3">Report cyber crimes & online child safety issues</td>
              </tr>
              <tr>
                <td className="p-3">Police</td>
                <td className="p-3 font-bold">100</td>
                <td className="p-3">Immediate law and order issues</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm mt-4 opacity-70 italic">
          *Disclaimer: Smart Saathi is an independent project and is not directly affiliated with
          any government agency. The helpline numbers provided are official public service
          numbers for citizen use. We encourage users to verify numbers from official government websites.
        </p>
      </section>

      {/* Part 3: For School Authorities */}
      <section>
        <h1 className="text-3xl font-extrabold mb-4">For School & Transport Authorities</h1>
        <p className="mb-4 opacity-80">
          Officials from educational institutions or government transport departments can
          use this channel for official correspondence.
        </p>
        <p><strong>📧 Email:</strong> smart.saathi.admin@customersupport.in</p>
      </section>

      {/* Back Button */}
      <section className="text-center">
        <a
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow hover:bg-gray-200 transition"
        >
          ⬅ Return to Home
        </a>
      </section>
    </div>
  );
}

