import React from "react";
import './style1.css'

// Scroller Component
const Scrool = () => {
  const iconList = [
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/Molekule.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/billiondollarboy.png",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/OrganicBasics.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/Otherland.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/absolutelyx.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/au-rate.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/benefitcosmetics.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/collectively.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/icfolson.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/iheartradio.svg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/69025/rtr.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/loreal.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/mgemi.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/patchology.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/Activate.png",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/quip.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/reebok.svg",
    "https://s3-us-west-2.amazonaws.com/lumanu-user-uploads/team-logos/wme.png",
  ];

  return (
    <div style={styles.scrollerContainer}>
      <div style={styles.scroller}>
        {/* Render each icon twice for the looping effect */}
        {[...iconList, ...iconList].map((item, index) => (
          <img key={index} src={item} alt={`logo-${index}`} style={styles.scrollerImg} />
        ))}
      </div>
    </div>
  );
};

// CSS-in-JS for the styles
const styles = {
  scrollerContainer: {
    overflow: "hidden",
  },
  scroller: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "500vw", // Default scroller size
    animation: "icon-scroller 60s linear 0s normal infinite",
    willChange: "transform",
  },
  scrollerImg: {
    maxWidth: "150px",
    maxHeight: "30px",
  },
};

export default Scrool;
