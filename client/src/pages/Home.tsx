import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Facebook, Download } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { MapView } from "@/components/Map";

/**
 * Shakespeare Gastropub - Modernized Website
 * Design Philosophy: Warm Heritage Modern
 * Color Palette: Deep Burgundy (#8B3A3A), Warm Cream (#F5F1E8), Soft Gold (#D4AF37)
 * Typography: Playfair Display (headings), Lato (body), Cormorant (accents)
 */

export default function Home() {
  const [currentMenuSlide, setCurrentMenuSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);

  const menuImages = [
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663378229063/PqbTZqFkLG7mxKWJtkLhWt/menu-showcase-icrhAUP4ytvHd9zwqqTDEZ.webp",
      alt: "Main Menu Page 1",
      title: "Main Menu",
    },
    {
      src: "https://shakespeare.cy/wp-content/uploads/2025/03/A3_food_fev_2025-images-1-300x214.jpg",
      alt: "Main Menu Page 2",
      title: "Main Menu",
    },
    {
      src: "https://shakespeare.cy/wp-content/uploads/2025/03/144x297_breakfast_fev_2025-images-0-150x300.jpg",
      alt: "Breakfast Menu Page 1",
      title: "Breakfast Menu",
    },
    {
      src: "https://shakespeare.cy/wp-content/uploads/2025/03/144x297_breakfast_fev_2025-images-1-150x300.jpg",
      alt: "Breakfast Menu Page 2",
      title: "Breakfast Menu",
    },
  ];

  const nextSlide = () => {
    setCurrentMenuSlide((prev) => (prev + 1) % menuImages.length);
  };

  const prevSlide = () => {
    setCurrentMenuSlide((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
            }`}>
              <span className={`font-display font-bold text-lg transition-colors duration-300 ${
                scrolled ? "text-primary-foreground" : "text-white"
              }`}>S</span>
            </div>
            <div>
              <h1 className={`font-display font-bold text-lg transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-white"
              }`}>Shakespeare</h1>
              <p className={`text-xs transition-colors duration-300 ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}>British Gastropub</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={`transition-colors duration-300 ${
              scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}>
              About
            </a>
            <a href="#menu" className={`transition-colors duration-300 ${
              scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}>
              Menu
            </a>
            <a href="#contact" className={`transition-colors duration-300 ${
              scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}>
              Contact
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
              }`}
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663378229063/PqbTZqFkLG7mxKWJtkLhWt/hero-gastropub-D7Hjnhu7MU63o5rVGszmHX.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex items-center container">
          <div className="max-w-2xl text-white fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to Shakespeare Gastropub
            </h1>
            <p className="text-lg md:text-xl mb-8 font-body leading-relaxed max-w-xl">
              A modern version of traditional family dining with warm atmosphere, live music, and authentic cuisine since 1993.
            </p>
            <div className="flex gap-4">
              <Button
                className="btn-primary"
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Menu
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Our Philosophy</h2>
              <div className="section-divider mb-8"></div>
              <p className="text-lg mb-6 font-body text-foreground/90 leading-relaxed">
                Shakespeare Gastropub is a modern version of a traditional family place with a special warm atmosphere. We offer live music, fun quiz nights, an open veranda, and a playground for our young visitors.
              </p>
              <p className="text-lg mb-6 font-body text-foreground/90 leading-relaxed">
                Our philosophy has remained unchanged since 1993: delicious cuisine, careful approach towards traditions, and first-class service. We combine modern and stylish presentation with authentic recipes and tastes.
              </p>
              <p className="text-lg font-body text-foreground/90 leading-relaxed">
                We carefully keep all classic cooking methods while developing our skills and experimenting with taste combinations. We aim to improve our cuisine constantly to satisfy our guests.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663378229063/PqbTZqFkLG7mxKWJtkLhWt/menu-showcase-icrhAUP4ytvHd9zwqqTDEZ.webp"
                alt="Fine Dining"
                className="rounded-lg shadow-xl max-w-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="section-title text-center mb-12">What We Offer</h2>
          <div className="section-divider mx-auto max-w-xs mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Drinks */}
            <Card className="card-elegant">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🍷</span>
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">Premium Drinks</h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                Our drinks menu includes various draft beers from around the world, exquisite wines, and classic cocktails at reasonable prices.
              </p>
            </Card>

            {/* Events */}
            <Card className="card-elegant">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🎵</span>
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">Live Events</h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                We host regular events including jazz nights, karaoke nights, and live entertainment for all members of your family.
              </p>
            </Card>

            {/* Sports */}
            <Card className="card-elegant">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">⚽</span>
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">Sports Broadcast</h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                We broadcast all major sports events on multiple TV screens and two large outdoor screens for your enjoyment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-background">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Menu</h2>
          <div className="section-divider mx-auto max-w-xs mb-12"></div>

          <div className="max-w-4xl mx-auto">
            {/* Menu Carousel */}
            <div className="relative mb-8">
              <div className="relative h-96 md:h-[500px] bg-secondary rounded-lg overflow-hidden shadow-xl">
                <img
                  src={menuImages[currentMenuSlide].src}
                  alt={menuImages[currentMenuSlide].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {menuImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMenuSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentMenuSlide ? "bg-primary w-8" : "bg-muted"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* PDF Downloads */}
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://shakespeare.cy/wp-content/uploads/2025/03/A3_food_fev_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary text-primary-foreground p-6 rounded-lg hover:bg-primary/90 transition-all group"
              >
                <Download size={24} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Download Main Menu PDF</span>
              </a>
              <a
                href="https://shakespeare.cy/wp-content/uploads/2025/03/144x297_breakfast_fev_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary text-primary-foreground p-6 rounded-lg hover:bg-primary/90 transition-all group"
              >
                <Download size={24} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Download Breakfast Menu PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="section-title text-center mb-12">Get in Touch</h2>
          <div className="section-divider mx-auto max-w-xs mb-12"></div>

          {/* Google Maps */}
          <div className="max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-lg">
            <MapView
              initialCenter={{ lat: 34.6749, lng: 33.0449 }}
              initialZoom={15}
              onMapReady={(map) => {
                mapRef.current = map;
                // Add marker for restaurant location
                if (window.google) {
                  new window.google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: { lat: 34.6749, lng: 33.0449 },
                    title: "Shakespeare Gastropub",
                  });
                }
              }}
              className="h-96 rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl text-primary mb-2">Call Us</h3>
              <a href="tel:+35725326178" className="text-foreground/80 hover:text-primary transition-colors">
                +357 25 326178
              </a>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl text-primary mb-2">Email Us</h3>
              <a href="mailto:info@shakespeare.cy" className="text-foreground/80 hover:text-primary transition-colors">
                info@shakespeare.cy
              </a>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl text-primary mb-2">Visit Us</h3>
              <p className="text-foreground/80 text-sm">
                93 H Georgiou A. Street
                <br />
                Pot. Germasogias, 4048
                <br />
                Limassol, Cyprus
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-display text-2xl text-primary mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                required
              ></textarea>
              <Button className="btn-primary w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm">© 1993-2025 Shakespeare Gastropub | All Rights Reserved</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
