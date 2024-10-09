"use client";

import { useEffect, useState } from "react";

import ProductCard from "@/components/productCard";

import { mockProducts } from "@/mocks/products";
import { mockDiscounts } from "@/mocks/discounts";
import { Discount, Product } from "@/types/store";

export default function MostSeller() {
  const [products, setProducts] = useState<Product[]>([]);
  const [discounts, setDiscounts] = useState<Discount[]>([]);

  useEffect(() => {
    setProducts(mockProducts);
    setDiscounts(mockDiscounts);
  }, []);

  const findDiscountForProduct = (productId: string) => {
    return discounts.find((discount) =>
      discount.rule.conditions.some((condition) =>
        condition.products.includes(productId)
      )
    );
  };

  return (
    <div className="center-col w-[94%] h-auto !justify-start mt-20">
      <div className="center-col !items-start w-full">
        <h1 className="text-5xl font-poppinsSemibold">
          Produtos mais vendidos
        </h1>
        <p className="text-lg font-poppinsLight">
          Confira as peças que a galera está mais comprando! 🔥
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4 w-full mt-9">
        {products.map((product) => {
          const discount = findDiscountForProduct(product.id) || null;
          return (
            <ProductCard
              key={product.id}
              product={product}
              discount={discount}
            />
          );
        })}
      </div>
    </div>
  );
}
