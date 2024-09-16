// import { LampDemo } from "./Home/lampSection/lampSection";

import { Education } from "./Home/education/education";
import Herosection from "./Home/hero/page";
import Particles from "./Home/heroSection/page";
import { FloatingDockDemo } from "./Home/navBar/page";
import { ProjectCards } from "./Home/projects/page";
import { TechStack } from "./Home/techStack/page";
import { AnimatedModalDemo } from "./Home/test/page";

const Home = () => {
  return (
    <>
      <h1>Navindu</h1>
      <Particles />
      <Herosection />
      <Education />
      <TechStack />
      <ProjectCards />
      <AnimatedModalDemo/>
      {/* <LampDemo /> */}
      <FloatingDockDemo />
    </>
  );
};

export default Home;
