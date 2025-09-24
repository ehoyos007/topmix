import { LazyImage } from "@/components/LazyImage";
import decorative1 from "@/assets/decorative-1.jpg";
import decorative2 from "@/assets/decorative-2.jpg";
import decorative3 from "@/assets/decorative-3.jpg";
import heroImage from "@/assets/hero-construction.jpg";

const Gallery = () => {
  const galleryImages = [
    { 
      src: decorative1, 
      alt: "Stamped concrete patio with decorative patterns",
      srcSet: `${decorative1} 400w, ${decorative1} 800w, ${decorative1} 1200w`
    },
    { 
      src: decorative2, 
      alt: "Polished concrete floor with high-gloss finish",
      srcSet: `${decorative2} 400w, ${decorative2} 800w, ${decorative2} 1200w`
    },
    { 
      src: decorative3, 
      alt: "Stained concrete driveway in earth tones",
      srcSet: `${decorative3} 400w, ${decorative3} 800w, ${decorative3} 1200w`
    },
    { 
      src: heroImage, 
      alt: "Professional concrete construction project",
      srcSet: `${heroImage} 400w, ${heroImage} 800w, ${heroImage} 1200w`
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Project Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of completed concrete projects showcasing our craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <LazyImage
                src={image.src}
                srcSet={image.srcSet}
                alt={image.alt}
                className="aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm md:text-base">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see your project featured here?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;