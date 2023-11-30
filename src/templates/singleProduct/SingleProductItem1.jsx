import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const SingleProductItem1 = ({ product = [] }) => {
  const { title, featured_image, rprice, sprice, _id } = product;

  return (
    <Link
      to={`/single-product/${_id}`}
      className="flex flex-col gap-y-3 mb-4 py-3"
    >
      <div>
        <img src={featured_image} alt={title} className="w-full" />
      </div>
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-xl font-medium max-w-[200px] line-clamp-1 text-ellipsis">
          {title}
        </h4>
        <p className="theme-color text-xl font-medium">{sprice}</p>
      </div>
      <Button classname="bg-black text-white mt-0">View Product</Button>
    </Link>
  );
};

export default SingleProductItem1;
