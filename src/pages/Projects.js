import React from "react";
import projects from "../data/project";
const img = {
  width: "500px",
  height: "300px",
};

const Project = () => {
  return (
    <> 
        <div className="grid grid-row-1 md:grid-cols-3 gap-6 m-10">
          {projects.map((project, index) => (
              <div
                className="shadow-xl w-full h-full "
                key={index}
              >
                <img
                  src={project.image}
                  style={img}
                  alt={project.title}
                  className="w-1/2 sm:1/3 md:2/3"
                />
                <div className="flex flex-col space-y-3 my-3 mx-1 w-full ">
                  <h3 className="uppercase font-bold text-lg text-white">
                    {project.title}
                  </h3>
                  <p className="main-text text-base ">{project.description}</p>
                  <div className="flex overflow-auto space-x-3 pb-2 flex-wrap text-white">
                    {project.tools.map((disc, index) => (
                      <span
                        className="border border-gray-500 px-2 py-1 rounded-lg text-sm text-white"
                        key={index}
                      >
                        {disc}
                      </span>
                    ))}
                  </div>
                  <div className="w-auto flex space-x-5 relative">
                    <button
                      className="bg-green-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                      onClick={() => window.open(project.github)}
                    >
                      эх код{" "}
                    </button>
                    <button
                      className="bg-blue-400 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                      onClick={() => window.open(project.link)}
                    >
                      хурдан харах {" "}
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>
    </>
  );
};

export default Project;
