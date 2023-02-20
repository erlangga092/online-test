import { Link } from "@inertiajs/react";
import React from "react";

const NavbarAdmin = () => {
  return (
    <>
      <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
        <div className="container-fluid px-0">
          <div
            className="d-flex justify-content-between w-100"
            id="navbarSupportedContent"
          >
            <div className="d-flex align-items-center"></div>

            <ul className="navbar-nav align-items-center">
              <li className="nav-item dropdown ms-lg-3">
                <a
                  className="nav-link dropdown-toggle pt-1 px-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="media d-flex align-items-center">
                    <img
                      className="avatar rounded-circle"
                      alt="Image placeholder"
                      src={`https://ui-avatars.com/api/?name=Administrator&amp;background=4e73df&amp;color=ffffff&amp;size=100`}
                    />
                  </div>
                </a>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1 border-0 shadow">
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    href="/logout"
                    method="POST"
                    as="button"
                  >
                    <svg
                      className="dropdown-icon text-danger me-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarAdmin;
