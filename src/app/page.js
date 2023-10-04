import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Navbar from "./Common Components/Navbar";
import Banner from "./components/banner";
import Whatwedo from "./components/Whatwedo";
import Experiece from "./components/Experiece";
import Experties from "./components/Experties";
import EcomSolutions from "./components/EcomSolutions";
import Businessprocess from "./Common Components/businessprocess";
import Customers from "./Common Components/Customers";
import Testimonials from "./Common Components/Testimonials";
import Form from "./Common Components/form";
import NewsLetter from "./Common Components/NewsLetter";
import Footer from "./Common Components/Footer";
import Copyright from "./Common Components/copyright";
import "./globals.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Whatwedo />
      <Experiece />
      <Experties />
      <EcomSolutions />
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
