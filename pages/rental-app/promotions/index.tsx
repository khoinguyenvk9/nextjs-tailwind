import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { BottomBar } from "components/rental";

const PromotionPage = () => {
  return (
    <div className="max-h-screen flex flex-col justify-between bg-white text-black">
      <div className="flex gap-2 bg-violet-900 items-center justify-center text-white p-3 uppercase ">
        <h4 className="tracking-widest">Promotions</h4>
      </div>
      <div className="flex-1 bg-slate-100 overflow-scroll scroll-smooth">
        <div className="min-h-screen">asd</div>
      </div>
      <BottomBar tabActive={3}></BottomBar>
    </div>
  );
};
export default PromotionPage;
