import { IAnswer } from "@/app/model/answer"
import { IQuestion } from "@/app/model/question"
import { useState } from "react"

export const useQuestionsContent = (questions: IQuestion[]) => {
  const stateSelectedPosition = useState<number | undefined>(0)
  const stateSelectedOption = useState<IAnswer | undefined>(undefined)

  const [selectedPosition] = stateSelectedPosition

  const questionSelected = questions.find(
    (_, index) => index === selectedPosition,
  )
  return {
    questionSelected,
    stateSelectedOption,
    stateSelectedPosition,
  }
}
