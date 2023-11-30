import { Link } from 'react-router-dom';

const Button1 = () => {
  return (
    <Link
      to="/shop"
      className="relative bg-black text-white font-secondary text-lg py-3.5 px-8 rounded-md group hover:translate-x-4 hover:translate-y-4 duration-500 z-10"
    >
      <span className="absolute -bottom-3 -right-3 bg-white bg-opacity-30 backdrop-blur-md w-10 h-10 rounded-full group-hover:rounded-md group-hover:w-full group-hover:h-full group-hover:bottom-1 group-hover:right-1 duration-500 trasition-all z-10" />
      <span className="relative z-50">Shop Now</span>
    </Link>
  );
};

export default Button1;
