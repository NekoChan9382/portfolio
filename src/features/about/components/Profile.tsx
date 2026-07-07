import React from "react";
import Section from "../../../shared/components/Section/Section";
import { profileContent } from "../../../shared/data/Contents";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <Section id="profile" title="Profile">
      <Greeting />
    </Section>
  );
};

const Greeting: React.FC = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img
          src={`${process.env.PUBLIC_URL}${profileContent.image}`}
          alt="kanibaPigeon"
        ></img>
      </div>
      <div className="profile-detail">
        <h3>Name: {profileContent.name}</h3>
        {profileContent.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
