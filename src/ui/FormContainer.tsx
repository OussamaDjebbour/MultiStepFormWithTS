import { ChangeEvent, useState } from 'react';
import Footer from './Footer';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import FinalStep from './FinalStep';
import { useForm } from 'react-hook-form';

function FormContainer() {
  // const [state, setState1] = useState<State>({ isYearlyChecked: false });
  const [isYearlyChecked, setIsYearlyChecked] = useState<boolean>(false);

  console.log('isYearlyCheckedChangeeeeee1', isYearlyChecked);

  const [step, setStep] = useState<number>(1);

  const [selectedRadio, setSelectedRadio] = useState<{
    title: string;
    price: number;
  }>({
    title: '',
    price: 0,
  });

  console.log('selectedRadio', selectedRadio);

  function handleRadioChange(e: ChangeEvent<HTMLInputElement>, price: number) {
    setSelectedRadio({ title: e.target.value, price: price });
  }

  console.log('containerrrrrrrrrrrrrrr');

  function nextStep() {
    setStep((step) => step + 1);
  }

  function prevStep() {
    setStep((step) => step - 1);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {
    console.log('Form data', data);
    nextStep();
  }

  function onError(errors: any) {
    console.log('errors', errors);
  }

  function handleClick() {
    handleSubmit(onSubmit, onError)();
  }

  // return (
  //   <form
  //     className="w-[92%] rounded-xl bg-White px-5 py-8 min-[500px]:w-[80%]"
  //     // onClick={handleClick}
  //   >
  //     <input {...register('firstName')} />
  //     <input {...register('lastName', { required: true })} />
  //     {errors.lastName && <p>Last name is required.</p>}
  //     <input {...register('age', { pattern: /\d+/ })} />
  //     {errors.age && <p>Please enter number for age.</p>}
  //     {/* <input type="submit" /> */}
  //     <Footer
  //       step={step}
  //       setStep={setStep}
  //       nextStep={nextStep}
  //       prevStep={prevStep}
  //       handleClick={handleClick}
  //     />
  //   </form>
  // );

  return (
    <form className="w-[92%] rounded-xl bg-White px-5 py-8 min-[500px]:w-[80%]">
      {step === 1 && <FormStep1 register={register} errors={errors} />}
      {step === 2 && (
        <FormStep2
          isYearlyChecked={isYearlyChecked}
          setIsYearlyChecked={setIsYearlyChecked}
          selectedRadio={selectedRadio}
          handleRadioChange={handleRadioChange}
          setSelectedRadio={setSelectedRadio}
        />
      )}
      {step === 3 && <FormStep3 isYearlyChecked={isYearlyChecked} />}
      {step === 4 && <FormStep4 isYearlyChecked={isYearlyChecked} />}
      {step === 5 && <FinalStep />}
      <Footer
        step={step}
        setStep={setStep}
        nextStep={nextStep}
        prevStep={prevStep}
        handleClick={handleClick}

        // onError={onError}
      />
    </form>
  );
}

export default FormContainer;
