import React from "react";
import { Link } from "@inertiajs/react";

const BackButton = ({ link }) => {
  return (
    <Link
      className="btn btn-md btn-primary border-0 shadow mb-3 me-2"
      type="button"
      href={link}
    >
      <i className="fa fa-long-arrow-alt-left me-2"></i> Kembali
    </Link>
  );
};

export default BackButton;
