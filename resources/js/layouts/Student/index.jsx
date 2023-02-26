import React from "react";
import { Link, usePage } from "@inertiajs/react";

const LayoutStudent = ({ children }) => {
  const { auth } = usePage().props;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary mb-4 shadow">
        <div className="container position-relative">
          <Link className="navbar-brand me-lg-3" href="/student/dashboard">
            <img
              className="navbar-brand-dark"
              src="/assets/images/logo.png"
              style={{ height: "70px" }}
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
            {auth?.student && (
              <form className="d-flex">
                <Link
                  href="/logout"
                  method="POST"
                  className="btn btn-secondary shadow"
                  as="button"
                >
                  LOGOUT
                </Link>
              </form>
            )}
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </>
  );
};

export default LayoutStudent;
