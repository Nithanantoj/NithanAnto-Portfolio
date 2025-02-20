import React from "react";
import Marquee from "react-fast-marquee";
import { FaPython, FaJava, FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase, IoLogoNodejs, IoLogoVercel } from "react-icons/io5";
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiFigma, SiRender, SiSpring, SiPostman, SiExpress, SiGithub, SiCanva, SiCplusplus, SiFlutter, SiDart, SiMongodb, SiReact } from "react-icons/si";
import "./Marquee.css";

const icons = [
  <FaPython />,
  <FaJava />,
  <SiCplusplus />,
  <SiJavascript />,
  <SiHtml5 />,
  <SiCss3 />,
  <SiTailwindcss />,
  <SiFlutter />,
  <SiReact />,
  <IoLogoNodejs />,
  <SiExpress />,
  <SiSpring />,
  <SiDart />,
  <SiMongodb />,
  <GrMysql />,
  <IoLogoFirebase />,
  <SiFigma />,
  <SiPostman />,
  <SiGithub />,
  <FaGitAlt />,
  <IoLogoVercel />,
  <SiRender />,
  <SiCanva />
];

// Duplicate icons for smooth looping
const repeatedIcons = [...icons, ...icons];

const MarqueeIcons = () => (
  <div className="marquee-wrapper">
    {/* First marquee (left to right) */}
    <div className="marquee-container">
      <Marquee gradient={false} speed={50} loop={0}>
        {repeatedIcons.map((icon, index) => (
          <div key={index} className="icon-wrapper">
            {icon}
          </div>
        ))}
      </Marquee>
    </div>

    {/* Second marquee (right to left) */}
    <div className="marquee-container">
      <Marquee gradient={false} speed={50} loop={0} direction="right">
        {repeatedIcons.map((icon, index) => (
          <div key={index} className="icon-wrapper">
            {icon}
          </div>
        ))}
      </Marquee>
    </div>
  </div>
);

export default MarqueeIcons;
