import React from "react";
import { DEFAULT_LOADING_MSG } from "../../constants/labels";

export default function Loading(props) {
  const { msg } = props;
  return (
    <div className="row">
      <div className="col-12">
        <div className="alert alert-primary" role="alert">
          {msg || DEFAULT_LOADING_MSG}
        </div>
      </div>
    </div>
  );
}
