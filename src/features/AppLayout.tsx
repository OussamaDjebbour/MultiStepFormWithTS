import { useState } from 'react';
import ButtonStep from '../ui/ButtonStep';
import FormContainer from './FormContainer';

function AppLayout() {
  const [step, setStep] = useState<number>(2);

  return (
    <main className="bg-image-mobile mb-10 flex flex-col items-center justify-between bg-contain bg-no-repeat">
      <ul className="my-8 flex justify-center gap-4">
        <ButtonStep content={1} step={step} />
        <ButtonStep content={2} step={step} />
        <ButtonStep content={3} step={step} />
        <ButtonStep content={4} step={step} />
      </ul>

      <FormContainer step={step} setStep={setStep} />
    </main>
  );
}

export default AppLayout;
