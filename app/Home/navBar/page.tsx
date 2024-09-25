import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconAffiliate,
  IconBook,
  IconBuildingCastle,
  IconPresentation,
  IconSend,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <Image
          src="/images/ncBackgroudRemove1.png"
          alt="Picture of the author"
          width={150}
          height={800}
          className="w-full  h-fit"
        />
      ),
      href: "#hero",
    },
    {
      title: "Education",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#education",
    },
    {
      title: "Technologies",
      icon: (
        <IconAffiliate className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#techStack",
    },
    {
      title: "Projects",
      icon: (
        <IconPresentation className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Experience",
      icon: (
        <IconBuildingCastle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Contact",
      icon: (
        <IconSend className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
