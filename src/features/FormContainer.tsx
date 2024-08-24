import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Footer from '../ui/Footer';
import FormStep1 from '../ui/FormStep1';
import FormStep2 from '../ui/FormStep2';
import FormStep3 from '../ui/FormStep3';
import FormStep4 from '../ui/FormStep4';
import FinalStep from '../ui/FinalStep';
import {
  FieldErrors,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Plans, AddOns } from '../ui/FormStep2';

interface FormContainerProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

interface FormProps {
  selectedRadioBtn: {
    title: Plans;
    price: number;
  };
  selectedCheckbox: {
    checkboxInfo: { title: AddOns; price: number }[];
    totalPrice: number;
  };
}

// interface selectedRadionBtn {
//   title: Plans;
//   price: number;
// }

const FormContainer: React.FC<FormContainerProps> = ({ step, setStep }) => {
  const [isYearlyChecked, setIsYearlyChecked] = useState<boolean>(false);

  const [selectedRadio, setSelectedRadio] = useState<{
    title: Plans;
    price: number;
  }>({
    title: 'arcade',
    price: 9,
  });

  const [selectedCheckbox, setSelectedCheckbox] = useState<{
    checkboxInfo: { title: string; price: number }[];
    totalPrice: number;
  }>({
    checkboxInfo: [],
    totalPrice: 0,
  });

  function handleRadioChange(e: ChangeEvent<HTMLInputElement>, price: number) {
    setSelectedRadio({ title: e.target.value as Plans, price: price });
  }

  function nextStep() {
    setStep((step) => step + 1);
  }

  function prevStep() {
    setStep((step) => step - 1);
  }

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const methods = useForm<FormProps>({
    defaultValues: {
      // title: 'arcade',
      // price: 9,
      selectedRadioBtn: { title: 'arcade', price: 9 },
      selectedCheckbox: {
        checkboxInfo: [],
        totalPrice: 0,
      },
    },
  });
  // const methods = useForm({
  //   defaultValues: {
  //     // selectedRadioBtn: 'arcade',
  //     selectedRadioBtn: { title: 'arcade', price: 9 },
  //   },
  // });

  function onSubmit(data: FieldValues) {
    console.log('Form data', data);
    nextStep();
  }

  function onError(errors: FieldErrors<FieldValues>) {
    console.log('errors', errors);
  }

  // function handleFormClick(e: React.FormEvent<HTMLFormElement>) {
  function handleFormClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    methods.handleSubmit(onSubmit, onError)();
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex w-[92%] flex-grow flex-col justify-between gap-10 rounded-xl min-[500px]:w-[80%] min-[600px]:w-4/6 md:m-auto md:flex md:h-full md:min-w-[400px] md:flex-col md:gap-0 md:px-0 md:py-0 md:pt-12"
      >
        <div className="w-full bg-White px-5 py-8">
          {step === 1 && <FormStep1 />}
          {/* {step === 1 && <FormStep1 register={register} errors={errors} />} */}
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
        </div>
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
    </FormProvider>
  );
};

export default FormContainer;
