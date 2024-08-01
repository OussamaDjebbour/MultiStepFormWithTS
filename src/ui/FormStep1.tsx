import Heading from './Heading';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import LabelAndErrorInput from './LabelAndErrorInput';

interface FormStep1Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  // errors: ReactNode;
}

function FormStep1({ register, errors }: FormStep1Props) {
  return (
    <>
      <Heading as="h1" title="Personal info" />
      <Heading
        as="h2"
        title="Please provide your name, email address, and phone number."
      />

      <div className="flex flex-col gap-3">
        <div>
          <LabelAndErrorInput
            labelName="Name"
            errorMessage={errors?.name?.message as string}
          />
          <input
            className={`w-full rounded-lg border border-light-gray px-4 py-1 outline-0 hover:cursor-pointer hover:border-marine-blue ${errors?.name?.message ? 'border-strawberry-red' : ''} `}
            type="text"
            id="name"
            autoFocus
            placeholder="e.g. Stephen King"
            {...register('name', {
              required: 'This field is required',
            })}
          />
        </div>

        <div>
          <LabelAndErrorInput
            labelName="Email Address"
            errorMessage={errors?.email?.message as string}
          />
          <input
            className={`w-full rounded-lg border border-light-gray px-4 py-1 outline-0 hover:cursor-pointer hover:border-marine-blue ${errors?.email?.message ? 'border-strawberry-red' : ''} `}
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
          />
        </div>

        <div>
          <LabelAndErrorInput
            labelName="Phone Number"
            errorMessage={errors?.phone?.message as string}
          />
          <input
            className={`w-full rounded-lg border border-light-gray px-4 py-1 outline-0 hover:cursor-pointer hover:border-marine-blue ${errors?.phone?.message ? 'border-strawberry-red' : ''} `}
            type="tel"
            id="phone"
            placeholder="e.g. 1 234 145 789"
            {...register('phone', {
              required: 'This field is required',
              pattern: {
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
      </div>
    </>
  );
}

export default FormStep1;
