import { useState } from 'react';
import AddOns from './AddOns';
import Heading from './Heading';

interface Step3Props {
  isYearlyChecked: boolean;
}

// function FormStep3({ isYearlyChecked }: { isYearlyChecked: boolean }){

function FormStep3({ isYearlyChecked }: Step3Props) {
  console.log('isYearlyChecked', isYearlyChecked);

  const [isRadioChecked, setIsRadioChecked] = useState(true);

  return (
    // <form className="w-[90%] rounded-xl bg-white px-5 py-8 min-[500px]:w-[80%]">
    <section>
      <Heading as="h1" title="Pick add-ons" />
      <Heading as="h2" title="Add-ons help enhance your gaming experience." />

      <div className="flex flex-col gap-2.5">
        <AddOns
          title="Online service"
          text="Access to multiplayer games"
          price={!isYearlyChecked ? 1 : 10}
          isYearlyChecked={isYearlyChecked}
          // checked={isRadioChecked}
        />
        <AddOns
          title="Larger storage"
          text="Extra 1TB of cloud save"
          price={!isYearlyChecked ? 2 : 20}
          isYearlyChecked={isYearlyChecked}
        />
        <AddOns
          title="Customizable profile"
          text="Custom theme on your profile"
          price={!isYearlyChecked ? 2 : 20}
          isYearlyChecked={isYearlyChecked}
        />
      </div>
    </section>

    // </form>
  );
}

export default FormStep3;
