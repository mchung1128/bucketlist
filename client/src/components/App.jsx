import React from 'react';
import Input from './Input.jsx';
import List from './List.jsx';

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
  }

  handleClick(data) {
    console.log('i was clicked')
    var listItem = {
      completed: data.completed,
      item: data.item
    }
    console.log(listItem)
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
      <div>
        <h3>Get Out and Live</h3>
        <Input handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <List items={this.state.items} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;
