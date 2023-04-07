import React from "react";
import "./Notification.scss";

const Notification = ({ message }) => {
  return (
    <div className="d-flex justify-content-center alert alert-danger">
      {message}
    </div>
  );
};

export default Notification;
