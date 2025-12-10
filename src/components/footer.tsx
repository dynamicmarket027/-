import Link from "next/link";
import { Logo } from "./logo";
import { Github, Instagram, Youtube } from "lucide-react";

const socialLinks = [
    { name: "Instagram", href: "#", icon: <Instagram className="h-6 w-6" /> },
    { name: "YouTube", href: "#", icon: <Youtube className="h-6 w-6" /> },
    {
      name: "X",
      href: "#",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    { name: "GitHub", href: "#", icon: <Github className="h-6 w-6" /> },
    {
      name: "TikTok",
      href: "#",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.85-.38-6.75-1.9-1.43-1.13-2.31-2.73-2.72-4.4-.6-2.4-.11-5.01 1.4-6.94 1.63-2.09 4.24-3.32 6.84-3.55.02-1.12.02-2.25.01-3.37Z" />
        </svg>
      ),
    },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-center mb-4">
            <nav className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 text-base font-medium text-foreground/80">
                <Link href="/about-us" className="hover:text-primary font-semibold text-lg text-foreground">Sobre Nosotros</Link>
                 <span className="text-foreground/80 font-bold">·</span>
                <Link href="/documentation" className="hover:text-primary font-semibold text-lg text-foreground">Documentación</Link>
            </nav>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground pt-2 border-t">
            <div className="hidden md:flex flex-1 items-center justify-start">
              <Link href="/" aria-label="Home">
                <Logo />
              </Link>
            </div>
            
            <p className="flex-shrink-0 text-center md:absolute md:left-1/2 md:-translate-x-1/2">
                © 2025 SoftWareHouse. Todos los derechos reservados.
            </p>

             <div className="flex flex-1 justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </Link>
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
