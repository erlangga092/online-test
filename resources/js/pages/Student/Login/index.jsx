import { Head, router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { LayoutStudent } from "@/layouts";

const FormInputStudent = ({
  label,
  name,
  icon,
  type,
  onChange,
  isError,
  placeholder,
}) => {
  return (
    <div className="form-group mb-4">
      <label htmlFor="">{label}</label>
      <div className="input-group">
        <span className="input-group-text">
          <i className={icon}></i>
        </span>
        <input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      {isError && <div className="alert alert-danger mt-2">{isError}</div>}
    </div>
  );
};

const Login = ({ errors }) => {
  const { session } = usePage().props;
  const [form, setForm] = useState({
    nisn: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    router.post("/students/login", form);
  };

  return (
    <>
      <Head>
        <title>Login Siswa - Aplikasi Ujian Online</title>
      </Head>
      <LayoutStudent>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5">
            <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              {errors?.message && (
                <div className="alert alert-danger mt-2">{errors?.message}</div>
              )}
              {session?.error && (
                <div className="alert alert-danger mt-2">{session?.error}</div>
              )}

              <form className="mt-4" onSubmit={onSubmit}>
                <FormInputStudent
                  label="NISN"
                  name="nisn"
                  type="number"
                  icon="fa fa-key"
                  placeholder="Masukkan NISN"
                  isError={errors?.nisn}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      nisn: e.target.value,
                    })
                  }
                />
                <FormInputStudent
                  label="Password"
                  name="password"
                  type="password"
                  icon="fa fa-lock"
                  placeholder="Masukkan Password"
                  isError={errors?.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                />

                <div className="d-flex justify-content-between align-items-top mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label htmlFor="remember" className="form-check-label mb-0">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-gray-800">
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LayoutStudent>
    </>
  );
};

export default Login;
