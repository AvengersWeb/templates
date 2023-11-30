import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Button = ({ classname, children, link = '/shop' }) => {
  return (
    <Link
      to={link}
      className={twMerge(
        'relative bg-white text-black text-center font-secondary py-3.5 px-8 rounded-md group duration-500 z-10 mt-6',
        classname
      )}
    >
      <span className="absolute -bottom-3 -right-3 bg-white bg-opacity-30 backdrop-blur-md w-10 h-10 rounded-full group-hover:rounded-md group-hover:w-full group-hover:h-full group-hover:bottom-1 group-hover:right-1 duration-500 trasition-all z-10" />
      <span className="relative z-50 font-bold">
        {children || 'Explore Now'}
      </span>
    </Link>
  );
};

Button.propTypes = {
  classname: PropTypes.string,
  link: PropTypes.any,
  children: PropTypes.string,
};

export default Button;
