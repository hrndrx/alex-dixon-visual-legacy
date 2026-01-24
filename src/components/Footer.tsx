import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center gap-8 px-6 lg:px-12">
        {/* Social Media Icons */}
        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/alexdixonssebalijja?utm_source=qr&igsh=N2gxc2x5Z3Rta2gzIg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </a>
          <a 
            href="#" 
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </a>
          <a 
            href="#" 
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Twitter className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </a>
        </div>
        
        {/* Footer Content */}
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:justify-between md:w-full">
          <p>© {new Date().getFullYear()} Alex Dixon SSebalijja. All rights reserved.</p>
          <p className="font-display text-foreground">ADS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
