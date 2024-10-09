// import { Rating } from "react-simple-star-rating";

import Header from "@/components/header";
import ProductSlider from "@/components/productSlider";
import ShippingCalculator from "@/components/shippingCalculator";
import { mockProducts } from "@/mocks/products";
import { Barcode, ShoppingCartIcon } from "lucide-react";

async function fetchProduct(ref: string) {
  // const response = await fetch(
  //   `${process.env.API_BASE_URL}/api/product/getproduct?ref=${ref}`
  // );

  // if (!response.ok) {
  //   return null;
  // }

  // const data = await response.json();

  return mockProducts[0];
}

export default async function ShopPage({
  params,
}: {
  params: { productId: string };
}) {
  const product: any = await fetchProduct(params.productId);

  if (!product) {
    return (
      <div className="w-full h-screen center space-x-1">
        <p>Produto não existe, volte home</p>
        <a className="underline" href="/">
          novo
        </a>
      </div>
    );
  }

  return (
    <main className="max-w-screen center overflow-y-hidden">
      <Header hasBreadcrumb />

      <div className="grid grid-cols-2 h-screen w-full pt-[130px] pr-5">
        <ProductSlider />
        <div className="w-full h-[100%] center-col relative !justify-start py-[35px]">
          <div className="relative rounded-lg w-full">
            <p className="absolute top-0 right-0 opacity-80 text-foreground">
              SKU: {product.id}
            </p>

            <h2 className="text-[42px] font-[900] font-poppinsMedium leading-[32px] mb-2">
              {product.title}
            </h2>
            <p className="text-[18px] text-gray-600 mb-4">
              {product.description}
            </p>
          </div>
          <div className="w-full  center !justify-between relative">
            <div className="center space-x-1">
              <span className="font-[700]">Marca:</span>
              <span>Intel</span>
            </div>
            <div className="absolute top-0 right-0">
              {/* <Rating
                className="w-full"
                SVGstyle={{ display: "inline" }}
                size={18}
              /> */}
              <span className="text-[12px]">(88)</span>
            </div>
          </div>

          <div className="w-full  center !justify-between relative">
            <ShippingCalculator />
          </div>

          <div className="w-full center-col absolute bottom-7">
            <div className="w-full center !justify-between relative">
              <div className="center-col !items-start">
                <span className="font-poppinsLight line-through opacity-70 text-xl">
                  R$ 4.000,00
                </span>
                <span className="font-poppinsBold text-4xl text-green-500">
                  R$ 8.000,00
                </span>
                <span>
                  R$ 6.999,00 Em até 10x de <strong> R$ 699,90 </strong> sem
                  juros no cartão
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-x-2">
              <button
                className="w-full h-[65px] mt-4 rounded-2xl center text-background bg-foreground"
                type="submit"
              >
                <ShoppingCartIcon
                  className="mr-2"
                  size={22}
                  strokeWidth={1.5}
                />
                Adicionar ao carrinho
              </button>
              <button
                className="w-full h-[65px] mt-4 rounded-2xl center text-background bg-green-600"
                type="submit"
              >
                <Barcode className="mr-2" size={22} strokeWidth={1.5} />
                Compra direta
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
