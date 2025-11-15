import React from 'react'
import './About.css'
import about from '../../assets/about.webp'

const About = () => {
  return (
    <div className='about' id='about'>
        <h2 className='h2'>About</h2>
        <h4 className='h4'>I am a passionate Programmer</h4>
        <p>It is hard to have outstanding career growth in software development without a passion for it.   Passion for
            working on the latest technology, building valuable software, increasing the company's revenue, and watching
            the
            team grow together are a few points that drive passionate developers to give their best. Ultimately, passion
            is
            the driving force behind successful developers reaching maximum potential and attaining the pinnacle of
            their
            careers.</p>
        <img src={about} alt="logo" />
    </div>
  )
}

export default About