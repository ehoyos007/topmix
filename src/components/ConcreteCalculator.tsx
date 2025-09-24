import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calculator } from "lucide-react";

const ConcreteCalculator = () => {
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>(""); 
  const [depth, setDepth] = useState<string>("");
  const [units, setUnits] = useState<"feet" | "meters">("feet");
  const [results, setResults] = useState({ cubicYards: 0, cubicMeters: 0 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculateVolume = () => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const d = parseFloat(depth) || 0;

    if (l <= 0 || w <= 0 || d <= 0) {
      setResults({ cubicYards: 0, cubicMeters: 0 });
      return;
    }

    let cubicYards = 0;
    let cubicMeters = 0;

    if (units === "feet") {
      // Calculate cubic yards directly from feet
      cubicYards = (l * w * d) / 27;
      // Convert cubic yards to cubic meters
      cubicMeters = cubicYards * 0.764555;
    } else {
      // Calculate cubic meters directly from meters
      cubicMeters = l * w * d;
      // Convert cubic meters to cubic yards
      cubicYards = cubicMeters * 1.30795;
    }

    setResults({
      cubicYards: Math.round(cubicYards * 100) / 100,
      cubicMeters: Math.round(cubicMeters * 100) / 100
    });
  };

  useEffect(() => {
    calculateVolume();
  }, [length, width, depth, units]);

  const handleUnitToggle = () => {
    setUnits(units === "feet" ? "meters" : "feet");
  };

  return (
    <section id="calculator" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <Calculator className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            CONCRETE <span className="text-primary">CALCULATOR</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Calculate the amount of concrete you need for your project. Enter your dimensions below 
            and get instant results in both cubic yards and cubic meters.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Calculator Form */}
          <Card className="mb-8">
            <CardContent className="p-8">
              {/* Units Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-muted rounded-lg p-1 flex">
                  <button
                    onClick={handleUnitToggle}
                    className={`px-6 py-2 rounded-md transition-all duration-200 font-medium ${
                      units === "feet"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Feet
                  </button>
                  <button
                    onClick={handleUnitToggle}
                    className={`px-6 py-2 rounded-md transition-all duration-200 font-medium ${
                      units === "meters"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Meters
                  </button>
                </div>
              </div>

              {/* Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-2">
                  <Label htmlFor="length" className="text-sm font-medium">
                    Length ({units === "feet" ? "ft" : "m"})
                  </Label>
                  <Input
                    id="length"
                    type="number"
                    placeholder="0"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    min="0"
                    step="0.1"
                    className="text-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="width" className="text-sm font-medium">
                    Width ({units === "feet" ? "ft" : "m"})
                  </Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="0"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    min="0"
                    step="0.1"
                    className="text-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="depth" className="text-sm font-medium">
                    Depth ({units === "feet" ? "ft" : "m"})
                  </Label>
                  <Input
                    id="depth"
                    type="number"
                    placeholder="0"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                    min="0"
                    step="0.1"
                    className="text-lg"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-lg p-6 text-center border border-primary/20">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">You Need</h4>
                  <p className="text-3xl font-bold text-primary mb-1">{results.cubicYards}</p>
                  <p className="text-sm text-muted-foreground">Cubic Yards</p>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-6 text-center border border-primary/20">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Equivalent To</h4>
                  <p className="text-3xl font-bold text-primary mb-1">{results.cubicMeters}</p>
                  <p className="text-sm text-muted-foreground">Cubic Meters</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              <strong>Disclaimer:</strong> This calculator provides estimates only. Actual concrete requirements may vary based on 
              site conditions, waste factors, and specific project needs. We recommend ordering 5-10% extra material. 
              Contact our professionals for accurate project estimates and expert advice.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 font-semibold px-8 py-3"
              asChild
            >
              <a href="tel:(786) 543-7640" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: (786) 543-7640
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3"
            >
              Request Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcreteCalculator;