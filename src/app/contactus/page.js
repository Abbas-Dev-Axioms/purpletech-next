import Navbar from "../Common Components/Navbar";
import Businessprocess from "../Common Components/businessprocess";
import Customers from "../Common Components/Customers";
import Testimonials from "../Common Components/Testimonials";
import Form from "../Common Components/form";
import NewsLetter from "../Common Components/NewsLetter";
import Footer from "../Common Components/Footer";
import Copyright from "../Common Components/copyright";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import ContactBanner from "./components/contactBanner";
import FormLocation from "./components/FormLocation";
import ContectMeeting from "./components/ContectMeeting";
import Ideas from "./components/Ideas";
import Map from "./components/Map";

function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <ContactBanner />
      <FormLocation />
      <ContectMeeting />
      <Ideas />
      <Map />
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
