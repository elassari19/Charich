import { ReuseCarousel } from "@/components/ui/carousel";
import HomeBanner from "@/components/cards/home-banner";
import { Typography } from "@/components/ui/typography";
import { banners, products } from "@/lib/constant";
import ProductCard from "@/components/cards/product-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <section>
        <ReuseCarousel
          carouselCards={
            banners.map((banner, index) => (
              <HomeBanner
                key={index}
                title={banner.title}
                description={banner.description}
                image={banner.image}
                href={banner.href}
                // @ts-ignore
                variant={banner.variant||"default"}
              />
            ))
          }
          className="w-secreen"
        />
      </section>
      {/* list of products */}
      <section className="grid grid-cols-12 py-6">
        <div
          className="col-span-full md:col-span-10 md:col-start-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4 md:mx-0"
        >
          <Typography variant="h4" className="font-bold col-span-full m-8 mb-4">NEW ARRIVALS</Typography>
          {
            Array(10).fill(products).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          }
        </div>
      </section>
    </main>
  );
}
