const IntroPage = () => {
  return (
    <div className="min-h-screen bg-white text-center p-10 flex relative flex-col justify-center items-center gap-5">
      <div className="mb-10">
        <img src="/intro/undraw_travelers.svg" />
      </div>
      <h1 className="text-black text-3xl font-semibold">Enjoy your vacation, only here</h1>
      <p className="text-gray-400">Vacation to all the destinations your like only here</p>
      <button className="bg-green-600 w-full p-3 rounded-xl py-4 font-semibold">Start</button>
      <h6 className="text-gray-400">Do you have account?</h6>
    </div>
  );
};
export default IntroPage;
