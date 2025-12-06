import heroImage from "@/assets/alex-hero.jpg";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Alex Dixon SSebalijja - Professional Portrait"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary opacity-0 animate-fade-in">
            Model & Creative
          </p>
          <h1 className="font-display text-5xl font-medium leading-tight text-foreground opacity-0 animate-fade-in animation-delay-200 md:text-6xl lg:text-7xl">
            Alex Dixon
            <span className="block text-primary">SSebalijja</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-in animation-delay-400">
            Presence that commands attention. Versatility that tells stories.
          </p>
          <a
            href="#portfolio"
            className="mt-10 inline-block border border-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary opacity-0 animate-fade-in animation-delay-600 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
