import { ChangeEvent, SetStateAction, useEffect } from 'react';
import Heading from './Heading';
import { Plans } from '../ui/FormStep2';
import { useFormContext } from 'react-hook-form';

interface selectedRadio {
  title: Plans;
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
  // useEffect(() => {
  //   setSelectedRadio((selectedRadio) => ({
  //     ...selectedRadio,
  //     ...(title === selectedRadio?.title && { price }),
  //   }));
  // }, [price, setSelectedRadio, title]);

  const { register, watch, setValue, getValues } = useFormContext();
  const toggle = watch('toggle');
  const selectedRadioBtn = watch('selectedRadioBtn');
  // const currentValues = getValues();

  console.log(
    'title === selectedRadioBtn.title',
    title === selectedRadioBtn.title,
  );
  console.log('title, selectedRadioBtn.title', title, selectedRadioBtn.title);

  // console.log(
  //   'title === selectedRadioBtn?.title',
  //   title === selectedRadioBtn?.title,
  //   title,
  //   selectedRadioBtn,
  //   currentValues,
  // );

  return (
    <div className="md:w-[30%] min-[1000px]:w-[150px]">
      <input
        type="radio"
        id={title}
        value={title}
        // name="select"
        className="peer hidden"
        // {...register('selectedRadioBtn')}
        // defaultValue={JSON.stringify({ title: 'arcade', price: 9 })}
        // defaultValue={JSON.stringify({ title: 'arcade', price: 9 })}
        {...(register('selectedRadioBtn.title'),
        {
          // defaultValue: { title: 'arcade' },
        })}
        // {...register('selectedRadioBtn.price')}
        onChange={(e) => {
          console.log('e.target.value', e.target);
          // handleRadioChange(e, price);
          // setValue('toggle', !toggle);
          setValue('selectedRadioBtn.title', e.target.value);
          setValue('selectedRadioBtn.price', price);
          // setValue('selectedRadioBtn', { title: e.target.value, price: price });
        }}
        checked={title === selectedRadioBtn.title}
      />
      {/* <input
        type="radio"
        id={title}
        value={title}
        name="select"
        className="peer hidden"
        checked={title === selectedRadio?.title}
        onChange={(e) => {
          handleRadioChange(e, price);
        }}
      /> */}
      <label
        htmlFor={title}
        className="flex gap-6 rounded-xl border-2 border-solid border-light-gray p-4 hover:cursor-pointer hover:border-cool-gray focus:outline-none peer-checked:border-cool-gray peer-checked:bg-Alabaster md:flex-col md:gap-6"
      >
        <img className="mb-auto w-12" src={icon} alt="Icon" />
        <div>
          <Heading as="h3" title={title} />
          <p className="text-cool-gray">
            ${price}/{!toggle ? 'mo' : 'yr'}
          </p>
          {toggle && <p className="text-sm text-marine-blue">2 months free</p>}
          {/* <p className="text-cool-gray">
            ${price}/{!isYearlyChecked ? 'mo' : 'yr'}
          </p>
          {isYearlyChecked && (
            <p className="text-sm text-marine-blue">2 months free</p>
          )} */}
        </div>
      </label>
    </div>
  );
}

export default PlanRadioBtn;
