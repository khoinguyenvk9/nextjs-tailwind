import { BottomBar, ProductItem } from "components/rental";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { IProduct } from "organizer/rental/type";
import { products } from "organizer/rental/data";

const RentalApp = () => {
  return (
    <div className="max-h-screen flex flex-col justify-between bg-white text-black">
      <div className="flex gap-2 bg-yellow-500 items-center justify-between text-white p-3 uppercase ">
        {/* <h4 className="tracking-widest">Rental</h4> */}
        <img src="https://rental.rocket.nexpando.com/Motto-Logo.png" alt="" width="100" height="auto"/>
        <div className="flex gap-1 items-center font-semibold text-[10px] bg-violet-100 rounded-xl p-1 text-yellow-900">
          <CalendarDaysIcon width="16" height="16" />
          09/01/2022 - 11/01/2022
        </div>
      </div>
      <div className="flex-1 bg-slate-100 overflow-scroll scroll-smooth">
        {products.map((product: IProduct, index: number) => (
          <ProductItem key={index} product={product as IProduct} />
        ))}
      </div>
      <BottomBar tabActive={0}></BottomBar>
    </div>
  );
};
export default RentalApp;
