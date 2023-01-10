import { ProductItem } from "components/rental";
import { useEffect } from "react";
import {
  MagnifyingGlassIcon,
  TicketIcon,
  MapPinIcon,
  Cog6ToothIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { products } from "./data";
import { IProduct } from "./type";

const RentalApp = () => {
  return (
    <div className="max-h-screen flex flex-col justify-between bg-white text-black">
      <div className="flex gap-2 bg-violet-900 items-center justify-between text-white p-3 uppercase ">
        <h4 className="tracking-widest">Rental</h4>
        <div className="flex gap-1 items-center font-semibold text-[10px] bg-violet-100 rounded-xl p-1 text-violet-900">
          <CalendarDaysIcon width="16" height="16" />
          09/01/2022 - 11/01/2022
        </div>
      </div>
      <div className="flex-1 bg-slate-100 overflow-scroll scroll-smooth">
        {products.map((product: IProduct, index: number) => (
          <ProductItem key={index} product={product as IProduct} />
        ))}
      </div>
      <div className="bg-violet-900 flex items-center justify-between px-3 py-1 text-white">
        <div className="flex justify-content-center gap-1 items-center flex-col">
          <MagnifyingGlassIcon
            width="24"
            height="24"
            className="text-yellow-500"
          />
          <span className="text-[10px] text-yellow-500 font-semibold">
            Tìm kiếm
          </span>
        </div>
        <div className="flex justify-content-center items-center flex-col">
          <TicketIcon width="24" height="24"></TicketIcon>
          <span className="text-[10px]">Lịch sử</span>
        </div>
        <div className="flex justify-content-center items-center flex-col">
          <MapPinIcon width="24" height="24" />
          <span className="text-[10px]">Vị trí</span>
        </div>
        <div className="flex justify-content-center items-center flex-col">
          <Cog6ToothIcon width="24" height="24" />
          <span className="text-[10px]">Menu</span>
        </div>
      </div>
    </div>
  );
};
export default RentalApp;
