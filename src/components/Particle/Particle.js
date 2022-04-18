/*********************************************************************************
 *     File Name           :     Particle.js
 *     Created By          :     otgon
 *     Creation Date       :     [2022-01-17 23:22]
 *     Last Modified       :     [2022-04-18 12:18]
 *     Description         :
 **********************************************************************************/
import React from "react";
import Particles from "react-tsparticles";
import codeSVG from "./code.svg";
export default function ParticleFull() {
  return (
    <>
      <Particles
        className="absolute"
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#fff"],
            },
            lineLinked: {
              blink: false,
              color: "random",
              consent: false,
              distance: 25,
              enable: true,
              opacity: 2,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                area: 2000,
              },
              limit: 0,
              value: 200,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 1,
                sync: false,
              },
              random: false,
              value: 5,
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 20,
                sync: false,
              },
              random: true,
              value: 1,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "rgba(255,255,255,0.2)",
              lineWidth: 1,
            },
            enable: true,
            move: {
              radius: 3,
            },
            position: {
              x: 20,
              y: 40,
            },
            inlineArrangement: "equidistant",
            scale: 4,
            type: "inline",
            url: codeSVG,
          },
          background: {
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </>
  );
}
