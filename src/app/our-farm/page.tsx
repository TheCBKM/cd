import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import OurFarmPage from '@/components/our-farm/OurFarmPage';

export default function OurFarm() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <OurFarmPage />
      </main>
      <Footer />
    </div>
  );
}
