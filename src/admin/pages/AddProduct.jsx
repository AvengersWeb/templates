import swal from 'sweetalert';
import axios from 'axios';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
const VITE_IMAGE_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGE_HOSTING_KEY}`;

const AddProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { loading, setLoading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData(e.target);
    const featuredImage = formData.get('featured_image');
    const galleryImage = formData.get('gallery_image');

    try {
      // Upload featured image
      const featuredImageFormData = new FormData();
      featuredImageFormData.append('image', featuredImage);

      const featuredImageRes = await axios.post(
        image_hosting_api,
        featuredImageFormData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
      );

      // Upload gallery image
      const galleryImageFormData = new FormData();
      galleryImageFormData.append('image', galleryImage);

      const galleryImageRes = await axios.post(
        image_hosting_api,
        galleryImageFormData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
      );

      const title = formData.get('title');
      const category = formData.get('category');
      const rprice = parseFloat(formData.get('rprice'));
      const sprice = parseFloat(formData.get('sprice'));
      const desc = formData.get('desc');
      const sizeCheckboxes = Array.from(
        e.target.querySelectorAll('input[name^="size"]:checked')
      ).map((checkbox) => checkbox.value);
      const colorCheckboxes = Array.from(
        e.target.querySelectorAll('input[name^="color"]:checked')
      ).map((checkbox) => checkbox.value);

      const productData = {
        title,
        category,
        rprice: rprice,
        sprice: sprice,
        desc,
        featured_image: featuredImageRes.data.data.display_url,
        gallery_image: galleryImageRes.data.data.display_url,
        size: sizeCheckboxes,
        color: colorCheckboxes,
      };
      console.log(productData);
      // Send product data to the server
      axiosPublic
        .post('/api/v1/addproduct', productData)
        .then((response) => {
          if (response.data.insertedId) {
            setLoading(false);
            swal(
              'Congratulation!',
              'You successfully added a product!',
              'success'
            );
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log('axios post error', error);
        });
    } catch (error) {
      setLoading(false);
      console.error('Error uploading image:', error);
    }
  };
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-xl md:text-5xl mb-12">
          Add New Product
        </h2>
        <form
          className="max-w-[900px] black-shadow mx-auto py-12 px-8 md:px-12 rounded-xl"
          onSubmit={handleSubmit}
        >
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* title */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="title" className="form-label">
                Product Title
              </label>
              <input
                type="text"
                placeholder="Your Product Title"
                name="title"
                className="input-with-shadow"
                required
              />
            </div>
            {/* category */}
            <div className="flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                placeholder="Your Product Category"
                className="input-with-shadow"
                name="category"
              />
            </div>
          </div>
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
            {/* regular price */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="rprice" className="form-label">
                Regular Price
              </label>
              <input
                type="number"
                placeholder=" Regular Price"
                name="rprice"
                className="input-with-shadow"
                required
              />
            </div>
            {/* Sale price */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="sprice" className="form-label">
                Sale Price
              </label>
              <input
                type="number"
                placeholder=" Sale Price"
                name="sprice"
                className="input-with-shadow"
                required
              />
            </div>
          </div>
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
            {/* Size */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="size" className="form-label">
                Size
              </label>
              <div className="flex gap-6 flex-wrap">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="size[]"
                    className="input-checkbox mr-1"
                    value="xs"
                  />
                  <label htmlFor="xs">XS</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="size[]"
                    className="input-checkbox mr-1"
                    value="sm"
                  />
                  <label htmlFor="sm">SM</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="size[]"
                    className="input-checkbox mr-1"
                    value="m"
                  />
                  <label htmlFor="m">M</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="size[]"
                    className="input-checkbox mr-1"
                    value="l"
                  />
                  <label htmlFor="l">L</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="size[]"
                    className="input-checkbox mr-1"
                    value="xl"
                  />
                  <label htmlFor="xl">XL</label>
                </div>
              </div>
            </div>
            {/* Color */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <div className="flex gap-6 flex-wrap">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="color[]"
                    className="input-checkbox mr-1"
                    value="black"
                  />
                  <label htmlFor="black">Black</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="color[]"
                    className="input-checkbox mr-1"
                    value="red"
                  />
                  <label htmlFor="red">Red</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="color[]"
                    className="input-checkbox mr-1"
                    value="white"
                  />
                  <label htmlFor="white">White</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="color[]"
                    className="input-checkbox mr-1"
                    value="green"
                  />
                  <label htmlFor="green">Green</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="color[]"
                    className="input-checkbox mr-1"
                    value="blue"
                  />
                  <label htmlFor="blue">Blue</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="color[]"
                    className="input-checkbox mr-1"
                    value="mix"
                  />
                  <label htmlFor="mix">Mix</label>
                </div>
              </div>
            </div>
          </div>
          {/* input group */}
          <div className="flex flex-col gap-4 justify-between mt-6">
            {/* description */}
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <textarea
              type="number"
              placeholder="Enter your product details"
              name="desc"
              className="input-with-shadow"
              rows="4"
              required
            />
          </div>
          {/* featured image */}
          <div className="flex flex-col gap-4 justify-between mt-6">
            <label htmlFor="featured_image" className="form-label">
              Featured Image
            </label>
            <input type="file" name="featured_image" accept="image/*" />
          </div>
          {/* gallery image*/}
          <div className="flex flex-col gap-4 justify-between mt-6">
            <label htmlFor="gallery_image" className="form-label">
              Gallery Image
            </label>
            <input type="file" name="gallery_image" accept="image/*" multiple />
          </div>
          <div className="mt-12">
            <button
              className={`bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded cursor-pointer ${
                loading && 'cursor-not-allowed'
              }`}
              type="submit"
              disabled={loading}
            >
              Add New Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
