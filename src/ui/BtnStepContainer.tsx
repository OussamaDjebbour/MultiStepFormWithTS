import { useEffect, useState } from 'react';
import ButtonStep from './ButtonStep';
import Heading from './Heading';

interface BtnStepContainerProps {
  step: number;
}

function BtnStepContainer({ step }: BtnStepContainerProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? (
    <ul className="my-8 flex justify-center gap-4 md:flex-col md:justify-start md:gap-8 md:pl-10">
      <li>
        <ButtonStep content={1} step={step} />
      </li>
      <li>
        <ButtonStep content={2} step={step} />
      </li>
      <li>
        <ButtonStep content={3} step={step} />
      </li>
      <li>
        <ButtonStep content={4} step={step} />
      </li>
    </ul>
  ) : (
    <ul className="my-8 flex justify-center gap-4 md:flex-col md:justify-start md:gap-8 md:pl-10">
      <li className="flex items-center gap-4">
        <ButtonStep content={1} step={step} />
        <div>
          <p className="uppercase leading-5 text-cool-gray">Step{1}</p>
          <p className="text-lg uppercase leading-6 text-Magnolia">Your info</p>
        </div>
      </li>
      <li className="flex items-center gap-4">
        <ButtonStep content={2} step={step} />
        <div>
          <p className="uppercase leading-5 text-cool-gray">Step{2}</p>
          <p className="text-lg uppercase text-Magnolia">select plan</p>
        </div>
      </li>
      <li className="flex items-center gap-4">
        <ButtonStep content={3} step={step} />
        <div>
          <p className="uppercase leading-5 text-cool-gray">Step{3}</p>
          <p className="text-lg uppercase text-Magnolia">add-ons</p>
        </div>
      </li>
      <li className="flex items-center gap-4">
        <ButtonStep content={4} step={step} />
        <div>
          <p className="uppercase leading-5 text-cool-gray">Step{4}</p>
          <p className="text-lg uppercase text-Magnolia">summary</p>
        </div>
      </li>
    </ul>
  );
}

export default BtnStepContainer;
