import React from "react";

import {
  FaUserAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaSearchLocation,
  FaCalendarAlt,
  FaLinkedin,
} from "react-icons/fa";

export default function Icons({ handleIconHover }) {
  //   const handleClick = (event) => {
  //     console.log(event);
  //     handleIconHover(event.target.classList[1]);
  //   };
  return (
    <div className="icons">
      <FaUserAlt
        className="icon person"
        onMouseEnter={() => handleIconHover("person")}
      />
      <FaPhoneAlt
        className="icon call"
        onMouseEnter={() => handleIconHover("call")}
      />
      <FaRegEnvelope
        className="icon mail"
        onMouseEnter={() => handleIconHover("mail")}
      />
      <FaSearchLocation
        className="icon location"
        onMouseEnter={() => handleIconHover("location")}
      />
      <FaCalendarAlt
        className="icon calendar"
        onMouseEnter={() => handleIconHover("calendar")}
      />
      <FaLinkedin
        className="icon linkedin"
        onMouseEnter={() => handleIconHover("linkedin")}
      />
    </div>
  );
}
