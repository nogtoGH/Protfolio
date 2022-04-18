/*********************************************************************************
*     File Name           :     Type.js
*     Created By          :     otgon
*     Creation Date       :     [2022-01-18 19:30]
*     Last Modified       :     [2022-01-19 19:11]
*     Description         :
**********************************************************************************/
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front end dev",
          "Cyber scurity amateur",
          "MERN stack dev",
          "Linux amateur",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;

