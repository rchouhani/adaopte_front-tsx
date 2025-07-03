"use client";

import Button from "./Button";

type LastQuestionsProps = {
  title: string;
  subtitle: string;
};

export default function LastQuestion({ title, subtitle }: LastQuestionsProps) {
  return (
    <>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </>
  );
}
