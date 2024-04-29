import React from "react";

import tuitionLogo from "../../../public/tuition.png";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <div className="Logo">
      <Image src={tuitionLogo} alt="Tuition Plus logo" />
    </div>
  );
};
