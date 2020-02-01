import React from "react";

const data = {
  bong: {
    name: "yootaebong",
    description: "good guy"
  },
  gildong: {
    name: "honggildong",
    description: "bad guy"
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>null</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
