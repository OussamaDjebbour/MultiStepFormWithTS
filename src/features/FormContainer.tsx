import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import Footer from '../ui/Footer';
import FormStep1 from '../ui/FormStep1';
import FormStep2 from '../ui/FormStep2';
import FormStep3 from '../ui/FormStep3';
import FormStep4 from '../ui/FormStep4';
import FinalStep from '../ui/FinalStep';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';

interface FormContainerProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

function FormContainer({ step, setStep }: FormContainerProps) {
  const [isYearlyChecked, setIsYearlyChecked] = useState<boolean>(false);

  const [selectedRadio, setSelectedRadio] = useState<{
    title: string;
    price: number;
  }>({
    title: 'Arcade',
    price: 9,
  });

  const [selectedCheckbox, setSelectedCheckbox] = useState<{
    checkboxInfo: { title: string; price: number }[];
    totalPrice: number;
  }>({
    checkboxInfo: [],
    totalPrice: 0,
  });

  const memoizedselectedCheckbox = useMemo(
    () => selectedCheckbox.checkboxInfo,
    [selectedCheckbox.checkboxInfo],
  );

  console.log('selectedRadio', selectedRadio);

  function handleRadioChange(e: ChangeEvent<HTMLInputElement>, price: number) {
    setSelectedRadio({ title: e.target.value, price: price });
  }

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

  function onSubmit(data: FieldValues) {
    console.log('Form data', data);
    nextStep();
  }

  function onError(errors: FieldErrors<FieldValues>) {
    console.log('errors', errors);
  }

  function handleFormClick() {
    handleSubmit(onSubmit, onError)();
  }

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
      {step === 3 && (
        <FormStep3
          isYearlyChecked={isYearlyChecked}
          selectedCheckbox={selectedCheckbox}
          setSelectedCheckbox={setSelectedCheckbox}
          // memoizedselectedCheckbox={memoizedselectedCheckbox}
        />
      )}
      {step === 4 && (
        <FormStep4
          isYearlyChecked={isYearlyChecked}
          setStep={setStep}
          selectedRadio={selectedRadio}
          selectedCheckbox={selectedCheckbox}
        />
      )}
      {step === 5 && <FinalStep />}
      {step < 5 && (
        <Footer
          step={step}
          setStep={setStep}
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormClick={handleFormClick}
        />
      )}
    </form>
  );
}

export default FormContainer;
