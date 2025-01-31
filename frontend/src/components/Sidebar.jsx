import React from "react";
import withAuthentication from "../utils/withAuthentication";

const Sidebar = () => {
  return <div className="sidebar">Sidebar</div>;
};

export default withAuthentication(Sidebar);
