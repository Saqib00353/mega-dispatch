export default function ContactUsSection() {
  return (
    <section className="py-20">
      <div className="container pt-14">
        <div className="flex">
          <div className="flex flex-col gap-12 grow">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-black">Location: </h2>
              <small className="text-[#0e1d34cc]">F-55 PIA Housing Society,</small>
              <small className="text-[#0e1d34cc]">Lahore, Pakistan</small>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-black">Email: </h2>
              <small className="text-[#0e1d34cc]">info@megadispatch.org</small>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-black">Call: </h2>
              <small className="text-[#0e1d34cc]">+92 322 433 7277</small>
              <small className="text-[#0e1d34cc]">+92 322 433 7277</small>
            </div>
          </div>
          <form className="grid grid-cols-2 grid-rows-6 grow-[2] gap-4  place-content-center text-sm">
            <input type="text" placeholder="You name" className="border border-gray-300 px-3 py-2 rounded-md" />
            <input type="text" placeholder="You email" className="border border-gray-300 px-3 py-2 rounded-md" />
            <input type="text" placeholder="Subject" className="col-span-2 border border-gray-300 px-3 py-2 rounded-md" />
            <textarea
              placeholder="Message"
              className="col-span-2 row-span-3 border border-gray-300 px-3 py-2 rounded-md resize-none"
            ></textarea>
            <div className="text-center col-span-2">
              <button
                type="submit"
                className="bg-[#0d42ff] px-6 w-max text-white font-base text-bold h-full rounded-md hover:opacity-80"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
