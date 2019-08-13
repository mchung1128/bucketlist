import React from 'react';
import Input from './Input.jsx';
import List from './List.jsx';
import styled from 'styled-components';

const Header = styled.h1 `
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #f6f5f5;
  font-size: 5em;
  font-family: 'Ubuntu', sans-serif;
`

const Banner = styled.h3`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #f6f5f5;
  font-family: 'Montserrat';
`

const Background = styled.div`
  background-color: #3bb4c1;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      category: null,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleClick(data) {
    var listItem = {
      completed: data.completed,
      item: data.item
    }
    fetch('/list', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(listItem)
    })
      .then(() => {
        fetch('/list')
        .then((res) => res.json())
        .then(list => this.setState({
          items: list
        }))
        .catch(err => console.log(`Error getting updated list: ${err}`))
      })
      .catch(err => console.log(`Error updating list: ${err}`))
  }

  deleteItem(item) {
    fetch('/list', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
    })
      .then(() => {
        fetch('/list')
        .then((res) => res.json())
        .then(list => this.setState({
          items: list
        }))
        .catch(err => console.log(`Error getting list after deletion: ${err}`))
      })
      .catch(err => console.log(`Error deleting: ${err}`))
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    var data = {
      category: this.state.category,
      item: this.state.value
    }
    fetch('/list', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(() => {
        fetch('/list')
          .then(res => res.json())
          .then(list => this.setState({
            items: list
          }))
          .catch(err => console.log(`Error fetching new list: ${err}`))
      })
      .catch(err => console.log(`Error posting new item: ${err}`))
      e.preventDefault();
  }

  componentDidMount() {
    fetch('/list')
      .then(res => res.json())
      .then(data => this.setState({
        items: data
      }))
      .catch(err => console.log(`Error fetching list!`))
  }

  render() {
    return (
      <Background>
        <Header>GOAL List</Header>
        <Banner>Get Out and Live</Banner>
        <Input handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <List items={this.state.items} handleClick={this.handleClick} deleteItem={this.deleteItem}/>
      </Background>
    )
  }
}

export default App;
