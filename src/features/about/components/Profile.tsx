import React from "react";
import Section from "../../../shared/components/Section/Section";
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
          src={`${process.env.PUBLIC_URL}/assets/kanibaPigeon.jpg`}
          alt="kanibaPigeon"
        ></img>
      </div>
      <div className="profile-detail">
        <h3>Name: bit</h3>
        <p>大阪公大高専2年生のbitです。組み込みやWeb開発を行っています。</p>
        <p>最近はWebデザインに興味があったりするかも</p>
      </div>
    </div>
  );
};

export default Profile;
