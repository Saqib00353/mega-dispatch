import Image from 'next/image';
import ServiceImage1 from '@assets/images/ServiceImage1.jpeg';
import ServiceImage2 from '@assets/images/ServiceImage2.jpeg';
import ServiceImage3 from '@assets/images/ServiceImage3.jpeg';
import ServiceImage4 from '@assets/images/ServiceImage4.jpeg';
import ServiceImage5 from '@assets/images/ServiceImage5.jpeg';

export default function ServicesSection() {
  return (
    <section className="pb-20">
      <div className="container">
        <h1 className="relative flex flex-col items-center justify-center mb-6 py-8">
          <span className="absolute text-[#0e1d340f] text-[56px] font-bold">OUR SERVICES</span>
          <span className="text-[32px] text-[#001973] font-bold">OUR SERVICES</span>
          <div className="border border-[#0d42ff] w-[50px]"></div>
        </h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="border border-gray-200">
            <div className="h-[596px] overflow-hidden">
              <Image
                src={ServiceImage1}
                width={356}
                height={596}
                alt="service image 1"
                className="w-full h-full object-cover hover:scale-105"
              />
            </div>
            <div className="px-8 py-4">
              <a href="">
                <h2 className="mb-4 text-[#001973] font-bold text-2xl">REEFER</h2>
              </a>
              <p className="text-[#0e1d34] text-[15px]">
                Reefer freight is any shipment that requires its temperature to be controlled, monitored, and maintained within
                specific limits. Reefer can apply to FTL, intermodal, ocean, and air freight. The most common products that
                require reefer freight are food, chemicals, and pharmaceuticals. Do you own a refrigerated trailer and want to
                transport perishable and other temperature-sensitive goods? Call us +92 322 433 7277
              </p>
            </div>
          </div>
          <div className="border border-gray-200">
            <div className="h-[596px] overflow-hidden">
              <Image
                src={ServiceImage2}
                width={356}
                height={596}
                alt="service image 1"
                className="w-full h-full object-cover hover:scale-105"
              />
            </div>
            <div className="px-8 py-4">
              <a href="">
                <h2 className="mb-4 text-[#001973] font-bold text-2xl">Flat Bed</h2>
              </a>
              <p className="text-[#0e1d34] text-[15px]">
                A flatbed trailer is a typical open deck equipment that has no roof nor sides. It is mainly used for transporting
                heavy, oversized, wide and indelicate goods such as machinery, building supplies or equipment. The flatly shaped
                body makes it much easier to load and unload goods. Searching heavy haul loads for your flatbed/step deck trailer?
                Search no more!
              </p>
            </div>
          </div>
          <div className="border border-gray-200">
            <div className="h-[596px] overflow-hidden">
              <Image
                src={ServiceImage3}
                width={356}
                height={596}
                alt="service image 1"
                className="w-full h-full object-cover hover:scale-105"
              />
            </div>
            <div className="px-8 py-4">
              <a href="">
                <h2 className="mb-4 text-[#001973] font-bold text-2xl">Dry Van</h2>
              </a>
              <p className="text-[#0e1d34] text-[15px]">
                Dry Van is a type of semi-trailer that's fully enclosed to protect shipments from harsh conditions of the
                environment. These are designed to carry palletized, boxed, or loose freight and variety of less-than-truckload
                (LTL) shipments. Are you finding loads for your dry van? Outsource this responsibility to Quality Dispatch and
                focus on what you do the best- Just Drive!
              </p>
            </div>
          </div>
          <div className="border border-gray-200">
            <div className="h-[596px] overflow-hidden">
              <Image
                src={ServiceImage4}
                width={356}
                height={596}
                alt="service image 1"
                className="w-full h-full object-cover hover:scale-105"
              />
            </div>
            <div className="px-8 py-4">
              <a href="">
                <h2 className="mb-4 text-[#001973] font-bold text-2xl">Power Only</h2>
              </a>
              <p className="text-[#0e1d34] text-[15px]">
                Quality Dispatch has exclusive connect with the top 100+ reputed Power Only brokers and shippers, so you don't
                have to sit idle in search of loads instead of driving. Our dedicated dispatcher understands the truck-to-load
                ratio and uses this information while negotiating higher freight rates on your behalf, helping you earn more
                behind each mile you drive!
              </p>
            </div>
          </div>
          <div className="border border-gray-200">
            <div className="h-[596px] overflow-hidden">
              <Image
                src={ServiceImage5}
                width={356}
                height={596}
                alt="service image 1"
                className="w-full h-full object-cover hover:scale-105"
              />
            </div>
            <div className="px-8 py-4">
              <a href="">
                <h2 className="mb-4 text-[#001973] font-bold text-2xl">Box Truck</h2>
              </a>
              <p className="text-[#0e1d34] text-[15px]">
                The box truck, also known as the cube or box van, is ideal for the transport of larger materials which a cargo van
                cannot support. Multiple pallets, numerous boxes, and even bulky furniture can fit perfectly within the box truck
                cargo bay. Ranging in length from 10,000 to 28,000 (LBS.), the box truck is ideal for the large product delivery
                aspects of any business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
