import React from 'react';

const Category = ({ items, category }) => {
  return (
    <div>
      <h4>{category}</h4>
      {items.map(listItem => {
        if (listItem.category === category) {
          return <div>{listItem.item}</div>
        }
      })}
    </div>
  )
}

export default Category;
