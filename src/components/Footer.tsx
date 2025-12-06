const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row lg:px-12">
        <p>© {new Date().getFullYear()} Alex Dixon SSebalijja. All rights reserved.</p>
        <p className="font-display text-foreground">ADS</p>
      </div>
    </footer>
  );
};

export default Footer;
