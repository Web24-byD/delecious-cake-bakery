import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { CategorySection } from "@/components/site/CategorySection";
import { FeaturedCakes } from "@/components/site/FeaturedCakes";
import { CustomCakeSection } from "@/components/site/CustomCakeSection";
import { BirthdaySection } from "@/components/site/BirthdaySection";
import { OccasionsSection } from "@/components/site/OccasionsSection";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { SocialSection } from "@/components/site/SocialSection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ADDRESS } from "@/config/business";

const TITLE = "DELICIOUS Cake & Bakery by Tanvi | Cakes & Bakery in Ahmedabad";
const DESCRIPTION =
  "DELICIOUS Cake & Bakery by Tanvi in Krishnanagar, Ahmedabad. Explore beautiful birthday cakes, designer cakes, custom cakes and bakery treats for every celebration.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "DELICIOUS Cake & Bakery by Tanvi",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: "140, Sardar Rd, Shyampark Society, Krishnanagar",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "382345",
            addressCountry: "IN",
          },
          areaServed: "Ahmedabad",
          servesCuisine: "Cakes and bakery",
          knowsAbout: ADDRESS,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CategorySection />
        <FeaturedCakes />
        <CustomCakeSection />
        <BirthdaySection />
        <OccasionsSection />
        <Gallery />
        <About />
        <WhyChooseUs />
        <SocialSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
