import React from 'react'
import './Archivment.css';
import ach from'../../assets/Achievements.png';
const Archivment = () => {
  return (
    <div className='archivment' id='achievements'>
        <h2 className='h2'>Achievements</h2>
        <ul>
            <li>Successful Project Delivery</li>
            <li>Innovative Solutions</li>
            <li>Client Satisfaction</li>
            <li>Technical Expertise</li>
            <li>Efficiency Improvement</li>
            <li>Creative Problem Solving</li>
            <li>Successful Collaborations</li>
        </ul>
        <img src={ach} alt="" />
    </div>
  )
}

export default Archivment