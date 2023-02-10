const LoadingCard = () => {
  return (
    <div className="min-h-screen flex relative flex-col justify-center overflow-hidden bg-gray-200 py-6 sm:py-12">
      <div className="mx-auto">
        <div>
          <h1 className="text-3xl text-center my-6 text-black uppercase">
            Loading
          </h1>
        </div>
        <div className="bg-white w-min min-w-[25rem] shadow-xl rounded-2xl p-5 mb-3">
          <div className="flex gap-4">
            <div className="bg-gray-300 w-[4rem] h-[4rem] rounded-xl"></div>
            <div className="w-full py-2">
              <div className="w-1/3 h-3 bg-gray-300 mb-3 animate-pulse"></div>
              <div className="flex gap-2 flex-wrap">
                <div className="w-2/3 h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-[10%] h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-1/4 h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-1/4 h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-2/5 h-2 bg-gray-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-min min-w-[25rem] shadow-xl rounded-2xl p-5 mb-3">
          <div className="flex gap-4">
            <div className="bg-gray-300 w-[4rem] h-[4rem] rounded-xl animate-pulse"></div>
            <div className="w-full py-2">
              <div className="w-1/3 h-3 bg-gray-300 mb-3 animate-pulse"></div>
              <div className="flex gap-2 flex-wrap">
                <div className="w-2/3 h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-[10%] h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-1/4 h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-1/4 h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-2/5 h-2 bg-gray-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-min min-w-[25rem] shadow-xl rounded-2xl p-5">
          <div className="flex gap-4">
            <div className="bg-gray-300 w-[4rem] h-[4rem] rounded-xl animate-pulse"></div>
            <div className="w-full py-2">
              <div className="w-1/3 h-3 bg-gray-300 mb-3 animate-pulse"></div>
              <div className="flex gap-2 flex-wrap">
                <div className="w-2/3 h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-[10%] h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-1/4 h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-1/4 h-2 bg-gray-300 animate-pulse"></div>
                <div className="w-2/5 h-2 bg-gray-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
