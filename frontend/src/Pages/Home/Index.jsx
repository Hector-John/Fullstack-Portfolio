import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Experience from '../../Components/Experience/Experience'
import Services from '../../Components/Services/Services'
import Projects from '../../Components/Projects/Projects'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import UpArrow from '../../constants/UpArrow'


const Index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About /> 
      <Experience/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      <UpArrow/>
    </div>
  ) 
}

export default Index