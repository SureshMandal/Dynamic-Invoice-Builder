import React, { use } from "react";
import "/src/pages/Products.css";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState({
    quantity: 0,
    name1: "John Doe",
    name2: "Lilly Smith",
    email: "john@gmail.com",
    email2: "lilly@gmail.com",
    address: "xyz street, 123",
    address2: "abc street, 456",
    phone: "1234567890",
    phone2: "3216549870",
    business: "4561237892",
    business2: "8521479630",
    invoice: "INV001",
    date: "21/04/2025",
    item: "Barbie Doll",
    rate: 0,
    gst: "GST123456",
    company: "ABC Pvt Ltd",
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="fullbody">
        <div className="containerone">
          <div className="outputdivone">
            <h1>Invoice</h1>
            <br />
            <br />
            <br />
            <h3><b>From</b></h3>
            <h5>Name: </h5>{" "}
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Full Name"
              value={products.name1}
              onChange={(e) => {
                setProducts({ ...products, name1: e.target.value });
              }}
            />
            <h5>Email:</h5>
            <input
              className="form-control"
              type="email"
              placeholder="name@gmail.com"
              value={products.email}
              onChange={(e) => {
                setProducts({ ...products, email: e.target.value });
              }}
            />
            <h5>Address:</h5>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Address"
              value={products.address}
              onChange={(e) => {
                setProducts({ ...products, address: e.target.value });
              }}
            ></input>
            <h5>Phone:</h5>
            <input
              className="form-control form-control-sm"
              type="tel"
              placeholder="Phone No"
              value={products.phone}
              onChange={(e) => {
                setProducts({ ...products, phone: e.target.value });
              }}
            ></input>
            <h5>Business Number</h5>
            <input
              className="form-control form-control-sm"
              type="tel"
              placeholder="Business Number"
              value={products.business}
              onChange={(e) => {
                setProducts({ ...products, business: e.target.value });
              }}
            ></input>
            <h5>Company Name</h5>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Company Name"
              value={products.company}
              onChange={(e) => {
                setProducts({ ...products, company: e.target.value });
              }}
            ></input>
            
            <div>
              <br />
              <br />
              <br />
              <br />
              <h5>Invoice Number </h5>{" "}
              <input
                className="form-control row g-3 align-items-center my-2"
                type="text"
                defaultValue={"INV001"}
                value={products.invoice}
                onClick={(e) => {
                  setProducts({ ...products, invoice: e.target.value });
                }}
              />
              <h5>Date </h5>{" "}
              <input
                className="form-control row g-3 align-items-center my-2"
                type="text"
                defaultValue={"21/04/2025"}
                value={products.date}
                onClick={(e) => {
                  setProducts({ ...products, date: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="divtwo">
            <h3><b>Bill To</b></h3>
            <h5>Name: </h5>{" "}
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Full Name"
              value={products.name2}
              onClick={(e) => {
                setProducts({ ...products, name2: e.target.value });
              }}
            />
            <h5>Email:</h5>
            <input
              className="form-control"
              type="email"
              placeholder="name@gmail.com"
              value={products.email2}
              onClick={(e) => {
                setProducts({ ...products, email2: e.target.value });
              }}
            />
            <h5>Address:</h5>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Address"
              value={products.address2}
              onClick={(e) => {
                setProducts({ ...products, address2: e.target.value });
              }}
            ></input>
            <h5>Phone:</h5>
            <input
              className="form-control form-control-sm"
              type="tel"
              placeholder="Phone No"
              value={products.phone2}
              onClick={(e) => {
                setProducts({ ...products, phone2: e.target.value });
              }}
            ></input>
            <h5>Business Number:</h5>
            <input
              className="form-control form-control-sm"
              type="tel"
              placeholder="Business Number"
              value={products.business2}
              onClick={(e) => {
                setProducts({ ...products, business2: e.target.value });
              }}
            ></input>
            <h5>GST NO.</h5>
            <input
              className="form-control form-control-sm"
              type="tel"
              placeholder="GST Number"
              value={products.gst}
              onChange={(e) => {
                setProducts({ ...products, gst: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="containertwo">
          <div className="desc-head">
            <p>Description</p>
            <p>Rate</p>
            <p className="quantity-desc">Quantity</p>
            <p>Amount</p>
          </div>
          <div className="desc-details">
            <input
              className="form-controldesc row g-3 align-items-center my-2"
              type="text"
              placeholder="item description"
              value={products.item}
              onChange={(e) => {
                setProducts({ ...products, item: e.target.value });
              }}
            />
            <input
              className="form-controlrate row g-3 align-items-center my-2"
              type="text"
              placeholder="Rate"
              value={products.rate}
              onChange={(e) => {
                setProducts({ ...products, rate: e.target.value });
              }}
            />
            <button
              className="increase row g-3 align-items-center my-2 "
              type="text"
              placeholder="Quantity"
              onClick={() => setProducts(products.quantity - 1)}
            >
              -
            </button>
            <p className="actual-quantity">{products.quantity}</p>
            <button
              className="decrease row g-3 align-items-center my-2 "
              type="text"
              placeholder="Quantity"
              onClick={() => setProducts(products.quantity + 1)}
            >
              +
            </button>
            <input
              className="form-controlamount row g-3 align-items-center my-2"
              type="text"
              placeholder="Amount"
              value={products.rate * products.quantity}
              onChange={(e) => {
                setProducts({ ...products, rate: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          className="btn btn-warning mx-3 my-3"
          onClick={() => navigate("add")}
        >
          Add
        </button>

        <button className="btn btn-primary" onClick={() => navigate("Print")}>
          Output Invoice
        </button>
        <Outlet />

        {/* INVOICE OUTPUT */}

        <div className="outputfullbody">
          <div className="outpart">
            <div className="outputone">
              <h1>Invoice</h1>
              <br />
              <br />
              <br />
              <h4>From</h4>
              <h5>Name: {products.name1} </h5>
              <h5>Email: {products.email}</h5>
              <h5>Address: {products.address} </h5>
              <h5>Phone: {products.phone}</h5>
              <h5>Business Number: {products.business}</h5>
              <h5>Company Name: {products.company}</h5>
              <div></div>
              <br />
              <br />
              <br />
              <br />
              <div className="outputtwo">
                <h4>Bill To</h4>
                <h5>Name: {products.name2}</h5>
                <h5>Email: {products.email2}</h5>
                <h5>Address: {products.address2}</h5>
                <h5>Phone: {products.phone2}</h5>
                <h5>Business Number: {products.business2}</h5>
              </div>
            </div>

            <div className="outputthree">
              <h5>GST No: {products.gst}</h5>
              <h5>Item: {products.item}</h5>
              <h5>Rate: {products.rate}</h5>
              <h5>Quantity: {products.quantity}</h5>
              <h5>Invoice Number: {products.invoice}</h5>
              <h5>Date: {products.date} </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
