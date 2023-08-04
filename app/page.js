import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import AboutUsSection from '@components/sections/AboutUsSection';
import CallToActionSection from '@components/sections/CallToActionSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';
import ContactUsSection from '@components/sections/ContactUsSection';
import GetStartedSection from '@components/sections/GetStartedSection';
import HeroSection from '@components/sections/HeroSection';
import ServicesSection from '@components/sections/ServicesSection';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="mt-[72px]">
        <HeroSection />
        <GetStartedSection />
        <AboutUsSection />
        <ServicesSection />
        <CallToActionSection />
        <section className="py-20">
          <div className="container">
            <h1 className="text-center pt-16 text-3xl font-normal">Our Team</h1>
          </div>
        </section>
        <TestimonialsSection />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
}
