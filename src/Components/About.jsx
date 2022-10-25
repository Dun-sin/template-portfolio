import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1994-10-16");
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Tortor condimentum lacinia quis vel. Netus et malesuada fames ac turpis egestas. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Vestibulum lectus mauris ultrices eros in cursus turpis. Habitant morbi tristique senectus et netus. Enim praesent elementum facilisis leo vel fringilla est. Morbi tempus iaculis urna id volutpat lacus laoreet. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Laoreet sit amet cursus sit amet dictum sit. Odio morbi quis commodo odio aenean sed. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Arcu felis bibendum ut tristique et egestas. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est.
        Interdum posuere lorem ipsum dolor sit amet consectetur. Purus semper eget duis at tellus at urna condimentum mattis. In nisl nisi scelerisque eu ultrices vitae. Cursus in hac habitasse platea dictumst. Volutpat diam ut venenatis tellus in metus vulputate eu. Blandit massa enim nec dui nunc mattis enim ut. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Porttitor lacus luctus accumsan tortor posuere ac ut. Vitae et leo duis ut diam quam. Lobortis mattis aliquam faucibus purus. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Leo integer malesuada nunc vel. Purus sit amet volutpat consequat mauris nunc. Hendrerit dolor magna eget est lorem ipsum. Sed risus pretium quam vulputate. Adipiscing at in tellus integer.
        Interdum consectetur libero id faucibus nisl. At augue eget arcu dictum. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Sit amet tellus cras adipiscing enim eu turpis. Eros in cursus turpis massa tincidunt dui ut. Adipiscing commodo elit at imperdiet dui accumsan. Risus sed vulputate odio ut enim blandit. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Hendrerit gravida rutrum quisque non. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.
      </div>
    </div>
  )
}
export default About;
