import React from "react";

export default function ErrorAlert(props) {
  const { errors = [] } = props;
  return (
    <div className="row">
      {errors.map((e) => (
        <div key={e} className="col-12">
          <div className="alert alert-danger" role="alert">
            {e}
          </div>
        </div>
      ))}
    </div>
  );
}
