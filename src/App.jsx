import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import About from './components/about'
import WhatIDo from './components/what-i-do'
import Resume from './components/resume'

const App = () => {
  return (
    <>
      <Header/>
      <main>
          <Banner/>
          <About/>
          <WhatIDo/>
          <Resume/>
      </main>
      <Footer/>
    </>
  )
}

export default App