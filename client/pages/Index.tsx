import { useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, BookOpenCheck, UsersRound, GraduationCap, BarChart3, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: ShieldCheck, title: "Easy Login & Secure Registration", desc: "Fast onboarding with strong security." },
  { icon: BookOpenCheck, title: "Student Support & Resources", desc: "Guides, templates, and learning kits." },
  { icon: UsersRound, title: "Peer & Mentor Connections", desc: "Find mentors and collaborate with peers." },
  { icon: GraduationCap, title: "Career Guidance Tools", desc: "Roadmaps, checklists, and mock interviews." },
  { icon: BarChart3, title: "Progress Tracking", desc: "Visualize your growth over time." },
  { icon: MessageSquare, title: "Real-time Chat/Community", desc: "Discuss, ask, and grow together." },
];

const testimonials = [
  { name: "Aarav Gupta", quote: "Smart Saathi made mentorship simple and fun!", rating: 9.4, avatar: "A" },
  { name: "Isha Sharma", quote: "Love the career tools and friendly community.", rating: 9.2, avatar: "I" },
  { name: "Rohan Verma", quote: "Tracking progress keeps me motivated daily.", rating: 9.3, avatar: "R" },
  { name: "Sara Khan", quote: "Got matched with a great mentor in days.", rating: 9.5, avatar: "S" },
  { name: "Kabir Mehta", quote: "Clean design, smooth experience everywhere.", rating: 9.1, avatar: "K" },
  { name: "Ananya Iyer", quote: "The community chat is super helpful!", rating: 9.3, avatar: "N" },
];

function BusIllustration() {
  return (
    <svg aria-hidden className="w-[520px] max-w-[90vw] drop-shadow-xl" viewBox="0 0 520 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="120" width="520" height="8" rx="4" fill="#94a3b8" opacity="0.5" />
      <g>
        <rect x="40" y="40" width="360" height="100" rx="18" fill="#FFD700" stroke="#b38f00" strokeWidth="3" />
        <rect x="70" y="60" width="80" height="40" rx="6" fill="#1E90FF" />
        <rect x="160" y="60" width="80" height="40" rx="6" fill="#1E90FF" />
        <rect x="250" y="60" width="80" height="40" rx="6" fill="#1E90FF" />
        <rect x="340" y="60" width="40" height="40" rx="6" fill="#1E90FF" />
        <rect x="40" y="90" width="360" height="12" fill="#b38f00" opacity="0.4" />
        <circle cx="120" cy="146" r="20" fill="#111827" />
        <circle cx="120" cy="146" r="10" fill="#9ca3af" />
        <circle cx="320" cy="146" r="20" fill="#111827" />
        <circle cx="320" cy="146" r="10" fill="#9ca3af" />
        <rect x="36" y="124" width="368" height="6" rx="3" fill="#fb923c" />
        <rect x="380" y="84" width="20" height="12" rx="2" fill="#111827" />
        {/* waving students */}
        <g className="animate-wave" transform="translate(85,58)">
          <circle cx="0" cy="0" r="8" fill="#fde68a" />
          <rect x="-10" y="8" width="20" height="10" rx="2" fill="#e5e7eb" />
          <rect x="-2" y="8" width="4" height="12" fill="#1E90FF" />
          <rect x="10" y="-4" width="4" height="14" rx="2" fill="#fde68a" />
        </g>
        <g className="animate-wave" style={{ animationDelay: "250ms" }} transform="translate(175,58)">
          <circle cx="0" cy="0" r="8" fill="#fde68a" />
          <rect x="-10" y="8" width="20" height="10" rx="2" fill="#e5e7eb" />
          <rect x="-2" y="8" width="4" height="12" fill="#1E90FF" />
          <rect x="10" y="-4" width="4" height="14" rx="2" fill="#fde68a" />
        </g>
        <g className="animate-wave" style={{ animationDelay: "500ms" }} transform="translate(265,58)">
          <circle cx="0" cy="0" r="8" fill="#fde68a" />
          <rect x="-10" y="8" width="20" height="10" rx="2" fill="#e5e7eb" />
          <rect x="-2" y="8" width="4" height="12" fill="#1E90FF" />
          <rect x="10" y="-4" width="4" height="14" rx="2" fill="#fde68a" />
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
  // subtle animated dots
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `@keyframes twinkle{0%,100%{opacity:.5}50%{opacity:1}}`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="absolute h-1 w-1 bg-white/70 rounded-full" style={{
          top: `${Math.random()*90 + 5}%`,
          left: `${Math.random()*90 + 5}%`,
          animation: `twinkle ${6 + Math.random()*6}s ease-in-out infinite`,
        }} />
      ))}
    </div>
  );
}

function TestimonialCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });
  useEffect(() => {
    const id = setInterval(() => {
      const viewport = emblaRef.current as unknown as HTMLElement | null;
      if (!viewport) return;
      viewport.scrollBy({ left: 320, behavior: "smooth" });
    }, 2500);
    return () => clearInterval(id);
  }, [emblaRef]);
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
                  <p className="text-xs text-muted-foreground">⭐ {t.rating.toFixed(1)}/10</p>
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
            <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .6 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500">Smart Saathi!</span>
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .1, duration: .6 }} className="mt-4 text-lg text-slate-700 max-w-prose">
              Your friendly companion for learning, mentoring, and growth. Connect, explore resources, and track your journey.
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .2, duration: .6 }} className="mt-8 flex flex-wrap gap-3">
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
            <motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 70, damping: 14 }} className="animate-drive">
              <BusIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-8">
          Key Features
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-amber-200/60 hover:border-amber-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 text-white grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="h-6 w-6" />
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
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-10">
          How It Works
        </motion.h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { step: 1, title: "Register / Login", desc: "Create your account and set your goals.", color: "from-amber-400 to-orange-500" },
            { step: 2, title: "Explore Features", desc: "Guidance, mentoring, tools — everything in one place.", color: "from-blue-500 to-teal-400" },
            { step: 3, title: "Grow with Smart Saathi", desc: "Track progress and celebrate achievements!", color: "from-emerald-400 to-teal-500" },
          ].map((s, i) => (
            <motion.div key={s.step} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${s.color} text-white grid place-items-center font-extrabold mb-4`}>
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  <div className="mt-auto pt-4">
                    <div className={`h-24 w-full rounded-xl bg-gradient-to-br ${s.color} opacity-90`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-6">
          Loved by Students
        </motion.h2>
        <p className="text-muted-foreground mb-6">What our students say about Smart Saathi</p>
        <TestimonialCarousel />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-teal-100 to-sky-100" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl sm:text-3xl font-extrabold mb-4">Ready to start your journey?</motion.h3>
          <p className="text-muted-foreground mb-6">Join Smart Saathi today and grow smarter with friends and mentors.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/register">
              <Button className="h-12 px-6 text-base bg-gradient-to-r from-orange-500 via-amber-400 to-red-500 text-white shadow-lg hover:opacity-90 focus-visible:ring-amber-500">Register</Button>
            </Link>
            <Link to="/login">
              <Button className="h-12 px-6 text-base bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 text-white shadow-lg hover:opacity-90 focus-visible:ring-sky-500">Login</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
