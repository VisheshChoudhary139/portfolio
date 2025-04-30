"use client";

import React from 'react';
import './Home.css';
import { motion, useScroll } from 'framer-motion'; 

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#ff0088",
          zIndex: 9999
        }}
      />
      <motion.div 
        className="page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="content-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <motion.div 
            className="home-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <h1>Hello, I'm <span className="highlight">Vishesh Choudhary</span></h1>
            <p>
            They say a name shapes a journey — and mine, Vishesh — meaning Special, has been my quiet reminder to chase uniqueness in all I do.
            As a Computer Science student, I’m passionate about crafting scalable applications, diving deep into new technologies, and solving real-world puzzles with innovative thinking.
            Outside the world of code, you’ll find me speaking to inspire, playing basketball to recharge, or walking amidst nature to reconnect.
            Every step I take, in life, is a step towards creating something truly special.
            </p>
            <motion.a
            href = "https://drive.google.com/file/d/1e06DVgjdnrSznJXcOmXQOzW-fRLGx0hr/view?usp=sharing"
              className="resume-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div 
            className="home-right"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5 }}
          >
            <img 
              src="/images/Screenshot 2025-04-27 233846.png" 
              alt="Vishesh Choudhary" 
              className="profile-image" 
            />
          </motion.div>
        </motion.div>

        {/* Extra Scrollable Content */}
        <Content />
      </motion.div>
    </>
  );
};

function Content() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '150px 20px' }}>

      <article style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h2>About Me</h2>
        <p>
          Hello! I am Vishesh Choudhary, a passionate 4th year computer science student with a keen interest in problem solving. I believe in leveraging my skills in problem-solving, and communication to create impactful solutions. I'm always eager to learn and grow through every task I undertake.
        </p>
        <p>
          Outside of my academic pursuits, I enjoy engaging in activities like debating, public speaking, and basketball, which help me stay grounded and improve my teamwork and leadership skills. I also take time to enjoy nature walks as a way to relax and recharge. My goal is to continuously evolve as both a professional and an individual, and I'm always excited about new opportunities to make a positive difference.
        </p>

        <h2>Professional Experience</h2>
        <h4 className="experience-heading" style={{ color: '#007bff' }}>Kronicle - Tech Lead & Core Member</h4>
        <p>
          As the Tech Lead and Core Member for Kronicle, the official debating society of KIIT, I had the opportunity to oversee the technical aspects of our events, including website development and integration. I led the development of the Kronicle website, ensuring a user-friendly experience and seamless navigation for participants. Additionally, I was part of the team that built the Pratijja V2.0 website, a platform designed for one of our flagship events. My role involved collaborating closely with designers and fellow developers to create an efficient and aesthetically pleasing digital presence that could accommodate large volumes of data and traffic.

          Beyond the technical side, I also contributed to the society as a Core Member and participated in numerous debates, where I honed my public speaking and critical thinking skills. I’ve won several debate competitions, further strengthening my position within the society and contributing to our reputation for excellence.
        </p>
        <h4 className="experience-heading" style={{ color: '#007bff' }}>FED - Senior Executive (PR & Finance Team)</h4>
        <p>
          At FED (Federation of Entrepreneurship Development), I worked as a Senior Executive in the PR and Finance Team. My responsibilities included managing public relations efforts, organizing financial processes, and ensuring smooth communication between different teams. I helped secure partnerships, managed event budgets. This role honed my organizational, leadership, and strategic thinking skills while also providing valuable experience in event management.
        </p>
        <h4 className="experience-heading" style={{ color: '#007bff' }}>Enactus KIIT KISS - Social Entrepreneur</h4>
        <p>
          As a Social Entrepreneur at Enactus KIIT KISS, I worked on projects that aimed at creating social impact through entrepreneurial initiatives. My role involved identifying community needs, developing solutions, and leading teams to execute these projects. One notable project focused on empowering local communities through sustainable business practices. I worked directly with stakeholders, including beneficiaries, mentors, and fellow students, to drive projects that were both innovative and impactful. This experience helped me develop a strong sense of social responsibility and gave me the chance to apply my problem-solving and leadership skills in real-world scenarios.
        </p>
      </article>

         <div style={{ maxWidth: 300 }}>
        <div style={{ textAlign: 'right', marginBottom: '40px' }}>
          <h2>Education</h2>
          <h4 className="education-heading" style={{ color: '#007bff' }}>B.Tech in Computer Science</h4>
          <p>KIIT University, Bhubaneswar</p>
          <p> CGPA - 8.28 | 2022 - 2026</p>
          <h4 className="education-heading" style={{ color: '#007bff' }}>12th Grade</h4>
          <p>Asha Modern School, Saharanpur</p>
          <p>88% | 2022</p>
          <h4 className="education-heading" style={{ color: '#007bff' }}>10th Grade</h4>
          <p>Asha Modern School, Saharanpur</p>
          <p>90% | 2020</p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <h2>Skills</h2>
          <h4 className="education-heading" style={{ color: '#007bff' }}>Programming Languages</h4>
          <p> Python, C , Java ,SQL , C++, JavaScript</p>
          <h4 className="education-heading" style={{ color: '#007bff' }}>Web Technologies</h4>
          <p>React, Node.js, HTML, CSS, Bootstrap Framework , Framer ,Expressjs, MongoDB</p>
          <h4 className="education-heading" style={{ color: '#007bff' }}>Tools & Platforms</h4>
          <p>Git, GitHub, Firebase, Docker, VS Code</p>
          <h4 className="education-heading" style={{ color: '#007bff' }}>Other Skills</h4>
          <p>CAD ,OS , SE, Problem-solving, Teamwork, Communication, Public Speaking, Leadership , Management</p>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
