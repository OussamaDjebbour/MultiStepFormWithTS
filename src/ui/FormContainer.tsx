import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import Footer from './Footer';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import FinalStep from './FinalStep';
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

interface FormContainerProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

interface FormData {
  // Define the expected shape of the data object here
  name: string;
  email: string;
  phone: number;
}
interface ErrorData {
  // Define the expected shape of the data object here
  name: string;
  email: string;
  phone: number;
}

function FormContainer({ step, setStep }: FormContainerProps) {
  // const [state, setState1] = useState<State>({ isYearlyChecked: false });
  const [isYearlyChecked, setIsYearlyChecked] = useState<boolean>(false);

  // console.log('isYearlyCheckedChangeeeeee1', isYearlyChecked);

  // const [step, setStep] = useState<number>(1); // const [step, setStep] = useState<number>(1);

  const [selectedRadio, setSelectedRadio] = useState<{
    title: string;
    price: number;
  }>({
    title: 'Arcade',
    price: 9,
  });

  const [selectedCheckbox, setSelectedCheckbox] = useState<{
    // titles: string[];
    // prices: number[];
    // checkboxInfo: [
    //   {
    //     title: string;
    //     price: number;
    //   },
    // ];
    checkboxInfo: { title: string; price: number }[];
    totalPrice: number;
  }>({
    // titles: [],
    // prices: [],
    checkboxInfo: [
      // {
      //   title: '',
      //   price: 0,
      // },
    ],
    totalPrice: 0,
  });

  // const memoizedselectedCheckbox = useMemo(
  //   () => selectedCheckbox.titles,
  //   [selectedCheckbox.titles],
  // );

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

  function handleClick() {
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
          handleClick={handleClick}

          // onError={onError}
        />
      )}
    </form>
  );
}

export default FormContainer;
