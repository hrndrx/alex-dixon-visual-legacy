const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-6 lg:px-12">
        <a href="#" className="font-display text-xl tracking-wide text-foreground">
          ADS
        </a>
        
        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <a href="#about" className="nav-link">About</a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
        
        <a 
          href="#contact" 
          className="text-sm uppercase tracking-[0.15em] text-primary transition-colors hover:text-foreground"
        >
          Inquire
        </a>
      </nav>
    </header>
  );
};

export default Header;
