import { IAnswer } from "@/app/model/answer"
import { RadioButton } from "primereact/radiobutton"
import { Dispatch, SetStateAction } from "react"

interface AnswerCardProps {
  answer: IAnswer
  stateSelectedAnswers: [IAnswer[], Dispatch<SetStateAction<IAnswer[]>>]
  onClick: (answer: IAnswer) => void
}
export const AnswerCard = ({
  answer,
  stateSelectedAnswers,
  onClick,
}: AnswerCardProps) => {
  const [selectedAnswers] = stateSelectedAnswers

  const selected = selectedAnswers.some((data) => data.id === answer.id)

  return (
    <button
      type="button"
      onClick={() => onClick(answer)}
      className={`flex gap-x-2 p-2 rounded-md w-full  ${
        selected
          ? "bg-green-300 border-green-400 shadow-md"
          : "bg-white border-gray-200 shadow-md"
      } `}
    >
      <RadioButton
        inputId={answer.text}
        name={answer.text}
        value={answer}
        checked={selected}
      />
      <label htmlFor={answer.text}>{answer.text}</label>
    </button>
  )
}
