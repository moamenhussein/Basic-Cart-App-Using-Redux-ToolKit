import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
// import Image from 'react-bootstrap/Card';
import Card from "react-bootstrap/Card";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  //Total Price
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  // console.log(totalPrice)
  return (
    <Container>
      <h1 className="my-2">Welcome To Cart</h1>
      <Button variant="primary" onClick={() => dispatch(clear())}>
        Clear Cart
      </Button>
      <h3 className="my-3" style={{ color: "#4793AF" }}>
        Total Price: {totalPrice.toFixed(2)} ${" "}
      </h3>
      <Table striped bordered hover size="sm" className="my-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Card.Img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{product.price} $</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteFromCart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
