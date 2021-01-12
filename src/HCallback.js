import React, { useState, useCallback, memo } from "react";
import './App.css';

const food = [
  { id: 1, name: "pizza" },
  { id: 2, name: "hamburger" },
  { id: 3, name: "hot-dog" },
  { id: 4, name: "tacos" },
  { id: 5, name: "pizza again :)" }
];

const FoodContainer = () => {
  console.log("FoodContainer rendered");

  const [foodList, setFoodList] = useState(food);
  const [textInput, setTextInput] = useState("");

  const handleChange = ({ target }) => setTextInput(target.value);

  const removeItem = useCallback(
    (id) => setFoodList(foodList.filter((foodItem) => foodItem.id !== id)),
    [foodList]
  );

  return (
    <>
      <h2>My Food List</h2>
      <p>
        New food <input value={textInput} onChange={handleChange} />
      </p>
      <FoodList foodList={foodList} removeItem={removeItem} />
    </>
  );
};

const FoodList = memo(({ foodList, removeItem }) => {
  console.log("FoodList rendered");
  return (
    <ul>
      {foodList.map((item) => (
        <FoodItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </ul>
  );
});

const FoodItem = memo(({ item, removeItem }) => {
  console.log("FoodItem rendered");
  return (
    <>
      <li>{item.name}</li>
      <button onClick={() => removeItem(item.id)}>Remove :(</button>
    </>
  );
});

export default function HCallback() {
  return (
    <div className="App">
      <h1>useCallback</h1>
      <FoodContainer />
    </div>
  );
}
