import React from 'react'
import WorkVisual from '../components/work/WorkVisual'
import WorkSection1 from '../components/work/WorkSection1'
import Footer from '../components/Footer'

const Work = () => {
     return (
          <div className='Work'>
               <WorkVisual/>
               <WorkSection1 />
               <Footer />
          </div>
     )
}

export default Work