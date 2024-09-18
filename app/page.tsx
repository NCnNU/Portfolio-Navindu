// import { LampDemo } from "./Home/lampSection/lampSection";

import { Education } from "./Home/education/education";
import { Experience } from "./Home/experience/experience";
import Herosection from "./Home/hero/page";
import Particles from "./Home/heroSection/page";
import { FloatingDockDemo } from "./Home/navBar/page";
import { ProjectCards } from "./Home/projects/page";
import { TechStack } from "./Home/techStack/page";

const Home = () => {
  return (
    <>
      <h1>Navindu</h1>
      <Particles />
      <Herosection />
      <Education />
      <TechStack />
      <ProjectCards />
      <Experience />
      <FloatingDockDemo />
    </>
  );
};

export default Home;
