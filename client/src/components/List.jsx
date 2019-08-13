import React from 'react';
import Category from './Category.jsx';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #048998;
  width: 50%;
  margin-top: 2%;
  height: inherit;
  overflow: auto;
  margin-left: 1%;
  border-radius: 20px;
`

const categoryArr = (list) => {
  var categories = [];
  for (var category of list) {
    if (!categories.includes(category.category)) {
      categories.push(category.category);
    }
  }
  return categories;
}

const List = ({ items, handleClick, deleteItem }) => {
  const categories = categoryArr(items);
  return (
    <ListContainer>
      {categories.map(category => <Category category={category} items={items} handleClick={handleClick} deleteItem={deleteItem}/>)}
    </ListContainer>
  )
}

export default List;