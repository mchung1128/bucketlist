import React from 'react';

const Input = ({ handleChange, handleSubmit }) => {
  return (
    <form>
      <label>Category:
        <select name="category" onChange={handleChange}>
          <option>Choose one</option>
          <option>Places I want to go</option>
          <option>Things I want to eat/drink</option>
          <option>Skills I want to learn</option>
          <option>Things I want to do</option>
          <option>Books I want to read</option>
          <option>TV Shows/Movies I want to watch</option>
        </select>
      </label>
      <label>
        <input type="text" name="value" onChange={handleChange}></input>
      </label>
      <input type="submit" onClick={handleSubmit}/>
    </form>
  )
}

export default Input;