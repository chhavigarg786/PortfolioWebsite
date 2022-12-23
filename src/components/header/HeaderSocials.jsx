import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
function HeaderSocials() {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/chhavi-garg-209a941b6/" target="_blank"><BsLinkedin></BsLinkedin></a>
    <a href="https://github.com/" target="_blank"><FaGithub></FaGithub></a>
    <a href="https://dribbble.com/" target="_blank"><FaDribbble></FaDribbble></a>
  
    </div>
  )
}

export default HeaderSocials