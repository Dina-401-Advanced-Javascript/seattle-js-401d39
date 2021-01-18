import React, { useEffect ,  useState } from 'react';
import Navigation from './components/Nav/NavBar';
import Form from './components/Form/form';

function App() {
  const [age,setAge] = useState(25);
  const [name,setName] = useState('Dina');
  
  // useEffect(()=>{
  //   //this will run every time the component renders
  //   console.log('I run every time the component renders');
  // });
  
  useEffect(()=>{
    //this will run every time age changes
    console.log('I run every time age changes');
  }, [age]);

    useEffect(()=>{
    //this will run only once when the component mounts
    console.log('I run only once when the component mounts');
  }, []);

  const handleClick = e => {
    setAge(age + 1);
  }

  const updateName = e => {
    setName('bob');
  }

  return (
    <div className="App">
      <Navigation/>
      <Form/>
      <h3>Hey there</h3>   
      <p>age: {age}</p>
      <p onClick={updateName}>name: {name}</p>
      <button onClick={handleClick}>Increment Age</button>
    </div>
  );
}

export default App;
