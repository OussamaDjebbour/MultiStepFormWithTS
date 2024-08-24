import { useState } from 'react';
import FormContainer from './FormContainer';
import BtnStepContainer from '../ui/BtnStepContainer';

function AppLayout() {
  const [step, setStep] = useState<number>(1);

  return (
    <main className="flex h-screen flex-col items-center justify-between bg-image-mobile bg-contain bg-no-repeat md:grid md:h-[568px] md:w-full md:grid-cols-[274px_1fr] md:items-start md:gap-6 md:bg-White md:bg-image-desktop md:pb-0 min-[1000px]:max-w-[1000px]">
      <BtnStepContainer step={step} />

      <FormContainer step={step} setStep={setStep} />
    </main>
  );
}

export default AppLayout;
