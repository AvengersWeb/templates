import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const SingleProductItem2 = ({ product = [] }) => {
  const { title, featured_image, rprice, sprice, _id } = product;

  return (
    <Link
      to={`/single-product/${_id}`}
      className="relative flex flex-col gap-y-3 mb-4 p-3 md:p-8 overflow-hidden rounded-xl text-center"
    >
      <div className="absolute bottom-0 left-0 right-0 w-full h-[70%] bg-teal-50 rounded-xl -z-10"></div>
      <div>
        <img src={featured_image} alt={title} className="max-w-[80%] mx-auto" />
      </div>
      <h4 className="text-base font-medium line-clamp-1 text-ellipsis text-center">
        {title}
      </h4>

      <p className="theme-color text-lg font-medium">৳{sprice}</p>
      <Button classname="bg-black text-white mt-0">View Product</Button>
    </Link>
  );
};

export default SingleProductItem2;
