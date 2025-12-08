import aboutImage from "@/assets/alex-formal-1.jpg";
import { VintageFlourish } from "./VintageFlourish";

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Subtle vintage texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={aboutImage}
              alt="Alex Dixon SSebalijja - Executive Portrait"
              className="h-full w-full object-cover"
            />
            {/* Vintage corner frame */}
            <div className="pointer-events-none absolute inset-4">
              <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-primary/30" />
              <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-primary/30" />
              <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-primary/30" />
              <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-primary/30" />
            </div>
          </div>

          {/* Content */}
          <div>
            <VintageFlourish variant="divider" className="mb-6 justify-start" />
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
