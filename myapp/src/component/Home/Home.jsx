import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const texts = [
    "Frontend Developer",
    "Backend Developer", 
    "Full Stack Developer",
    "React Developer"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    let speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }

      if (!isDeleting && displayText.length === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  // Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const homeSection = document.querySelector('#home');
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`home ${isVisible ? 'animate' : ''}`} id="home">
      <div className="container">
        <div className="home-content">
          <div className="greeting">
            <span className="wave">👋</span>
            <h1 className="h1">
              Hi, I'm <span className="name">Suraj Thakur</span>
            </h1>
          </div>
          
          <div className="typing-container">
            <span className="prefix">I am a </span>
            <span className="type">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          
         
         
        </div>
      </div>
    </section>
  );
};

export default Home;