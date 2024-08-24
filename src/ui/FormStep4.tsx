import { Dispatch, SetStateAction } from 'react';
import Heading from './Heading';
import { useFormContext } from 'react-hook-form';

interface Step4Props {
  setStep: Dispatch<SetStateAction<number>>;
}

function FormStep4({ setStep }: Step4Props) {
  const { watch } = useFormContext();
  const toggle = watch('toggle');
  const selectedRadioBtn = watch('selectedRadioBtn');
  const selectedCheckbox = watch('selectedCheckbox');

  const totalPrice = selectedCheckbox.totalPrice + selectedRadioBtn.price;

  function handleReturnToStep2() {
    setStep(2);
  }
  return (
    <section>
      <Heading as="h1" title="Finishing up" />
      <Heading
        as="h2"
        title="Double-check everything looks OK before confirming. "
      />

      <div className="rounded-xl bg-Magnolia p-4 md:mt-8">
        <div className="flex items-center justify-between border-b-2 pb-2 text-base">
          <div>
            <p className="font-bold text-marine-blue">
              {selectedRadioBtn.title} ({!toggle ? 'Monthly' : 'Yearly'})
            </p>

            <button
              className="text-cool-gray underline underline-offset-1 hover:text-purplish-blue"
              type="button"
              onClick={handleReturnToStep2}
            >
              Change
            </button>
          </div>
          <span className="font-bold text-marine-blue">
            ${selectedRadioBtn.price}/{!toggle ? 'mo' : 'yr'}
          </span>
        </div>

        <div className="pt-3.5">
          {selectedCheckbox.checkboxInfo.map(
            (checkbox: { title: string; price: number }) => (
              <div className="flex justify-between pb-2" key={checkbox.title}>
                <p className="text-cool-gray">{checkbox.title}</p>
                <span className="text-marine-blue">
                  +${checkbox.price}/{!toggle ? 'mo' : 'yr'}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="flex justify-between px-4 pt-6">
        <p className="text-base text-cool-gray">
          Total (per {!toggle ? 'month' : 'year'} )
        </p>
        <span className="font-bold text-purplish-blue">
          +${totalPrice}/{!toggle ? 'mo' : 'yr'}
        </span>
      </div>
    </section>
  );
}

export default FormStep4;
