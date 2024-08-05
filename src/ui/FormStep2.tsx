import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import Heading from './Heading';
import PlanRadioBtn from './PlanRadioBtn';

interface selectedRadio {
  title: string;
  price: number;
}

interface Step2Props {
  isYearlyChecked: boolean;
  setIsYearlyChecked: React.Dispatch<SetStateAction<boolean>>;
  selectedRadio: selectedRadio;
  handleRadioChange: (e: ChangeEvent<HTMLInputElement>, price: number) => void;
  setSelectedRadio: Dispatch<SetStateAction<selectedRadio>>;
}

function FormStep2({
  isYearlyChecked,
  setIsYearlyChecked,
  selectedRadio,
  handleRadioChange,
  setSelectedRadio,
}: Step2Props) {
  return (
    <section>
      <Heading as="h1" title="Select your plan" />
      <Heading
        as="h2"
        title="You have the option of monthly or yearly billing."
      />
      <div className="flex flex-col gap-2.5 min-[600px]:gap-4 md:mt-10 md:flex-row md:justify-between">
        <PlanRadioBtn
          price={!isYearlyChecked ? 9 : 90}
          isYearlyChecked={isYearlyChecked}
          title="Arcade"
          icon="/images/icon-arcade.svg"
          selectedRadio={selectedRadio}
          handleRadioChange={handleRadioChange}
          setSelectedRadio={setSelectedRadio}
        />
        <PlanRadioBtn
          price={!isYearlyChecked ? 12 : 120}
          isYearlyChecked={isYearlyChecked}
          title="Advanced"
          icon="/images/icon-advanced.svg"
          selectedRadio={selectedRadio}
          handleRadioChange={handleRadioChange}
          setSelectedRadio={setSelectedRadio}
        />
        <PlanRadioBtn
          price={!isYearlyChecked ? 15 : 150}
          isYearlyChecked={isYearlyChecked}
          title="Pro"
          icon="/images/icon-pro.svg"
          selectedRadio={selectedRadio}
          handleRadioChange={handleRadioChange}
          setSelectedRadio={setSelectedRadio}
        />
      </div>

      <div className="mt-4 flex w-full justify-center rounded-xl bg-Magnolia p-3 min-[600px]:mt-6 md:mt-8">
        <div className="flex items-center gap-8">
          <input
            className="peer hidden"
            id="cb2"
            type="checkbox"
            checked={isYearlyChecked}
            onChange={() =>
              setIsYearlyChecked((isYearlyChecked) => !isYearlyChecked)
            }
          />
          <span className="font-bold text-marine-blue">Monthly</span>
          <label
            className="relative inline-block h-[2em] w-[4em] cursor-pointer rounded-[2em] border border-solid border-[#e8eae9] bg-['#fbfbfb'] p-0.5 shadow outline-0 transition-all duration-500 ease-linear before:relative before:hidden before:h-full before:w-1/2 before:content-[''] after:relative after:left-0 after:block after:h-full after:w-1/2 after:rounded-[2em] after:bg-[#fbfbfb] after:content-[''] after:[transition:left_0.3s_cubic-bezier(0.175,0.885,0.32,1.275),padding_0.3s_ease,margin_0.3s_ease] hover:after:will-change-[padding] active:shadow-[inset_0_0_0_2em_#e8eae9] active:after:pr-[.8em] peer-checked:bg-[#86d993] peer-checked:after:left-1/2 peer-checked:active:shadow-none peer-checked:active:after:pl-[-.8em]"
            htmlFor="cb2"
          ></label>
          <span className="font-[500] text-cool-gray">Yearly</span>
        </div>
      </div>
    </section>
  );
}

export default FormStep2;
