import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqP_VYfxDZFE0MwFkw9_hpA4ynu1fx2PEcA&usqp=CAU"
          alt=""
        />
        <Avatar
          className="sidebar_avatar"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHdueqIM_Q_EQ/profile-displayphoto-shrink_100_100/0/1655471816110?e=1662595200&v=beta&t=xQ1jGQ5k7N--X27L7zDaDNvHj2HhwBL-kna7RMMEKPI"
        />
        <h2> Gaurav Sahu</h2>
        <h4>sahugaurav80@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed you</p>
          <p className="sidebar_statNumber">2552</p>
        </div>
        <div className="sidebar_stat">
          <p>views on post</p>
          <p className="sidebar_statNumber">4552</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("redux")}
        {recentItem("frontend devops")}
        {recentItem("reactnative")}
      </div>
    </div>
  );
}

export default Sidebar;
