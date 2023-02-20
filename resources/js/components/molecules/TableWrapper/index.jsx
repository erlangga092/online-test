import React from "react";
import { Pagination } from "@/components";

const TableWrapper = ({ children, links }) => {
  return (
    <div className="row mt-1">
      <div className="col-md-12">
        <div className="card border-0 shadow">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-centered table-nowrap mb-0 rounded">
                {children}
              </table>
            </div>
            <Pagination links={links} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableWrapper;
