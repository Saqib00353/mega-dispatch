export default function CallToActionSection() {
  return (
    <section className="bg-gradient-to-b from-[#0e1d3499] to-[#0e1d34cc]">
      <div className="container">
        <div className="py-20 flex flex-col items-center text-white gap-4">
          <h1 className="text-2xl font-bold ">Call To Action</h1>
          <p className="max-w-[70%] text-center mb-4">
            Mega Dispatch provides top-notch dispatch services for owner-operators and small trucking companies. Maximize your
            earning potential with our dispatch services.
          </p>
          <button className="border-2 border-white px-10 py-4 uppercase rounded-md hover:border-[#0d42ff] hover:bg-[#0d42ff] font-normal">
            Call Us
          </button>
        </div>
      </div>
    </section>
  );
}
