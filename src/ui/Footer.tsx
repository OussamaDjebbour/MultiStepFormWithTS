import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { FieldValues, SubmitHandler } from 'react-hook-form';

interface FooterProps {
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  handleClick: SubmitHandler<FieldValues>;
}

function Footer({ step, nextStep, prevStep, handleClick }: FooterProps) {
  return createPortal(
    // absolute bottom-0 mt-auto flex w-[95%] justify-between
    <div className="mt-auto flex w-full items-center justify-between bg-white p-5">
      {/* <span className="font-[500] text-cool-gray">Go Back</span> */}
      {/* <input className="cursor-pointer" type="submit" value="Next up" /> */}
      {step > 1 ? (
        <button
          type="button"
          onClick={() => prevStep()}
          className="font-[500] text-cool-gray hover:cursor-pointer hover:text-marine-blue"
        >
          Go back
        </button>
      ) : (
        <span></span>
      )}
      <button
        type="submit"
        onClick={handleClick}
        className="cursor-pointer bg-marine-blue px-4 py-2 text-White hover:bg-purplish-blue"
      >
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>,

    document.body,
  );
}

export default Footer;
