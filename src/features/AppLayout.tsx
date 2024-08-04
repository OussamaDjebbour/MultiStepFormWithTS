import { useEffect, useState } from 'react';
import ButtonStep from '../ui/ButtonStep';
import FormContainer from './FormContainer';
import Footer from '../ui/Footer';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';
import BtnStepContainer from '../ui/BtnStepContainer';

function AppLayout() {
  const [step, setStep] = useState<number>(1);

  // const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  // const handleResize = () => {
  //   setIsMobile(window.innerWidth < 800);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // function nextStep() {
  //   setStep((step) => step + 1);
  // }

  // function prevStep() {
  //   setStep((step) => step - 1);
  // }

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // function onSubmit(data: FieldValues) {
  //   console.log('Form data', data);
  //   nextStep();
  // }

  // function onError(errors: FieldErrors<FieldValues>) {
  //   console.log('errors', errors);
  // }

  // function handleFormClick() {
  //   handleSubmit(onSubmit, onError)();
  // }

  // mb-10
  return (
    <main className="flex flex-col items-center justify-between bg-image-mobile bg-contain bg-no-repeat pb-8 md:grid md:h-[568px] md:w-full md:grid-cols-[274px_1fr] md:items-start md:gap-6 md:bg-White md:bg-image-desktop md:pb-0 min-[1000px]:max-w-[1000px]">
      <BtnStepContainer step={step} />

      <FormContainer
        // errors={errors}
        // register={register}
        step={step}
        setStep={setStep}
      />
      {/* {step < 5 && (
        <Footer
          step={step}
          setStep={setStep}
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormClick={handleFormClick}
        />
      )} */}
    </main>
  );
}

export default AppLayout;
