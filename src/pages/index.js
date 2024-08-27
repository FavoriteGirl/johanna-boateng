import Head from "next/head";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import profile from "../public/photo.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { BsArrows } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Johanna Boateng</title>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">Portfolio</h1>
            <ul className="flex items-center">
              
              <li>
                <a
                  className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://docs.google.com/document/d/13RJa6TOTOECmm1tpiXrZJP7u2YiGvV71lMSYSgk-GNQ/edit?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex">
            <div className="text-center p-5">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">
                Johanna Boateng
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                Frontend Web Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
                As a quick-learning and innovative web developer with expertise
                in HTML, CSS, JavaScript, and React, I am dedicated to
                leveraging my skills and continuously learning to contribute
                effectively as a Front-End Developer. My goal is to creatively
                solve challenges and drive organizational growth by delivering
                high-quality web solutions
              </p>

              <div className="text-5xl flex justify-center gap-16 py3 text-gray-600">
              <a
                  href="https://www.linkedin.com/in/johanna-boateng-5a2a402b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" mt-2 inline-block"
                >
                  <AiFillLinkedin />
                </a>
              <a
                  href="https://github.com/FavoriteGirl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" mt-2 inline-block"
                >
                  <AiFillGithub  />
                </a>
                
                
              </div>
            </div>

            <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src={profile} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <section className="dark:text-white">
          <div>
            <h3 className="text-3xl py-1 mt-40 dark:text-teal-900 text-center">
              Services I Offer
            </h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} className="m-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Front-End Development
              </h3>
              <p className="py-2">
                Developing the client side of web applications using HTML, CSS,
                and JavaScript.
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} className="m-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Dynamic and Interactive Applications
              </h3>
              <p className="py-2">
                Building user interfaces with React to deliver engaging and
                responsive user experiences.
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Attention to Details
              </h3>
              <p className="py-2">
                Identifying and resolving issues in web applications to ensure
                smooth operation.
              </p>
            </div>
          </div>
        </section>

        <section className="dark:text-white">
          <div>
            <h3 className="text-3xl py-1 mt-40">Experience</h3>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                // duration: 1
              }}
              className=" bg-blue-300 mt-10 rounded-[15px] shadow-2xl px-56 py-8 "
              onClick={toggleExpansion}
            >
              <span
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <h3 className="font-bold text-lg text-center text-black">
                  MEST Africa
                </h3>
                <p className="text-lg font-semibold text-black ">
                  Frontend web developer
                </p>
                <p className="text-left ml-5 mt-3">
                  Developing intuitive and user-friendly websites interfaces to
                  improve user satisfaction and engagement.
                </p>
                <p className="text-sm text-gray-800 text-center mt-5 ">
                  27/05/2024 - 22/08/2024
                </p>
              </span>
            </motion.div>
          </div>
        </section>

        <section className="dark:text-white">
          <div>
            <h3 className="text-3xl py-1 mt-40">Education</h3>
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="md:w-1/4 text-center md:text-right pr-8 mb-4 md:mb-0">
                <motion.h3
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    // duration: 1
                  }}
                  className="text-2xl font-bold text-teal-500"
                >
                  Web development Training Program
                </motion.h3>
              </div>
              <div className="relative md:w-3/4 pl-8">
                <div className="absolute left-0 w-4 h-4 bg-gray-300 rounded-full mt-2.5 md:mt-0 md:ml-2 -ml-6"></div>
                <div className="absolute left-0 w-0.5 h-full bg-gray-300 -ml-6"></div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    // duration: 1
                  }}
                  className="bg-white  p-6 rounded-lg shadow-lg"
                >
                  <h4 className="font-semibold text-xl mb-2">
                    Web Development
                  </h4>
                  <p className="text-gray-600 font-semibold">
                    MEST Africa
                  </p>
                  <p className="text-gray-600">Aluguntugui Street, East Legon</p>
                  <span className="flex gap-1">
                    <p className="text-gray-600"> May / 2024</p>
                    <p className="text-gray-600">August/ 2024</p>
                  </span>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="md:w-1/4 text-center md:text-right pr-8 mb-4 md:mb-0">
                <motion.h3
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    // duration: 1
                  }}
                  className="text-2xl font-bold text-teal-500"
                >
                  Brands and Communication Management
                </motion.h3>
              </div>
              <div className="relative md:w-3/4 pl-8">
                <div className="absolute left-0 w-4 h-4 bg-gray-300 rounded-full mt-2.5 md:mt-0 md:ml-2 -ml-6"></div>
                <div className="absolute left-0 w-0.5 h-full bg-gray-300 -ml-6"></div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    // duration: 1
                  }}
                  className="bg-white  p-6 rounded-lg shadow-lg"
                >
                  <h4 className="font-semibold text-xl mb-2">
                  MA. Brands and Communication Management
                  </h4>
                  <p className="text-gray-600 font-semibold">
                    University of Professional Studies, Accra
                  </p>
                  <p className="text-gray-600">Greater Accra, Accra</p>
                  <span className="flex gap-1">
                    <p className="text-gray-600"> Oct / 2021</p>
                    <p className="text-gray-600">September 2020</p>
                  </span>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="md:w-1/4 text-center md:text-right pr-8 mb-4 md:mb-0">
                <motion.h3
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    // duration: 1
                  }}
                  className="text-2xl font-bold text-teal-500"
                >
                  Banking and Finance
                </motion.h3>
              </div>
              <div className="relative md:w-3/4 pl-8">
                <div className="absolute left-0 w-4 h-4 bg-gray-300 rounded-full mt-2.5 md:mt-0 md:ml-2 -ml-6"></div>
                <div className="absolute left-0 w-0.5 h-full bg-gray-300 -ml-6"></div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    // duration: 1
                  }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h4 className="font-semibold text-xl mb-2">
                    Bsc. Banking and Finance
                  </h4>
                  <p className="text-gray-600 font-semibold">
                    University of Professional Studies, Accra
                  </p>
                  <p className="text-gray-600">Greater Accra, Accra</p>
                  <span className="flex gap-1">
                    <p className="text-gray-600"> Sep / 2012</p>
                    <p className="text-gray-600"> May / 2016</p>
                  </span>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center mb-8">
            </div>
          </div>
        </section>

        <section>
          <div>
          <h3 className="text-3xl py-1 mt-40">Projects</h3>
            <div className=" overflow-hidden group mb-20 mt-40 transform hover:scale-105 transition-transform duration-300 mx-auto">
              <div className="  bg-orange-50 rounded-full pb-5 shadow-lg  flex flex-col justify-center items-center text-center text-black ">
               <BsArrows className="size-10 text-white"/>
                <h3 className="text-2xl font-semibold">
                  Travel Twin
                </h3>
                <p className="mt-2">
                  This is a website that connects like-minded individuals who share similar travel interests, destinations, or schedules.
                </p>
                <p className="mt-1">MEST Instructors</p>
                <p className="mt-1">MEST Africa</p>
                <p className="mt-1">17/08/2024 - 24/08/2024</p>
                <a
                  href="https://traveltwin.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-400 mt-2 inline-block"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
