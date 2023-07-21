
import React from 'react';
import { TypeAnimation } from 'react-type-animation';



const TextAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                "I'm front-end developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "I`m front-end developer",
                1000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '3em', display: 'inline-block', color:"orange", fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"700"}}
            repeat={Infinity}
        />
    );

}

export default TextAnimation;