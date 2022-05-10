import React from 'react'

import './About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("2004-01-06");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
        <p>My name is Favour, a girl in tech who does cool and awesome things and who loves to make life easier and fun with code. I'm an {calculate_age()} years old full stack developer
        </p>
        <p>
          My first step towards becoming a web developer was in high school(2019) but i could only learn HTML and CSS and after 2 weeks of learning it, i dropped it because i didn't know what to do next but I've always thought that creating websites and web applications would be fun, and really wanted to try it for myself.
        </p>
        <p>In 2021, I picked it back and found out the types of web developers and choose to be a fullStack Developer</p>
      </div>
    </div>
  )
}
export default About
