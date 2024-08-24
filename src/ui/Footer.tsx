import { Dispatch, SetStateAction } from 'react';

interface FooterProps {
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
  prevStep: () => void;
}

function Footer({ step, prevStep }: FooterProps) {
  return (
    <footer className="mt-auto flex w-screen items-center justify-between self-center bg-white p-5 min-[600px]:px-20 md:w-full md:px-6">
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
        className="cursor-pointer bg-marine-blue px-4 py-2 text-White hover:bg-purplish-blue"
      >
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </footer>
  );
}

export default Footer;
