import React from 'react';
import Category from './Category.jsx';

const categoryArr = (list) => {
  var categories = [];
  for (var category of list) {
    if (!categories.includes(category.category)) {
      categories.push(category.category);
    }
  }
  return categories;
}

const List = ({ items }) => {
  const categories = categoryArr(items);
  return (
    <div>
      {categories.map(category => <Category category={category} items={items}/>)}
    </div>
  )
}

export default List;