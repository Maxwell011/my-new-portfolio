import React, { useState, useEffect } from "react";
import { FaHome, FaLaptop } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BiBookContent, BiServer, BiEnvelope } from "react-icons/bi";
import { Link } from "react-scroll";
import "../../styles/FixedNav.css";

function FixedNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixednav ${scrolled ? "scrolled" : ""}`}>
      <ul className="mid-details">
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to="home"
          className="mid-links"
        >
          <FaHome className="mid-icon" />
          <li className="mid-link">Home</li>
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to="works"
          className="mid-links"
        >
          <BiBookContent className="mid-icon" />
          <li className="mid-link">Works</li>
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to="skills"
          className="mid-links"
        >
          <FaLaptop className="mid-icon" />
          <li className="mid-link">Skills</li>
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to="services"
          className="mid-links"
        >
          <BiServer className="mid-icon" />
          <li className="mid-link">Services</li>
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to="about"
          className="mid-links"
        >
          <FiUser className="mid-icon" />
          <li className="mid-link">About</li>
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to="contact"
          className="mid-links"
        >
          <BiEnvelope className="mid-icon" />
          <li className="mid-link">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default FixedNav;
