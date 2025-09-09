import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-black">SS</span>
            <span className="text-lg font-extrabold tracking-tight">Smart Saathi</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-prose">Empowering students with guidance, mentorship, and tools to grow smarter together.</p>
          <p className="text-xs text-muted-foreground">© 2025 Smart Saathi. All Rights Reserved.</p>
        </div>
        <div className="md:justify-self-end flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link className="hover:text-foreground text-muted-foreground" to="/about">About</Link>
            <Link className="hover:text-foreground text-muted-foreground" to="/contact">Contact</Link>
            <Link className="hover:text-foreground text-muted-foreground" to="/privacy">Privacy Policy</Link>
            <Link className="hover:text-foreground text-muted-foreground" to="/faq">FAQ</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a className="p-2 rounded-md bg-accent/20 hover:bg-accent/30 transition" aria-label="LinkedIn" href="#" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
            <a className="p-2 rounded-md bg-accent/20 hover:bg-accent/30 transition" aria-label="Instagram" href="#" target="_blank" rel="noreferrer">
              <Instagram className="h-5 w-5" />
            </a>
            <a className="p-2 rounded-md bg-accent/20 hover:bg-accent/30 transition" aria-label="YouTube" href="#" target="_blank" rel="noreferrer">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
