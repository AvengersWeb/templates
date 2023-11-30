import { Link } from 'react-router-dom';

const Button3 = () => {
  return (
    <Link
      to="/shop"
      className="relative py-3.5 px-8 bg-[#38d2d2] rounded-full duration-500 font-bold text-white z-10"
      style={{
        backgroundImage:
          'radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%) radial-gradient(66% 66% at 26% 20%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%)',
        boxShadow:
          'inset -3px -3px 9px rgba(255, 255, 255, 0.25),inset 0px 3px 9px rgba(255, 255, 255, 0.3), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px -8px 36px rgba(0, 0, 0, 0.3), inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2)',
      }}
    >
      <span>Shop Now</span>
    </Link>
  );
};

export default Button3;