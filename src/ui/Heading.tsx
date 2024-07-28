type PropsHeading = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  title: string;

  //   titleH2?: string;
};

function Heading({ as, title }: PropsHeading) {
  return (
    <>
      {as === 'h1' && (
        <h1 className="text-2xl font-bold text-marine-blue"> {title} </h1>
      )}

      {as === 'h2' && (
        <h2 className="mb-3.5 mt-2 text-lg text-cool-gray">{title}</h2>
      )}

      {as === 'h3' && (
        <h2 className="text-lg font-bold text-marine-blue">{title}</h2>
      )}

      {as === 'h4' && <h4 className="font-bold text-marine-blue">{title}</h4>}
      {as === 'h5' && (
        <h5 className="text-sm font-bold text-marine-blue">{title}</h5>
      )}
    </>
  );
}

export default Heading;
