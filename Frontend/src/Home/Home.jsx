import React from 'react'
import Navbar from '../components/Navbar'
import FreeBook from '../components/FreeBook'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

function Home() {
  return (
    <>
    <Navbar />
    <Banner/>
    <FreeBook/>
    <Footer/>
    </>
  )
}

export default Home