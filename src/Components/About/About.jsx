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
        <p>
          My name is Favour, and I'm an {calculate_age()}-year-old full stack developer who loves making life easier and more enjoyable by tackling problems with code.
        </p>
        <p>
          My first step to becoming a web developer was in high school(2019). Although I was able to learn HTML and CSS, after two weeks of learning, I dropped out because I didn't know what to do next, but I had always thought that making web applications would be fun, and I really wanted to give it a shot.
        </p>
        <p>Having learned that there are different types of web developers in 2021 I chose to be a full stack(MERN) developer, and I hope to do great things with my knowledge because being a developer is like having superpowers</p>
      </div>
    </div>
  )
}
export default About
