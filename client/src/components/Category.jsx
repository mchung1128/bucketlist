import React from 'react';
import ListItem from './ListItem.jsx';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';


const style = {
  'text-decoration': 'line-through',
  'text-decoration-color': 'pink'
}

const Container = styled.div`
  padding-left: 2%;
`

const CatName = styled.div`
  font-size: 2em;
  margin-top: 1%;
  margin-left: 10px;
  margin-bottom: 1%;
  font-family: 'Shadows Into Light';
  font-weight: bold;
  color: orange;
`

const Words = styled.div`
  display: flex;
  font-size: 1.5em;
  margin-left: 1%;
  font-family: 'Shadows Into Light';
  padding-left: 5%;
  color: white;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5em;
`

const Category = ({ items, category, handleClick, deleteItem }) => {
  return (
    <Container>
      <CatName>{category}</CatName>
      {items.map(listItem => {
        if (listItem.category === category && listItem.completed === 0) {
          return <Item><Words onClick={() => handleClick(listItem)}>{listItem.item}</Words><Grid item xs={8}>
          <DeleteIcon onClick={() => deleteItem(listItem)}/>
        </Grid></Item>
        } else if (listItem.category === category && listItem.completed === 1) {
          return <Item><Words onClick={() => handleClick(listItem)} style={style}>{listItem.item}</Words><Grid item xs={8}>
          <DeleteIcon onClick={() => deleteItem(listItem)}/>
        </Grid></Item>
        }
      })}
    </Container>
  )
}

export default Category;
