type ButtonStepProps = {
  content: number;
  step: number;
};

function ButtonStep({ content, step }: ButtonStepProps) {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-light-gray text-White ${content === step || (step > 4 && content === 4) ? 'border-light-blue bg-light-blue font-bold text-marine-blue' : ''} `}
    >
      {content}
    </button>
  );
}

export default ButtonStep;
