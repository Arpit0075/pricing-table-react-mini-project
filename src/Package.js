import React from "react";

function Package(props) {
  return (
    <div>
      <div className="col-lg-4 free">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.title}
            </h5>
            <h6 className="card-price text-center">
              ${props.price}
              <span className="period">/month</span>
            </h6>

            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.user} User
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.storage}GB Storage
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Public Projects
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Community Access
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Unlimited Private Projects- {props.projects}
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Dedicated Phone Support- {props.phoneSup}
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Free Subdomain- {props.subDom}
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Monthly Status Reports- {props.report}
              </li>
            </ul>
            <div className="d-grid">
              <a href="" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
