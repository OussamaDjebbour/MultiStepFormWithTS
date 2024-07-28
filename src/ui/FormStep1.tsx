import { Dispatch, ReactNode } from 'react';
import Footer from './Footer';
import Heading from './Heading';
import Input from './Input';
import Plan from './PlanRadioBtn';
import {
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import LabelAndErrorInput from './LabelAndErrorInput';

interface FormStep1Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  // errors: ReactNode;
}

function FormStep1({ register, errors }: FormStep1Props) {
  return (
    // <form className="w-[90%] rounded-xl bg-White px-5 py-8 min-[500px]:w-[80%]">
    <>
      <Heading as="h1" title="Personal info" />
      <Heading
        as="h2"
        title="Please provide your name, email address, and phone number."
      />

      <div className="flex flex-col gap-3">
        <div>
          {/* <div className="flex justify-between">
            <label htmlFor="name" className="text-marine-blue">
              Name
            </label>
            {errors?.name?.message &&
              typeof errors?.name?.message === 'string' && (
                <span className="text-sm text-strawberry-red">
                  {errors?.name?.message}
                </span>
              )}
          </div> */}
          <LabelAndErrorInput
            labelName="Name"
            errorMessage={errors?.name?.message as string}
          />

          <input
            className="w-full border-[2px] border-light-gray px-4 py-1 outline-0"
            // type={type}
            id="name"
            placeholder="e.g. Stephen King"
            {...register('name', {
              required: 'This field is required',
            })}
          />
        </div>
        {/* {errors.name && <p> Name is required.</p>} */}
        {/* <Input
          type="text"
          errors={errors}
          nameError={errors?.name?.message as string}
          labelName="Name"
          placeholder="e.g. Stephen King"
          {...register('name', { required: 'This field is required' })}
        /> */}
        <div>
          {/* <div className="flex justify-between">
            <label htmlFor="email" className="text-marine-blue">
              Email Address
            </label>
            {errors?.email?.message &&
              typeof errors?.email?.message === 'string' && (
                <span className="text-sm text-strawberry-red">
                  {errors?.email?.message}
                </span>
              )}
          </div> */}
          <LabelAndErrorInput
            labelName="Email Address"
            errorMessage={errors?.email?.message as string}
          />

          <input
            className="w-full border-[2px] border-light-gray px-4 py-1 outline-0"
            // type={type}
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
            // aria-invalid={errors.mail ? 'true' : 'false'}
          />
        </div>
        {/* <Input
          type="email"
          errors={errors}
          emailError={errors?.email?.message as string}
          labelName="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          {...register('email', { required: 'This field is required' })}
        /> */}

        <div>
          <LabelAndErrorInput
            labelName="Phone Number"
            errorMessage={errors?.phone?.message as string}
          />
          <input
            className="w-full border-[2px] border-light-gray px-4 py-1 outline-0"
            // type={type}
            id="phone"
            placeholder="e.g. 1 234 145 789"
            {...register('phone', {
              required: 'This field is required',
              pattern: {
                // value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                value:
                  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}$/,
                message: 'Invalid phone number',
              },
              minLength: {
                value: 8,
                message: 'Invalid phone number',
              },
              maxLength: {
                value: 15,
                message: 'Invalid phone number',
              },
            })}
          />
        </div>

        {/* <Input
          type="tel"
          errors={errors}
          phoneError={errors?.phone?.message as string}
          labelName="Phone Number"
          placeholder="e.g. 1 234 145 789"
          {...register('phone', { required: 'This field is required' })}
        /> */}
      </div>
    </>
  );
}

export default FormStep1;
