import useWindowDimensions from "../hook/getWindowDimensions";
import ParticleFull from "../components//Particle/Particle";
import Particlemobile from "../components/Particle/Particlemobile";
import React from "react";
import Type from "../components/type/Type";
const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <section className="flex flex-col justify-between items-end h-screen">
        <div className=" md:my-32 ml-6 md:mr-10">
          <div className=" flex text-5xl font-bold md:text-5xl text-white ">
            Би Отгон баатар байна
          </div>
          <div className="text-2xl text-gray-200 m-2"> 
            <Type />
          </div>   
      </div> 
          <div> 
        {width >= 800 ? <ParticleFull /> : <Particlemobile />}  
         </div> 
      </section>
    </>
  );
};
export default Home;
