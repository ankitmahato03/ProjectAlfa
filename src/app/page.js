import AboutUs from "@/components/AboutUs";
import ClientReview from "@/components/ClientReview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurExpertise from "@/components/OurExpertise";
import OurProject from "@/components/OurProject";
import OurTeam from "@/components/OurTeam";
import Workflow from "@/components/Workflow";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurExpertise />
      <OurProject />
      <ClientReview />
      <Workflow />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  );
}
