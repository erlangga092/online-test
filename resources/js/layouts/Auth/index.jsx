import React from "react";

const LayoutAuth = ({ children }) => {
  return (
    <div className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
      <div className="container">
        <div
          className="row justify-content-center form-bg-image"
          style={{ background: `url('/assets/images/signin.svg')` }}
        >
          <div className="col-12 d-flex align-items-center justify-content-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
