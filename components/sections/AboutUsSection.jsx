import Import from 'next/image';
import AboutImage from '@assets/images/about.jpg';

export default function AboutUsSection() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-[32px] text-[#001973]">About Us</h2>
            <p className="leading-6 text-base text-justify mb-2">
              Our services are mainly for owner operators, independent truckers & carriers with their own DOT or MC authority.
              Itâ€™s in our best interest for us to find the best paying loads available for you. We dispatch dry-Vans, Reefers,
              Flatbeds, Box Trucks. We find you the best truck loads in the US. We help you improve your profits and experience.
              Whether you are looking for your next load or you need a load that takes you home, Quality Dispatch is committed to
              your goals. For us to be successful, you must be successful first.
            </p>
            <p className="leading-6 text-base text-justify">
              Our Experienced truck dispatchers set you up directly with the brokers so you can focus on driving. We handle all
              the necessary paperwork. No more worrying about follow-ups with the Broker for lumper and detention pay. Our
              in-house dispatchers take care of all admin work for you. You pick the areas you want to drive and we negotiate hard
              for the best paying rates and quality routes.
            </p>
          </div>
          <div>
            <Import src={AboutImage} height={410} width={546} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
