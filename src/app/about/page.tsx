import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import AboutPage from '@/components/about/AboutPage';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}
