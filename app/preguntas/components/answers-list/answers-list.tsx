import { IQuestion } from "@/app/model/question"
import { AnswerCard } from "./answer-card"
import { IAnswer } from "@/app/model/answer"
import { Dispatch, SetStateAction } from "react"

interface AnswersListProps {
  questionSelected: IQuestion
  stateSelectedAnswers: [IAnswer[], Dispatch<SetStateAction<IAnswer[]>>]
}
export const AnswersList = ({
  questionSelected,
  stateSelectedAnswers,
}: AnswersListProps) => {
  const [selectedAnswers, setSelectedAnswers] = stateSelectedAnswers

  const onSelect = (answer: IAnswer) => {
    const isSelected = selectedAnswers.some((data) => data.id === answer.id)
    if (isSelected) {
      const answers = selectedAnswers.filter((data) => data.id !== answer.id)
      setSelectedAnswers(answers)
    } else {
      const answers = selectedAnswers.filter(
        (data) => data.questionId !== questionSelected.id,
      )

      setSelectedAnswers([...answers, answer])
    }
  }

  const answers = questionSelected?.answers || []

  return (
    <ul className="flex flex-col gap-4 mt-4 ">
      {answers.map((answer, index) => {
        return (
          <li key={index}>
            <AnswerCard
              answer={answer}
              stateSelectedAnswers={stateSelectedAnswers}
              onClick={onSelect}
            />
          </li>
        )
      })}
    </ul>
  )
}
