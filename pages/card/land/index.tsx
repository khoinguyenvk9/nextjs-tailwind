import { GlobeAsiaAustraliaIcon, BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const LandPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-200 py-6 sm:py-12">
      <div className="mx-auto text-black">
        <div className="bg-white w-fit max-w-5xl shadow-xl rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-8 divide-x">
              <div className="flex items-center gap-2">
                <GlobeAsiaAustraliaIcon
                  width="32"
                  height="32"
                  className="text-violet-800"
                />
                <h1 className="uppercase font-semibold">Earth-Fund</h1>
              </div>
              <div className="flex items-center gap-5 pl-8">
                <Link href="#" className="font-light text-xs">
                  Causes
                </Link>
                <Link href="#" className="font-light text-xs">
                  Projects
                </Link>
                <Link href="#" className="font-light text-xs">
                  Buy 1Earth
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-violet-400 text-white px-3 py-2 rounded-lg text-xs">
                Connect wallet
              </button>
              <div className="relative">
                <BellIcon width={24} height={24} className="stroke-1" />
                <span className="absolute top-0 right-0 inline-flex w-[8px] h-[8px] bg-red-400 rounded-full animate-ping"></span>
                <span className="absolute top-0 right-0 inline-flex w-[8px] h-[8px] bg-red-500 rounded-full"></span>
              </div>
              <div className="rounded-full overflow-hidden w-[35px] h-[35px]">
                <img
                  alt="a"
                  className="object-cover"
                  width="100%"
                  height="auto"
                  src="https://jako.edu.vn/anh-dai-dien-fb-cute/imager_1_45424_100.jpg"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 text-cyan-900 items-stretch">
            <div className="rounded-2xl overflow-hidden w-1/2 bg-green-400 bg-[url('https://quocviet.net/uploads/nts/thumb/hai-nguoi-tren-hoang-dao.jpg')] bg-center bg-auto bg-origin-content min-w-[500px]">
              {/* <img */}
              {/*   src="https://quocviet.net/uploads/nts/thumb/hai-nguoi-tren-hoang-dao.jpg" */}
              {/*   // className="object-cover overflow-hidden" */}
              {/*   alt="hehe" */}
              {/*   height="100%" */}
              {/*   className="min-h-max object-cover" */}
              {/* /> */}
            </div>
            <div className="p-2 w-1/2">
              <p className="text-sm bg-yellow-400 px-2 whitespace-nowrap rounded-sm mb-6 flex w-fit">
                Futured cause
              </p>
              <h1 className="text-[50px] font-semibold leading-none">Carbon</h1>
              <h1 className="text-[50px] font-semibold">Remeval</h1>
              <p>
                The Earth Fund Carbon Capture community has already helped fund
                carbon capture projects around the world
              </p>
              <button className="bg-violet-500 text-white px-5 py-3 rounded-lg text-md font-medium my-4 mt-7">
                Join the cause
              </button>
              <div className="py-7">
                <h1 className="text-[50px] font-semibold leading-none">463m</h1>
                <p className="leading-none">
                  Tons of carbon removed from the Vietnamese
                </p>
              </div>
              <div className="py-7">
                <h1 className="text-[50px] font-semibold leading-none">
                  $5,203,902
                </h1>
                <p className="leading-none">Fund raised</p>
              </div>
              <div>
                <div className="mt-3 flex -space-x-2 overflow-hidden items-center">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="text-violet-600 text-sm px-6">
                    +1,992 donors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
