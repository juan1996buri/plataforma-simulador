import { IAnswer } from "@/app/model/answer";
import { RadioButton } from "primereact/radiobutton";

interface AskCardProps {
  option: IAnswer;
  stateSelectedOption: [
    IAnswer | undefined,
    React.Dispatch<React.SetStateAction<IAnswer | undefined>>,
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
        inputId={option.text}
        name={option.text}
        value={option}
        checked={selectedOption?.id === option.id}
        onChange={(e) => {
          setSelectedOption(e.value);
        }}
      />
      <label htmlFor={option.text}>{option.text}</label>
    </button>
  );
};
