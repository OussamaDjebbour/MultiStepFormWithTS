import { ChangeEvent } from 'react';
import Heading from './Heading';
import { useFormContext } from 'react-hook-form';

interface AddOnsProps {
  title: string;
  price: number;
  text: string;
}
function AddOns({ title, price, text }: AddOnsProps) {
  const { watch, setValue } = useFormContext();
  const toggle = watch('toggle');
  const selectedCheckbox = watch('selectedCheckbox');

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    const data = e.target.getAttribute('data-titleandprice');
    const parsedData = data ? JSON.parse(data) : null;

    if (e.target.checked) {
      setValue('selectedCheckbox.checkboxInfo', [
        ...selectedCheckbox.checkboxInfo,
        { title, price },
      ]);

      setValue(
        'selectedCheckbox.totalPrice',
        selectedCheckbox.totalPrice + price,
      );
    } else {
      setValue(
        'selectedCheckbox.checkboxInfo',
        selectedCheckbox.checkboxInfo.filter(
          (boxInfo: { title: string; price: number }) => {
            return (
              boxInfo.price !== parsedData.price ||
              parsedData.title !== boxInfo.title
            );
          },
        ),
      );
      setValue(
        'selectedCheckbox.totalPrice',
        selectedCheckbox.totalPrice - price,
      );
    }
  }

  return (
    <div>
      <label
        htmlFor={title}
        className="flex items-center gap-3 rounded-xl border-2 border-solid border-light-gray px-3 py-2 hover:cursor-pointer hover:border-cool-gray has-[:checked]:border-cool-gray has-[:checked]:bg-Alabaster min-[600px]:gap-5"
      >
        <input
          type="checkbox"
          id={title}
          name="select"
          value={title}
          data-titleandprice={JSON.stringify({ title: title, price: price })}
          defaultChecked={
            selectedCheckbox &&
            selectedCheckbox.checkboxInfo?.some(
              (slt: { title: string; price: number }) => slt.title === title,
            )
          }
          onChange={handleCheckboxChange}
          className="peer hidden h-[1.15em] w-[1.15em] border-light-gray before:rounded-full checked:bg-red-500"
        />

        <span className="flex h-5 w-5 items-center justify-center rounded border-2 border-light-gray peer-checked:border-purplish-blue peer-checked:bg-purplish-blue">
          <img src="/images/icon-checkmark.svg" alt="Check Icon" />
        </span>

        <div>
          <Heading as="h4" title={title} />
          <p className="text-xs text-cool-gray md:text-base">{text}</p>
        </div>

        <span className="ml-auto font-[500] text-cool-gray">
          +${price}/{!toggle ? 'mo' : 'yr'}
        </span>
      </label>
    </div>
  );
}

export default AddOns;
