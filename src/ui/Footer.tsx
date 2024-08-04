import { Dispatch, SetStateAction, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FieldValues, SubmitHandler } from 'react-hook-form';

interface FooterProps {
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  handleFormClick?: SubmitHandler<FieldValues>;
}

import { useState } from 'react';

// const MyComponent = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

//   const handleResize = () => {
//     setIsMobile(window.innerWidth < 800);
//   };

//   React.useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const renderComponent = () => {
//     if (isMobile) {
//       return createPortal(
//         <div className="fixed left-0 top-0 h-full w-full bg-gray-200">
//           Mobile Component
//         </div>,
//         document.body,
//       );
//     } else {
//       return <div className="relative">Desktop Component</div>;
//     }
//   };

//   return renderComponent();
// };

function Footer({ step, prevStep, handleFormClick }: FooterProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const renderFooter = () => {
  return isMobile ? (
    createPortal(
      <footer className="mt-auto flex w-full items-center justify-between self-center bg-white p-5 min-[600px]:px-20">
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
      </footer>,
      document.body,
    )
  ) : (
    <footer className="mt-auto flex w-full items-center justify-between bg-white p-5">
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
        type="button"
        onClick={handleFormClick}
        className="cursor-pointer bg-marine-blue px-4 py-2 text-White hover:bg-purplish-blue"
      >
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </footer>
  );

  // return renderFooter();

  // return createPortal(
  //   <div className="mt-auto flex w-full items-center justify-between bg-white p-5">
  //     {step > 1 ? (
  //       <button
  //         type="button"
  //         onClick={() => prevStep()}
  //         className="font-[500] text-cool-gray hover:cursor-pointer hover:text-marine-blue"
  //       >
  //         Go back
  //       </button>
  //     ) : (
  //       <span></span>
  //     )}
  //     <button
  //       type="submit"
  //       onClick={handleFormClick}
  //       className="cursor-pointer bg-marine-blue px-4 py-2 text-White hover:bg-purplish-blue"
  //     >
  //       {step === 4 ? 'Confirm' : 'Next Step'}
  //     </button>
  //   </div>,

  //   document.body,
  // );
}
// function Footer({ step, prevStep, handleFormClick }: FooterProps) {
//   return createPortal(
//     <div className="mt-auto flex w-full items-center justify-between bg-white p-5">
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
//     </div>,

//     document.body,
//   );
// }

// function Footer({ step, prevStep, handleFormClick }: FooterProps) {
//   return (
//     <footer
//       // className="mt-auto flex w-full items-center justify-between bg-white p-5"
//       className="absolute -bottom-36 right-0 flex w-full items-center justify-between bg-white p-5"
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
//         type="button"
//         onClick={handleFormClick}
//         className="cursor-pointer bg-marine-blue px-4 py-2 text-White hover:bg-purplish-blue"
//       >
//         {step === 4 ? 'Confirm' : 'Next Step'}
//       </button>
//     </footer>
//   );
// }

export default Footer;
