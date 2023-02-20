import React from "react";

const FormInput = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  isError,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isError && <div className="alert alert-danger mt-3">{isError}</div>}
    </div>
  );
};

export default FormInput;
