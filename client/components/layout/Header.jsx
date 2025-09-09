import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const navItem = ({ isActive }) =>
    cn(
      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
      isActive
        ? "text-foreground bg-accent/20"
        : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
    );

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-black">
            SS
          </span>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight">
            Smart Saathi
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/about" className={navItem}>
            About
          </NavLink>
          <NavLink to="/contact" className={navItem}>
            Contact
          </NavLink>
          <NavLink to="/faq" className={navItem}>
            FAQ
          </NavLink>
          <NavLink to="/privacy" className={navItem}>
            Privacy
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button className="bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400 text-white shadow hover:opacity-90 focus-visible:ring-blue-500">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-gradient-to-r from-orange-500 via-amber-400 to-red-500 text-white shadow hover:opacity-90 focus-visible:ring-amber-500">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
