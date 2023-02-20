import React from "react";

const FormSelect = ({
  onChange,
  data,
  name,
  value,
  label,
  isError,
  keyVal,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} className="form-select" onChange={onChange}>
        {data?.map((v, i) => (
          <option value={v?.id} key={i} selected={value == v?.id}>
            {v[`${keyVal}`]}
          </option>
        ))}
      </select>

      {isError && <div className="alert alert-danger mt-2">{isError}</div>}
    </div>
  );
};

export default FormSelect;
