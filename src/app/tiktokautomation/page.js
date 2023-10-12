import Navbar from "../Common Components/Navbar";
import Businessprocess from "../Common Components/businessprocess";
import Customers from "../Common Components/Customers";
import Testimonials from "../Common Components/Testimonials";
import Form from "../Common Components/form";
import NewsLetter from "../Common Components/NewsLetter";
import Footer from "../Common Components/Footer";
import Copyright from "../Common Components/copyright";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import TikTokSteps from "./components/TiktokIntro";
import TikTokIntroduction from "./components/TikTokIntroduction";
import Banner from "../Common Components/LogoBanner";
import TikTokBanner from "./components/TikTokBanner";
import TikTokAutomationType from "./components/TikTokAutomationType";
import TikTokVisualization from "./components/TikTokVisualization";

function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <Banner heading="TikTok Automation"/> 
      <TikTokSteps />
      <TikTokIntroduction />
      <TikTokBanner />
      <TikTokAutomationType />
    <TikTokVisualization />
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