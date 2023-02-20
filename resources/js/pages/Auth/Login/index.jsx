import { LayoutAuth } from "@/layouts";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";

const Login = ({ errors }) => {
  const [form, setForm] = useState(() => {
    return {
      email: "",
      password: "",
    };
  });

  const onSubmit = (e) => {
    e.preventDefault();
    router.post("/login", form);
  };

  return (
    <>
      <Head>
        <title>Login Administrator - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAuth>
        <div className="bg-white border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3>ADMINISTRATOR</h3>
          </div>
          <form onSubmit={onSubmit} className="mt-4">
            <div className="form-group mb-4">
              <label htmlFor="">Email Address</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              {errors?.email && (
                <div className="alert alert-danger mt-2">{errors?.email}</div>
              )}
            </div>

            <div className="form-group mb-4">
              <label htmlFor="">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              {errors?.password && (
                <div className="alert alert-danger mt-2">
                  {errors?.password}
                </div>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-top mb-4">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="" className="form-check-label mb-0">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button className="btn btn-gray-800" type="submit">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </LayoutAuth>
    </>
  );
};

export default Login;
