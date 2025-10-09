"use client";

import React from "react";
import { NumberCard } from "./number-card";
import { Answer } from "@/app/db/data";

interface NumberQuestionsProps {
  stateSelectedPosition: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>,
  ];
  answerList: Answer[];
}
export function NumberQuestions({
  stateSelectedPosition,
  answerList,
}: NumberQuestionsProps) {
  return (
    <div className="flex items-center justify-center p-2 bg-white border-gray-200 rounded-md shadow-md w-72 h-min">
      <ul className="flex flex-wrap justify-center gap-5">
        {answerList.map((answer, index) => {
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
