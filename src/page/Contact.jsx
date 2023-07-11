import React from 'react'
import ContactVisual from '../components/Contact/ContactVisual'
import ContactSection1 from '../components/Contact/ContactSection1'
import Footer from '../components/Footer'

const Contact = () => {
     const isAboutPage = true; // About 페이지 여부를 나타내는 변수 (임시로 true로 설정)

     return (
          <div className='Contact'>
               <ContactVisual />
               <ContactSection1 />
               {isAboutPage ? <Footer className='Footer black' /> : <Footer />}
          </div>
     )
}

export default Contact