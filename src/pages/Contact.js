import React from "react";

const Contact = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 text-center py-4 my-4 ">
          <h1>Have Some Question?</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1668783527~exp=1668784127~hmac=9e861241610c4c75219ccd210f8aa93baa0d9f66ed9cc273ae2631233a9091c0"
            alt="contact"
            height="450px"
            width="450px"
          />
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleForm" className="form-label">
                Full Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleForm"
                placeholder="John Smith"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Write your questions..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">Send Message</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
