import testimonialImage from '/images/subscribe.webp';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import userTwo from '/images/home/user2.webp';
import userThree from '/images/home/user3.webp';
import userFour from '/images/home/user4.webp';
import userFive from '/images/home/user5.webp';

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

const Testimonials1 = () => {
  return (
    <div className="mt-20 relative py-12 md:py-20 lg:py-28 min-h-[400px] md:min-h-[600px] overflow-hidden">
      <div className="absolute w-[35%] left-0 top-0 h-full">
        <img
          src={testimonialImage}
          alt=""
          className="rounded-r-xl h-full object-cover"
        />
      </div>
      <div className="flex flex-row gap-x-8">
        <div className="w-[35%]"></div>
        <div className="relative w-[65%] ">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mx-4 md:mx-20">
            <h3 className="font-bold text-2xl md:text-4xl">Our Reviews</h3>
            <div className="flex gap-x-4 justify-center items-center">
              <button className="arrow-left">
                <FaArrowLeft size={30} />
              </button>
              <button className="arrow-right">
                <FaArrowRight size={30} />
              </button>
            </div>
          </div>

          {/* testimonial */}
          <Swiper
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              490: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={2}
            pagination={false}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper py-12 text-center z-100 -ml-16 md:-ml-40"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide
                className="max-w-[500px] bg-white shadow-light p-3 md:p-6 z-100 mx-3 rounded-xl"
                key={i}
              >
                <div>
                  <p className="relative z-20">{item.comment}</p>
                </div>
                <div className="flex gap-x-4 justify-center items-center mt-11">
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-full object-cover h-14 w-14 border-rose-600 border"
                  />
                  <div>
                    <h4 className="font-medium text-lg">{item.name}</h4>
                    <p className="font-medium text-sm">{item.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;
