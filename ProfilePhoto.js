import React from "react";

export default function ProfilePhoto({ source }) {
  return (
    <div>
      <img className="profile-photo" src={source} alt="Profile_Photo" />
    </div>
  );
}
