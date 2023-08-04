export default function GetStartedSection() {
  return (
    <section>
      <div className="container py-20">
        <h1 className="relative flex flex-col items-center justify-center mb-6">
          <span className="absolute text-[#0e1d340f] text-[56px] font-bold">GETTING STARTED IS EASY</span>
          <span className="text-[32px] text-[#001973] font-bold">GETTING STARTED IS EASY</span>
          <div className="border border-[#0d42ff] w-[50px]"></div>
        </h1>
        <div className="grid grid-cols-3 gap-6 py-8">
          <div>
            <h3 className="mb-3 font-bold text-xl text-[#0e1d34]">Send Us Your Docs</h3>
            <p>MC authority, Certificate of Insurance (CoI), Notice of Assignment (NoA) & W9 form</p>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-xl text-[#0e1d34]">NO Contract</h3>
            <p>We offer NO CONTRACT pricing because we are 100% confident that you are going to love our services.</p>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-xl text-[#0e1d34]">Start Hauling Loads</h3>
            <p>We start dispatching your truck immediately.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
