import { IQuestion } from "@/app/model/question";

interface PaginationProps {
  stateSelectedPosition: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>,
  ];
  questions: IQuestion[];
}
export const Pagination = ({
  stateSelectedPosition,
  questions,
}: PaginationProps) => {
  const [selectedPosition, setSelectedPosition] = stateSelectedPosition;

  return (
    <div className="flex text-xs font-bold gap-x-1 ">
      <button
        type="button"
        onClick={() => setSelectedPosition(selectedPosition! - 1)}
        disabled={selectedPosition === 0}
      >
        Antes
      </button>
      <button
        type="button"
        onClick={() => setSelectedPosition(selectedPosition! + 1)}
        disabled={questions.length - 1 === selectedPosition}
      >
        Siguiente
      </button>
    </div>
  );
};
