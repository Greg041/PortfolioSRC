import About from "../../Components/HomePage/About/About";
import Contact from "../../Components/HomePage/Contact/Contact";
import Hero from "../../Components/HomePage/Hero/Hero";
import MyWork from "../../Components/HomePage/MyWork/MyWork";
import Services from "../../Components/HomePage/Services/Services";

export default function Home(): JSX.Element {

    return (
      <div>
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
      </div>
    )
  }
  