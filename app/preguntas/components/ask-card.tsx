import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { Answer, Option } from "@/app/db/data";

interface AskCardProps {
  option: Option;
  stateSelectedOption: [
    Option | undefined,
    React.Dispatch<React.SetStateAction<Option | undefined>>,
  ];
}
export const AskCard = ({ option, stateSelectedOption }: AskCardProps) => {
  const [selectedOption, setSelectedOption] = stateSelectedOption;

  return (
    <button
      type="button"
      onClick={() => setSelectedOption(option)} // click en cualquier parte
      className={`flex gap-x-2 p-2 rounded-md w-full  ${
        option.id === selectedOption?.id
          ? "bg-green-300 border-green-400 shadow-md"
          : "bg-white border-gray-200 shadow-md"
      } `}
    >
      <RadioButton
        inputId={option.description}
        name={option.description}
        value={option}
        checked={selectedOption?.id === option.id}
        onChange={(e) => {
          setSelectedOption(e.value);
        }}
      />
      <label htmlFor={option.description}>{option.description}</label>
    </button>
  );
};
