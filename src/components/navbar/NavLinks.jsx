import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
      <li onClick={handleNav}>
        <Link
          to='//Maxwellchu2Orji'
          target='_blank'
          className='nav-link'
        >
          <FaTwitter />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to='//https://www.linkedin.com/in/chukwuemeka-maxwell/'
          target='_blank'
          className='nav-link'
        >
          <FaLinkedin />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to='//github.com/Maxwell011)'
          target='_blank'
          className='nav-link'
        >
          <BsGithub />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to='//chukwuemekaorji678@gmail.com'
          target='_blank'
          className='nav-link'
        >
          <BiEnvelope />
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
