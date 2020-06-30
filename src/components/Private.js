import React from 'react'
import love from '../media/love2.jpeg'
import parents from '../media/parents.jpg'
import me from '../media/me.jpg'
import bros from '../media/ziomy.jpg'
import borys from '../media/boryz.jpg'

const Polaroid = (props) => {
    return (
        <div className="polaroid">
            <div 
                className="inner" 
                style={
                    {backgroundImage: `url(${props.image})`}}>
            </div>
            <span>{props.text}</span>
        </div>
    )
}

const Private = () => {
    return (
        <div className="private-content">
            <Polaroid image={love} angle='10' text="Love of my life"></Polaroid>
            <Polaroid image={me} angle='-5' text="Just me"></Polaroid>
            <Polaroid image={parents} angle='15' text="My Parents"></Polaroid>
            <Polaroid image={bros} angle='-7' text="Bros"></Polaroid>
            <Polaroid image={borys} angle='2' text="Russian prince Borys"></Polaroid>
        </div>
    )
}

export default Private
