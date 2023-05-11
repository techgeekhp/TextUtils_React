import React from "react";

export default function Product(props) {
  return (
    <div>
      <div className="row mt-2 d-flex align-items-center">
        <div className="col-5">
          <h2>
            {props.productDetails.name}
            <span className="badge bg-secondary m-2">
              ₹{props.productDetails.price}
            </span>
          </h2>
        </div>
        <div className="col-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mized styles example"
          >
            <button className="btn btn-danger" type="button">
              -
            </button>
            <button className="btn btn-warning" id="qty">
              {props.productDetails.quantity}
            </button>
            <button className="btn btn-success" type="button">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
