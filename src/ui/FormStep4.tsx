import Footer from './Footer';
import Heading from './Heading';

interface Step4Props {
  isYearlyChecked: boolean;
}

function FormStep4({ isYearlyChecked }: Step4Props) {
  return (
    <section>
      <Heading as="h1" title="Finishing up" />
      <Heading
        as="h2"
        title="Double-check everything looks OK before confirming. "
      />

      <div className="rounded-xl bg-Magnolia p-4">
        <div className="flex items-center justify-between border-b-2 pb-2 text-base">
          <div>
            <p className="font-bold text-marine-blue">
              Arcade ({!isYearlyChecked ? 'Monthly' : 'Yearly'})
            </p>
            <button
              className="text-cool-gray underline underline-offset-1"
              type="button"
            >
              Change
            </button>
          </div>
          <span className="font-bold text-marine-blue">$90/yr</span>
        </div>

        <div className="pt-3.5">
          <div className="flex justify-between pb-2">
            <p className="text-cool-gray">Online service</p>
            <span className="text-marine-blue">+$10/yr</span>
          </div>

          <div className="flex justify-between">
            <p className="text-cool-gray">Larger storage</p>
            <span className="text-marine-blue">+$20/yr</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-4 pt-6">
        <p className="text-base text-cool-gray">Total (per month)</p>
        <span className="font-bold text-purplish-blue">+$12/mo</span>
      </div>
    </section>
  );
}

export default FormStep4;

// import Heading from './Heading';

// interface Step3Props {
//   isYearlyChecked: boolean;
// }

// // function FormStep4({ isYearlyChecked }: { isYearlyChecked: boolean }){

// function FormStep4({ isYearlyChecked }: Step3Props) {
//   console.log('isYearlyChecked', isYearlyChecked);
//   return (
//     // <form className="w-[90%] rounded-xl bg-white px-5 py-8 min-[500px]:w-[80%]">
//     <section>
//       <Heading as="h1" title="Finishing up" />
//       <Heading
//         as="h2"
//         title="Double-check everything looks Ok before confirming.  "
//       />

//       <div className="rounded-lg bg-Magnolia p-3">
//         <div className="flex items-center justify-between">
//           <div>
//             <Heading as="h3" title="Arcade (Monthly)" />
//             <button className="text-cool-gray underline">Change</button>
//           </div>
//           <p className="text-cool-gray">$9{!isYearlyChecked ? '/mo' : '/yr'}</p>
//         </div>
//       </div>
//     </section>

//     // </form>
//   );
// }

// export default FormStep4;
