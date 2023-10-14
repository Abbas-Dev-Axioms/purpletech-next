import Navbar from "../Common Components/Navbar";
import Businessprocess from "../Common Components/businessprocess";
import Customers from "../Common Components/Customers";
import Testimonials from "../Common Components/Testimonials";
import Form from "../Common Components/form";
import NewsLetter from "../Common Components/NewsLetter";
import Footer from "../Common Components/Footer";
import Copyright from "../Common Components/copyright";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import WholeSaleBanner from "./components/wholeSaleBanner";
// import Banner from "../Common Components/LogoBanner";
import YoutubeSwiper from "./components/youtubeSwiper";
import YoutubeAutomation from "./components/YoutubeAutomation";
import YoutubeServices from "./components/YoutubeServices";
import YoutubeBanner from "./components/YoutubeBanner";
import YoutubeTabs from "./components/YoutubeTabs";
import YoutubeSteps from "./components/YoutubeSteps";

function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <WholeSaleBanner />
      {/* <Banner heading="TikTok Automation"/>  */}
      <YoutubeSteps />
      <YoutubeSwiper />
      <YoutubeTabs />
      <YoutubeAutomation />
      <YoutubeServices/>
      <YoutubeBanner/>
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