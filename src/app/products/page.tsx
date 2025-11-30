import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import ProductsPage from '@/components/products/ProductsPage';

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProductsPage />
      </main>
      <Footer />
    </div>
  );
}
