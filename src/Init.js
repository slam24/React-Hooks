import './App.css';
import React, {useState, useEffect, useContext} from 'react';

const NumberContext = React.createContext();
function Init() {
  //Define State
  const [name, setName] = useState({firstName: 'name', surname: 'surname'});
  const [title, setTitle] = useState('BIO');

  //Call the use effect hook
  useEffect(() => {
    setName({firstName: 'Shedrack', surname: 'Akintayo'})
    setTitle('My Full Name') //Set Title
  }, [])//pass in an empty array as a second argument

  return (
    <div className="App">
      <h1>useState, useEffect, useContext</h1>
      <h3>Title: {title}</h3>
      <h3>Name: {name.firstName}</h3>
      <h3>Surname: {name.surname}</h3>
      <NumberContext.Provider value={45}>
        <div>
          <Display />
          <Display2 />
        </div>
      </NumberContext.Provider>
    </div>
  );
}

function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer to the question is {value}.</div>}
    </NumberContext.Consumer>
  );
}

function Display2() {
  const value = useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}

export default Init;
