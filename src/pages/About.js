import React from "react";
import {
  IoLogoFacebook,
  AiFillGithub,
  AiFillCodepenCircle,
} from "react-icons/all";
import data from "../data/about.js";
const About = () => {
  return (
    <>
      <div className=" my-10">
        <section>
          <div className=" flex flex-col flex-wrap md:flex-row md:1/2 md:justify-between items-center">
            <div className="w-1/2 h-1/2 ">
              <img
                className=" h-52 w-64 object-center md:h-72 md:w-96"
                src={data.img.avatar.url}
                alt={data.img.avatar.alt}
              />
            </div>
            <div className=" h-1/2 w-full x-5 py-10  md:px-8 sm:p-8 my-2 md:rounded-lg shadow-lg justify-between md:w-6/12">
              <h1 className="title-main text-center md:text-left">
                {" "}
                Миний тухай
              </h1>
              <p className="main-text text-lg md:text-base">
                MERN , MEAN , FULL stack сонирхолтой ба чөлөөт цагаараа i3wm ,
                vim ,linux bash сурах зэргээр өнгөрөөдөг . Орчин үед мэдээллийн
                аюулгүй байдал чухал бөгөөд хамгийн сонирхолтой салбарыг өөрийн
                холби болгон Web pen testing чиглэлээр илүү түлхүү судалдаг.
              </p>
              <div>
                <div className="flex flex-row flex-wrap mt-7">
                  <div className="mr-4">
                    <button
                      className="text-blue-700 font-bold py-2 px-4 rounded mb-2 flex flex-row items-end border border-gray-500 rounded-lg text-lg"
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/profile.php?id=100006862092540"
                        )
                      }
                    >
                      <IoLogoFacebook className="mb-1" />
                      facebook
                    </button>
                  </div>
                  <div className="mr-4">
                    <button
                      className="text-white font-bold py-2 px-4 rounded mb-2 flex flex-row items-end border border-gray-500 rounded-lg text-lg"
                      onClick={() => window.open("https://github.com/nogtoGH")}
                    >
                      <AiFillGithub className="mb-1" />
                      github
                    </button>
                  </div>
                  <div className="mr-4">
                    <button
                      className="text-black font-bold py-2 px-4 rounded mb-2 flex flex-row items-end border border-gray-500 rounded-lg text-lg"
                      onClick={() =>
                        window.open("https://codepen.io/lmprgrjz-the-looper")
                      }
                    >
                      <AiFillCodepenCircle className="mb-1" />
                      CodePen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-2  px-5" id="skill">
          <div>
            <h2 className="m-12 text-6xl font-bold text-transparent text-gray-300 text-center">
              {" "}
              ур чадвар
            </h2>
          </div>
          <div className="text-2xl font-bold pt-10">
            <h2 className="title-main">програмчлалын хэлүүд</h2>
          </div>
          <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6">
            {data.stack.lang.map((lang, index) => {
              return (
                <div
                  className={`${
                    index % 2 ? "animate-float" : "animate-refloat"
                  } flex flex-col items-center`}
                  tabIndex="0"
                  role="img"
                >
                  <img
                    src={lang.url}
                    alt={lang.alt}
                    loading="lazy"
                    className="w-16 mb-1"
                    width="70px"
                    height="64px"
                  />
                  {lang.desc}
                </div>
              );
            })}
          </div>
        </section>

        <section className="my-10  py-5" id="skill">
          <div className="text-2xl font-bold pt-10">
            <h2 className="title-main">Хэрэгсэл ба технологи</h2>
          </div>
          <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6">
            {data.stack.tools.map((tools, index) => {
              return (
                <div
                  className="flex flex-col items-center"
                  tabIndex="0"
                  role="img"
                >
                  <img
                    src={tools.url}
                    alt={tools.alt}
                    loading="lazy"
                    className="w-16 mb-1"
                    width="70px"
                    height="64px"
                  />
                  {tools.desc}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
