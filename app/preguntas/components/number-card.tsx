import { Answer } from "@/app/db/data";

interface NumberCardProps {
  answer: Answer;
  index: number;
  stateSelectedPosition: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>,
  ];
}
export const NumberCard = ({
  answer,
  index,
  stateSelectedPosition,
}: NumberCardProps) => {
  const [selectedPosition, setSelectedPosition] = stateSelectedPosition;
  return (
    <button
      className={`cursor-pointer w-7 h-7 rounded-md border 
   text-black font-bold ${
     selectedPosition === index
       ? "bg-green-300 border-green-400 shadow-md"
       : "bg-white border-gray-200 shadow-md"
   } 
  flex items-center justify-center`}
      type="button"
      onClick={() => setSelectedPosition(index)}
    >
      {index + 1}
    </button>
  );
};
