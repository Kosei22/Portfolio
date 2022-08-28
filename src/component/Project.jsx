import React from 'react'
import todo from "../img/todo.png"
import padres from　"../img/padres.png"
import ps from "../img/ps.png"

function Project() {
    return (
        <div className="project-box">

            <div className="project-box-head">
                <h1>Projects</h1>
            </div>
           
            <div className="project-wrapper">
                <div className="project-todo">
                    <div className="image">
                        <a href="https://github.com/Kousei0422/ToDo-App">
                            <img src={todo} alt="" width="400px"/>
                            <h4>ToDo AppC</h4>
                        </a>
                    </div>
                </div>
            
                <div className="project-padres">
                    <div className="image">
                        <a href="https://github.com/Kousei0422/Padres-Team-App">
                            <img src={padres} alt="padres" width="400px"/>
                            <h4>Player Search App</h4>
                        </a>
                    </div>
                </div>

                <div className="project-ps">
                    <div className="image">
                        <a href="https://github.com/Kousei0422/PS5-clone">
                            <img src={ps} alt="ps" width="400px"/>
                            <h4>PS Clone</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
