import Heading from './Heading';
import PlanRadioBtn from './PlanRadioBtn';
import { useFormContext } from 'react-hook-form';
import transformString from 'src/helpers/TransformString';

export const MonthlyPlan = {
  arcade: 9,
  advanced: 12,
  pro: 15,
} as const;

export const YearlyPlan = {
  arcade: 90,
  advanced: 120,
  pro: 150,
} as const;

export const MonthlyAddOns = {
  onlineService: 1,
  largerStorage: 2,
  customizableProfile: 2,
} as const;

export const YearlyAddOns = {
  onlineService: 10,
  largerStorage: 20,
  customizableProfile: 20,
} as const;

export type Plans = keyof typeof YearlyPlan;
export type AddOns = keyof typeof YearlyAddOns;

function FormStep2() {
  const { register, watch, setValue } = useFormContext();
  const toggle = watch('toggle');
  const selectedRadioBtn = watch('selectedRadioBtn');
  const selectedCheckbox = watch('selectedCheckbox');

  return (
    <section>
      <Heading as="h1" title="Select your plan" />
      <Heading
        as="h2"
        title="You have the option of monthly or yearly billing."
      />
      <div className="flex flex-col gap-2.5 min-[600px]:gap-4 md:mt-10 md:flex-row md:justify-between">
        <PlanRadioBtn
          price={!toggle ? MonthlyPlan.arcade : YearlyPlan.arcade}
          title="arcade"
          icon="/images/icon-arcade.svg"
        />
        <PlanRadioBtn
          price={!toggle ? MonthlyPlan.advanced : YearlyPlan.advanced}
          title="advanced"
          icon="/images/icon-advanced.svg"
        />
        <PlanRadioBtn
          price={!toggle ? MonthlyPlan.pro : YearlyPlan.pro}
          title="pro"
          icon="/images/icon-pro.svg"
        />
      </div>

      <div className="mt-4 flex w-full justify-center rounded-xl bg-Magnolia p-3 min-[600px]:mt-6 md:mt-8">
        <div className="flex items-center gap-8">
          <input
            className="peer hidden"
            id="toggle"
            type="checkbox"
            {...register('toggle', {
              onChange: (e) => {
                setValue(
                  'selectedRadioBtn.price',
                  e.target.checked
                    ? YearlyPlan[
                        selectedRadioBtn.title as keyof typeof YearlyPlan
                      ]
                    : MonthlyPlan[
                        selectedRadioBtn.title as keyof typeof MonthlyPlan
                      ],
                );

                setValue(
                  'selectedCheckbox.checkboxInfo',
                  selectedCheckbox.checkboxInfo.map(
                    (checkbox: { title: string; price: number }) => {
                      console.log('checkbox', checkbox);
                      console.log(
                        'checkboxmmmmmmmm',
                        transformString(checkbox?.title),
                      );
                      return {
                        ...checkbox,
                        price: e.target.checked
                          ? YearlyAddOns[
                              transformString(
                                checkbox.title,
                              ) as keyof typeof YearlyAddOns
                            ]
                          : MonthlyAddOns[
                              transformString(
                                checkbox.title,
                              ) as keyof typeof MonthlyAddOns
                            ],
                      };
                    },
                  ),
                );

                setValue(
                  'selectedCheckbox.totalPrice',
                  selectedCheckbox.checkboxInfo.reduce(
                    (total: number, curr: { title: string; price: number }) =>
                      total + curr.price,
                    0,
                  ),
                );
              },
            })}
          />

          <span className="font-bold text-marine-blue">Monthly</span>
          <label
            className="relative inline-block h-[2em] w-[4em] cursor-pointer rounded-[2em] border border-solid border-[#e8eae9] bg-['#fbfbfb'] p-0.5 shadow outline-0 transition-all duration-500 ease-linear before:relative before:hidden before:h-full before:w-1/2 before:content-[''] after:relative after:left-0 after:block after:h-full after:w-1/2 after:rounded-[2em] after:bg-[#fbfbfb] after:content-[''] after:[transition:left_0.3s_cubic-bezier(0.175,0.885,0.32,1.275),padding_0.3s_ease,margin_0.3s_ease] hover:after:will-change-[padding] active:shadow-[inset_0_0_0_2em_#e8eae9] active:after:pr-[.8em] peer-checked:bg-[#86d993] peer-checked:after:left-1/2 peer-checked:active:shadow-none peer-checked:active:after:pl-[-.8em]"
            htmlFor="toggle"
          ></label>
          <span className="font-[500] text-cool-gray">Yearly</span>
        </div>
      </div>
    </section>
  );
}

export default FormStep2;
