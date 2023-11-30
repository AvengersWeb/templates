import { Link } from 'react-router-dom';

const Button2 = () => {
  return (
    <Link to="/shop" className="relative p-3.5 px-8 duration-500 z-10 group">
      <span className="absolute w-full h-0.5 bg-black scale-90 top-2 left-1/2 -translate-x-1/2 z-10 group-hover:scale-100 group-hover:top-0 duration-500" />
      <span className="absolute w-full h-0.5 bg-black scale-90 bottom-2 left-1/2 -translate-x-1/2 z-10 group-hover:scale-100 group-hover:bottom-0 duration-500" />
      <span className="absolute h-full w-0.5 bg-black scale-90 left-3 top-1/2 -translate-y-1/2 z-10 group-hover:scale-100 group-hover:left-0 duration-500" />
      <span className="absolute h-full w-0.5 bg-black scale-90 right-3 top-1/2 -translate-y-1/2 z-10 group-hover:scale-100 group-hover:right-0 duration-500" />
      <span className="absolute w-full h-full border border-black top-0 bottom-0 left-0 right-0 scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 duration-500" />
      <span className="relative z-100 font-bold">Shop Now</span>
    </Link>
  );
};

export default Button2;
