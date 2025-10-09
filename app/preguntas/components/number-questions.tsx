"use client";

import React from "react";
import { NumberCard } from "./number-card";
import { IQuestion } from "@/app/model/question";

interface NumberQuestionsProps {
  stateSelectedPosition: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>,
  ];
  questions: IQuestion[];
}
export function NumberQuestions({
  stateSelectedPosition,
  questions,
}: NumberQuestionsProps) {
  return (
    <div className="flex items-center justify-center p-2 bg-white border-gray-200 rounded-md shadow-md w-72 h-min">
      <ul className="flex flex-wrap justify-center gap-5">
        {questions.map((answer, index) => {
          return (
            <li key={index}>
              <NumberCard
                answer={answer}
                index={index}
                stateSelectedPosition={stateSelectedPosition}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
