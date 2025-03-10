import { Link } from "wouter";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-sm bg-background/80 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold">Portfolio</a>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            <Link href="#about">
              <a className="hover:text-primary transition-colors">About</a>
            </Link>
            <Link href="#skills">
              <a className="hover:text-primary transition-colors">Skills</a>
            </Link>
            <Link href="#projects">
              <a className="hover:text-primary transition-colors">Projects</a>
            </Link>
            <Link href="#contact">
              <a className="hover:text-primary transition-colors">Contact</a>
            </Link>
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
