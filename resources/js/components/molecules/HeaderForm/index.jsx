import React from "react";

const HeaderForm = ({ title, icon = "fa fa-bookmark" }) => {
  return (
    <>
      <h5>
        <i className={icon}></i> {title}
      </h5>
      <hr />
    </>
  );
};

export default HeaderForm;
