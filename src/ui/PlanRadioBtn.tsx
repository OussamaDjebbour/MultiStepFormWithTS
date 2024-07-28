import { ChangeEvent, SetStateAction, useState } from 'react';
import Heading from './Heading';

interface selectedRadio {
  title: string;
  price: number;
}

type PlanProps = {
  //   title: string;
  icon: string;
  title: string;
  price: number;
  isYearlyChecked?: boolean;
  selectedRadio?: selectedRadio;
  // selectedRadio: object;
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
  console.log('selectedRadio1', selectedRadio);
  console.log('isYearlyCheckedChangeeeeee3', isYearlyChecked, title, price);

  return (
    <div>
      <input
        type="radio"
        id={title}
        // value={`${title} ${price} `}
        value={title}
        name="select"
        className="peer hidden"
        checked={title === selectedRadio?.title}
        onChange={(e) => {
          // handleRadioChange(e, price);
          setSelectedRadio({ title: e.target.value, price: price });
        }}
        // checked={isRadioChecked}
        // checked={isYearlyChecked}
        // defaultChecked={isYearlyChecked}
        // defaultChecked={title === 'Arcade'}
      />
      <label
        htmlFor={title}
        className="flex gap-6 rounded-xl border-2 border-solid border-light-gray p-4 hover:cursor-pointer focus:outline-none peer-checked:border-cool-gray peer-checked:bg-Alabaster"
      >
        <img className="mb-auto w-12" src={icon} alt="Icon" />
        <div>
          <Heading as="h3" title={title} />
          <p className="text-cool-gray">
            ${price}/{!isYearlyChecked ? 'mo' : 'yr'}
          </p>
          {isYearlyChecked && <p className="text-marine-blue">2 months free</p>}
        </div>
      </label>
    </div>
  );
}

export default PlanRadioBtn;
