import React from 'react';
import Typewriter from 'typewriter-effect';


const TypewriterApi2 = () => {
     return (
          <>
               <Typewriter
                    options={{
                    strings: ['RECOMMENDER', 'WEP APP SITE'],
                    autoStart: true,
                    loop: true,
                    pauseFor:5000,
                    }}
               />
          </>
     )
}

export default TypewriterApi2