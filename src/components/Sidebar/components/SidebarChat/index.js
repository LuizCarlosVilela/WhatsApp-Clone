import React from "react";

import { Avatar } from "@material-ui/core";

import "./styles.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4" />

      <div className="sidebarChat_info">
        <h2>My Name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
