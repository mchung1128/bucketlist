import React from 'react';

const style = {
  'text-decoration': 'line-through'
}

const handleClick = (data) => {
  // console.log(e.target)
  var listItem = {
    completed: data.completed,
    item: data.item
  }

  fetch('/list', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(listItem)
  })
    // .then(() => {
    //   fetch('/list')
    //   .then((res) => res.json())
    //   .then(list => this.setState({
    //     items: list
    //   }))
    //   .catch(err => console.log(`Error getting updated list: ${err}`))
    // })
    .catch(err => console.log(`Error updating list: ${err}`))
}

const Category = ({ items, category }) => {
  return (
    <div>
      <h4>{category}</h4>
      {items.map(listItem => {
        if (listItem.category === category && listItem.completed === 0) {
          return <div>{listItem.item}</div>
        } else if (listItem.category === category && listItem.completed === 1) {
          return <div style={style}>{listItem.item}</div>
        }
      })}
    </div>
  )
}

export default Category;
