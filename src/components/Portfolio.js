import React from 'react';
import cloudnine from '../media/cloud_nine.png';
import todo from '../media/todo_screen.png';
import kamea from '../media/kamea.png';
import my from '../media/my.png';
import softwaresupp from '../media/softwaresupp.jpg';


const Project = (props) => {
    return (
        <div className="project-box">
            <div className="project-photo" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="project-text">

                <h1 className="underline">{props.name}</h1>
                <span>{props.about}</span>
                <br/><br/>
                <span><i>Stack:</i></span> {props.stack}
                <br/><br/>
                <span><i>Demo:</i></span> <a href={props.demo} target="_blank">{props.demo}</a>
                <br/><br/>
                <span><i>Repo:</i></span> <a href={props.repo} target="_blank">{props.repo}</a>
                
            </div>
        </div>
    )
}

const Portfolio = () => {
    return (
        <div className="portfolio-content">
            <Project
                image={softwaresupp}
                name='SoftwareSupp marketplace'
                about="The project I create with 2 workmates. I am responsible mainly for developing new features, not only in terms of coding, but also UX and marketing."
                stack="React, Redux, Node.js"
                demo="https://softwaresupp.com"
                repo="- (private)">
            </Project> 
            <Project
                image={cloudnine}
                name='Cloud Nine'
                about="Weather App using OpenWeather API and React Context to change the theme. I'm the author of all graphics."
                stack="React (hooks, Context API)"
                demo="https://rafal-ploszka-cloud-nine.herokuapp.com"
                repo="https://github.com/RafalPloszka/Weather-App">
            </Project>            
            <Project 
                image={todo}
                name='TODO' 
                about="Simple TODO App, where you can add, edit, mark as done and delete tasks."
                stack="React (hooks, Context API)"
                demo="https://rafal-ploszka-todo.herokuapp.com"
                repo="https://github.com/RafalPloszka/TODO_App">
            </Project>
            <Project
                image={my}
                name='My personal website'
                about="The website you're on :) "
                stack="HTML + CSS (Sass), React (React Router, React Router Transtion)"
                demo=""
                repo="https://github.com/RafalPloszka">
            </Project>            
            <Project 
                image={kamea}
                name='ABC Kamea website' 
                about="My very first project, created for my father's company"
                stack="HTML, CSS, jQuery"
                demo=""
                repo="https://github.com/RafalPloszka/ABC-Kamea">
            </Project>
        </div>
    )
}

export default Portfolio
