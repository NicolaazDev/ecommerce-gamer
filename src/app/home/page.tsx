import Brands from "@/components/sections/brands";
import BuildPC from "@/components/sections/buildPc";
import ProductsList from "@/components/sections/productList";
import Hero from "@/components/sections/hero";

import { mockProducts } from "@/mocks/products";
import { mockDiscounts } from "@/mocks/discounts";
import ContactBanner from "@/components/sections/contactBanner";
import FooterComponent from "@/components/footer";

export default function ShopPage() {
  return (
    <main className="min-h-screen h-full w-full center-col !justify-start-start bg-background">
      <Hero />
      <Brands />
      <ProductsList
        title="Produtos mais vendidos!"
        subtitle="Confira nossas peças que mais estão vendendo"
        discountsItems={mockDiscounts}
        productsItems={mockProducts}
      />
      <ProductsList
        title="Peças com desconto!"
        subtitle="Estamos com diversas peças com desconto, queima de estoque 🔥"
        discountsItems={mockDiscounts}
        productsItems={mockProducts}
      />
      <BuildPC />
      <ProductsList
        title="Gabinites Gamer"
        subtitle="Fábricamos nossos próprios gabinetes para gamers"
        discountsItems={mockDiscounts}
        productsItems={mockProducts}
      />

      <ContactBanner />

      <FooterComponent />
    </main>
  );
}
