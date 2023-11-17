import React from "react";
import "./MyProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const MyProfile = ({ setShowProfile }) => {
  const handleLogout = () => {
    setShowProfile(false);
  };

  return (
    <div className="myprofile">
      <div className="myprofile1" />
      <div className="profilesection">
        <div className="name">
          <div className="name1">Name</div>
          <div className="name-child" />
        </div>
        <div className="mail">
          <div className="name1">Mail</div>
          <div className="name-child" />
        </div>
        <div className="bio">
          <div className="name1">Bio</div>
          <div className="bio-child" />
        </div>
        <div className="phone">
          <div className="name1">Phone</div>
          <div className="name-child" />
        </div>
        <div className="submitchanges">
          <div className="submitchanges-child" />
          <div className="submit-changes">Submit Changes</div>
        </div>
        <div className="surname">
          <div className="name1">Surname</div>
          <div className="name-child" />
        </div>
      </div>
      <div className="profile-photo-security-container">
        <p className="profile">Profile</p>
        <p className="profile">&nbsp;</p>
        <p className="profile">Photo</p>
        <p className="profile">&nbsp;</p>
        <p className="profile">Security</p>
        <p className="profile">&nbsp;</p>
        <p className="profile">Subscriptions</p>
        <p className="profile">&nbsp;</p>
        <p className="profile">Payment Methods</p>
        <p className="profile">&nbsp;</p>
        <p className="profile">Privacy</p>
        <p className="profile">&nbsp;</p>
        <p className="profile">Notifications</p>
        <p className="profile">&nbsp;</p>
        <p className="profile" onClick={handleLogout}>
          Log out
        </p>
      </div>
      <img className="pp-1-icon" alt="" src="/pp-1@2x.png" />
      <div className="my-profile">My Profile</div>
      <img className="lines-icon" alt="" src="/lines.svg" />
      <div className="header">
        <div className="emapp">EMAPP</div>
        <div className="header-child" />
        <img className="icon" alt="" src="/1631349418659-1@2x.png" />
        <img className="search-1-icon" alt="" src="/search-1@2x.png" />
        <div className="header-item" />
        <Button className="basket-3" variant="primary">
          Basket (3)
        </Button>
        <div className="search">search</div>
        <div className="header-inner" />
        <div className="line-div" />
        <div className="header-child1" />
        <div className="header-child2" />
        <Button className="courses" variant="outline-primary">
          Courses
        </Button>
        <Button className="login" variant="outline-primary">
          Login
        </Button>
        <Button className="register" variant="outline-primary">
          Register
        </Button>
      </div>
    </div>
  );
};

export default MyProfile;
