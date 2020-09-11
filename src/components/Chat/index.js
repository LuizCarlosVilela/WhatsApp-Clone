import React from "react";

import { Avatar, IconButton } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import IsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import "./styles.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src="https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4" />

        <div className="chat_headerInfo">
          <h3>My name</h3>
          <p>Last message...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">My name</span>
          Hey Guys
          <span className="chat_timestamp">3:81</span>
        </p>

        <p className="chat_reciever">
          <span className="chat_name">My name</span>
          God is good!!
          <span className="chat_timestamp">3:81</span>
        </p>

        <p className="chat_reciever">
          <span className="chat_name">My name</span>
          Finish chat
          <span className="chat_timestamp">5:50</span>
        </p>
      </div>

      <div className="chat_footer">
        <IconButton>
          <IsertEmoticonIcon />
        </IconButton>

        <form>
          <input placeholder="Type a message" type="text" />
          <button>Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}
export default Chat;
