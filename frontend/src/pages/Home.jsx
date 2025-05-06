import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import BotonWhatsappFlotante from "../components/BtnWhatsapp/BotonWhatsappFlotante";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <BotonWhatsappFlotante />
    </main>
  );
};

export default Home;
