import {
  MagnifyingGlassIcon,
  TicketIcon,
  MapPinIcon,
  Cog6ToothIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { FC } from "react";

type BottomBarProps = {
  tabActive: number;
};

const activeClass = "text-yellow-500";

export const BottomBar: FC<BottomBarProps> = ({ tabActive = 0 }) => {
  const router = useRouter();
  return (
    <div className="bg-violet-900 flex items-center justify-around px-3 py-1 text-white">
      <div
        className="flex justify-content-center gap-1 items-center flex-col"
        onClick={() => router.push("/rental-app")}
      >
        <MagnifyingGlassIcon
          width="24"
          height="24"
          className={tabActive == 0 ? "text-yellow-500" : ""}
        />
        <span className={`text-[10px] ${tabActive == 0 ? activeClass : ""}`}>
          Tìm kiếm
        </span>
      </div>
      <div
        className="flex justify-content-center items-center flex-col"
        onClick={() => router.push("/rental-app/history")}
      >
        <BookmarkIcon
          width="24"
          height="24"
          className={tabActive == 1 ? "text-yellow-500" : ""}
        ></BookmarkIcon>
        <span className={`text-[10px] ${tabActive == 1 ? activeClass : ""}`}>
          Lịch sử
        </span>
      </div>
      {/* <div */}
      {/*   className="flex justify-content-center items-center flex-col" */}
      {/*   onClick={() => router.push("/rental-app/")} */}
      {/* > */}
      {/*   <MapPinIcon */}
      {/*     width="24" */}
      {/*     height="24" */}
      {/*     className={tabActive == 2 ? "text-yellow-500" : ""} */}
      {/*   /> */}
      {/*   <span className={`text-[10px] ${tabActive == 2 ? activeClass : ""}`}> */}
      {/*     Vị trí */}
      {/*   </span> */}
      {/* </div> */}
      <div
        className="flex justify-content-center items-center flex-col"
        onClick={() => router.push("/rental-app/promotions")}
      >
        <TicketIcon
          width="24"
          height="24"
          className={tabActive == 3 ? "text-yellow-500" : ""}
        />
        <span className={`text-[10px] ${tabActive == 3 ? activeClass : ""}`}>
         khuyến mãi
        </span>
      </div>
    </div>
  );
};
