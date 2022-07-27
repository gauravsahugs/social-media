import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";

function Widgets() {
  const news = (topic) => (
    <div className="widgets_news">
      <span className="widgets_hash">•</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div>
      <div className="widgets">
        <div className="widgets_header">
          <h3>LinkedIn News</h3>
          <InfoIcon />
          <div className="widgets_bottom">
            {news("The gender gap in leadership")}
            <p className="widgets_statNumber">1d ago - 4552 readers</p>
            {news("Startup layoffs worry senior leaders")}
            <p className="widgets_statNumber">3d ago - 112 readers</p>
            {news("Google to pull back on hiring")}
            <p className="widgets_statNumber">24m ago - 222 readers</p>
            {news("Is Marvel's output less marvelous?")}
            <p className="widgets_statNumber">3m ago - 52 readers</p>
            {news("Is remote work all it's made out to be?")}
            <p className="widgets_statNumber">1d ago - 78952 readers</p>
            {news("Choosing work from home for good")}
            <p className="widgets_statNumber">4d ago - 10252 readers</p>
            {news("Twitter sues Musk for yanking deal")}
            <p className="widgets_statNumber">10m ago - 49552 readers</p>
          </div>
        </div>
      </div>
      <div className="about">
        <p>About</p>
        <p> Accessibility</p>
        <p> Help Center</p>
        <p>Privacy & Terms</p>
        <p> Ad Choices Advertising</p>
        <p> Business Services</p>
        <p> Get the LinkedIn app</p>
        <p> More</p>
        <p>LinkedIn Corporation © 2022</p>
      </div>
    </div>
  );
}

export default Widgets;
