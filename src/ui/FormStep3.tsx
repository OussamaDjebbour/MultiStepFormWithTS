import { Dispatch, SetStateAction } from 'react';
import AddOns from './AddOns';
import Heading from './Heading';

interface selectedCheckbox {
  checkboxInfo: { title: string; price: number }[];
  totalPrice: number;
}

interface Step3Props {
  isYearlyChecked: boolean;
  selectedCheckbox: selectedCheckbox;

  setSelectedCheckbox: Dispatch<
    SetStateAction<{
      checkboxInfo: { title: string; price: number }[];
      totalPrice: number;
    }>
  >;
}

function FormStep3({
  isYearlyChecked,
  selectedCheckbox,
  setSelectedCheckbox,
}: Step3Props) {
  return (
    <section>
      <Heading as="h1" title="Pick add-ons" />
      <Heading as="h2" title="Add-ons help enhance your gaming experience." />

      <div className="flex flex-col gap-2.5">
        <AddOns
          title="Online service"
          text="Access to multiplayer games"
          price={!isYearlyChecked ? 1 : 10}
          isYearlyChecked={isYearlyChecked}
          selectedCheckbox={selectedCheckbox}
          setSelectedCheckbox={setSelectedCheckbox}
        />
        <AddOns
          title="Larger storage"
          text="Extra 1TB of cloud save"
          price={!isYearlyChecked ? 2 : 20}
          isYearlyChecked={isYearlyChecked}
          selectedCheckbox={selectedCheckbox}
          setSelectedCheckbox={setSelectedCheckbox}
        />
        <AddOns
          title="Customizable profile"
          text="Custom theme on your profile"
          price={!isYearlyChecked ? 2 : 20}
          isYearlyChecked={isYearlyChecked}
          selectedCheckbox={selectedCheckbox}
          setSelectedCheckbox={setSelectedCheckbox}
        />
      </div>
    </section>
  );
}

export default FormStep3;
