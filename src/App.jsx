import ContactUsSection from "./components/Contact"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import PricingSection from "./components/Pricing"
import TestimonialSection from "./components/Testimonial"

function App() {
  return(
 <>
    <Navbar/>
    <div className="px-6 pt-20 mx-auto max-w-7xl"><Hero/></div>
    <Features/>
    <PricingSection/>
    <TestimonialSection/>
    <ContactUsSection/>
    <Footer/>
 </>
  )
}

export default App
