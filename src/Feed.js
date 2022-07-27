import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Feed() {
  const [input, setInput] = useState("");

  return (
    <div className="feed">
      <div className="feed_top">
        <div className="feed_inputContainer">
          <div className="feed_input">
            <CreateIcon />
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
            </form>
          </div>
          <div className="feed_inputOption">
            <InputOption Icon={ImageIcon} title="Photo" color="#70B549" />
            <InputOption
              Icon={SubscriptionsIcon}
              title="Video"
              color="#E7a33e"
            />
            <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
            <InputOption
              Icon={CalendarMonthIcon}
              title="Write article"
              color="#7fc15e"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
