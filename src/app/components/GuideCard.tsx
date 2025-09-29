"use client";

import { useState } from "react";

type GuideCardProps = {
  step: string;
  title: string;
  paragraph: string;
};

export default function GuideCard({ step, title, paragraph }: GuideCardProps) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <article className="border-white rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.1)] m-[10px] p-[20px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 mb-[5px] ">
            <p className="border-2 border-brown-600 w-7 h-7 rounded-3xl flex justify-center content-center">
              {step}
            </p>
            <p className="font-bold uppercase">{title}</p>
          </div>
          <button
            onClick={() => setToggle(!toggle)}
            className="px-3 py-1 mb-2 bg-gray-500 text-white rounded hover:bg-gray-400"
          >
            {toggle ? "⇡" : "⇣"}{" "}
          </button>
        </div>

        {toggle && 
        <div className=" border-t-2">
          <p className="mt-[5px]">{paragraph}</p>
        </div>
}
      </article>
        
    </>
  );
}
