import React from 'react'
import './about.css'
import ME from '../../assets/profilePic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
function about() {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience </h5>
              <small>3+ years Working </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients </h5>
              <small>300+ WorldWide </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects </h5>
              <small>80+ Completed Projects </small>
            </article>
          </div>
          <p>Computer science education cannot make anybody an expert
             programmer any more than studying brushes and pigment can make somebody an expert painter. </p>

             <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about