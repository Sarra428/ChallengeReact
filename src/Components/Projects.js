import img1 from "../Image/proj1.jpg"
import img2 from "../Image/proj2.jpg"
import img3 from "../Image/proj3.jpg"
import img4 from "../Image/proj4.jpg"
import React from 'react'

const Projects = () => {

const array=[{title: "Project 1", imgsrc:img1}, 
        {title: "Project 2", imgsrc:img2},
        {title: "Project 3", imgsrc:img3},
        {title: "Project 4", imgsrc:img4},
]

    return (
        <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">
         

{array.map(el=>  <div className="project-card">
            <img src={img1} alt="project" />
            <h3>{el.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div> )}

    
         
      

        </div>
      </section>
    )
}

export default Projects
