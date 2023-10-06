import Navbar from "../Common Components/Navbar";
import Banner from "../Common Components/LogoBanner";
import Businessprocess from "../Common Components/businessprocess";
import Customers from "../Common Components/Customers";
import Testimonials from "../Common Components/Testimonials";
import Form from "../Common Components/form";
import NewsLetter from "../Common Components/NewsLetter";
import Footer from "../Common Components/Footer";
import Copyright from "../Common Components/copyright";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import WhiteLabel from "./components/whiteLabel";
import ResourceOutsourcing from "./components/ResourceOutsourcing";
import AgencyBranding from "./components/AgencyBranding";
import AgencyStartup from "./components/AgencyStartup";
import Privatelabel from "./components/Privatelabel";
import CrmSales from "./components/crmSales";

function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <Banner heading="Business Solutions" />
      <WhiteLabel />
      <ResourceOutsourcing />
      <AgencyBranding />
      <AgencyStartup />
      <Privatelabel />
      <CrmSales />
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