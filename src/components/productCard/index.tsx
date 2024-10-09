import { Discount, Product } from "@/types/store";
import { Heart, ShoppingCart } from "lucide-react";
import React from "react";

interface ProductCardProps {
  product: Product;
  discount: Discount | null;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, discount }) => {
  const discountedPrice = discount
    ? (product.price / 100) * (1 - discount.rule.value / 100)
    : null;

  return (
    <div className="border-none cursor-pointer shadow-md transition-all hover:border-primary hover:shadow-[#837df859]  border-border center-col !justify-start !items-start pt-6 p-4 rounded-xl relative">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg mb-4 mt-3"
      />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-foreground opacity-80 text-[14px] leading-[1.2]">
        {product.description}
      </p>

      {discount && (
        <div className="bg-destructive rounded-xl text-background text-sm font-poppinsLight absolute top-3 left-3 py-1 px-2">
          {discount.rule.value}% OFF
        </div>
      )}

      {/* <span className=" text-foregorund opacity-70 text-xs font-poppinsLight absolute top-3 right-3 ">
        id: {product.id}
      </span> */}

      <div className="center-col !items-start !justify-end h-full mt-8">
        {discount && (
          <p className="opacity-80 line-through text-sm font-poppinsLight">
            R${(product.price / 100).toFixed(2)}
          </p>
        )}

        <p className="text-2xl font-poppinsMedium text-green-800">
          R$
          {discount
            ? discountedPrice?.toFixed(2)
            : (product.price / 100).toFixed(2)}
        </p>
      </div>

      <div className="center rounded-xl text-background text-sm font-light absolute bottom-5 right-3 space-x-1">
        <div className="bg-transparent border border-solid border-primary text-primary h-[45px] w-[45px] center rounded-xl transition-all text-sm font-light hover:bg-primary hover:text-background">
          <Heart size={18} strokeWidth={1.5} />
        </div>
        <div className="bg-primary border border-solid border-primary h-[45px] w-[45px] transition-all center rounded-xl text-background text-sm font-light hover:bg-transparent hover:text-primary">
          <ShoppingCart size={18} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
