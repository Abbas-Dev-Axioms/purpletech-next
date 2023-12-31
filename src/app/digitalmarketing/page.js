import Navbar from "../Common Components/Navbar";
import Banner from "../Common Components/LogoBanner";
import Businessprocess from "../Common Components/businessprocess";
import Customers from "../Common Components/Customers";
import Testimonials from "../Common Components/Testimonials";
import Form from "../Common Components/form";
import NewsLetter from "../Common Components/NewsLetter";
import Footer from "../Common Components/Footer";
import Copyright from "../Common Components/copyright";
import DigitalIntro from "./components/digitalIntro";
import WhySeo from "./components/whySeo";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import SeoPricing from "./components/seopricing";
import SocialMediaMarketing from "./components/socialMediaMarketing";
import LeadGenration from "./components/leadGenration";
import PpcCampaign from "./components/ppcCampaign";
import GdnAdvertisement from "./components/GdnAdvertisement";
import AmazonAdvertisement from "./components/amazonAdvertisement";

function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <Banner heading="Digital Marketing" />
      <DigitalIntro />
      <WhySeo />
      <SeoPricing />
      <SocialMediaMarketing />
      <LeadGenration />
      <PpcCampaign/>
      <GdnAdvertisement />
      <AmazonAdvertisement />
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
