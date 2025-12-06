import alexBW from "@/assets/alex-portrait-bw.jpg";
import alexCasual1 from "@/assets/alex-casual-1.jpg";
import alexCasual2 from "@/assets/alex-casual-2.jpg";
import alexOutdoor1 from "@/assets/alex-outdoor-1.jpg";
import alexOutdoor2 from "@/assets/alex-outdoor-2.jpg";
import alexFormal2 from "@/assets/alex-formal-2.jpg";
import alexFormal3 from "@/assets/alex-formal-3.jpg";

const images = [
  { src: alexBW, alt: "Portrait in Black & White", category: "Editorial" },
  { src: alexFormal2, alt: "Executive Portrait", category: "Corporate" },
  { src: alexCasual1, alt: "Casual Studio", category: "Lifestyle" },
  { src: alexOutdoor1, alt: "Urban Outdoor", category: "Street" },
  { src: alexCasual2, alt: "Athleisure", category: "Commercial" },
  { src: alexOutdoor2, alt: "Natural Light Portrait", category: "Lifestyle" },
  { src: alexFormal3, alt: "Three Piece Suit", category: "Fashion" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-secondary/30 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
            Portfolio
          </p>
          <h2 className="font-display text-4xl font-medium text-foreground lg:text-5xl">
            Selected Works
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            A curated collection showcasing range, versatility, and the art of visual storytelling.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/20 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-[0.2em] text-primary">
                    {image.category}
                  </span>
                  <span className="mt-1 font-display text-lg text-foreground">
                    {image.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
