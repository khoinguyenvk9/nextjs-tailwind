import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { IProduct } from "pages/rental-app/type";
import { FC, useMemo } from "react";
import { useRouter } from "next/router";

export const ProductItem: FC<{
  product: IProduct;
}> = ({ product }) => {
  const router = useRouter();
  const soldOut = useMemo(() => {
    return product?.status == "soldOut";
  }, [product]);

  return (
    <div
      className="p-3 bg-white mb-2 cursor-pointer"
      onClick={() => !soldOut && router.push("/rental-app/product/1")}
    >
      <div className="relative">
        <img src={product?.image} width="100%" height="auto" />
        {soldOut && (
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-gray-300 bg-opacity-50 flex justify-center items-center">
            <div className="backdrop-blur-lg flex border-red-500 border-solid border-[1px] px-3 w-fit text-red-500 font-semibold text-3xl">
              sold out
            </div>
          </div>
        )}
      </div>
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
