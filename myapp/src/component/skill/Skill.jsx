import React from 'react'
import './Skill.css'
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.jpeg';
import django from '../../assets/django.jpeg';
import github from '../../assets/git hub.png';
import mysql from '../../assets/myaql.png';
import react from '../../assets/react.png';
import pyt from '../../assets/pyt.jpeg';
import tailwind from '../../assets/tailwind.jpeg';


const Skill = () => {
  return (
    <div className='skill' id='skills'>
        <h2>Skill</h2>
        <p>I have experince with this technologies.</p>
        <p>💻 Skilled in designing, developing, and deploying full-stack web applications.
        My toolkit includes HTML, CSS, JavaScript, React, Django, and MySQL — crafted for performance and creativity.</p>
        <div className='card'>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={django} alt="" />
            <img src={github} alt="" />
            <img src={mysql} alt="" />
            <img src={react} alt="" />
            <img src={pyt} alt="" />
            <img src={tailwind} alt="" />
            
        </div>
    </div>
  )
}

export default Skill