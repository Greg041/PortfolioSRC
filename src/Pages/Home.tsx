import About from "../Components/HomePage/About/About";
import Contact from "../Components/HomePage/Contact/Contact";
import Footer from "../Components/Common/Footer/Footer";
import Hero from "../Components/HomePage/Hero/Hero";
import MyWork from "../Components/HomePage/MyWork/MyWork";
import Navbar from "../Components/Common/Navbar/Navbar";
import Services from "../Components/Services/Services";

export default function Home(): JSX.Element {

    return (
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    )
  }
  