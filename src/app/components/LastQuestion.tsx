"use client";

import React from "react";
import { useRouter } from "next/navigation";

type LastQuestionsProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function LastQuestion({
  title,
  subtitle,
  children,
}: LastQuestionsProps) {
  const router = useRouter();

  return (
    <>
      <main className="flex flex-col items-center text-center p-[30px] -mt-[70px] pt-[70px]">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>

        <div className="flex items-center justify-center gap-10 w-[80%]">{children}</div>
      </main>
    </>
  );
}
