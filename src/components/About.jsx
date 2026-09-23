import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import { BiCodeAlt } from "react-icons/bi";

const About = () => {
  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  };

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={horizontal}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Who I am</p>
            <p className="heading-text">About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={horizontal}
              className="about-content"
            >
              <p>
                Hello! My name is Maxwell, and I build fast, responsive, and
                user-friendly web experiences. My interest in web development
                started in 2018 when I worked on my first school project and
                discovered how much I enjoyed turning ideas into real websites.
              </p>
              <br />
              <p>
                I focus on frontend development and full stack solutions using
                modern tools like React, Next.js, JavaScript, TypeScript, Node.js,
                and responsive CSS. I enjoy creating clean interfaces, connecting
                them to reliable backend services, and building products that are
                easy to use, maintain, and grow.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: "50", opacity: 0 }}
              whileInView={horizontal}
              className="about-card"
            >
              <BiCodeAlt className="about-card-icon" />
              <p className="about-card-title">Frontend & Full Stack Developer</p>
              <p className="about-card-text">
                I turn ideas into polished websites, dashboards, and web apps
                with thoughtful interfaces and practical backend integrations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
