import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

import userTwo from '/images/home/user2.webp';
import userThree from '/images/home/user3.webp';
import userFour from '/images/home/user4.webp';
import userFive from '/images/home/user5.webp';

import './Testimonial2styles.css';

const testimonials = [
  {
    comment:
      'Sleek sophistication meets precision in this timepiece. Its minimalist design complements any style, while impeccable craftsmanship ensures lasting quality. A true blend of form and function.',
    img: userTwo,
    name: 'John Doe',
    designation: 'Customer',
  },
  {
    comment:
      'Elegance redefined. This watch seamlessly merges classic charm with modern innovation. Its timeless appeal and reliable performance make it a must-have for every discerning wrist.',
    img: userThree,
    name: 'Jane Bope',
    designation: 'Customer',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique, iure facere, qui ut vero numquam quae aut mollitia inventore dolores consectetur temporibus esse quo excepturi hic vel. Corrupti exercitationem rem facere distinctio quibusdam placeat ratione ut accusamus fugit neque.',
    img: userFour,
    name: 'Saad Hasan',
    designation: 'Customer',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique, iure facere, qui ut vero numquam quae aut mollitia inventore dolores . Corrupti exercitationem rem facere distinctio quibusdam placeat ratione ut accusamus fugit neque.',
    img: userFive,
    name: 'Shafayetur Rahman',
    designation: 'Customer',
  },
  {
    comment:
      'Qui ut vero numquam quae aut mollitia inventore dolores consectetur temporibus esse quo excepturi hic vel. Corrupti exercitationem rem facere distinctio quibusdam placeat ratione ut accusamus fugit neque.',
    img: userTwo,
    name: 'John Doe',
    designation: 'Customer',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique, iure facere, qui ut vero numquam quae aut mollitia inventore dolores consectetur temporibus esse quo excepturi hic vel.',
    img: userFour,
    name: 'Kamal Malik',
    designation: 'Customer',
  },
];

const Testimonials2 = () => {
  return (
    <section className="py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 md:mb-16">
          Read What Our Customers Say
        </h2>

        <Swiper
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={2}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper relative flex gap-x-4 items-center max-w-[1100px] mx-auto px-2 pt-4 pb-12"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide
              className="relative font-secondary bg-white shadow-light p-6 sm:p-11 max-w-[530px] rounded-xl z-10"
              key={i}
            >
              <svg
                width="55"
                height="55"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-20 absolute left-4 md:left-4 top-0 sm:top-5 -z-10"
              >
                <path
                  d="M19.8511 6C16.4669 6 13.7234 8.74345 13.7234 12.1277C13.7234 13.6269 14.5701 16.5034 16.0213 17.2876M9.12766 6C5.74345 6 3 8.74345 3 12.1277C3 13.6269 3.84672 16.5034 5.29787 17.2876M21 14.8085C21 16.5006 19.6283 17.8723 17.9362 17.8723C16.2441 17.8723 14.8723 16.5006 14.8723 14.8085C14.8723 13.1164 16.2441 11.7447 17.9362 11.7447C19.6283 11.7447 21 13.1164 21 14.8085ZM10.2766 14.8085C10.2766 16.5006 8.90487 17.8723 7.21277 17.8723C5.52066 17.8723 4.14894 16.5006 4.14894 14.8085C4.14894 13.1164 5.52066 11.7447 7.21277 11.7447C8.90487 11.7447 10.2766 13.1164 10.2766 14.8085Z"
                  stroke="black"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-base leading-7">{item.comment}</p>
              <div className="flex items-center gap-x-4 mt-6">
                <img
                  src={item.img}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col gap-y-0.5">
                  <h5 className="font-bold text-xl">{item.name}</h5>
                  <p className="text-sm opacity-75">{item.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials2;
