import Contact from "./homee/contact/page";
import Education from "./homee/education/page";
import Experience from "./homee/experience/page";
import Footer from "./homee/footer/page";
import Herosection from "./homee/hero/page";
import Particles from "./homee/heroSection/page";
import FloatingDockDemo from "./homee/navBar/page";
import ProjectCards from "./homee/projects/page";
import TechStack from "./homee/techStack/page";

const Home = () => {
  return (
    <>
      <Particles />
      <Herosection id="hero" />
      <Education id="education" />
      <TechStack id="techStack" />
      <ProjectCards id="projects" />
      <Experience id="experience" />
      <Contact id="contact" />
      <Footer />

      <FloatingDockDemo />
    </>
  );
};

export default Home;
