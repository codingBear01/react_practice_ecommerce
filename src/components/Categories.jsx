import { React } from 'react';
import { ApiCategories } from './../apifolder/CategoryApi';
import Category from './Category';

function Categories() {
  return (
    <div className="flex justify-between items-center p-5">
      {ApiCategories.map((category, index) => {
        return <Category key={index} item={category} />;
      })}
    </div>
  );
}

export default Categories;
