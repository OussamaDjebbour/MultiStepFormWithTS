import Heading from './Heading';

function FinalStep() {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <img
        className="mb-6"
        src="././public/images/icon-thank-you.svg"
        alt="no image"
      />

      <Heading as="h1" title="Thank you!" />
      <p className="mt-2 text-center text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </section>
  );
}

export default FinalStep;
