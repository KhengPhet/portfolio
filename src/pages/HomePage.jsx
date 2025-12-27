
import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contacts from './Contacts'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default HomePage
