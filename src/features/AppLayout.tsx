import FormStep2 from '../ui/FormStep2';
import ButtonStep from '../ui/ButtonStep';
import FinalStep from '../ui/FinalStep';
import FormStep4 from '../ui/FormStep4';
import Footer from '../ui/Footer';
import Form1 from '../ui/FormStep1';
import FormContainer from '../ui/FormContainer';

function AppLayout() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Form submitted');
  }

  return (
    <main
      // id="main1"
      className="mb-10 flex flex-col items-center justify-between bg-[url('src/assets/images/bg-sidebar-mobile.svg')] bg-contain bg-no-repeat"
    >
      <ul className="my-8 flex justify-center gap-4">
        <ButtonStep content="1" />
        <ButtonStep content="2" />
        <ButtonStep content="3" />
        <ButtonStep content="4" />
      </ul>

      {/* flex w-[90%] flex-col gap-28  */}

      <FormContainer />

      {/* <Form /> */}
      {/* <FormStep2 /> */}
      {/* <FormStep4 /> */}
      {/* <FinalStep /> */}
    </main>
  );
}

export default AppLayout;
