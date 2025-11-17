import React from "react";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <section id="profile">
      <div className="section-content">
        <div className="section-title">
          <h2>Profile</h2>
        </div>
        <Greeting />
      </div>
    </section>
  );
};

const Greeting: React.FC = () => {
  return (
    <div className="greeting">
      <div className="greeting-image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/kanibaPigeon.jpg`}
          alt="kanibaPigeon"
        ></img>
      </div>
      <div className="greeting-text">
        <h3>Name: bit</h3>
        <p>大阪公大高専2年生のbitです。組み込みやWeb開発を行っています。</p>
        <p>最近はWebデザインに興味があったりするかも</p>
      </div>
    </div>
  );
};

export default Profile;
