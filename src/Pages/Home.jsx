import React from 'react'

import Footer from '../components/Footer/Footer';
import {Navbar} from '../components/Navbar/Navbar';
import Slider from '../components/Slide/Slide';
import Register from './Register';
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Register display ={"none"}/>
      <Footer />
      
    </div>
  )
}
