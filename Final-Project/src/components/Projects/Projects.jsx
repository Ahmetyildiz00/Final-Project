import React from 'react'
import { all_projects } from '../assets/all_projects'
import "./Projects.css"

function Projects() {
    return (
        <div className='projects'>
            <h1 className='projectTitle'>PROJELER</h1>
            <div className='all_projects'>
                {all_projects.map((menuItem, key) => {
                    return <div className='menuItem'>
                        <div><img src={menuItem.image}/></div>
                        <h3>{menuItem.name}</h3>

                    </div>
                })}

            </div>
        </div>
    )
}

export default Projects