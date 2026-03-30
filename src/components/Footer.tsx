import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-display text-xl font-bold text-gradient-gold tracking-wider">
          Mariam
        </Link>
        <div className="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:mariam@example.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} Mariam. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
