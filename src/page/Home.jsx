import React from 'react'
import Visual from '../components/Visual'
import Loder from '../components/Loder'
import MainSection1 from '../components/MainSection1'
import MainSection2 from '../components/MainSection2'
import MainSection3 from '../components/MainSection3'

const Home = () => {
     return (
          <div>
               <Loder />
               <Visual/>
               <MainSection1 />
               <MainSection2 />
               <MainSection3 />
          </div>
     )
}

export default Home