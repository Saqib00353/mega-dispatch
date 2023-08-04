import Image from 'next/image';
import HeroImage from '@assets/images/hero-img.svg';

export default function HeroSection() {
  return (
    <section className="bg-[#0e1d34] text-white">
      <div className="container flex gap-16 p-3 pb-12">
        <div className="flex flex-col w-2/4 p-3 gap-8">
          <h1 className="text-5xl font-bold leading-tight">We are here to guarantee you find the best loads</h1>
          <p>
            We have a dedicates staff to provide you safe, reliable and highest paying loads in the industry. Our dispatching
            strategies will gurantee you the maximum weekly gross.
          </p>
          <div className="flex justify-between px-8">
            <h3 className="w-10">Miles</h3>
            <h3 className="w-10">Loads Booked</h3>
            <h3 className="w-10">Weekly Gross</h3>
            <h3 className="w-10">Per Mile</h3>
          </div>
        </div>
        <div className="grow">
          <Image src={HeroImage} height={397} width={450} alt="hero_image" />
        </div>
      </div>
    </section>
  );
}
