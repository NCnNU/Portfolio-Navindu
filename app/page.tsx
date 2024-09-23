import { Contact } from "./Home/contact/contact";
import { Education } from "./Home/education/education";
import { Experience } from "./Home/experience/experience";
import Footer from "./Home/footer/footer";
import Herosection from "./Home/hero/page";
import Particles from "./Home/heroSection/page";
import { FloatingDockDemo } from "./Home/navBar/page";
import { ProjectCards } from "./Home/projects/page";
import { TechStack } from "./Home/techStack/page";

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
