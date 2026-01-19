"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Icons as SVG components
const WaveIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12c.8-.9 1.8-1.5 3-1.5s2.2.6 3 1.5c.8.9 1.8 1.5 3 1.5s2.2-.6 3-1.5c.8-.9 1.8-1.5 3-1.5s2.2.6 3 1.5" />
    <path d="M2 17c.8-.9 1.8-1.5 3-1.5s2.2.6 3 1.5c.8.9 1.8 1.5 3 1.5s2.2-.6 3-1.5c.8-.9 1.8-1.5 3-1.5s2.2.6 3 1.5" />
  </svg>
);

const FishIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6.5 12c2.5-4 6.5-4 10 0-3.5 4-7.5 4-10 0z" />
    <path d="M17 12c1.5-1.5 3-2 4-1.5-1 .5-1.5 2-4 1.5z" />
    <circle cx="8" cy="12" r="1" fill="currentColor" />
  </svg>
);

const AnchorIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="8" x2="12" y2="21" />
    <path d="M5 12H2a10 10 0 0020 0h-3" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Tour data
const tours = [
  {
    id: "snorkeling",
    title: "Snorkeling Adventure",
    description: "Explore vibrant coral reefs and swim with tropical fish in crystal-clear waters.",
    price: 89,
    duration: "3 hours",
    maxGuests: 12,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    features: ["Equipment provided", "Guided tour", "Snacks & drinks", "Photo package available"],
    badge: "Most Popular",
    badgeColor: "bg-secondary text-secondary-foreground",
  },
  {
    id: "whale-watching",
    title: "Whale Watching Expedition",
    description: "Witness majestic humpback whales in their natural habitat during migration season.",
    price: 129,
    duration: "4 hours",
    maxGuests: 20,
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&h=600&fit=crop",
    features: ["Marine biologist guide", "Whale sighting guarantee", "Hot beverages", "Binoculars provided"],
    badge: "Seasonal",
    badgeColor: "bg-accent text-accent-foreground",
  },
  {
    id: "fishing",
    title: "Fishing Tours",
    description: "Cast your line into the deep blue and reel in the catch of a lifetime.",
    price: 199,
    duration: "6 hours",
    maxGuests: 6,
    image: "/images/big fish.jpeg",
    features: ["All tackle included", "Professional crew", "Fish cleaning service", "Keep your catch"],
    badge: "Premium",
    badgeColor: "bg-primary text-primary-foreground",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "San Diego, CA",
    rating: 5,
    text: "The snorkeling tour was absolutely magical! Our guide was incredibly knowledgeable and we saw so many beautiful fish. This was the highlight of our vacation!",
    tour: "Snorkeling Adventure",
    avatar: "S",
  },
  {
    name: "James & Family",
    location: "Austin, TX",
    rating: 5,
    text: "Took the whole family on the whale watching expedition. The kids were thrilled when we spotted a mother and calf! The crew made everyone feel safe and excited.",
    tour: "Whale Watching",
    avatar: "J",
  },
  {
    name: "Michael Chen",
    location: "Seattle, WA",
    rating: 5,
    text: "Best fishing charter I've ever been on! Captain Joe knew exactly where to find the big ones. Caught a 40lb mahi-mahi that we had prepared at a local restaurant.",
    tour: "Deep Sea Fishing",
    avatar: "M",
  },
  {
    name: "Emma Rodriguez",
    location: "Miami, FL",
    rating: 5,
    text: "Professional, friendly, and so much fun! The boat was clean and comfortable. I've already recommended Ocean Adventures to all my friends.",
    tour: "Snorkeling Adventure",
    avatar: "E",
  },
];

