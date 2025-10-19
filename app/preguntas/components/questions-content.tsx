"use client"

import { useState } from "react"
import { TimeAvailable } from "./time-available"
import { Pagination } from "./pagination"
import { IQuestion } from "@/app/model/question"
import { IAnswer } from "@/app/model/answer"
import { AnswersList } from "./answers-list/answers-list"
import { QuestionsNumber } from "./questions-number/questions-number"

interface QuestionsContentProps {
  questions: IQuestion[]
}
export const QuestionsContent = ({ questions }: QuestionsContentProps) => {
  const stateSelectedPosition = useState<number | undefined>(0)
  const stateSelectedAnswers = useState<IAnswer[]>([])

  const [selectedPosition] = stateSelectedPosition
  const questionSelected = questions.find(
    (_, index) => index === selectedPosition,
  )

  if (!questionSelected) {
    return <span>No se puede continuar</span>
  }
  return (
    <section className="flex gap-4 w-[85%] pt-5 p-4 mx-auto">
      <QuestionsNumber
        stateSelectedPosition={stateSelectedPosition}
        questions={questions}
        stateSelectedAnswers={stateSelectedAnswers}
      />
      <div className="flex-1 w-full">
        <div className="flex justify-between">
          <TimeAvailable />
          <Pagination
            stateSelectedPosition={stateSelectedPosition}
            questions={questions}
          />
        </div>
        <header className="px-2 mt-4 bg-white border-gray-200 rounded-md shadow-md">
          <h1 className="p-2">{questionSelected?.text}</h1>
        </header>

        <AnswersList
          questionSelected={questionSelected}
          stateSelectedAnswers={stateSelectedAnswers}
        />

        <div className="flex justify-end">
          <button type="button" className="mt-4 ">
            Finalizar
          </button>
        </div>
      </div>
    </section>
  )
}
