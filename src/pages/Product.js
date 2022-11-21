import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { ADDITEM, DELITEM } from "../redux/actions/index";
import Skeleton from "react-loading-skeleton";
import actionTypes from "../redux/actions/actionTypes";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const dispatch = useDispatch();
  const {product} = useSelector((state) => state.productState);
  const {productState} = useSelector((state) => state);

  

  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_START });
    axios
      .get("http://localhost:3004/products")
      .then((res) => {
        dispatch({ type: actionTypes.FETCH_SUCCESS, payload: res.data });
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.FETCH_FAIL,
          payload: "Ann error has occureted",
        });
      });
  }, []);

  
  console.log(product);
  const Loading = () => {
    return <>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
    </>;
  };

  const filterProduct = (cat) => {
    const updateList=data.filter((x)=>x.category === cat)
    setFilter(updateList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-3 pb-3">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4" >
                <div className="card h-100 text-center p-4">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    height="250px"
                    className="card-img-top"
                    alt={product.title}
                    />
                    </Link>
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-primary">
                    Buy Now
                  </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Product;
