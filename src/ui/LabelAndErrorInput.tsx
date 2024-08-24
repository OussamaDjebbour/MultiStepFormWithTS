import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface LabelAndErrorInputProps {
  labelName: string;
  errorMessage?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<Record<string, unknown>>>;
}

function LabelAndErrorInput({
  labelName,
  errorMessage,
}: LabelAndErrorInputProps) {
  return (
    <div className="flex justify-between md:mb-1">
      <label htmlFor={labelName} className="text-marine-blue">
        {labelName}
      </label>
      {errorMessage && typeof errorMessage === 'string' && (
        <span className="text-sm font-bold text-strawberry-red">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default LabelAndErrorInput;
