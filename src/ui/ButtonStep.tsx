type ButtonStepProps = {
  content: string;
};

function ButtonStep({ content }: ButtonStepProps) {
  return (
    <li>
      <button
        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-light-gray text-White ${content === '1' ? 'bg-red-500' : 'bg-marine-blue'} `}
      >
        {content}
      </button>
    </li>
  );
}

export default ButtonStep;
