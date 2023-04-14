import "./App.css";
import Form from "./Component/Form";
import Display from "./Component/Display";
import React, { useState } from "react";
import Card from "./Component/UI/Card";

function App() {
  const [list, setList] = useState([]);

  const tableOrders = (order) => {
    setList([...list, order]);
    localStorage.setItem(order.id, JSON.stringify(order));
  };

  const deletOrderHandler = (orderId) => {
    const newOrderList = list.filter((ele) => ele.id !== orderId);
    setList([...newOrderList]);
  };

  return (
    <Card>
      <Form add={tableOrders} />
      <Display items={list} onDeleteOrder={deletOrderHandler} />
    </Card>
  );
}

export default App;
