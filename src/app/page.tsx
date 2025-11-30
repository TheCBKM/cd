import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import ProductCatalog from '@/components/landing/ProductCatalog';
import FarmJourney from '@/components/landing/FarmJourney';
import WellnessGuide from '@/components/landing/WellnessGuide';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <ProductCatalog />
        <FarmJourney />
        <WellnessGuide />
      </main>
      <Footer />
    </div>
  );
}
