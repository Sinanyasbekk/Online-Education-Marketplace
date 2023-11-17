import React, { useState } from "react";
import Register from "./Register";
import MyProfile from "./MyProfile";

const MainComponent = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      {!showProfile ? (
        <Register setShowProfile={setShowProfile} />
      ) : (
        <MyProfile setShowProfile={setShowProfile} />
      )}
    </div>
  );
};

export default MainComponent;
