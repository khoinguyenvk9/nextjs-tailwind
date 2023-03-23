import React from "react";
import Image from "next/image";

type MyImageProps = React.ComponentProps<typeof Image>;

export const MyImage: React.FC<MyImageProps> = (props) => {
  return (
    <div>
      <Image {...props}  />
    </div>
  );
};
