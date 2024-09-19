/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 50,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 16 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      // @ts-expect-error: TypeScript expects a different event type
      onClick: (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
      style: {
        opacity: 0.6, // Set icon opacity
      },
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "dark")
    );
  }, [data, theme]);

  return (
    // @ts-expect-error: TypeScript doesn't recognize the Cloud component's children prop
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}

// Example usage with a set of icon slugs
const iconSlugs = [
  "react",
  "next-dot-js",
  "typescript",
  "javascript",
  "node-dot-js",
  "html5",
  "css3",
  "tailwindcss",
  "firebase",
  "git",
  "github",
  "docker",
  "kubernetes",
  "aws",
  "vscode",
  "figma",
  "express",
  "google-cloud",
  "azure",
  "mongodb",
  "postgresql",
  "mysql",
  "c",
  "java",
  "antdesign",
  "prisma",
  "clodinary",
  "bootstrap",
];

interface TechStackProps {
  id?: string;
}
  

export function TechStack({ id }: TechStackProps) {
  return (
    <div id={id} className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 mb-32">
      {/* Education Heading */}
      <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-4xl">
        Technologies
      </h2>
      <p className="text-neutral-400  text-sm md:text-base max-w-sm mb-28">
        Here are some of the technologies I&apos;m familiar with, which I use to
        build efficient and visually appealing web applications.
      </p>

      {/* Tech Stack Section */}
      <div className="relative w-full h-[500px] flex justify-center items-center ">
        {/* Overlay Text */}
        <div className="absolute text-center z-10 px-4 ">
          <h2 className="text-2xl font-bold text-white mb-4">My Tech Stack</h2>
          <p className="text-white text-base">
            Here are some of the technologies I work with.
          </p>
        </div>

        {/* Icon Cloud Ball */}
        <div className="relative z-0">
          <IconCloud iconSlugs={iconSlugs} />
        </div>
      </div>
    </div>
  );
}
