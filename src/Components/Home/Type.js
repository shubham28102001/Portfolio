import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
  return (
    <Typewriter 
      options={{
        strings: [
          "Full Stack Developer",
          "Machine Learning Enthusiast",
          "Foodie",
          "Traveller",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;