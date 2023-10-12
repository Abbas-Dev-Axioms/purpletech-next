import Navbar from "../Common Components/Navbar";
import Businessprocess from "../Common Components/businessprocess";
import Customers from "../Common Components/Customers";
import Testimonials from "../Common Components/Testimonials";
import Form from "../Common Components/form";
import NewsLetter from "../Common Components/NewsLetter";
import Footer from "../Common Components/Footer";
import Copyright from "../Common Components/copyright";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import BrandsOutSourcing from "./components/BrandsOutSourcing";
import Quote from "./components/Quote";
import WholeSaleBanner from "./components/wholeSaleBanner";
import WholeSaleIntro from "./components/WholeSaleIntro";
import WholeSaleSteps from "./components/wholeSaleSteps";
import AmazonRetailer from "./components/AmazonRetailer";
import Banner from "../Common Components/LogoBanner";

function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <WholeSaleBanner />
      {/* <Banner heading="TikTok Automation"/>  */}
      <WholeSaleIntro />
      <WholeSaleSteps />
      <BrandsOutSourcing />
      <Quote />
      <AmazonRetailer/>
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