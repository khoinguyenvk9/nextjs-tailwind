import { ChevronLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { BottomBar } from "components/rental";
import { useRouter } from "next/router";

const SignProductPage = () => {
  const router = useRouter();
  return (
    <div className="max-h-screen flex flex-col justify-between bg-white text-black">
      <div className="flex gap-2 items-center text-black p-3 uppercase ">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon width="24" height="24" />
        </div>
        <h4 className="tracking-widest flex-1">Honda SH350i - 2023 pro</h4>
        <div>
          {router.isReady ? (
            <HeartSolidIcon color="red" width="24" height="24" />
          ) : (
            <HeartIcon width="24" height="24" />
          )}
        </div>
      </div>
      <div className="flex-1 bg-slate-100 overflow-scroll scroll-smooth">
        <div className="min-h-screen">
          <div className="z-10">
            <img
              src="https://i1-vnexpress.vnecdn.net/2021/09/19/AMG-G-63-1-PNG.png?w=2400&h=0&q=100&dpr=1&fit=crop&s=Bp3ABINvMH0KqSnXtX9x3Q&t=image"
              alt=""
              width="100%"
              height="auto"
            />
          </div>
          <div className="relative p-3 -mt-9 bg-white rounded-3xl rounded-b-none z-20">
            <h1>Honda sh350i</h1>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="bg-white rounded-t-3xl shadow-2xl flex items-center justify-between px-3 py-4">
          <div>
            <span className="ml-3 lining-nums font-semibold text-xl">20.000đ</span>
            <span className="text-zinc-500">/ ngày</span>
          </div>
          <div>
            <div className="flex items-center gap-2 text-white rounded-2xl bg-yellow-500 px-5 py-4 uppercase text-xs font-semibold justify-end">
              Booking now
            </div>
          </div>
        </div>
      </div>

      {/* <BottomBar tabActive={1}></BottomBar> */}
    </div>
  );
};
export default SignProductPage;
