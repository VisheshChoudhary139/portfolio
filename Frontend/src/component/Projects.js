import React from 'react';
import { motion } from 'framer-motion';  


const Projects = () => {
  return (
    <div style={{ padding: '50px 20px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <h2>My Projects</h2>
        <p>Here are some of the projects I've worked on and contributed to:</p>
      </motion.div>

      {/* Project 1: Quiz Web App */}
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        style={{ marginBottom: '40px' }}
      >
        <h3>Quiz Web Application</h3>
        <p>
          A web-based quiz platform where users can create and take quizzes on various topics. The platform also provides features like quiz statistics and user progress tracking.
        </p>
        <p><strong>Role:</strong> Front-end Developer</p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Users can create custom quizzes</li>
          <li>Real-time statistics and user progress tracking</li>
          <li>Interactive UI with smooth animations</li>
          <li>Categories to select different topics for quizzes</li>
          <li>Responsive design for mobile and desktop</li>
        </ul>
        <a href="https://prepex.netlify.app/" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px', borderRadius: '5px' }}>
            View Project
          </button>
        </a>
      </motion.div>

      {/* Project 2: Weather Forecasting Website */}
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        style={{ marginBottom: '40px' }}
      >
        <h3>Weather Forecasting Website</h3>
        <p>
          A weather forecasting website that uses OpenWeatherMap API to fetch real-time weather data. It allows users to search for weather forecasts for different cities and displays detailed weather information for the next few days.
        </p>
        <p><strong>Role:</strong> Front-end Developer</p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Real-time weather updates for any city</li>
          <li>Displays a 5-day weather forecast</li>
          <li>Interactive and responsive UI</li>
          <li>Weather details such as temperature, humidity, and wind speed</li>
          <li>Location-based weather searches</li>
        </ul>
        <a href="https://vishesh2779.netlify.app" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px', borderRadius: '5px' }}>
            View Project
          </button>
        </a>
      </motion.div>

      {/* Project 3: Pratijja V2.0 Website */}
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        style={{ marginBottom: '40px' }}
      >
        <h3>Pratijja V2.0 Website</h3>
        <p>
          Pratijja V2.0 is a flagship event of Kronicle. I contributed to the front-end development of the event's website, focusing on user experience and smooth interaction design.
        </p>
        <p><strong>Role:</strong> Front-end Developer</p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Event schedule and agenda display</li>
          <li>Interactive event registration form</li>
          <li>Responsive design for all devices</li>
          <li>Detailed speaker and event information</li>
          <li>Event countdown timer</li>
        </ul>
        <a href="https://www.pratijja.org/" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px', borderRadius: '5px' }}>
            View Project
          </button>
        </a>
      </motion.div>

      {/* Project 4: Language Learning Website */}
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        style={{ marginBottom: '40px' }}
      >
        <h3>Language Learning Website</h3>
        <p>
          A web application designed for language learning, integrating machine learning (ML) and AI to provide personalized learning experiences and exercises.
        </p>
        <p><strong>Role:</strong> Full Stack Developer (currently working on it)</p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Personalized learning path based on user proficiency</li>
          <li>Interactive lessons with quizzes and exercises</li>
          <li>Real-time progress tracking and feedback</li>
          <li>Speech recognition and pronunciation practice using AI</li>
          <li>Responsive design with a focus on mobile learning</li>
        </ul>
        <a href="https://language-learning-website.com" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px', borderRadius: '5px' }}>
            View Project
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
