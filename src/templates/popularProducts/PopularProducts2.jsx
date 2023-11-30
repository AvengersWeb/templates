import productOne from '/images/popular-products/2/product-1.png';
import productTwo from '/images/popular-products/2/product-2.png';
import productThree from '/images/popular-products/2/product-3.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import Button from '../../components/common/Button';
import SingleProductItem2 from '../singleProduct/SingleProductItem2';

const PopularProducts2 = () => {
  const products = [
    {
      featured_image: productOne,
      title: 'Iphone 11 with black original airbuds',
      sprice: 1499,
      _id: 1,
    },
    {
      featured_image: productTwo,
      title: 'Iphone 11 with black original airbuds',
      sprice: 1499,
      _id: 1,
    },
    {
      featured_image: productThree,
      title: 'Iphone 11 with black original airbuds',
      sprice: 1499,
      _id: 1,
    },
    {
      featured_image: productTwo,
      title: 'Iphone 11 with black original airbuds',
      sprice: 1499,
      _id: 1,
    },
    {
      featured_image: productOne,
      title: 'Iphone 11 with black original airbuds',
      sprice: 1499,
      _id: 1,
    },
    {
      featured_image: productThree,
      title: 'Iphone 11 with black original airbuds',
      sprice: 1499,
      _id: 1,
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
          <div className="flex flex-col justify-center text-center sm:text-start sm:items-start gap-y-4 mb-8 sm:min-w-[50%] md:min-w-[30%]">
            <h4 className="text-3xl font-medium uppercase">
              Our Popular Products
            </h4>
            <Button link={`/shop`} classname="bg-black text-white px-12 my-5">
              Shop Now
            </Button>
            <div className="flex gap-x-4 justify-center items-start">
              <button className="arrow-left rotate-180">
                <svg
                  width="35"
                  height="25"
                  viewBox="0 0 222 205"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M143.221 31.6688L213.85 102.298L141.942 102.111V102.111C168.198 102.18 181.497 70.5317 163.074 51.8256L143.221 31.6688Z"
                    fill="#011411"
                  />
                  <path
                    d="M213.85 102.298L166.764 149.384L143.221 172.927L163.037 152.967C181.701 134.167 168.433 102.18 141.942 102.111V102.111L213.85 102.298Z"
                    fill="#011411"
                  />
                  <path
                    d="M8.29773 102.298L141.942 102.111M213.85 102.298L166.764 149.384L143.221 172.927M213.85 102.298L143.221 31.6688M213.85 102.298L141.942 102.111M119.678 196.47L143.221 172.927M119.678 8.12585L143.221 31.6688M143.221 172.927L163.037 152.967C181.701 134.167 168.433 102.18 141.942 102.111V102.111M143.221 31.6688L163.074 51.8256C181.497 70.5317 168.198 102.18 141.942 102.111V102.111"
                    stroke="#011411"
                    stroke-width="15.5071"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="arrow-right">
                <svg
                  width="35"
                  height="25"
                  viewBox="0 0 222 205"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M143.221 31.6688L213.85 102.298L141.942 102.111V102.111C168.198 102.18 181.497 70.5317 163.074 51.8256L143.221 31.6688Z"
                    fill="#011411"
                  />
                  <path
                    d="M213.85 102.298L166.764 149.384L143.221 172.927L163.037 152.967C181.701 134.167 168.433 102.18 141.942 102.111V102.111L213.85 102.298Z"
                    fill="#011411"
                  />
                  <path
                    d="M8.29773 102.298L141.942 102.111M213.85 102.298L166.764 149.384L143.221 172.927M213.85 102.298L143.221 31.6688M213.85 102.298L141.942 102.111M119.678 196.47L143.221 172.927M119.678 8.12585L143.221 31.6688M143.221 172.927L163.037 152.967C181.701 134.167 168.433 102.18 141.942 102.111V102.111M143.221 31.6688L163.074 51.8256C181.497 70.5317 168.198 102.18 141.942 102.111V102.111"
                    stroke="#011411"
                    stroke-width="15.5071"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="sm:min-w-[50%] md:min-w-[70%]">
            <Swiper
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                991: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={30}
              pagination={false}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide className="" key={product._id}>
                  <SingleProductItem2 product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts2;
