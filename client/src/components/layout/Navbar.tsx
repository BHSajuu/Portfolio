import { Link } from "wouter";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Button } from "../ui/button";

export function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full backdrop-blur-sm bg-background/80 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold">Portfolio</a>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            <a 
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#skills"
              onClick={(e) => handleNavClick(e, "#skills")}
              className="hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}