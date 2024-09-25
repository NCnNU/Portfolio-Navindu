import  Contact  from "./home/contact/page";
import  Education  from "./home/education/page";
import  Experience  from "./home/experience/page";
import Footer from "./home/footer/page";
import Herosection from "./home/hero/page";
import Particles from "./home/heroSection/page";
import FloatingDockDemo from "./home/navBar/page";
import  ProjectCards  from "./home/projects/page";
import  TechStack  from "./home/techStack/page";

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
