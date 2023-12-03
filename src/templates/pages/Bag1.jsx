// hero section imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import heroOne from '/images/bag1/hero1.webp';
import heroTwo from '/images/bag1/hero2.webp';

// popular products section imports
import bagOne from '/images/bag1/product1.webp';
import bagTwo from '/images/bag1/product2.webp';
import bagThree from '/images/bag1/product3.webp';
import bagFour from '/images/bag1/product4.webp';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
// import Loader from '../../components/Loader';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  //   Autoplay,
  Pagination,
  //   Navigation,
  EffectCoverflow,
} from 'swiper/modules';
// import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

//navbar
const Navbar = () => {
  return <>Navbar</>;
};
// hero
const Hero = () => {
  const heroImages = [
    {
      img: heroOne,
    },
    {
      img: heroTwo,
    },
  ];

  return (
    <section className="AW_HERO_HEADER_1" id="AW_HERO_HEADER_1">
      <div className="container mx-auto px-4">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
          modules={[Navigation, Autoplay]}
          className="mySwiper relative max-w-[1380px] mx-auto z-10"
        >
          {/* <button className="arrow-left rotate-180 absolute top-1/2 left-[5%] -translate-y-1/2 z-100">
              <svg
                width="40"
                height="30"
                viewBox="0 0 402 315"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8109 143.821H0.471853V172.499H14.8109V143.821ZM387.626 172.499C395.546 172.499 401.966 166.079 401.966 158.16C401.966 150.241 395.546 143.821 387.626 143.821V172.499ZM258.575 14.7694V0.430349H229.897V14.7694H258.575ZM379.319 169.307C386.272 173.099 394.982 170.537 398.774 163.585C402.566 156.633 400.004 147.923 393.051 144.131L379.319 169.307ZM229.896 300.109V314.449H258.574V300.109H229.896ZM14.8109 172.499H386.184V143.821H14.8109V172.499ZM386.184 172.499H387.626V143.821H386.184V172.499ZM229.897 14.7694C229.897 35.8824 241.3 56.0477 255.299 73.2284C269.584 90.7601 288.28 107.253 306.443 121.288C324.69 135.388 342.866 147.362 356.439 155.793C363.239 160.018 368.916 163.372 372.911 165.681C374.909 166.836 376.489 167.73 377.579 168.341C378.125 168.647 378.548 168.882 378.841 169.044C378.988 169.125 379.101 169.188 379.181 169.232C379.221 169.254 379.253 169.271 379.276 169.284C379.288 169.29 379.297 169.295 379.304 169.299C379.308 169.301 379.312 169.303 379.313 169.304C379.317 169.306 379.319 169.307 386.185 156.719C393.051 144.131 393.053 144.131 393.054 144.132C393.054 144.132 393.054 144.132 393.054 144.132C393.052 144.131 393.049 144.129 393.043 144.126C393.031 144.12 393.012 144.109 392.983 144.093C392.927 144.062 392.837 144.013 392.715 143.945C392.471 143.81 392.097 143.603 391.603 143.326C390.614 142.772 389.144 141.939 387.261 140.851C383.493 138.673 378.08 135.475 371.572 131.433C358.53 123.331 341.218 111.917 323.978 98.595C306.653 85.2079 289.862 70.2463 277.532 55.1133C264.915 39.6291 258.575 25.9193 258.575 14.7694H229.897ZM386.184 158.16C380.812 144.865 380.808 144.867 380.804 144.869C380.802 144.869 380.797 144.871 380.792 144.873C380.784 144.877 380.773 144.881 380.76 144.887C380.733 144.897 380.699 144.911 380.655 144.929C380.569 144.964 380.449 145.014 380.296 145.077C379.99 145.204 379.553 145.386 378.993 145.623C377.875 146.097 376.266 146.791 374.237 147.697C370.181 149.509 364.434 152.174 357.557 155.636C343.84 162.541 325.451 172.703 306.971 185.676C288.564 198.598 269.566 214.657 255.055 233.491C240.529 252.346 229.896 274.797 229.896 300.109H258.574C258.574 283.126 265.684 266.685 277.773 250.993C289.878 235.282 306.367 221.14 323.448 209.148C340.455 197.209 357.554 187.744 370.452 181.252C376.883 178.014 382.225 175.538 385.932 173.882C387.785 173.055 389.226 172.434 390.187 172.027C390.667 171.823 391.027 171.673 391.258 171.577C391.374 171.529 391.457 171.495 391.507 171.475C391.532 171.465 391.549 171.458 391.557 171.454C391.561 171.453 391.563 171.452 391.563 171.452C391.563 171.452 391.561 171.453 391.561 171.453C391.559 171.454 391.556 171.455 386.184 158.16Z"
                  fill="#232323"
                />
              </svg>
            </button>
            <button className="arrow-right absolute top-1/2 right-[5%] -translate-y-1/2 z-100">
              <svg
                width="40"
                height="30"
                viewBox="0 0 402 315"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8109 143.821H0.471853V172.499H14.8109V143.821ZM387.626 172.499C395.546 172.499 401.966 166.079 401.966 158.16C401.966 150.241 395.546 143.821 387.626 143.821V172.499ZM258.575 14.7694V0.430349H229.897V14.7694H258.575ZM379.319 169.307C386.272 173.099 394.982 170.537 398.774 163.585C402.566 156.633 400.004 147.923 393.051 144.131L379.319 169.307ZM229.896 300.109V314.449H258.574V300.109H229.896ZM14.8109 172.499H386.184V143.821H14.8109V172.499ZM386.184 172.499H387.626V143.821H386.184V172.499ZM229.897 14.7694C229.897 35.8824 241.3 56.0477 255.299 73.2284C269.584 90.7601 288.28 107.253 306.443 121.288C324.69 135.388 342.866 147.362 356.439 155.793C363.239 160.018 368.916 163.372 372.911 165.681C374.909 166.836 376.489 167.73 377.579 168.341C378.125 168.647 378.548 168.882 378.841 169.044C378.988 169.125 379.101 169.188 379.181 169.232C379.221 169.254 379.253 169.271 379.276 169.284C379.288 169.29 379.297 169.295 379.304 169.299C379.308 169.301 379.312 169.303 379.313 169.304C379.317 169.306 379.319 169.307 386.185 156.719C393.051 144.131 393.053 144.131 393.054 144.132C393.054 144.132 393.054 144.132 393.054 144.132C393.052 144.131 393.049 144.129 393.043 144.126C393.031 144.12 393.012 144.109 392.983 144.093C392.927 144.062 392.837 144.013 392.715 143.945C392.471 143.81 392.097 143.603 391.603 143.326C390.614 142.772 389.144 141.939 387.261 140.851C383.493 138.673 378.08 135.475 371.572 131.433C358.53 123.331 341.218 111.917 323.978 98.595C306.653 85.2079 289.862 70.2463 277.532 55.1133C264.915 39.6291 258.575 25.9193 258.575 14.7694H229.897ZM386.184 158.16C380.812 144.865 380.808 144.867 380.804 144.869C380.802 144.869 380.797 144.871 380.792 144.873C380.784 144.877 380.773 144.881 380.76 144.887C380.733 144.897 380.699 144.911 380.655 144.929C380.569 144.964 380.449 145.014 380.296 145.077C379.99 145.204 379.553 145.386 378.993 145.623C377.875 146.097 376.266 146.791 374.237 147.697C370.181 149.509 364.434 152.174 357.557 155.636C343.84 162.541 325.451 172.703 306.971 185.676C288.564 198.598 269.566 214.657 255.055 233.491C240.529 252.346 229.896 274.797 229.896 300.109H258.574C258.574 283.126 265.684 266.685 277.773 250.993C289.878 235.282 306.367 221.14 323.448 209.148C340.455 197.209 357.554 187.744 370.452 181.252C376.883 178.014 382.225 175.538 385.932 173.882C387.785 173.055 389.226 172.434 390.187 172.027C390.667 171.823 391.027 171.673 391.258 171.577C391.374 171.529 391.457 171.495 391.507 171.475C391.532 171.465 391.549 171.458 391.557 171.454C391.561 171.453 391.563 171.452 391.563 171.452C391.563 171.452 391.561 171.453 391.561 171.453C391.559 171.454 391.556 171.455 386.184 158.16Z"
                  fill="#232323"
                />
              </svg>
            </button> */}
          {heroImages.map((item, i) => (
            <SwiperSlide
              className="min-h-[60vh] md:min-h-[600px] mx-auto text-center bg-cover bg-no-repeat bg-center z-10 flex justify-center items-center"
              style={{ backgroundImage: `url(${item.img})` }}
              key={i}
            >
              <div className="bg-[#ffffff65] p-12 md:py-20 md:px-32 backdrop-blur-md">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Simple But Fashionable
                </h2>
                <p>{`Grab your product before it's too late!`}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
// popular products
const PopularProducts = () => {
  const { language } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { isLoading, data } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      axiosPublic
        .get(`/api/v1/allproducts`)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });

  const products = [
    {
      img: bagOne,
      title: 'Aster Backpack',
      price: 669,
    },
    {
      img: bagTwo,
      title: 'Coast Bag',
      price: 1299,
    },
    {
      img: bagThree,
      title: 'Eugene Backpack',
      price: 999,
    },
    {
      img: bagFour,
      title: 'Blue Bag',
      price: 1499,
    },
    {
      img: bagOne,
      title: 'Aster Backpack',
      price: 669,
    },
    {
      img: bagTwo,
      title: 'Coast Bag',
      price: 1299,
    },
    {
      img: bagThree,
      title: 'Eugene Backpack',
      price: 999,
    },
    {
      img: bagFour,
      title: 'Blue Bag',
      price: 1499,
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h5 className="font-secondary text-xl md:text-3xl capitalize font-bold">
            {language === 'en'
              ? 'Our Popular Products'
              : 'আমাদের জনপ্রিয় প্রডাক্ট'}
          </h5>
        </div>
        {/* products */}
        {/* {isLoading ? (
          <Loader />
        ) : (
          <>
            {data.length === 0 ? (
              <p className="text-lg font-medium">No Product Found!</p>
            ) : (
              <div>
                <div className="flex gap-x-4 justify-center items-center">
                  <button className="arrow-left">
                    <FaArrowLeft size={30} />
                  </button>
                  <button className="arrow-right">
                    <FaArrowRight size={30} />
                  </button>
                </div>

                <Swiper
                  grabCursor={true}
                  centeredSlides={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={false}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
                  modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                  className="mySwiper mt-6 text-center"
                >
                  {data?.map((product, i) => (
                    <SwiperSlide className="max-w-[400px] p-3" key={i}>
                      <Link
                        to={
                          product._id
                            ? `/single-product/${product._id}`
                            : `/shop`
                        }
                      >
                        <div className="bg-white rounded-xl shadow-light">
                          <img
                            src={product.featured_image}
                            alt=""
                            className="object-cover rounded-xl"
                          />
                        </div>
                        <div className="flex flex-col gap-y-2 py-4 px-4">
                          <h4 className="text-lg text-center font-bold font-secondary hover:text-rose-400 duration-500 overflow-hidden text-ellipsis line-clamp-1">
                            {product.title}
                          </h4>
                          <p className="mb-4 text-center">
                            <span className="text-base text-red-500 opacity-50 line-through">
                              ৳{product.rprice}
                            </span>
                            <span className="text-xl font-bold theme-color">
                              ৳{product.sprice}
                            </span>
                          </p>

                          <div className="flex justify-center">
                            <Button link={`/single-product/${product._id}`}>
                              {language === 'en'
                                ? 'Select Options'
                                : 'অপশন দেখুন'}
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </>
        )} */}
        <div>
          <div className="flex gap-x-4 justify-center items-center">
            <button className="arrow-left">
              <FaArrowLeft size={22} />
            </button>
            <button className="arrow-right">
              <FaArrowRight size={22} />
            </button>
          </div>

          <Swiper
            grabCursor={true}
            centeredSlides={false}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 4,
              },
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="mySwiper mt-6 text-center max-w-[1100px] mx-auto"
          >
            {products?.map((product, i) => (
              <SwiperSlide className="p-3" key={i}>
                <Link>
                  <div className="bg-white">
                    <img src={product.img} alt="" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-y-1 p-4">
                    <h4 className="text-sm text-center font-bold font-secondary hover:text-rose-400 duration-500 overflow-hidden text-ellipsis line-clamp-1">
                      {product.title}
                    </h4>
                    <p className="mb-1 text-center">
                      <span className="text-sm font-bold">
                        ৳{product.price}
                      </span>
                    </p>

                    <div className="flex justify-center">
                      <button className="bg-black text-white px-4 pt-[6px] pb-[5px]">
                        {language === 'en' ? 'Buy Now' : 'অপশন দেখুন'}
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <button className="bg-black text-white px-12 pt-[16px] pb-[14px]">
              View More Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
//footer
const Footer = () => {
  return <>Footer</>;
};

const Bag1 = () => {
  return (
    <div className="py-20 md:py-36">
      <Navbar />
      <Hero />
      <PopularProducts />
      <Footer />
    </div>
  );
};

export default Bag1;
