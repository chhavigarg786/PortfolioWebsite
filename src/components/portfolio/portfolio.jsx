import React from 'react'
import Img1 from '../../assets/portfolioImg.png'
import './portfolio.css'

//Do Not Use Images in production

const data = [
  {
  id:1,
  image: Img1,
  title: 'Eclipse - Figma dashboard UI kit for data design web apps',
  github: 'https://github.com/',
  demo:'https://dribbble.com/shots/16189599-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
   
  {
    id:2,
    image: Img1,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/',
    demo:'https://dribbble.com/shots/16189599-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },

    {
      id:3,
      image: Img1,
      title: 'Eclipse - Figma dashboard UI kit for data design web apps',
      github: 'https://github.com/',
      demo:'https://dribbble.com/shots/16189599-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
      },


      {
        id:4,
        image: Img1,
        title: 'Eclipse - Figma dashboard UI kit for data design web apps',
        github: 'https://github.com/',
        demo:'https://dribbble.com/shots/16189599-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
        },


        {
          id:5,
          image: Img1,
          title: 'Eclipse - Figma dashboard UI kit for data design web apps',
          github: 'https://github.com/',
          demo:'https://dribbble.com/shots/16189599-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
          },

          {
            id:6,
            image: Img1,
            title: 'Eclipse - Figma dashboard UI kit for data design web apps',
            github: 'https://github.com/',
            demo:'https://dribbble.com/shots/16189599-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
            }

]


function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank">GitHub</a>
            <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>
          )
         
        })
       }

      </div>
    </section>
  )
}

export default portfolio