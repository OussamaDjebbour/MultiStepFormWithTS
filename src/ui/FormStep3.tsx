import AddOns from './AddOns';
import Heading from './Heading';
import { useFormContext } from 'react-hook-form';
import { MonthlyAddOns } from './FormStep2';

function FormStep3() {
  const { watch } = useFormContext();
  const toggle = watch('toggle');

  return (
    <section>
      <Heading as="h1" title="Pick add-ons" />
      <Heading as="h2" title="Add-ons help enhance your gaming experience." />

      <div className="flex flex-col gap-2.5 min-[600px]:mt-8 min-[600px]:gap-6 md:max-w-[500px]">
        <AddOns
          title="Online service"
          text="Access to multiplayer games"
          price={!toggle ? MonthlyAddOns.onlineService : 10}
        />
        <AddOns
          title="Larger storage"
          text="Extra 1TB of cloud save"
          price={!toggle ? MonthlyAddOns.largerStorage : 20}
        />
        <AddOns
          title="Customizable profile"
          text="Custom theme on your profile"
          price={!toggle ? MonthlyAddOns.customizableProfile : 20}
        />
      </div>
    </section>
  );
}

export default FormStep3;
