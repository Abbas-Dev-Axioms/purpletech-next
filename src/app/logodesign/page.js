import Navbar from '../Common Components/Navbar'
import Banner from '../Common Components/LogoBanner'
import SectionHeading from './components/Section-heading'
import LogoDesignSwiper from './components/LogoDesign-Swiper'
import MarketingDesign from './components/marketingDesign'
import LogoVideoAnimation from './components/logoVideoAnimation'
import Businessprocess from '../Common Components/businessprocess'
import RealtimeVisualization from './components/RealtimeVisualization'
import LogoWebDev from './components/logoWebDev'
import LogoAppDevelopment from './components/logoAppDevelopment'
import Customers from '../Common Components/Customers'
import Testimonials from '../Common Components/Testimonials'
import Form from '../Common Components/form'
import NewsLetter from '../Common Components/NewsLetter'
import Footer from '../Common Components/Footer'
import Copyright from '../Common Components/copyright'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

function DesignAndDevelopment() {
  return (
    <div>
      <Navbar/>
      <Banner heading="Design And Development"/>
      <SectionHeading/>
      <LogoDesignSwiper/>
      <MarketingDesign/>
      <LogoVideoAnimation/>
      <LogoWebDev/>
      <LogoAppDevelopment/>
      <RealtimeVisualization/>  
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

export default DesignAndDevelopment
