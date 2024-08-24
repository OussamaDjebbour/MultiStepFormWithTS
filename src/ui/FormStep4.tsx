import { Dispatch, SetStateAction } from 'react';
import Heading from './Heading';
import { useFormContext } from 'react-hook-form';

interface selectedRadio {
  title: string;
  price: number;
}

interface selectedCheckbox {
  checkboxInfo: { title: string; price: number }[];
  totalPrice: number;
}

interface Step4Props {
  isYearlyChecked: boolean;
  setStep: Dispatch<SetStateAction<number>>;
  selectedRadio: selectedRadio;
  selectedCheckbox: selectedCheckbox;
}

function FormStep4({
  isYearlyChecked,
  setStep,
  selectedRadio,
  // selectedCheckbox,
}: Step4Props) {
  const { watch } = useFormContext();
  const toggle = watch('toggle');
  const selectedRadioBtn = watch('selectedRadioBtn');
  const selectedCheckbox = watch('selectedCheckbox');

  const totalPrice = selectedCheckbox.totalPrice + selectedRadioBtn.price;
  // const totalPrice = selectedCheckbox.totalPrice + selectedRadio.price;

  console.log('selectedCheckBox', selectedCheckbox);

  function handleRuturnToStep2() {
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
            {/* <p className="font-bold text-marine-blue">
              {selectedRadio.title} ({!toggle ? 'Monthly' : 'Yearly'})
            </p> */}
            <button
              className="text-cool-gray underline underline-offset-1 hover:text-purplish-blue"
              type="button"
              onClick={handleRuturnToStep2}
            >
              Change
            </button>
          </div>
          <span className="font-bold text-marine-blue">
            ${selectedRadioBtn.price}/{!toggle ? 'mo' : 'yr'}
          </span>
          {/* <span className="font-bold text-marine-blue">
            ${selectedRadio.price}/{!toggle ? 'mo' : 'yr'}
          </span> */}
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
