const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 text-center lg:px-12">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
          Contact
        </p>
        <h2 className="font-display text-4xl font-medium text-foreground lg:text-5xl">
          Let's Create Together
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
          Available for commercial campaigns, editorial features, and exclusive collaborations.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6">
          <a
            href="mailto:contact@alexdixon.com"
            className="font-display text-2xl text-foreground transition-colors hover:text-primary md:text-3xl"
          >
            contact@alexdixon.com
          </a>
          
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
            >
              Instagram
            </a>
            <span className="h-4 w-px bg-border" />
            <a
              href="#"
              className="text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
