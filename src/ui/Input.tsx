import { ReactNode } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';

interface InputProps {
  type: string;
  labelName: string;
  placeholder: string;
  errors: FieldErrors<FieldValues>;
  nameError?: string;
  emailError?: string;
  phoneError?: string;
}

function Input({
  type,
  labelName,
  placeholder,
  errors,
  nameError,
  emailError,
  phoneError,
}: InputProps) {
  console.log('nameError', nameError);
  console.log('emailError', emailError);
  console.log('phoneError', phoneError);

  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor={type} className="text-marine-blue">
          {labelName}
        </label>
        {nameError && typeof errors?.name?.message === 'string' && (
          <span className="text-sm text-strawberry-red">
            {errors?.name?.message}
          </span>
        )}
        {/* {type === 'text' &&
          errors?.name &&
          typeof errors?.name?.message === 'string' && (
            <span className="text-sm text-strawberry-red">
              {errors?.name?.message}
            </span>
          )} */}
        {/* {type === 'email' &&
          errors?.email &&
          typeof errors?.email?.message === 'string' && (
            <span className="text-sm text-strawberry-red">
              {errors?.email?.message}
            </span>
          )}
        {type === 'tel' &&
          errors?.tel &&
          typeof errors?.tel?.message === 'string' && (
            <span className="text-sm text-strawberry-red">
              {errors?.tel?.message}
            </span>
          )} */}
      </div>

      <input
        className="w-full border-[2px] border-light-gray px-4 py-1 outline-0"
        type={type}
        id={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
