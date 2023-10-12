import Navbar from "../Common Components/Navbar";
import Businessprocess from "../Common Components/businessprocess";
import Customers from "../Common Components/Customers";
import Testimonials from "../Common Components/Testimonials";
import Form from "../Common Components/form";
import NewsLetter from "../Common Components/NewsLetter";
import Footer from "../Common Components/Footer";
import Copyright from "../Common Components/copyright";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import DropshipingSteps from "./components/DropshipingSteps";
import DropshipTabs from "./components/DropshipTabs";
import Banner from "../Common Components/LogoBanner";
import DropShipingBanner from "./components/DropShipingBanner";
import TikTokAutomationType from "./components/DropShipAutomationType";
import DropShipSwiper from "./components/DropShipSwiper";


function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <Banner heading="Shopify Dropshipping"/> 
      <DropshipingSteps />
      <DropShipingBanner />
      <DropshipTabs />
      <DropShipSwiper />
      <TikTokAutomationType />
      <Businessprocess />
      <Customers />
      <Testimonials />
      <Form />
      <NewsLetter />
      <Footer />
      <Copyright />
    </>
  );
}

export default DigitalMarketing;