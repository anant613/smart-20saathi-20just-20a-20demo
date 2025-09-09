import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Placeholder({ title }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 grid place-items-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">{title}</h1>
          <p className="text-muted-foreground mb-6">This page is coming next. Tell me what you want here and I will build it.</p>
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground px-5 py-2.5 shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Go back home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
