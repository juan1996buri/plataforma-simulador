import { IAnswer } from "@/app/model/answer"
import { IQuestion } from "@/app/model/question"
import { Dispatch, SetStateAction } from "react"

interface NumberCardProps {
  question: IQuestion
  index: number
  stateSelectedPosition: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>,
  ]
  stateSelectedAnswers: [IAnswer[], Dispatch<SetStateAction<IAnswer[]>>]
}
export const NumberCard = ({
  question,
  index,
  stateSelectedPosition,
  stateSelectedAnswers,
}: NumberCardProps) => {
  const [selectedPosition, setSelectedPosition] = stateSelectedPosition
  const [selectedAnswers] = stateSelectedAnswers
  const isSelect = selectedPosition === index

  const answerFound = selectedAnswers.some(
    (data) => data.questionId === question.id,
  )

  let color = ""

  if (isSelect) {
    color = "bg-green-400"
  }
  if (answerFound) {
    color = "bg-orange-400"
  }

  return (
    <button
      className={`cursor-pointer w-7 h-7 rounded-md border 
   text-black font-bold ${color} ${
        isSelect ? " shadow-md" : " border-gray-200 shadow-md"
      } 
  flex items-center justify-center`}
      type="button"
      onClick={() => setSelectedPosition(index)}
    >
      {index + 1}
    </button>
  )
}
