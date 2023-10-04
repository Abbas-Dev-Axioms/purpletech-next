import React from 'react'
import Navbar from '../Navbar'
import Banner from './banner'
import Whatwedo from './Whatwedo'
import Experiece from './Experiece'
import Experties from './Experties'
import EcomSolutions from './EcomSolutions'
import Businessprocess from '../../Common Components/businessprocess'
import Customers from '../../Common Components/Customers'
import Testimonials from '../Common Components/Testimonials'
import Form from '../../Common Components/form'
import NewsLetter from '../../Common Components/NewsLetter'
import Footer from '../../Common Components/Footer'
import Copyright from '../../Common Components/copyright'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Whatwedo/>
      <Experiece/>
      <Experties/>
      <EcomSolutions/>
      <Businessprocess/>
      <Customers/>
      <Testimonials/>
      <Form/>
      <NewsLetter/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default HomePage
