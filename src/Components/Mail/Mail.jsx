import React from 'react'

import './Mail.css'

const Mail = () => {
  return (
    <div className='mail' id='mail'>
      <h2>Get In Touch</h2>
      <div>
        <div className='entry'>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" autoComplete='off' />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" autoComplete='off' />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>
          </div>
          <div className='btn'>Send Message</div>
        </div>
      </div>

    </div>
  )
}

export default Mail
