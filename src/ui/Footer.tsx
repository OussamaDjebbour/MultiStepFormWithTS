import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';

interface FooterProps {
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  handleClick: () => void;
}

function Footer({ step, nextStep, prevStep, handleClick }: FooterProps) {
  if (step === 5) return;

  return createPortal(
    // absolute bottom-0 mt-auto flex w-[95%] justify-between
    <div className="mt-auto flex w-full items-center justify-between bg-white p-5">
      {/* <span className="font-[500] text-cool-gray">Go Back</span> */}
      {/* <input className="cursor-pointer" type="submit" value="Next up" /> */}
      {step > 1 ? (
        <button
          type="button"
          onClick={() => prevStep()}
          className="font-[500] text-cool-gray"
        >
          Go back
        </button>
      ) : (
        <span></span>
      )}
      <button
        type="submit"
        // onClick={() => nextStep()}
        onClick={handleClick}
        className="cursor-pointer bg-marine-blue px-4 py-2 text-White"
      >
        Next Step
      </button>
    </div>,
    // document.querySelector('#root'),
    document.body,
  );
  // absolute bottom-0 left-0 right-0
  // return (
  //   <div className="flex w-full justify-between bg-white p-5">
  //     <button type="button">Go back</button>
  //     <input
  //       className="rounded-md bg-marine-blue px-4 py-3 text-Magnolia"
  //       type="submit"
  //       value="Next Step"
  //     />
  //   </div>
  // );

  // return (
  //   <div className="mt-auto flex w-full justify-between bg-white p-5">
  //     <span>Go back</span>
  //     <input type="submit" value="Next up" />
  //   </div>
  // );
}

export default Footer;
