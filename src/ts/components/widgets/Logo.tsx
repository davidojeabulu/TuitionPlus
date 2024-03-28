import React from "react";

import tuitionLogo from "../../assets/tuition.png";

export const Logo: React.FC = () => {
  return (
    <div className="Logo">
      <img src={tuitionLogo} alt="Tuition Plus logo" />
    </div>
  );
};
