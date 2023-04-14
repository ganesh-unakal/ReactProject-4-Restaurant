import React, { useState } from "react";


const Form = (props) => {
  const [ids, setId] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [dishName, setDishName] = useState("");
  const [tableCategory, setTableCategory] = useState("");

  const idHandeler = (event) => {
    setId(event.target.value);
  };

  const priceHandler = (event) => {
    setDishPrice(event.target.value);
  };

  const dishHandler = (event) => {
    setDishName(event.target.value);
  };

  const tableHandler = (event) => {
    setTableCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //props.add(id,SellingPrice,pName,category)
    const order = {
      id: ids,
      price: dishPrice,
      name: dishName,
      tcategory: tableCategory,
    };
    console.log(order);
    props.add(order);
  };

  return (
    <React.Fragment>
        <h1><i>Restaurant</i></h1>
      <form onSubmit={submitHandler}>
        <label>
          <b>Unique Order ID: </b>
        </label>
        <input type="number" onChange={idHandeler}></input>

        <label>
          <b>Choose Price: </b>
        </label>
        <input type="number" onChange={priceHandler}></input>

        <label>
          <b>Choose Dish: </b>
        </label>
        <input type="text" onChange={dishHandler}></input>

        <label htmlFor="category">
          <b>Choose a Table: </b>
        </label>
        <select id="category" onChange={tableHandler}>
          <option>Select</option>
          <option>Table 1</option>
          <option>Table 2</option>
          <option>Table 3</option>
        </select>

        <button type="submit">Add to bill</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