const galleryImages = [
  // Original 6 images
  { src: "https://loveoahu.org/wp-content/uploads/humpback-whale-breaching.jpg", alt: "Humpback whale breaching" },
  { src: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/3b/57/6b.jpg", alt: "Underwater fish" },
  { src: "https://cdn.sanity.io/images/xhhnkk4g/production/20d3ad8979067e629372b298a018dbb274b2d1eb-1080x1630.webp?w=800&q=65&fit=clip&auto=format", alt: "Whale watching" },
  { src: "https://www.dolphindiscoveries.com/wp-content/uploads/sites/5541/2023/04/snorkeling-hawaii-big-island.jpeg?w=700&h=700&zoom=2", alt: "Snorkeling boat" },
  { src: "https://d1jyxxz9imt9yb.cloudfront.net/article/5517/meta_image/regular/5-Whale-Watching-Humpback-Breaching-Stellwagen_reduced.jpg", alt: "Whale with boat" },
  { src: "https://cdn.sanity.io/images/esqfj3od/production/3bf47706fcbf56cf473827e4f2fcdbe0383d8242-1080x720.webp?w=800&q=65&fit=clip&auto=format", alt: "Snorkeling with whale shark" },
  
  // New local images - all with same descriptive text
  { src: "/images/1.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/2.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/3.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/4.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/5.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/6.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/7.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/8.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/9.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/10.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/11.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/12.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/13.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/14.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/15.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/16.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/17.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/18.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/19.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/20.jpeg", alt: "Muthu Tour destination" },
  { src: "/images/21.jpeg", alt: "Muthu Tour destination" }
  
];

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTour, setSelectedTour] = useState<string>("");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#tours", label: "Tours" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  const handleBookNow = (tourId: string) => {
    setSelectedTour(tourId);
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen">
      
      {/* <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        <div className="dolphin dolphin-1">🐬</div>
        <div className="dolphin dolphin-2">🐬</div>
        <div className="dolphin dolphin-3">🐬</div>
      </div> */}

      {/* Navigation */}
      <nav
  className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
  transition-all duration-300 ease-in-out
  ${
    scrolled
      ? "bg-blue-950/80 shadow-xl shadow-blue-900/40"
      : "bg-blue-900/40"
  }
  backdrop-blur-md border border-blue-400/20
  rounded-full`}
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-14 gap-6">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full gradient-ocean flex items-center justify-center text-white">
          <WaveIcon />
        </div>
        <span className="text-lg font-bold text-white whitespace-nowrap">
          Muthu Tours
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
          >
            {link.label}
          </a>
        ))}
        <Button className="gradient-ocean h-9 px-4 text-sm rounded-full">
          Book Now
        </Button>
      </div>

      {/* Mobile */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 rounded-full"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-72">
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button className="gradient-ocean mt-4 rounded-full">
              Book Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>

    </div>
  </div>
</nav>



      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/fish.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <Badge className="bg-secondary text-secondary-foreground mb-6 text-sm px-4 py-1.5 font-medium">
            Award-Winning Ocean Tours Since 2010
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Magic of the
            <span className="block text-transparent bg-clip-text text-8xl bg-gradient-to-r from-cyan-300 to-teal-200">
              Ocean
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
           Love adventures? Grab the chance! Feel the art of snorkeling with whales in an amusing Eco-friendly manner in Mirissa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setBookingOpen(true)}
              className="gradient-ocean text-lg px-8 py-6 hover:opacity-90 transition-all transform hover:scale-105 shadow-xl"
            >
              Book Your Adventure
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="#tours">Explore Tours</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <AnchorIcon />, text: "Expert Captains" },
              { icon: <UsersIcon />, text: "Small Groups" },
              { icon: <CheckIcon />, text: "Safety First" },
              { icon: <StarIcon />, text: "5-Star Rated" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 text-primary">
                {item.icon}
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-gradient-to-b from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4">Our Experiences</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-gradient-ocean">Adventure</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From peaceful snorkeling to thrilling fishing expeditions, we have the perfect ocean experience waiting for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-4 left-4 ${tour.badgeColor}`}>
                    {tour.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <CardDescription className="text-base">{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <ClockIcon />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <UsersIcon />
                      Max {tour.maxGuests} guests
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {tour.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-3xl font-bold text-primary">${tour.price}</span>
                    <span className="text-muted-foreground">/person</span>
                  </div>
                  <Button onClick={() => handleBookNow(tour.id)} className="gradient-ocean hover:opacity-90">
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent mb-4">Gallery</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Moments of <span className="text-gradient-ocean">Wonder</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Captured memories from our incredible ocean adventures. Your next unforgettable moment awaits.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  idx === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    idx === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-secondary/10 text-secondary mb-4">About Us</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Your Trusted <span className="text-gradient-ocean">Ocean Guides</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Muthu tours Mirissa is a local business which provide facilities to experience the oceanic glamour of Southern Sri Lanka. We fulfill your expectations in a memorable and safety manner. We are ready to customize our trips and packages as your requests.
                Try Muthu tours to get the best out of your trip to Sri Lanka.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "50K+", label: "Happy Guests" },
                  { number: "98%", label: "Satisfaction Rate" },
                  { number: "5", label: "Star Rating" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl bg-white shadow-md">
                    <p className="text-3xl font-bold text-primary">{stat.number}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="gradient-ocean" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.newenglandinnsandresorts.com/sites/default/files/uploads/2015/08/new-england-whale-watching.jpg"
                  alt="Whale watching tour"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden lg:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full gradient-ocean flex items-center justify-center text-white">
                    <AnchorIcon />
                  </div>
                  <div>
                    <p className="font-bold">Captain Joe</p>
                    <p className="text-sm text-muted-foreground">Lead Captain, 20yr exp</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">"Every trip is a new adventure. I love sharing the ocean's magic with our guests."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gradient-ocean">Guests Say</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what adventurers like you have experienced.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 text-secondary mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                  <Badge variant="outline" className="mb-4">{testimonial.tour}</Badge>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-accent/10 text-accent mb-4">Contact Us</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Set <span className="text-gradient-ocean">Sail?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions or need help planning your adventure? Our friendly team is here to help you create the perfect ocean experience.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <MapPinIcon />, title: "Location", content: "49 A, Bandaramulla, Mirissa, Srilanka." },
                  { icon: <PhoneIcon />, title: "Phone", content: "+94 71 4343478, +94 71 4013477(whatsapp)" },
                  { icon: <MailIcon />, title: "Email", content: " muthutoursmirissa@gmail.com" },
                  { icon: <ClockIcon />, title: "Hours", content: "Daily: 6:00 AM - 8:00 PM" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tour">Interested In</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a tour" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="snorkeling">Snorkeling Adventure</SelectItem>
                      <SelectItem value="whale-watching">Whale Watching</SelectItem>
                      <SelectItem value="fishing">Deep Sea Fishing</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your adventure plans..." rows={4} />
                </div>
                <Button className="w-full gradient-ocean text-lg py-6">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center">
                  <WaveIcon />
                </div>
                <span className="text-xl font-bold">Ocean Adventures</span>
              </div>
              <p className="text-white/70 mb-4">
                Creating unforgettable ocean experiences since 2010. Your adventure awaits!
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tours</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#tours" className="hover:text-white transition-colors">Snorkeling Adventure</a></li>
                <li><a href="#tours" className="hover:text-white transition-colors">Whale Watching</a></li>
                <li><a href="#tours" className="hover:text-white transition-colors">Deep Sea Fishing</a></li>
                <li><a href="#tours" className="hover:text-white transition-colors">Private Charters</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <MapPinIcon />
                  <span>123 Harbor Drive</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MailIcon />
                  <span>hello@oceanadventures.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Ocean Adventures. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Dialog */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Book Your Adventure</DialogTitle>
            <DialogDescription>
              Select your tour, date, and party size to begin your ocean adventure.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="details" className="mt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Tour Details</TabsTrigger>
              <TabsTrigger value="calendar">Select Date</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Select Tour</Label>
                <Select value={selectedTour} onValueChange={setSelectedTour}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your adventure" />
                  </SelectTrigger>
                  <SelectContent>
                    {tours.map((tour) => (
                      <SelectItem key={tour.id} value={tour.id}>
                        {tour.title} - ${tour.price}/person
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Number of Guests</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }).map((_, i) => (
                        <SelectItem key={i + 1} value={String(i + 1)}>
                          {i + 1} {i === 0 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (6:00 AM)</SelectItem>
                      <SelectItem value="midday">Midday (11:00 AM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (2:00 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bookingName">Full Name</Label>
                <Input id="bookingName" placeholder="John Doe" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bookingEmail">Email</Label>
                  <Input id="bookingEmail" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bookingPhone">Phone</Label>
                  <Input id="bookingPhone" type="tel" placeholder="(555) 123-4567" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-4">
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </div>
              {selectedDate && (
                <p className="text-center mt-4 text-primary font-medium">
                  Selected: {selectedDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </p>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex gap-4 mt-6">
            <Button variant="outline" className="flex-1" onClick={() => setBookingOpen(false)}>
              Cancel
            </Button>
            <Button className="flex-1 gradient-ocean">
              Complete Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
