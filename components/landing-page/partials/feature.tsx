import Image, { StaticImageData } from "next/image";
import React from "react";

type FeatureProps = {
  featureItems: { image: StaticImageData; title: string; desc: string }[];
};

const Feature: React.FC<FeatureProps> = ({ featureItems }) => {
  return (
    <>
      {featureItems.map((item, idx) => (
        <div
          key={idx}
          className="max-w-[490px] w-full flex items-center justify-center p-8 rounded-xl shadow-md">
          <div className="w-[420px] flex items-center justify-between gap-12">
            <div className="w-24 h-24 object-cover flex items-center justify-center">
              <Image src={item.image} alt="feature-icon" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl font-semibold leading-7 text-black">
                {item.title}
              </h2>
              <p className="text-base leading-6 text-[#4B5563]">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Feature;
