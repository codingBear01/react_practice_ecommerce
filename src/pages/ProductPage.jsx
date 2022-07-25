import React from 'react';
import Announce from '../components/Announce';
import Navbar from '../components/Navabar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Counter from './../components/Counter';

function ProductPage() {
  const colorOptionStyle =
    'ml-5 p-[10px] w-[2rem] h-[2rem] rounded-full border-2 cursor-pointer hover:border-[#8a4af3]';

  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center mobile:flex-col mobile:mt-3 mobile:p-3">
        <div className="flex flex-1 items-center justify-center">
          <img
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-150"
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812"
            alt="product_img"
          />
        </div>
        <div className="flex flex-col flex-[1.3] items-start justify-items-start mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            Black T-Shirt
          </h1>
          <p className="mt-4 pr-[4rem] text-justify mobile:pr-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            dignissimos rem quasi, magnam mollitia culpa ea voluptate possimus
            error ullam! Architecto nisi eius eum laborum at corrupti
            consequuntur ratione quaerat.
          </p>
          <p className="mt-7 text-3xl">
            Price: <b>$70</b>
          </p>
          <div className="flex mt-7 text-2xl">
            Colors
            <div className={`${colorOptionStyle} bg-red-600`}></div>
            <div className={`${colorOptionStyle} bg-blue-600`}></div>
            <div className={`${colorOptionStyle} bg-yellow-400`}></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5 border-2">
              <option selected disabled>
                Select
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="mt-5">
            <Counter />
          </div>
          <button className="btn mt-5">Add to cart</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
