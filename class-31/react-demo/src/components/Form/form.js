import React, { useState } from 'react';

function Form(props){
  const [name,setName] = useState('Sowmya');
  const [age, setAge] = useState(25);
  const [shoeSize, setShoeSize] = useState(6.5);

  const handleSubmit = e => {
    e.preventDefault();
    setName(e.target.name.value);
    setAge(e.target.age.value);
    setShoeSize(e.target.shoesize.value);
  }

  return (
    <div>
      <h3>Hello world</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>shoe size: {shoeSize}</p>
     <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Enter your name" name="name"></input>
       <input type="text" placeholder="Enter your age" name="age"></input>
       <input type="text" placeholder="Enter your shoe size" name="shoesize"></input>
       <button type="submit"> Submit</button>
     </form>
     </div>
  );
}

export default Form;