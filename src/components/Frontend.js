import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiNodeDotJs, SiPython, SiPostgresql, SiGithub, SiJira, SiAdobexd } from 'react-icons/si';
import diploma1 from '../media/coderscamp_diploma.png';
import diploma2 from '../media/pwa_diploma.jpg';
import softwaresupplogo from '../media/softwaresupplogo.jpg';

const Frontend = () => {
    return (
        <div className="center-content">
            <div className="description">
                <h3 className="underline"><i className="far fa-address-card"></i> Experience</h3>
                <ul> 
                    <li>
                        08.2020-...  <b>Junior Frontend Developer</b> at <a href="https://softwaresupp.com">SoftwareSupp</a>
                        <br/>
                        <a className="img-link" href="https://softwaresupp.com" target="_blank">
                            <img className="softwaresupplogo" src={softwaresupplogo} alt="SoftwareSupp logo"/>
                        </a>
                        <br/>
                        Main responisibilites: 
                        <ul>
                            <li>developing new features (React)</li>
                            <li>taking care of UI/UX aspects</li>
                            <li>combining coding with marketing (app onboarding, referral system)</li>
                            <li>fixing bugs and testing</li>
                            <li>SEO optimization</li>
                        </ul>
                    </li>
                </ul>
                <h3 className="underline"><i className="fas fa-laptop-code"></i> Skills & objectives</h3>
                    <h3>Stack:</h3> 
                    <ul>
                        <SiJavascript className="stack-icon"/>
                        <SiReact className="stack-icon"/>
                        <SiRedux className="stack-icon"/>
                        <SiCss3 className="stack-icon"/>
                        <SiHtml5 className="stack-icon"/>
                        <SiNodeDotJs className="stack-icon"/>
                        <SiPython className="stack-icon"/>
                        <SiPostgresql className="stack-icon"/>
                        <li>JavaScript ES6+</li>
                        <li>React (hooks, context API, router)</li>
                        <li>Redux</li>
                        <li>CSS3 (Sass)</li>
                        <li>HTML5</li>
                        <li>basic: Node.js, Python, PostgreSQL</li>
                    </ul>

                    <h3>Tools:</h3>
                    <ul>
                        <SiGithub className="stack-icon"/>
                        <SiJira className="stack-icon"/>
                        <SiAdobexd className="stack-icon"/>
                        <li>GIT/Github</li>
                        <li>Jira, Confluence</li>
                        <li>Adobe Xd</li>
                    </ul>
                    <p>Currently I focus mainly on mastering React and learning Node.js.</p>
                    <p>In addition to the frontend, I explore the topic of blockchain technology. 
                    I do both intensive theoretical research and take my first steps in developing
                    cryptocurencies and smart contracts.
                    </p>

                <h3 className="underline"><i className="fas fa-user-graduate"></i> Courses</h3>
                <ul> 
                    <li>
                        06.2019- Coderscamp
                        <br/>It was a 3-month, free web programming course organized by the CodersCrew Association. I got an access 
                         to resources about HTML, CSS, JS, React, Redux, GIT, npm, Node, Express. Besides I participated
                         in <b>4 group projects</b>.  
                        
                    </li>
                </ul>
                    <div className="zoom-pic">
                        <div className="zoom-pic-inside diploma" style={{backgroundImage: `url(${diploma1})`}}></div>
                        </div>
                    <br/>
                <ul>
                    <li>
                        06.2020- online course Progressive Web App
                        <br/>
                        The agenda included basic PWA aspects (icon preparation for mobile, manifest file,
                        basic offline mode, add-to-home-screen support), using tools such as Google Analytics
                        or Lighthouse and more complex topics (caching strategies, push notifications,
                        trusted web activities).
                    </li>
                </ul>
                    <div className="zoom-pic">
                        <div className="zoom-pic-inside diploma" style={{backgroundImage: `url(${diploma2})`}}></div>
                    </div>
                
            </div>
            <div className="caption-v">
                F
                <br/>
                R
                <br/>
                O
                <br/>
                N
                <br/>
                T
                <br/>
                E
                <br/>
                N 
                <br/>
                D
            </div>
        </div>
    )
}

export default Frontend
