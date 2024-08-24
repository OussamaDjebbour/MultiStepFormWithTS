import { Dispatch, SetStateAction } from 'react';
import Footer from '../ui/Footer';
import FormStep1 from '../ui/FormStep1';
import FormStep2 from '../ui/FormStep2';
import FormStep3 from '../ui/FormStep3';
import FormStep4 from '../ui/FormStep4';
import FinalStep from '../ui/FinalStep';
import { FormProvider, useForm } from 'react-hook-form';
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

const FormContainer: React.FC<FormContainerProps> = ({ step, setStep }) => {
  function nextStep() {
    setStep((step) => step + 1);
  }

  function prevStep() {
    setStep((step) => step - 1);
  }

  const methods = useForm<FormProps>({
    defaultValues: {
      selectedRadioBtn: { title: 'arcade', price: 9 },
      selectedCheckbox: {
        checkboxInfo: [],
        totalPrice: 0,
      },
    },
  });

  function onSubmit() {
    nextStep();
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex w-[92%] flex-grow flex-col justify-between gap-10 rounded-xl min-[500px]:w-[80%] min-[600px]:w-4/6 md:m-auto md:flex md:h-full md:min-w-[400px] md:flex-col md:gap-0 md:px-0 md:py-0 md:pt-12"
      >
        <div className="w-full bg-White px-5 py-8">
          {step === 1 && <FormStep1 />}
          {step === 2 && <FormStep2 />}
          {step === 3 && <FormStep3 />}
          {step === 4 && <FormStep4 setStep={setStep} />}
          {step === 5 && <FinalStep />}
        </div>
        {step < 5 && (
          <Footer step={step} setStep={setStep} prevStep={prevStep} />
        )}
      </form>
    </FormProvider>
  );
};

export default FormContainer;
