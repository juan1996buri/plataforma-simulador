"use client";

import { useState } from "react";
import { NumberQuestions } from "./number-questions";
import { TimeAvailable } from "./time-available";
import { Pagination } from "./pagination";
import { AskCard } from "./ask-card";
import { IQuestion } from "@/app/model/question";
import { IAnswer } from "@/app/model/answer";

interface QuestionsContentProps {
  questions: IQuestion[];
}
export const QuestionsContent = ({ questions }: QuestionsContentProps) => {
  const stateSelectedPosition = useState<number | undefined>(0);
  const stateSelectedOption = useState<IAnswer | undefined>(undefined);

  const [selectedPosition] = stateSelectedPosition;

  const questionSelected = questions.find(
    (_, index) => index === selectedPosition,
  );

  return (
    <section className="flex gap-4 w-[85%] pt-5 p-4 mx-auto  ">
      <NumberQuestions
        stateSelectedPosition={stateSelectedPosition}
        questions={questions}
      />
      <div className="flex-1 w-full">
        <div className="flex justify-between">
          <TimeAvailable />
          <Pagination
            stateSelectedPosition={stateSelectedPosition}
            answerList={questions}
          />
        </div>
        <header className="px-2 mt-4 bg-white border-gray-200 rounded-md shadow-md">
          <h1 className="p-2">{questionSelected?.text}</h1>
        </header>

        <ul className="flex flex-col gap-4 mt-4 ">
          {questionSelected?.answers.map((option, index) => {
            return (
              <li key={index}>
                <AskCard
                  option={option}
                  stateSelectedOption={stateSelectedOption}
                />
              </li>
            );
          })}
        </ul>
        <div className="flex justify-end">
          <button type="button" className="mt-4 ">
            Finalizar
          </button>
        </div>
      </div>
    </section>
  );
};
