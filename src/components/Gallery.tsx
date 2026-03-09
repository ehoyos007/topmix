import { useState, useMemo } from "react";
import { LazyImage } from "@/components/LazyImage";

type Category =
  | "all"
  | "delivery"
  | "stamped"
  | "slabs"
  | "forming"
  | "pools";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
  label: string;
}

const CATEGORY_TABS: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "delivery", label: "Delivery & Pumping" },
  { key: "stamped", label: "Stamped Concrete" },
  { key: "slabs", label: "Concrete Slabs" },
  { key: "forming", label: "Concrete Forming" },
  { key: "pools", label: "Pool Construction" },
];

const GALLERY_IMAGES: GalleryImage[] = [
  // Delivery & Pumping
  {
    src: "/gallery/delivery/delivery-pumping-hero.jpg",
    alt: "Concrete delivery and pumping service in Miami-Dade County",
    category: "delivery",
    label: "Delivery & Pumping",
  },
  {
    src: "/gallery/delivery/image-1.jpg",
    alt: "Concrete pump truck delivering ready-mix concrete in Miami",
    category: "delivery",
    label: "Delivery & Pumping",
  },
  {
    src: "/gallery/delivery/image-2.jpg",
    alt: "Concrete delivery pour for residential foundation in Broward County",
    category: "delivery",
    label: "Delivery & Pumping",
  },
  {
    src: "/gallery/delivery/image-3.jpg",
    alt: "Ready-mix concrete truck on job site in South Florida",
    category: "delivery",
    label: "Delivery & Pumping",
  },
  {
    src: "/gallery/delivery/image-4.jpg",
    alt: "Concrete pumping for commercial project Miami",
    category: "delivery",
    label: "Delivery & Pumping",
  },
  {
    src: "/gallery/delivery/image-5.jpg",
    alt: "Boom pump concrete delivery for multi-story building Broward",
    category: "delivery",
    label: "Delivery & Pumping",
  },
  {
    src: "/gallery/delivery/image-6.jpg",
    alt: "Concrete line pump service for backyard project Miami-Dade",
    category: "delivery",
    label: "Delivery & Pumping",
  },
  {
    src: "/gallery/delivery/image-7.jpg",
    alt: "Fresh concrete delivery and placement in South Florida",
    category: "delivery",
    label: "Delivery & Pumping",
  },

  // Stamped Concrete
  {
    src: "/gallery/stamped/stamped-hero.jpg",
    alt: "Decorative stamped concrete patio design in Miami",
    category: "stamped",
    label: "Stamped Concrete",
  },
  {
    src: "/gallery/stamped/image-1.jpg",
    alt: "Stamped concrete driveway with stone pattern Broward County",
    category: "stamped",
    label: "Stamped Concrete",
  },
  {
    src: "/gallery/stamped/image-2.jpg",
    alt: "Stamped concrete pool deck with textured finish Miami-Dade",
    category: "stamped",
    label: "Stamped Concrete",
  },
  {
    src: "/gallery/stamped/image-3.jpg",
    alt: "Decorative stamped concrete walkway in South Florida home",
    category: "stamped",
    label: "Stamped Concrete",
  },
  {
    src: "/gallery/stamped/image-4.jpg",
    alt: "Stamped concrete patio with brick pattern Miami",
    category: "stamped",
    label: "Stamped Concrete",
  },
  {
    src: "/gallery/stamped/image-5.jpg",
    alt: "Custom stamped concrete entryway Broward County",
    category: "stamped",
    label: "Stamped Concrete",
  },
  {
    src: "/gallery/stamped/image-6.jpg",
    alt: "Stamped and stained concrete driveway in Miami-Dade",
    category: "stamped",
    label: "Stamped Concrete",
  },
  {
    src: "/gallery/stamped/image-7.jpg",
    alt: "Ashlar slate stamped concrete patio South Florida",
    category: "stamped",
    label: "Stamped Concrete",
  },
  {
    src: "/gallery/stamped/image-8.jpg",
    alt: "Colored stamped concrete outdoor living space Miami",
    category: "stamped",
    label: "Stamped Concrete",
  },
  {
    src: "/gallery/stamped/image-9.jpg",
    alt: "Seamless stamped concrete finish for backyard Broward",
    category: "stamped",
    label: "Stamped Concrete",
  },

  // Concrete Slabs
  {
    src: "/gallery/slabs/slabs-hero.jpg",
    alt: "Concrete slab foundation pour in Miami-Dade County",
    category: "slabs",
    label: "Concrete Slabs",
  },
  {
    src: "/gallery/slabs/image-1.jpg",
    alt: "Flat concrete slab for residential garage Miami",
    category: "slabs",
    label: "Concrete Slabs",
  },
  {
    src: "/gallery/slabs/image-2.jpg",
    alt: "Reinforced concrete slab construction Broward County",
    category: "slabs",
    label: "Concrete Slabs",
  },
  {
    src: "/gallery/slabs/image-3.jpg",
    alt: "Polished concrete slab flooring in South Florida",
    category: "slabs",
    label: "Concrete Slabs",
  },

  // Concrete Forming
  {
    src: "/gallery/forming/forming-hero.jpg",
    alt: "Concrete forming and framing for foundation Miami",
    category: "forming",
    label: "Concrete Forming",
  },
  {
    src: "/gallery/forming/image-1.jpg",
    alt: "Concrete formwork for retaining wall Broward County",
    category: "forming",
    label: "Concrete Forming",
  },
  {
    src: "/gallery/forming/image-2.jpg",
    alt: "Foundation forming and rebar installation Miami-Dade",
    category: "forming",
    label: "Concrete Forming",
  },
  {
    src: "/gallery/forming/image-3.jpg",
    alt: "Concrete forms set up for driveway pour South Florida",
    category: "forming",
    label: "Concrete Forming",
  },
  {
    src: "/gallery/forming/image-4.jpg",
    alt: "Curved concrete forming for custom patio Miami",
    category: "forming",
    label: "Concrete Forming",
  },
  {
    src: "/gallery/forming/image-5.jpg",
    alt: "Concrete forming for sidewalk construction Broward",
    category: "forming",
    label: "Concrete Forming",
  },
  {
    src: "/gallery/forming/image-6.jpg",
    alt: "Structural concrete formwork for commercial project Miami-Dade",
    category: "forming",
    label: "Concrete Forming",
  },
  {
    src: "/gallery/forming/image-7.jpg",
    alt: "Concrete edge forming and finishing South Florida",
    category: "forming",
    label: "Concrete Forming",
  },
  {
    src: "/gallery/forming/image-8.jpg",
    alt: "Multi-level concrete forming for steps Miami",
    category: "forming",
    label: "Concrete Forming",
  },
  {
    src: "/gallery/forming/image-9.jpg",
    alt: "Precision concrete forms for slab-on-grade Broward County",
    category: "forming",
    label: "Concrete Forming",
  },

  // Pool Construction
  {
    src: "/gallery/pools/pool-hero.jpg",
    alt: "Concrete pool construction and gunite shell Miami",
    category: "pools",
    label: "Pool Construction",
  },
  {
    src: "/gallery/pools/image-1.jpg",
    alt: "Custom pool deck concrete work Broward County",
    category: "pools",
    label: "Pool Construction",
  },
  {
    src: "/gallery/pools/image-2.jpg",
    alt: "Shotcrete pool shell construction in Miami-Dade",
    category: "pools",
    label: "Pool Construction",
  },
  {
    src: "/gallery/pools/image-3.jpg",
    alt: "Concrete pool coping and deck finish South Florida",
    category: "pools",
    label: "Pool Construction",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredImages = useMemo(
    () =>
      activeCategory === "all"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Project Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our portfolio of completed projects across Miami-Dade and
            Broward Counties
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeCategory === tab.key
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-secondary/80 text-foreground border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.category}-${index}`}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <LazyImage
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Category Badge */}
              <span className="absolute bottom-3 left-3 z-10 bg-primary/90 text-white text-xs font-semibold px-2.5 py-1 rounded">
                {image.label}
              </span>

              {/* Alt Text Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-10 left-3 right-3">
                  <p className="text-white font-semibold text-sm md:text-base">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to start your next concrete project?
          </p>
          <button
            onClick={scrollToContact}
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
