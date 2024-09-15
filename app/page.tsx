// import { LampDemo } from "./Home/lampSection/lampSection";

import Particles from "./Home/heroSection/page";
import { FloatingDockDemo } from "./Home/navBar/page";
import { TechStack } from "./Home/techStack/page";

const Home = () => {
  return (
    <>
      <h1>Navindu</h1>
      <Particles />
      <TechStack />
      {/* <LampDemo /> */}
      <FloatingDockDemo />
    </>
  );
};

export default Home;
