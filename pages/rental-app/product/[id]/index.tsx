import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { BottomBar } from "components/rental";
import { useRouter } from "next/router";

const SignProductPage = () => {
  const router = useRouter();
  return (
    <div className="max-h-screen flex flex-col justify-between bg-white text-black">
      <div className="flex gap-2 bg-violet-900 items-center text-white p-3 uppercase ">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon width="24" height="24" />
        </div>
        <h4 className="tracking-widest">Honda SH350i - 2023 pro</h4>
      </div>
      <div className="flex-1 bg-slate-100 overflow-scroll scroll-smooth">
        <div className="min-h-screen">
          <div>
            <img
              src="https://i1-vnexpress.vnecdn.net/2021/09/19/AMG-G-63-1-PNG.png?w=2400&h=0&q=100&dpr=1&fit=crop&s=Bp3ABINvMH0KqSnXtX9x3Q&t=image"
              alt=""
              width="100%"
              height="auto"
            />
          </div>
          <div className="p-3">
            <h1>Honda sh350i</h1>
          </div>
        </div>
      </div>
      <BottomBar tabActive={1}></BottomBar>
    </div>
  );
};
export default SignProductPage;
