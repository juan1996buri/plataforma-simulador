import { Answer } from "@/app/db/data";

interface PaginationProps {
  stateSelectedPosition: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>,
  ];
  answerList: Answer[];
}
export const Pagination = ({
  stateSelectedPosition,
  answerList,
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
        disabled={answerList.length === selectedPosition}
      >
        Siguiente
      </button>
    </div>
  );
};
