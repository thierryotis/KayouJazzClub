import React, { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import Programs from './Components/programs/Programs'
import Title from './Components/title/Title'
import About from './Components/about/About'
import Campus from './Components/campus/Campus'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/Footer'
import Videoplayer from './Components/videoPlayer/Videoplayer'
import Project from './Components/project/Project'
import Intro from './Components/intro/Intro'

const App = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar /> 
      <Hero /> 
      <div className='container'>
        <Intro />
        <About setPlayState={setPlayState} playState={playState}/>
        <Title title='Gallery' subTitle='Campus Photos'/>
        <Campus />
        <Title title='Our Projects' subTitle="What we're involved in"/>
        <Project />
      </div>
      <Contact />
      <Footer />
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App