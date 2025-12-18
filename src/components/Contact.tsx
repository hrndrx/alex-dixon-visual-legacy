import { VintageFlourish } from "./VintageFlourish";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 text-center lg:px-12">
        <VintageFlourish variant="divider" className="mb-6" />
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
          Contact
        </p>
        <h2 className="font-display text-4xl font-medium text-foreground lg:text-5xl">
          Let's Create Together
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
          Available for commercial campaigns, editorial features, and exclusive collaborations.
        </p>

        <VintageFlourish className="mt-8" />

        <div className="mt-12 flex flex-col items-center gap-8">
          <a
            href="mailto:alexdixonssebalijja@email.com"
            className="group flex items-center gap-3 font-display text-xl text-foreground transition-colors hover:text-primary md:text-2xl"
          >
            <span className="text-primary">✉</span>
            alexdixonssebalijja@email.com
          </a>
          
          <a
            href="https://wa.me/16177060043"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 font-display text-xl text-foreground transition-colors hover:text-primary md:text-2xl"
          >
            <span className="text-primary">📱</span>
            +1 617 706 0043
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
