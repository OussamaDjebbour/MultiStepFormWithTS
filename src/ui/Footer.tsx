import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { FieldValues, SubmitHandler } from 'react-hook-form';

interface FooterProps {
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  handleFormClick: SubmitHandler<FieldValues>;
}

function Footer({ step, prevStep, handleFormClick }: FooterProps) {
  return createPortal(
    <div className="mt-auto flex w-full items-center justify-between bg-white p-5">
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
        onClick={handleFormClick}
        className="cursor-pointer bg-marine-blue px-4 py-2 text-White hover:bg-purplish-blue"
      >
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>,

    document.body,
  );
}
// function Footer({ step, prevStep, handleFormClick }: FooterProps) {
//   return (
//     <footer
//       // className="mt-auto flex w-full items-center justify-between bg-white p-5"
//       className="absolute bottom-0 right-0 flex w-full items-center justify-between bg-white p-5"
//     >
//       {step > 1 ? (
//         <button
//           type="button"
//           onClick={() => prevStep()}
//           className="font-[500] text-cool-gray hover:cursor-pointer hover:text-marine-blue"
//         >
//           Go back
//         </button>
//       ) : (
//         <span></span>
//       )}
//       <button
//         type="submit"
//         onClick={handleFormClick}
//         className="cursor-pointer bg-marine-blue px-4 py-2 text-White hover:bg-purplish-blue"
//       >
//         {step === 4 ? 'Confirm' : 'Next Step'}
//       </button>
//     </footer>
//   );
// }

export default Footer;
