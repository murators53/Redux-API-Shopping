import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import actionTypes from "../redux/actions/actionTypes";
import Loading from "./Loading";
import { addCart } from "../redux/actions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams((x) => x.id);
  const { productState } = useSelector((state) => state);
  const [product, setProduct] = useState(null);

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3004/products")
      .then((res) => {
        setProduct(res.data[id - 1]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (product === null) return <Loading />;

  return (
    <div>
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center ">
            <img className="pe-5 pt-3" src={product.image} alt={product.title} width="400px" />
          </div>
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <p className="text-muted text-uppercase">{product.category}</p>
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h6 className="fw-bold">
              Rating: {product.rating.rate}
              <i class="fa-solid fa-star"></i>
            </h6>
            <p className="lead">{product.description}</p>
            <h2 className="my-2 fw-bold">{product.price} TL</h2>
            <hr />
            <div>
              <button
                onClick={() => addProduct(product)}
                className=" w-25 btn btn-outline-primary my-2 "
              >
                Add to Cart
              </button>
              <Link to="/cart" className=" w-25 btn btn-dark my-2 mx-2">
                Go to Cart
              </Link>
              <Link to="/products" className=" w-25 btn btn-success my-2">
                Continue Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
