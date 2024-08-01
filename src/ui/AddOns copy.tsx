import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Heading from './Heading';

interface selectedCheckbox {
  titles: string[];
  prices: number[];
  totalPrice: 0;
}

interface AddOnsProps {
  //   title: string;
  title: string;
  price: number;
  text: string;
  isYearlyChecked: boolean;
  selectedCheckbox: selectedCheckbox;
  setSelectedCheckbox: Dispatch<SetStateAction<selectedCheckbox>>;
  memoizedselectedCheckbox?: string[];
}
function AddOns({
  title,
  price,
  text,
  isYearlyChecked,
  selectedCheckbox,
  setSelectedCheckbox,
  memoizedselectedCheckbox,
}: AddOnsProps) {
  // const [isRadioChecked, setIsRadioChecked] = useState(true);

  console.log(
    'selectedCheckboxselectedCheckboxselectedCheckboxselectedCheckbox',
    selectedCheckbox,
  );

  // const memoizedselectedCheckbox = useMemo(
  //   () => selectedCheckbox.titles,
  //   [selectedCheckbox.titles],
  // );

  console.log(
    'kkkkkkkkkkkpppppppppppppppprrrrrrrrrrrrrruuuuuuuuuuuuuutttttttt',
    selectedCheckbox,
    selectedCheckbox.titles,
    price,
    selectedCheckbox.totalPrice,
  );

  useEffect(() => {
    // if (isYearlyChecked)
    // if (price !== selectedCheckbox.price && isYearlyChecked)
    if (price !== 2222222222222 && isYearlyChecked)
      // setSelectedCheckbox((obj) => ({
      //   ...obj,
      //   titles: [...obj.titles, title],
      //   prices: [...obj.prices, price],
      //   totalPrice: obj.totalPrice + price,
      // }));
      setSelectedCheckbox((obj) => ({
        ...obj,
        titles: [...obj.titles, title],
        prices: [...obj.prices, price],
        totalPrice: obj.totalPrice + price,
      }));
  }, [
    // isYearlyChecked,
    // memoizedselectedCheckbox,
    title,
    price,
    setSelectedCheckbox,
    isYearlyChecked,
  ]);

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    const changeEvent = e;
    const data1 = changeEvent.target.getAttribute('data-titleAndPrice');
    const parsedData = data1 ? JSON.parse(data1) : null;
    console.log(
      'changeEventchangeEventchangeEventchangeEventchangeEvent',
      changeEvent,
      changeEvent.target.dataset,
      data1,
      parsedData,
      // parsedData.title,
      // changeEvent.target.value,
    );

    console.log(
      '    parsedData.title changeEvent.target.value',
      parsedData.title,
      parsedData.price,
      changeEvent.target.value,
    );

    if (!isYearlyChecked)
      console.log(
        '    parsedData.title changeEvent.target.value',
        parsedData.title,
        parsedData.price,
        changeEvent.target.value,
      );

    if (changeEvent.target.checked) {
      setSelectedCheckbox((obj) => ({
        ...obj,
        titles: [...obj.titles, title],
        prices: [...obj.prices, price],
        totalPrice: obj.totalPrice + price,
      }));
    } else {
      setSelectedCheckbox((obj) => ({
        ...obj,
        titles: obj.titles.filter(
          (title) => title !== changeEvent.target.value,
        ),
        // prices: obj.prices.filter((prc) => prc !== price),
        prices: obj.prices.filter(
          (prc) =>
            prc !== parsedData.price &&
            parsedData.title === changeEvent.target.value,
        ),
        totalPrice: obj.totalPrice - price,
      }));
    }
  }

  // useEffect(() => {
  //   document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
  //     input.addEventListener('change', (e: ChangeEvent<HTMLInputElement>) =>
  //       handleCheckboxChange(e),
  //     );
  //   });
  //   return () => {
  //     document.removeEventListener(
  //       'change',
  //       (e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e),
  //     );
  //   };
  // }, [price, setSelectedCheckbox, title, isYearlyChecked]);

  // useEffect(() => {
  //   document
  //     .querySelector('input[type="checkbox"]')
  //     .addEventListener('change', (e) => handleCheckboxChange(e));

  //   return () => {
  //     document.removeEventListener('change', handleCheckboxChange);
  //   };
  // }, [
  //   price,
  //   setSelectedCheckbox,
  //   title,
  //   isYearlyChecked,
  //   handleCheckboxChange,
  // ]);

  // function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
  //   if (e.target.checked) {
  //     setSelectedCheckbox((obj) => ({
  //       ...obj,
  //       titles: [...obj.titles, title],
  //       price: obj.price + price,
  //     }));
  //   } else {
  //     setSelectedCheckbox((obj) => ({
  //       ...obj,
  //       titles: obj.titles.filter((title) => title !== e.target.value),
  //       price: obj.price - price,
  //     }));
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('change', handleCheckboxChange);
  // }, [price, setSelectedCheckbox, title, isYearlyChecked]);

  return (
    // <div>
    //   <label
    //     htmlFor={title}
    //     className="flex items-center justify-between rounded-xl border-2 border-solid border-light-gray px-3 py-2 hover:cursor-pointer focus:outline-none peer-checked:border-cool-gray peer-has-[:checked]:bg-red-400"
    //   >
    //     <div className="peer flex items-center gap-3">
    //       <input
    //         type="checkbox"
    //         id={title}
    //         name="select"
    //         className="peer h-[1.15em] w-[1.15em]"
    //         defaultChecked={title === 'Arcade'}
    //       />
    //       {/* <img className="mb-auto w-12" src={icon} alt="Icon" /> */}
    //       <div>
    //         <Heading as="h5" title={title} />
    //         <p className="text-xs text-cool-gray">{text}</p>
    //         {/* {isYearlyChecked && <p className="text-marine-blue">2 months free</p>} */}
    //       </div>
    //     </div>
    //     <span className="font-[500] text-cool-gray">
    //       +${price}/{!isYearlyChecked ? 'mo' : 'yr'}
    //     </span>
    //   </label>
    // </div>

    <div>
      <label
        htmlFor={title}
        className="flex items-center gap-3 rounded-xl border-2 border-solid border-light-gray px-3 py-2 hover:cursor-pointer has-[:checked]:border-cool-gray has-[:checked]:bg-Alabaster"
      >
        <input
          type="checkbox"
          id={title}
          name="select"
          value={title}
          data-titleAndPrice={JSON.stringify({ title: title, price: price })}
          defaultChecked={
            selectedCheckbox && selectedCheckbox.titles.includes(title)
          }
          onChange={handleCheckboxChange}
          // onChange={(e) => {
          //   if (!e.target.checked)
          //     setSelectedCheckbox((obj) => ({
          //       ...obj,
          //       titles: obj.titles.filter((ttl) => title !== ttl),
          //       price: obj.price - price,
          //     }));
          //   if (e.target.checked)
          //     setSelectedCheckbox((obj) => ({
          //       ...obj,
          //       // titles: obj.titles.push(e.target.value),
          //       titles: [...obj.titles, e.target.value],
          //       price: obj.price + price,
          //     }));
          // }}
          className="peer hidden h-[1.15em] w-[1.15em] border-light-gray before:rounded-full checked:bg-red-500"
        />

        <span className="flex h-5 w-5 items-center justify-center rounded border-2 border-light-gray peer-checked:border-purplish-blue peer-checked:bg-purplish-blue">
          {/* <svg
            className="hidden h-3 w-3 text-white peer-checked:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg> */}
          <img src="/src/assets/images/icon-checkmark.svg" alt="Check Icon" />
        </span>

        <div>
          <Heading as="h5" title={title} />
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
