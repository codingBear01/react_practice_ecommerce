import { React } from 'react';
import Announce from './../components/Announce';
import Navbar from './../components/Navabar';
import Products from './../components/Products';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';

function CategoryPage() {
  const selectStyle = 'ml-3 border-2 border-silver';

  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's Clothes</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            <p>Filter by</p>
            <select className={selectStyle}>
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select className={selectStyle}>
              <option selected disabled>
                Color
              </option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Red</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort by</p>
            <select className={selectStyle}>
              <option>Newest (first)</option>
              <option>Oldest (first)</option>
              <option>Price (Asc)</option>
              <option>Price (Des)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
