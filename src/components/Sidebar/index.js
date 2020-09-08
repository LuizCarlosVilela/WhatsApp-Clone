import React from "react";

import { Avatar } from "@material-ui/core";
import "./styles.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
      </div>

      <div className="sidebar_search"></div>

      <div className="sidebar_chats"></div>
    </div>
  );
}

export default Sidebar;
