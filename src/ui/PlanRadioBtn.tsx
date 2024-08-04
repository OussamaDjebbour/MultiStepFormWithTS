import { ChangeEvent, SetStateAction, useEffect } from 'react';
import Heading from './Heading';

interface selectedRadio {
  title: string;
  price: number;
}

type PlanProps = {
  icon: string;
  title: string;
  price: number;
  isYearlyChecked: boolean;
  selectedRadio: selectedRadio;
  handleRadioChange: (e: ChangeEvent<HTMLInputElement>, price: number) => void;
  setSelectedRadio: React.Dispatch<SetStateAction<selectedRadio>>;
};

function PlanRadioBtn({
  icon,
  title,
  price,
  isYearlyChecked,
  selectedRadio,
  handleRadioChange,
  setSelectedRadio,
}: PlanProps) {
  useEffect(() => {
    setSelectedRadio((selectedRadio) => ({
      ...selectedRadio,
      ...(title === selectedRadio?.title && { price }),
    }));
  }, [price, setSelectedRadio, title]);

  return (
    <div className="md:w-[30%] min-[1000px]:w-[150px]">
      <input
        type="radio"
        id={title}
        value={title}
        name="select"
        className="peer hidden"
        checked={title === selectedRadio?.title}
        onChange={(e) => {
          handleRadioChange(e, price);
        }}
      />
      <label
        htmlFor={title}
        className="flex gap-6 rounded-xl border-2 border-solid border-light-gray p-4 hover:cursor-pointer hover:border-cool-gray focus:outline-none peer-checked:border-cool-gray peer-checked:bg-Alabaster md:flex-col md:gap-6"
      >
        <img className="mb-auto w-12" src={icon} alt="Icon" />
        <div>
          <Heading as="h3" title={title} />
          <p className="text-cool-gray">
            ${price}/{!isYearlyChecked ? 'mo' : 'yr'}
          </p>
          {isYearlyChecked && (
            <p className="text-sm text-marine-blue">2 months free</p>
          )}
        </div>
      </label>
    </div>
  );
}

export default PlanRadioBtn;
