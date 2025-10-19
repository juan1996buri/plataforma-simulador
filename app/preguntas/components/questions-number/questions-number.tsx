"use client"

import React, { Dispatch, SetStateAction } from "react"
import { NumberCard } from "./number-card"
import { IQuestion } from "@/app/model/question"
import { IAnswer } from "@/app/model/answer"

interface QuestionsNumberProps {
  stateSelectedPosition: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>,
  ]
  questions: IQuestion[]
  stateSelectedAnswers: [IAnswer[], Dispatch<SetStateAction<IAnswer[]>>]
}
export function QuestionsNumber({
  stateSelectedPosition,
  questions,
  stateSelectedAnswers,
}: QuestionsNumberProps) {
  return (
    <div className="flex items-center justify-center p-2 bg-white border-gray-200 rounded-md shadow-md w-72 h-min">
      <ul className="flex flex-wrap justify-center gap-5">
        {questions.map((question, index) => {
          return (
            <li key={index}>
              <NumberCard
                question={question}
                index={index}
                stateSelectedPosition={stateSelectedPosition}
                stateSelectedAnswers={stateSelectedAnswers}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
