import { IQuestion } from "@/app/model/question";
import { AnswerCard } from "./answer-card";
import { IAnswer } from "@/app/model/answer";
import { Dispatch, SetStateAction } from "react";

interface AnswersListProps {
  questionSelected: IQuestion | undefined;
  stateSelectedOption: [
    IAnswer | undefined,
    Dispatch<SetStateAction<IAnswer | undefined>>,
  ];
}
export const AnswersList = ({
  questionSelected,
  stateSelectedOption,
}: AnswersListProps) => {
  const answers = questionSelected?.answers || [];

  return (
    <ul className="flex flex-col gap-4 mt-4 ">
      {answers.map((option, index) => {
        return (
          <li key={index}>
            <AnswerCard
              option={option}
              stateSelectedOption={stateSelectedOption}
            />
          </li>
        );
      })}
    </ul>
  );
};
