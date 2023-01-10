import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { IProduct } from "pages/rental-app/type";
import { FC } from "react";

export const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="p-3 bg-white mb-2">
      <img src={product?.image} width="100%" height="auto" />
      <h4 className="font-semibold mt-2 mb-0">{product?.name}</h4>
      <h4 className="text-zinc-500 font-light lining-nums">
        {product?.price}
        <sup>VNĐ</sup>
      </h4>
      <div className="flex items-center gap-2 text-yellow-500 uppercase text-xs justify-end">
        Retal now
        <ArrowLongRightIcon className="" width="20" height="20" />
      </div>
    </div>
  );
};
