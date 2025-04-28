import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a
            href="https://github.com/VisheshChoudhary139"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://leetcode.com/u/visheshchoudhary12/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <SiLeetcode size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/vishesh-choudhary-544951251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <FaLinkedin size={26} />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/contact">
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/projects">
                My Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
