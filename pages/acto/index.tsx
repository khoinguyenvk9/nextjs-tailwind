const ImagePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center h-full">
      <div className="mx-auto bg-white rounded-2xl">
        <div className="bg-yellow-50 p-5 rounded-2xl">
          <img
            src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/closing-flame-ian-david-soar.jpg"
            width="100%"
            height="auto"
            alt="image"
            className="rounded-2xl"
          />
        </div>
        <div className="px-5 pb-5 text-black">
          <h1 className="text-xl uppercase font-bold">ĐỒi hoan</h1>
          <p className="w-[600px] text-gray-500 font-light mb-5">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
          <h1>KN</h1>
          <span className="font-light text-gray-600 text-sm">
            08:00 26/03/2023
          </span>
        </div>
      </div>
    </div>
  );
};
export default ImagePage;
