import React from "react";

const FormSearch = ({ value, onChange, onSearch }) => {
  return (
    <form onSubmit={onSearch}>
      <div className="input-group">
        <input
          type="text"
          value={value}
          className="form-control border-0 shadow"
          placeholder="masukkan kata kunci dan enter...."
          onChange={onChange}
        />
        <span className="input-group-text border-0 shadow">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </form>
  );
};

export default FormSearch;
