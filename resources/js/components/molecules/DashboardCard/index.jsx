import React from "react";

const DashboardCard = ({ type, icon, name, data }) => {
  return (
    <div className="col-12 col-sm-6 col-xl-4 mb-4">
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="row d-block d-xl-flex align-items-center">
            <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
              <div
                className={`icon-shape icon-shape-${type} rounded me-4 me-sm-0`}
              >
                {icon}
              </div>
              <div className="d-sm-none">
                <h2 className="h5">{name}</h2>
                <h3 className="fw-extrabold mb-1">{data}</h3>
              </div>
            </div>
            <div className="col-12 col-xl-7 px-xl-0">
              <div className="d-none d-sm-block">
                <h2 className="h5">{name}</h2>
                <h3 className="fw-extrabold mb-1">{data}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
