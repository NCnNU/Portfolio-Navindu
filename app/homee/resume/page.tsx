"use client";
import React from "react";
import { HoverBorderGradient } from "../../../components/ui/hover-border-gradient";
import { IconFileDownload } from "@tabler/icons-react";

export default function HoverBorderGradientDemo() {
  const handleDownload = () => {
    // URL to your resume file
    const resumeUrl = "/Navindu Chathuranga.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Navindu Chathuranga.pdf";
    link.click();
  };

  return (
    <div className="flex justify-start text-center w-full sm:w-auto">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base"
        onClick={handleDownload} // Attach download handler
      >
        <IconFileDownload color="gray" stroke={2} className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-medium">Download Resume</span>
      </HoverBorderGradient>
    </div>
  );
}
