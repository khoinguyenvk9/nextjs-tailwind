import {
  BeakerIcon,
  InboxIcon,
  ChatBubbleOvalLeftIcon,
  DeviceTabletIcon,
  GifIcon,
} from "@heroicons/react/24/outline";

const ProfileCard = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-200 py-6 sm:py-12">
      <div className="mx-auto text-indigo-900">
        <div className="bg-white w-min min-w-[25rem] shadow-xl rounded-2xl p-5">
          <div className="flex justify-center">
            <img src="https://www.shutterstock.com/image-vector/illustration-representing-child-taking-care-260nw-212648668.jpg" />
          </div>
          <h1 className="text-center font-semibold text-xl mt-4">Khoi Nguyen</h1>
          <h4 className="text-center text-sm font-normal mb-4">UI / UX Designer</h4>
          <p className="text-center mb-3 font-sans font-light text-sm">
            The problem in this business isn’t to keep people from stealing your
            ideas; it's making them steal your ideas!
          </p>
          <div className="flex justify-evenly gap-4 my-8">
            <BeakerIcon width="16" height="16" />
            <InboxIcon width="16" height="16" />
            <ChatBubbleOvalLeftIcon width="16" height="16" />
            <DeviceTabletIcon width="16" height="16" />
            <GifIcon width="16" height="16" />
          </div>
          <div className="flex justify-center items-center gap-3">
            <button className="border-indigo-900 border border-solid rounded-xl p-3 w-1/2">
              Message
            </button>
            <button className="bg-indigo-900 rounded-xl p-3 text-white w-1/2">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
