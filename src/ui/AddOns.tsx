import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';
import Heading from './Heading';

interface selectedCheckbox {
  checkboxInfo: { title: string; price: number }[];
  totalPrice: number;
}

interface AddOnsProps {
  title: string;
  price: number;
  text: string;
  isYearlyChecked: boolean;
  selectedCheckbox: selectedCheckbox;
  setSelectedCheckbox: Dispatch<
    SetStateAction<{
      checkboxInfo: { title: string; price: number }[];
      totalPrice: number;
    }>
  >;
}
function AddOns({
  title,
  price,
  text,
  isYearlyChecked,
  selectedCheckbox,
  setSelectedCheckbox,
}: AddOnsProps) {
  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    const data = e.target.getAttribute('data-titleandprice');
    const parsedData = data ? JSON.parse(data) : null;

    if (e.target.checked) {
      setSelectedCheckbox((box) => ({
        ...box,
        checkboxInfo: [...box.checkboxInfo, { title, price }],
        totalPrice: box.totalPrice + price,
      }));
    } else {
      setSelectedCheckbox((box) => ({
        ...box,
        checkboxInfo: box.checkboxInfo.filter((boxInfo) => {
          return (
            boxInfo.price !== parsedData.price ||
            parsedData.title !== boxInfo.title
          );
        }),
        totalPrice: box.totalPrice - price,
      }));
    }
  }

  useEffect(() => {
    setSelectedCheckbox((box) => ({
      ...box,
      checkboxInfo: box.checkboxInfo.map((boxInfo) => {
        return {
          ...boxInfo,
          ...(title === boxInfo.title ? { price } : {}),
        };
      }),
      totalPrice: box.checkboxInfo.reduce((acc, curr) => acc + curr.price, 0),
    }));
  }, [setSelectedCheckbox, price, title]);

  return (
    <div>
      <label
        htmlFor={title}
        className="flex items-center gap-3 rounded-xl border-2 border-solid border-light-gray px-3 py-2 hover:cursor-pointer hover:border-cool-gray has-[:checked]:border-cool-gray has-[:checked]:bg-Alabaster"
      >
        <input
          type="checkbox"
          id={title}
          name="select"
          value={title}
          data-titleandprice={JSON.stringify({ title: title, price: price })}
          defaultChecked={
            selectedCheckbox &&
            selectedCheckbox.checkboxInfo.some((slt) => slt.title === title)
          }
          onChange={handleCheckboxChange}
          className="peer hidden h-[1.15em] w-[1.15em] border-light-gray before:rounded-full checked:bg-red-500"
        />

        <span className="flex h-5 w-5 items-center justify-center rounded border-2 border-light-gray peer-checked:border-purplish-blue peer-checked:bg-purplish-blue">
          <img src="/src/assets/images/icon-checkmark.svg" alt="Check Icon" />
        </span>

        <div>
          <Heading as="h4" title={title} />
          <p className="text-xs text-cool-gray">{text}</p>
        </div>

        <span className="ml-auto font-[500] text-cool-gray">
          +${price}/{!isYearlyChecked ? 'mo' : 'yr'}
        </span>
      </label>
    </div>
  );
}

export default AddOns;

{
  /* <span className="[clip-path:polygon(28%_38%,41%_53%,75%_24%,86%_38%,40%_78%,15%_50%)]"></span> */
}
