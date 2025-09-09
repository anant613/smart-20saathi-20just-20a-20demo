import { useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  UsersRound,
  MapPin,
  Bell,
  School,
  IdCard,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: MapPin,
    title: "Live Bus GPS Tracking",
    desc: "See real-time bus location with route replay and ETA.",
  },
  {
    icon: Bell,
    title: "Instant Alerts & Geofencing",
    desc: "Pickup/drop alerts, unauthorized route alerts, and SOS.",
  },
  {
    icon: IdCard,
    title: "Smart Attendance",
    desc: "Bus stop and classroom check-in/out with audit trail.",
  },
  {
    icon: UsersRound,
    title: "Parent & Guardian App",
    desc: "Multiple guardians per child, secure access and controls.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    desc: "Daily/weekly attendance, route efficiency, and on-time stats.",
  },
  {
    icon: School,
    title: "School Admin Dashboard",
    desc: "Fleet overview, driver roster, compliance and maintenance.",
  },
  {
    icon: MessageSquare,
    title: "Two-way Communication",
    desc: "Broadcasts and chat between school, drivers, and parents.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security",
    desc: "Role-based access, encrypted data, and audit logs.",
  },
];

const testimonials = [
  {
    name: "Priya Malhotra (Parent)",
    quote:
      "I get instant alerts when the bus nears our stop. I feel safer every morning.",
    rating: 9.6,
    avatar: "P",
  },
  {
    name: "R.K. Public School (Principal)",
    quote:
      "Dashboards helped us track every bus and student—operations are finally predictable.",
    rating: 9.5,
    avatar: "R",
  },
  {
    name: "Vivek Singh (Parent)",
    quote:
      "Trusted by our family—no missed pickups and no panic calls anymore.",
    rating: 9.4,
    avatar: "V",
  },
  {
    name: "Sunrise High (Transport Head)",
    quote:
      "Attendance is automated; reports for audits take minutes, not days.",
    rating: 9.3,
    avatar: "S",
  },
  {
    name: "Anita & Rahul (Parents)",
    quote:
      "Geofence alerts reassure us. We always know our child’s bus location.",
    rating: 9.5,
    avatar: "A",
  },
  {
    name: "City Model School",
    quote:
      "Since adopting Smart Saathi, student tracking is seamless and risks are mitigated with strict geofencing.",
    rating: 9.4,
    avatar: "C",
  },
  {
    name: "Green Valley School",
    quote:
      "Reliable, fast, and secure—parents are happier and calls to transport desk reduced by 70%.",
    rating: 9.2,
    avatar: "G",
  },
  {
    name: "Sharma Family",
    quote:
      "One app for both kids with independent guardians—exactly what we needed.",
    rating: 9.3,
    avatar: "S",
  },
];

function BusIllustration() {
  return (
    <svg
      aria-hidden
      className="w-[520px] max-w-[90vw] drop-shadow-xl"
      viewBox="0 0 520 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0"
        y="120"
        width="520"
        height="8"
        rx="4"
        fill="#94a3b8"
        opacity="0.5"
      />
      <g>
        {/* Bus */}
        <rect
          x="40"
          y="40"
          width="360"
          height="100"
          rx="18"
          fill="#FFD700"
          stroke="#b38f00"
          strokeWidth="3"
        />
        <rect x="70" y="60" width="80" height="40" rx="6" fill="#1E90FF" />
        <rect x="160" y="60" width="80" height="40" rx="6" fill="#1E90FF" />
        <rect x="250" y="60" width="80" height="40" rx="6" fill="#1E90FF" />
        <rect x="340" y="60" width="40" height="40" rx="6" fill="#1E90FF" />
        <rect
          x="40"
          y="90"
          width="360"
          height="12"
          fill="#b38f00"
          opacity="0.4"
        />
        <circle cx="120" cy="146" r="20" fill="#111827" />
        <circle cx="120" cy="146" r="10" fill="#9ca3af" />
        <circle cx="320" cy="146" r="20" fill="#111827" />
        <circle cx="320" cy="146" r="10" fill="#9ca3af" />
        <rect x="36" y="124" width="368" height="6" rx="3" fill="#fb923c" />
        <rect x="380" y="84" width="20" height="12" rx="2" fill="#111827" />

        {/* Students waving from windows */}
        <g className="animate-wave" transform="translate(85,58)">
          <circle cx="0" cy="0" r="8" fill="#fde68a" />
          <rect x="-10" y="8" width="20" height="10" rx="2" fill="#ffffff" />
          <rect x="-2" y="8" width="4" height="12" fill="#1E90FF" />
          <rect x="10" y="-4" width="4" height="14" rx="2" fill="#fde68a" />
        </g>
        <g
          className="animate-wave"
          style={{ animationDelay: "250ms" }}
          transform="translate(175,58)"
        >
          <circle cx="0" cy="0" r="8" fill="#fde68a" />
          <rect x="-10" y="8" width="20" height="10" rx="2" fill="#ffffff" />
          <rect x="-2" y="8" width="4" height="12" fill="#1E90FF" />
          <rect x="10" y="-4" width="4" height="14" rx="2" fill="#fde68a" />
        </g>
        <g
          className="animate-wave"
          style={{ animationDelay: "500ms" }}
          transform="translate(265,58)"
        >
          <circle cx="0" cy="0" r="8" fill="#fde68a" />
          <rect x="-10" y="8" width="20" height="10" rx="2" fill="#ffffff" />
          <rect x="-2" y="8" width="4" height="12" fill="#1E90FF" />
          <rect x="10" y="-4" width="4" height="14" rx="2" fill="#fde68a" />
        </g>

        {/* Students near bus with QR code */}
        {/* Students moved inside bus (in windows) and QR poster inside door */}
        <g transform="translate(352,64)">
          {/* QR inside door window */}
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            rx="3"
            fill="#ffffff"
            stroke="#111827"
          />
          <rect x="3" y="3" width="5" height="5" fill="#111827" />
          <rect x="16" y="3" width="5" height="5" fill="#111827" />
          <rect x="3" y="16" width="5" height="5" fill="#111827" />
          <rect x="12" y="12" width="3" height="3" fill="#111827" />
          <rect x="20" y="20" width="2" height="2" fill="#111827" />
        </g>
      </g>
    </svg>
  );
}

