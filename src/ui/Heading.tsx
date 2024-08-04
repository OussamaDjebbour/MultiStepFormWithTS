type PropsHeading = {
  as: 'h1' | 'h2' | 'h3' | 'h4';
  title: string;
};

function Heading({ as, title }: PropsHeading) {
  return (
    <>
      {as === 'h1' && (
        <h1 className="text-2xl font-bold text-marine-blue md:text-3xl">
          {title}
        </h1>
      )}

      {as === 'h2' && (
        <h2 className="mb-3.5 mt-2 text-lg text-cool-gray">{title}</h2>
      )}

      {as === 'h3' && (
        <h2 className="text-lg font-bold text-marine-blue">{title}</h2>
      )}

      {as === 'h4' && (
        <h4 className="text-sm font-bold text-marine-blue min-[500px]:text-base min-[600px]:text-lg">
          {title}
        </h4>
      )}
    </>
  );
}

export default Heading;
