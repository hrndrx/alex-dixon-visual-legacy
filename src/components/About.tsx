import aboutImage from "@/assets/alex-formal-1.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={aboutImage}
              alt="Alex Dixon SSebalijja - Executive Portrait"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
              About
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-foreground lg:text-5xl">
              Crafted for the Lens
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                With an innate understanding of form, expression, and narrative, 
                Alex Dixon SSebalijja brings a distinctive presence to every frame.
              </p>
              <p className="leading-relaxed">
                From high-fashion editorials to commercial campaigns, his ability 
                to embody diverse characters while maintaining authentic charisma 
                has made him a sought-after talent in the industry.
              </p>
              <p className="leading-relaxed">
                Every shoot is an opportunity to create something memorable—where 
                confidence meets artistry, and every image tells a compelling story.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-12 border-t border-border pt-8">
              <div>
                <span className="font-display text-3xl text-primary">10+</span>
                <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <span className="font-display text-3xl text-primary">50+</span>
                <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
                  Campaigns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