function Clouds() {
  return (
    <div aria-hidden>
      <div className="absolute -top-8 left-[10%] h-16 w-44 rounded-full bg-white/70 blur-sm animate-float-slow" />
      <div className="absolute top-12 right-[15%] h-12 w-36 rounded-full bg-white/60 blur-sm animate-float-slower" />
      <div className="absolute top-1/3 left-[5%] h-14 w-40 rounded-full bg-white/70 blur-sm animate-float-slower" />
      <div className="absolute top-[60%] right-[5%] h-16 w-48 rounded-full bg-white/60 blur-sm animate-float-slow" />
    </div>
  );
}

function Stars() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `@keyframes twinkle{0%,100%{opacity:.5}50%{opacity:1}}`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 bg-white/70 rounded-full"
          style={{
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            animation: `twinkle ${6 + Math.random() * 6}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });
  useEffect(() => {
    const id = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 2600);
    return () => clearInterval(id);
  }, [emblaApi]);
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {testimonials.map((t, idx) => (
          <Card key={idx} className="min-w-[280px] max-w-[320px]">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white grid place-items-center font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold leading-none">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    ⭐ {t.rating.toFixed(1)}/10
                  </p>
                </div>
              </div>
              <p className="text-sm">“{t.quote}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-white" />
        <Clouds />
        <Stars />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Secure Student Tracking for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500">
                Parents & Schools
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-slate-700 max-w-prose"
            >
              Real-time bus GPS, smart attendance, geofencing alerts, and
              communication—built to keep children safe and give schools
              operational clarity.
            </motion.p>
            <div className="mt-4 text-sm font-semibold text-slate-700 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/70 shadow">
                Trusted by 10,000+ parents
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 shadow">
                500+ schools
              </span>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/register">
                <Button className="h-12 px-6 text-base bg-gradient-to-r from-orange-500 via-amber-400 to-red-500 text-white shadow-lg hover:opacity-90 focus-visible:ring-amber-500">
                  Register
                </Button>
              </Link>
              <Link to="/login">
                <Button className="h-12 px-6 text-base bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 text-white shadow-lg hover:opacity-90 focus-visible:ring-sky-500">
                  Login
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="relative h-[280px] sm:h-[320px] lg:h-[360px] grid place-items-end">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 70, damping: 14 }}
              className="animate-drive"
            >
              <BusIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-8"
        >
          Key Features for Safety & Operations
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-amber-200/60 hover:border-amber-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 text-white grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                    {<f.icon className="h-6 w-6" />}
                  </div>
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-10"
        >
          How It Works
        </motion.h2>
        <div className="relative">
          {/* horizontal connector on desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-10 h-1 bg-gradient-to-r from-amber-200 via-sky-200 to-teal-200 rounded-full" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: 1,
                icon: IdCard,
                title: "Create School/Parent Account",
                desc: "Set up your school fleet or join as a parent.",
                color: "from-amber-400 to-orange-500",
              },
              {
                step: 2,
                icon: MapPin,
                title: "Add Students & Routes",
                desc: "Assign buses, set geofences and guardians.",
                color: "from-blue-500 to-teal-400",
              },
              {
                step: 3,
                icon: ShieldCheck,
                title: "Track & Protect",
                desc: "Live GPS, attendance, and safety alerts.",
                color: "from-emerald-400 to-teal-500",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                {/* desktop connector dots */}
                <div className="hidden lg:block absolute -top-1 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-white ring-2 ring-offset-2 ring-offset-background ring-sky-300" />
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div
                      className={`h-14 w-14 rounded-xl bg-gradient-to-br ${s.color} text-white grid place-items-center font-extrabold mb-4`}
                    >
                      <s.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {s.desc}
                    </p>
                    <div className="mt-auto pt-4">
                      <div
                        className={`h-24 w-full rounded-xl bg-gradient-to-br ${s.color} opacity-90`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* mobile vertical line */}
          <div className="md:hidden absolute left-4 top-14 bottom-4 w-1 bg-gradient-to-b from-amber-200 via-sky-200 to-teal-200 rounded-full" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-6"
        >
          Loved by Parents & Schools
        </motion.h2>
        <p className="text-muted-foreground mb-6">
          Real results: safer commutes, fewer calls, clearer operations.
        </p>
        <TestimonialCarousel />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-teal-100 to-sky-100" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-extrabold mb-4"
          >
            Bring peace of mind to every ride
          </motion.h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of families and hundreds of schools using Smart
            Saathi for student safety.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/register">
              <Button className="h-12 px-6 text-base bg-gradient-to-r from-orange-500 via-amber-400 to-red-500 text-white shadow-lg hover:opacity-90 focus-visible:ring-amber-500">
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button className="h-12 px-6 text-base bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 text-white shadow-lg hover:opacity-90 focus-visible:ring-sky-500">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
