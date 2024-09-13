// import React from "react";
import profileDescriptionStyle from "./heading.module.css";

const ProfileCard = (prop) => {
  //destructuring
  const { title, handle, image, description } = prop;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt={title + " logo"} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
      <div className={`content ${profileDescriptionStyle.description}`}>
        {description}
      </div>
    </div>
  );
};

export default ProfileCard;
