/*********************************************************************************
*     File Name           :     getWindowDimensions.js
*     Created By          :     otgon
*     Creation Date       :     [2022-01-18 01:51]
*     Last Modified       :     [2022-01-18 01:55]
*     Description         :
**********************************************************************************/

//thanks to QoP from SO
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

