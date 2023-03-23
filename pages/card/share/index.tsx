import { FC } from "react";

const SharePage = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-500 font-sans">
      <div className="mx-auto text-black">
        <div className="bg-white w-fit shadow-xl rounded-2xl p-5">
          <div className="flex justify-between gap-5">
            <div className="max-w-[500px]">
              <img
                src="https://i.dailymail.co.uk/1s/2022/09/06/19/62125021-0-image-a-29_1662488476118.jpg"
                alt="image"
                width="100%"
                height="auto"
                className="aspect-square object-cover rounded-2xl"
              />
            </div>
            <div className="w-2/3 min-w-[250px]">
              <h1 className="font-medium text-lg py-2">Exporting 1 photo </h1>
              {exampleData.map((item, index) => (
                <Links
                  key={index}
                  groupName={item?.groupName}
                  childs={item.childs}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const exampleData = [
  {
    groupName: "Export",
    childs: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntQ-l19zHHj44c0qAJVY-VgdMLRF1W1cdI_Ic1FJaqbUOI8RELZItnP81oBYvrenudvA&usqp=CAU",
        title: "JPG Small",
        desc: "For web",
        small: false,
      },
      {
        image: "",
        title: "JPG Large",
        desc: "Original + Settings",
        small: false,
      },
    ],
  },
  {
    groupName: "Share",
    childs: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/56/Chain_link_icon_slanted.png",
        title: "Get a link",
        desc: "",
        small: true,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxk3ISMw6h2HmBkTziFi3JdQwbHOLuuYgTfA&usqp=CAU",
        title: "Invite Teammates",
        desc: "",
        small: true,
      },
    ],
  },
  {
    groupName: "Upload",
    childs: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png",
        title: "Facebook",
        desc: "",
        small: false,
      },
      {
        image:
          "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png",
        title: "Twitter",
        desc: "",
        small: false,
      },
      {
        image:
          "https://e7.pngegg.com/pngimages/602/173/png-clipart-ellipsis-computer-icons-more-miscellaneous-monochrome-thumbnail.png",
        title: "More",
        desc: "",
        small: false,
      },
    ],
  },
];

const Links: FC<{ groupName: string; childs: any }> = ({
  groupName,
  childs,
}) => {
  return (
    <div className="border-t">
      <p className="text-xs pt-2 text-gray-500">{groupName}</p>

      {childs.map((item: any, idx: number) => (
        <div
          key={idx}
          className="flex justify-start gap-2 items-center hover:bg-sky-100 rounded-lg p-2 min-h-[50px]"
        >
          <div className="">
            <img
              src={
                item?.image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntQ-l19zHHj44c0qAJVY-VgdMLRF1W1cdI_Ic1FJaqbUOI8RELZItnP81oBYvrenudvA&usqp=CAU"
              }
              alt="image"
              width={item?.small ? "16px" : "26px"}
              height={item?.small ? "16px" : "26px"}
              className="aspect-square object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-[13px]">{item?.title}</h4>
            {item?.desc && (
              <p className="text-[11px] text-gray-300">{item?.desc}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SharePage;
