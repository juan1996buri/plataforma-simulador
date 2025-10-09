"use client";

import React, { useEffect, useState } from "react";
import { NumberQuestions } from "./components/number-questions";
import { answerList, Option } from "../db/data";
import { AskCard } from "./components/ask-card";
import { Pagination } from "./components/pagination";
import { TimeAvailable } from "./components/time-available";
import { useAnswer } from "../hooks/use-answer";

export default function PreguntasPage() {
  const stateSelectedPosition = useState<number | undefined>(0);
  const stateSelectedOption = useState<Option | undefined>(undefined);

  const [selectedPosition] = stateSelectedPosition;

  const answerCurrent = answerList.find(
    (_, index) => index === selectedPosition,
  );

  const { onFilter, questions } = useAnswer();

  useEffect(() => {
    onFilter(1);
  }, []);
  return (
    <section className="flex gap-4 w-[85%] pt-5 p-4 mx-auto  ">
      <NumberQuestions
        stateSelectedPosition={stateSelectedPosition}
        answerList={answerList}
      />
      <div className="flex-1 w-full">
        <div className="flex justify-between">
          <TimeAvailable />
          <Pagination
            stateSelectedPosition={stateSelectedPosition}
            answerList={answerList}
          />
        </div>
        <header className="px-2 mt-4 bg-white border-gray-200 rounded-md shadow-md">
          <h1 className="p-2">{answerCurrent?.description}</h1>
        </header>

        <ul className="flex flex-col gap-4 mt-4 ">
          {answerCurrent?.option.map((option, index) => {
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
}
