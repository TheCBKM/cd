import { getAllCategories } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { OrderNowButton } from "@/components/ui/order-now-button";

export default function ProductsPage() {
  const categories = getAllCategories();

  return (
    <div className="bg-white text-foreground">
      <section className="py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Our Products
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our full range of chemical-free, homemade, and eco-friendly
              products, made with the purest ingredients from our farm.
            </p>
            <div className="mt-6">
              <OrderNowButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16">
            {categories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="space-y-8 scroll-mt-24"
              >
                {/* Category Section */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl max-w-3xl">
                    {category.description}
                  </p>
                </div>

                {/* Subcategories and Products */}
                <div className="space-y-12">
                  {category.subcategories.map((subcategory) => (
                    <div key={subcategory.id} className="space-y-6">
                      {/* Subcategory Section */}
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-headline font-semibold">
                          {subcategory.title}
                        </h3>
                        {subcategory.description && (
                          <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                            {subcategory.description}
                          </p>
                        )}
                      </div>

                      {/* Product Cards Grid */}
                      {subcategory.products.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                          {subcategory.products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
