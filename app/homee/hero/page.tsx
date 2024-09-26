"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HerosectionProps {
  id?: string;
}

const Herosection: React.FC<HerosectionProps> = ({ id }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id={id} className="relative overflow-hidden  w-full">
      {/* Fixed Image at bottom-right corner */}
      <div className="w-full flex">
        <Image
          src={isScrolled ? "/images/n2-3.png" : "/images/n2.png"}
          alt="Picture of the author"
          width={100}
          height={100}
          className={
            isScrolled
              ? "fixed bottom-0 right-0 opacity-40"
              : "fixed bottom-0 left-0"
          }
        />
      </div>

      {/* Image Container */}
      <div className="min-h-screen flex justify-end overflow-hidden w-screen">
        <Image
          src="/images/file-7.png"
          alt="Picture of the author"
          width={1000}
          height={800}
          className="
        
            md:transform translate-x-1/4 -translate-y-0
         
            w-[96vw] h-auto
            lg:w-[30vw] lg:h-screen // For desktop
            md:w-[50vw] md:h-screen // For tablet and larger
            sm:w-[10vw] sm:h-screen// Adjust size for smaller screens
            xs:w-[95vw] xs:h- // Adjusting width and position for mobile screens
            md:mt-0
            sm:mt-32
            xs:mt-32
         
          " // Adjusting width and position for mobile screens
        />
      </div>
    </div>
  );
};

export default Herosection;
