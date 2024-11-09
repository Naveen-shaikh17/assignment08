

import React from "react";
import Header from "./component/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen bg-gray-100	">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
          <h1 className="text-[44px] font-Libre Bodoni text-black	">IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[32px] w-[571px] text-black	">
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="text-black bg-slate-950 text-gray-100	">Contact US</button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={"/images/figma_image.svg"}
            alt="heroin image"
            width={502}
            height={465}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;