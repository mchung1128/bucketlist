import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Form = styled.form`
  display: flex;
  align-items: center;
  margin: auto;
  background-color: #e9e4e6;
`

const Label = styled.span`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.5em;
  margin-left: 0.25em;
`

const Select = styled.select`
  margin-left: 1.5em;
`

const Input = ({ handleChange, handleSubmit }) => {
  return (
    <Form>
      <Label>Category:
        <Select name="category" onChange={handleChange}>
          <option>Choose one</option>
          <option>Places I want to go</option>
          <option>Things I want to eat/drink</option>
          <option>Skills I want to learn</option>
          <option>Things I want to do</option>
          <option>Books I want to read</option>
          <option>TV Shows/Movies I want to watch</option>
        </Select>
      </Label>
      <Label>
      <TextField
        id="standard-bare"
        placeholder="Fill me in"
        margin="normal"
        inputProps={{ 'aria-label': 'bare' }}
        onChange={handleChange}
        name="value"
      />
      </Label>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Submit
      </Button>
    </Form>
  )
}

export default Input;