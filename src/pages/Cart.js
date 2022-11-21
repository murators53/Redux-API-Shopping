import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, ADDITEM, DELITEM, CLOSEITEM } from "../redux/actions/index";
import { delCart, cloCart } from "../redux/actions";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  const dispatch = useDispatch();

  let sum = 0;
   
  let totalPrice = 0;
  for (let i = 0; i < state.length; i++) {
    sum += state[i].qty;
  }
   
  for (let i = 0; i < state.length; i++) {
    totalPrice += state[i].price * state[i].qty;
  }

  const handleClose = (product) => {
    dispatch(cloCart(product));
    
  };

  const handleAddButton = (item) => {
    dispatch(addCart(item));
  };
  const handleDelButton = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (item) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(item)}
            className="btn float-end"
            aria-label="Close"
          ><i class="fa fa-trash fa-xl fa-red" aria-hidden="true"></i></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={item.image}
                alt={item.title}
                height="150px"
                width="150px"
              />
            </div>
            <div className="col-md-4 ">
              <h3>{item.title}</h3>
              <p className="lead fw-bold ">
                {item.qty} X {item.price} TL ={(item.qty * item.price).toFixed(2)} TL
              </p>
              <button
                className="btn btn-danger "
                onClick={() => handleDelButton(item)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-success"
                onClick={() => handleAddButton(item)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="row g-5 px-4">
        <div className="col-md-7 col-lg-8">
          {state.length ? (
            state.map(cartItems)
          ) : (
            <p className="display-6 d-flex justify-content-center my-5">
              {" "}
              There is no item in your cart
            </p>
          )}
        </div>
        <div className="col-md-5 col-lg-4 order-md-last ">
        <div className="d-flex justify-content-between align-items-center">
        <Link
              to='/products'
                className=" w-50 btn btn-success my-4"
              >
                Continue Shoping
              </Link>
          <h4>
            <span className="text-danger">Your cart</span>
          </h4>
        </div>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <span className=" fw-bold">selected products ({state.length})</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <h1 className="my-0 text-success fw-bold">{totalPrice.toFixed(2)} TL</h1>
            <small className="text-success fw-bold display-6 ">Total</small>
          </li>
          </ul>
          
        </div>
      </div>
    </>
  );
};

export default Cart;
