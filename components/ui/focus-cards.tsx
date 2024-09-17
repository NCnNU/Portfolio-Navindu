"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./animated-modal";
import { AnimatedTooltip } from "./animated-tooltip";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";
type tech = {
  id: number;
  name: string;
  image: string;
};

type Card = {
  id: number;
  title: string;
  src: string;
  subtitle?: string;
  description?: string;
  contribution?: string;
  role: string;
  github: string;
  web: string;
  technologies: tech[];
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full bg-white dark:bg-neutral-950  md:px-10 mb-64 border-2">
      {/* Projects Heading */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Projects
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Explore some of the projects I&apos;ve developed, demonstrating my
          skills in designing and implementing impactful solutions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full mb-32">
        {cards.map((card, index) => (
          <Modal key={card.title}>
            <ModalTrigger>
              <Card
                key={card.title}
                card={card}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-2">
                  {card.title}
                </h4>
                <h6 className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-medium text-center mb-8">
                  {card.subtitle}
                </h6>
                <div className="flex justify-center items-center">
                  <Image
                    src={card.src}
                    alt={card.title}
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </div>
                <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-normal text-justify mt-8">
                  {card.description}
                </p>
                <div>
                  <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-normal text-justify mt-4">
                    {card.role}
                  </p>
                  {card.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {card.technologies.map((tech) => (
                        <AnimatedTooltip key={tech.id} items={[tech]} />
                      ))}
                    </div>
                  )}
                </div>
              </ModalContent>
              <ModalFooter>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                  <span
                    className="group-hover/modal-btn:translate-x-40 text-center transition duration-500"
                    onClick={() => (window.location.href = card.github)}
                  >
                    🧑‍💻
                  </span>
                  <div
                    className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
                    onClick={() => (window.location.href = card.github)}
                  >
                    code
                  </div>
                </ModalTrigger>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                  <span
                    className="group-hover/modal-btn:translate-x-40 text-center transition duration-500"
                    onClick={() => (window.location.href = card.web)}
                  >
                    🌐
                  </span>
                  <div
                    className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
                    onClick={() => (window.location.href = card.web)}
                  >
                    View
                  </div>
                </ModalTrigger>
              </ModalFooter>
            </ModalBody>
          </Modal>
        ))}
      </div>
    </div>
  );
}
