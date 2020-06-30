import React from 'react'
import Pdf from '../media/pracalic.pdf';

const Math = () => {
    return (
        <div className="center-content">
            <div className="description">
                <h3 className="underline"><i className="fas fa-graduation-cap"></i> Studies</h3>
                    <ul>                        
                        <li>
                            <h4>2019-... Mathematical master's studies at the University of Wroclaw</h4>

                            Specialty: actuarial and financial mathematics
                            <br/><br/>
                            Essential courses:
                                <ul>
                                    <li>Financial engineering</li>
                                    <li>Capital and financial markets</li>
                                    <li>Credit Suisse Quantative Modelling Academy</li>
                                    <li>Simulations and algorithmic applications of Markov chains</li>
                                </ul>
                        </li>
                        <li>
                            <h4>2016-2019 Mathematical bachelor's studies at the University of Wroclaw</h4>
                            Essential courses: 
                                <ul>
                                    <li>2 semesters of advanced probability theory</li>
                                    <li>Pricing and analysis of financial instruments</li>
                                    <li>Discrete models in financial mathematics</li>
                                </ul>
                            
                            <br/>
                            Bachelor thesis: <i>"Community detection in graphs: the Louvain method"</i>
                            <br/> 
                            The thesis concerns machine learning algorithm for detecting 
                            communnities in complex networks and its application
                            to recommendation systems. <br/> 
                            <a href={Pdf} target="_blank" rel="noopener noreferrer">LINK</a> (Polish version only)
                        </li>
                    </ul>
                    <br/>
                <h3 className="underline"><i className="fas fa-chalkboard-teacher"></i> Other</h3>
                    <ul>
                        <li>
                            <h4>2020-... Math tutoring</h4>
                            I also teach maths in both classical and online form.
                            <br/> For the online classes I use collaborative web whiteboard.
                            <br/> Below you can see my banner ad:
                            <br/>
                        </li>
                    </ul>
                
                <div className="zoom-pic"><div className="zoom-pic-inside tutor"></div></div>
            </div>
            <div className="caption-v">
                M
                <br/>
                A
                <br/>
                T
                <br/>
                H
                </div>
            </div>
    )
}

export default Math
