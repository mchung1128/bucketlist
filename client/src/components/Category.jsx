import React from 'react';
import ListItem from './ListItem.jsx'

const style = {
  'text-decoration': 'line-through'
}

const Category = ({ items, category, handleClick }) => {
  return (
    <div>
      <h4>{category}</h4>
      {items.map(listItem => {
        if (listItem.category === category && listItem.completed === 0) {
          return <div onClick={() => handleClick(listItem)}>{listItem.item}</div>
        } else if (listItem.category === category && listItem.completed === 1) {
          return <div onClick={() => handleClick(listItem)} style={style}>{listItem.item}</div>
        }
      })}
    </div>
  )
}

export default Category;
