import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Maria G.",
    location: "Hialeah",
    rating: 5,
    service: "Stamped Concrete",
    quote:
      "TopMix did an absolutely beautiful stamped concrete driveway for us. The team was professional from start to finish, and the final result looks like real stone. We get compliments from everyone who visits!",
  },
  {
    name: "Roberto S.",
    location: "Doral",
    rating: 5,
    service: "Concrete Delivery",
    quote:
      "We needed a large concrete delivery for a commercial project and TopMix was right on time. The quality of the mix was excellent and their pumping crew knew exactly what they were doing. Will definitely use them again.",
  },
  {
    name: "Jennifer L.",
    location: "Kendall",
    rating: 5,
    service: "Pool Construction",
    quote:
      "Our new pool exceeded every expectation. TopMix handled the entire construction process and finished on schedule despite a week of rain. The pool is gorgeous and our backyard feels like a resort now.",
  },
  {
    name: "Carlos M.",
    location: "Fort Lauderdale",
    rating: 5,
    service: "Concrete Forming",
    quote:
      "We hired TopMix for a commercial concrete forming job at our warehouse expansion. Very professional operation — their forms were precise, the pour went smoothly, and the finished walls are perfectly straight. Top-notch work.",
  },
  {
    name: "Ana P.",
    location: "Pembroke Pines",
    rating: 5,
    service: "Decorative Patio",
    quote:
      "Our decorative patio turned out even better than we imagined. The colors and patterns are stunning, and it has held up beautifully through two hurricane seasons. Our neighbors keep asking who did the work!",
  },
  {
    name: "David R.",
    location: "Miami Beach",
    rating: 5,
    service: "Concrete Slab",
    quote:
      "Had a concrete slab poured for our detached garage. The crew was fast, clean, and the slab is perfectly level. The financing option made it easy to fit into our budget. Highly recommend TopMix to anyone.",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TopMix Concrete",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: String(testimonials.length),
    reviewCount: String(testimonials.length),
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
    },
    reviewBody: t.quote,
  })),
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by homeowners and contractors across South Florida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card"
            >
              <CardContent className="p-6">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary border-0"
                  >
                    {testimonial.service}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
