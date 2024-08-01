import FormStep2 from '../ui/FormStep2';
import ButtonStep from '../ui/ButtonStep';
import FinalStep from '../ui/FinalStep';
import FormStep4 from '../ui/FormStep4';
import Footer from '../ui/Footer';
import Form1 from '../ui/FormStep1';
import FormContainer from '../ui/FormContainer';
import { useState } from 'react';

function AppLayout() {
  const [step, setStep] = useState<number>(2);

  return (
    <main
      // id="main1"
      className="mb-10 flex flex-col items-center justify-between bg-[url('src/assets/images/bg-sidebar-mobile.svg')] bg-contain bg-no-repeat"
    >
      <ul className="my-8 flex justify-center gap-4">
        <ButtonStep content={1} step={step} />
        <ButtonStep content={2} step={step} />
        <ButtonStep content={3} step={step} />
        <ButtonStep content={4} step={step} />
      </ul>

      {/* flex w-[90%] flex-col gap-28  */}

      <FormContainer step={step} setStep={setStep} />

      {/* <Form /> */}
      {/* <FormStep2 /> */}
      {/* <FormStep4 /> */}
      {/* <FinalStep /> */}
    </main>
  );
}

export default AppLayout;
