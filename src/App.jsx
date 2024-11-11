import React, { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import Programs from './Components/programs/Programs'
import Title from './Components/title/Title'
import About from './Components/about/About'
import Campus from './Components/campus/Campus'
import Testimonials from './Components/testimonials/Testimonials'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/Footer'
import Videoplayer from './Components/videoPlayer/Videoplayer'

const App = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar /> 
      <Hero /> 
      <div className='container'>
        <Title title='What we offer' subTitle='Our progam'/>
        <Programs />
        <About setPlayState={setPlayState} playState={playState}/>
        <Title title='Gallery' subTitle='Campus Photos'/>
        <Campus />
        <Title title='Testimonials' subTitle='What students say'/>
        <Testimonials />
      </div>
      <Contact />
      <Footer />
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App