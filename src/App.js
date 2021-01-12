import './App.css';
import React, {useState, useEffect, useContext, useReducer} from 'react';
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    name: "Terminar de leer el capítulo de useReducer",
    isCompleted: false
  }
];

const reducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    const { name } = action.payload;

    return [
      ...state,
      {
        id: uuidv4(),
        name,
        isCompleted: false
      }
    ];
  }

  if (action.type === "TOGGLE_IS_COMPLETED") {
    const { id } = action.payload;

    const newState = state.map((singleTodo) => {
      if (singleTodo.id === id) {
        return { ...singleTodo, isCompleted: !singleTodo.isCompleted };
      }

      return singleTodo;
    });

    return newState;
  }

  return state;
};

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target }) => setTodoText(target.value);

  const handleClick = () => {
    dispatch({
      type: "ADD_TODO",
      payload: { name: todoText }
    });
    setTodoText("");
  };

  const handleToggle = (id) => {
    dispatch({
      type: "TOGGLE_IS_COMPLETED",
      payload: { id }
    });
  };

  return (
    <>
      <p>
        Nuevo TODO:
        <input type="text" value={todoText} onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </p>

      <h2>Listado</h2>

      <ul>
        {state.map(({ name, isCompleted, id }) => {
          const style = {
            textDecoration: isCompleted ? "line-through" : "inherit"
          };

          return (
            <li key={id} style={style} onClick={() => handleToggle(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const NumberContext = React.createContext();
function App() {
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
      <h1>useReducer</h1>
      <hr />
      <Todo />
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

export default App;
