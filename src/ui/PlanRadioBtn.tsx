import Heading from './Heading';
import { useFormContext } from 'react-hook-form';
import capitalizeTitle from 'src/helpers/capitalizeTitle';

type PlanProps = {
  icon: string;
  title: string;
  price: number;
};

function PlanRadioBtn({ icon, title, price }: PlanProps) {
  const { register, watch, setValue } = useFormContext();
  const toggle = watch('toggle');
  const selectedRadioBtn = watch('selectedRadioBtn');

  return (
    <div className="md:w-[30%] min-[1000px]:w-[150px]">
      <input
        type="radio"
        id={title}
        value={title}
        className="peer hidden"
        {...register('selectedRadioBtn.title')}
        onChange={(e) => {
          setValue('selectedRadioBtn.title', e.target.value);
          setValue('selectedRadioBtn.price', price);
        }}
        checked={title === selectedRadioBtn.title}
      />

      <label
        htmlFor={title}
        className="flex gap-6 rounded-xl border-2 border-solid border-light-gray p-4 hover:cursor-pointer hover:border-cool-gray focus:outline-none peer-checked:border-cool-gray peer-checked:bg-Alabaster md:flex-col md:gap-6"
      >
        <img className="mb-auto w-12" src={icon} alt="Icon" />
        <div>
          <Heading as="h3" title={capitalizeTitle(title)} />
          <p className="text-cool-gray">
            ${price}/{!toggle ? 'mo' : 'yr'}
          </p>
          {toggle && <p className="text-sm text-marine-blue">2 months free</p>}
        </div>
      </label>
    </div>
  );
}

export default PlanRadioBtn;
