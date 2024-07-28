import { useState } from 'react';
import Heading from './Heading';

type AddOnsProps = {
  //   title: string;
  title: string;
  price: number;
  text: string;
  isYearlyChecked: boolean;
};
function AddOns({ title, price, text, isYearlyChecked }: AddOnsProps) {
  // const [isRadioChecked, setIsRadioChecked] = useState(true);

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
          // checked={isRadioChecked}
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
