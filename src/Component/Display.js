import React from "react";

const Display = (props) => {
const deletOrder = id => {
    localStorage.removeItem(id)
    props.onDeleteOrder(id)
}
    
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <h2>Table 1</h2>
        {props.items.map((item) => {
          if (item.tcategory === "Table 1") {
            return (
              <li key={item.id}>
                {item.price}-{item.name}-{item.tcategory}
                <button type="button" onClick={() => deletOrder(item.id)}>Delete Order</button>
              </li>
            );
          }
        })}
      </ul>

      <ul>
        <h2>Table 2</h2>
        {props.items.map((item) => {
          if (item.tcategory === "Table 2") {
            return (
              <li key={item.id}>
                {item.price}-{item.name}-{item.tcategory}
                <button type="button" onClick={() => deletOrder(item.id)}>Delete Order</button>
              </li>
            );
          }
        })}
      </ul>

      <ul>
        <h2>Table 3</h2>
        {props.items.map((item) => {
          if (item.tcategory === "Table 3") {
            return (
              <li key={item.id}>
                {item.price}-{item.name}-{item.tcategory}
                <button type="button" onClick={() => deletOrder(item.id)}>Delete order</button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Display;
