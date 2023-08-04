'use client';
import { useRef } from 'react';
import Image from 'next/image';
import TestimonialImage1 from '@assets/images/testimonials-31.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="bg-[#0e1d34cc] text-white py-20">
      <div className="container flex justify-center">
        <div>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper w-[100dvh]"
          >
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-1 py-6">
                <div className="rounded-full overflow-hidden border-[6px] border-[#ffffff26]">
                  <Image src={TestimonialImage1} width={88} height={88} alt="TestimonialImage1" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="text-center">
                    <h3 className="text-2xl">M.Mustafa</h3>
                    <span className="font-medium text-sm text-[#ffffff96]">C.E.O Owner</span>
                  </div>
                  <div>Salam@MegaDispatch.org</div>
                  <div>+30924585858585</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-1 py-6">
                <div className="rounded-full overflow-hidden border-[6px] border-[#ffffff26]">
                  <Image src={TestimonialImage1} width={88} height={88} alt="TestimonialImage1" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="text-center">
                    <h3 className="text-2xl">M.Mustafa</h3>
                    <span className="font-medium text-sm text-[#ffffff96]">C.E.O Owner</span>
                  </div>
                  <div>Salam@MegaDispatch.org</div>
                  <div>+30924585858585</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-1 py-6">
                <div className="rounded-full overflow-hidden border-[6px] border-[#ffffff26]">
                  <Image src={TestimonialImage1} width={88} height={88} alt="TestimonialImage1" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="text-center">
                    <h3 className="text-2xl">M.Mustafa</h3>
                    <span className="font-medium text-sm text-[#ffffff96]">C.E.O Owner</span>
                  </div>
                  <div>Salam@MegaDispatch.org</div>
                  <div>+30924585858585</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
