import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { BottomBar } from "components/rental";

const HistoryPage = () => {
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
        <div className="min-h-screen">asd</div>
      </div>
      <BottomBar tabActive={1}></BottomBar>
    </div>
  );
};
export default HistoryPage;
