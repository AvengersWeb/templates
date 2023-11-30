import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const data = [
  {
    name: 'Testimonials',
    link: `/templates/testimonials`,
  },
  {
    name: 'Popular Products',
    link: `/templates/popular-products`,
  },
  {
    name: 'Single Product Item',
    link: `/templates/single-product-item`,
  },
  {
    name: 'Buttons',
    link: `/templates/buttons`,
  },
];

const Home = () => {
  return (
    <div className="my-40 ">
      <div className="container mx-auto px-4">
        <Table
          striped
          className="relative max-w-[600px] mx-auto bg-white shadow-light"
        >
          <Table.Head>
            <Table.HeadCell className="text-center">Title</Table.HeadCell>
            <Table.HeadCell className="text-center">Link</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((item, i) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={i}
              >
                <Table.Cell className="text-center">{item.name}</Table.Cell>
                <Table.Cell className="text-center">
                  <Link
                    to={item.link}
                    className="cursor-pointer py-3 px-6 bg-black text-white rounded-full"
                  >
                    {item.name}
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Home;
