import React from 'react';
import Typewriter from 'typewriter-effect';


const TypewriterApi = () => {
     return (
          <>
               <Typewriter
                    options={{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                    }}
               />
          </>
     )
}

export default TypewriterApi