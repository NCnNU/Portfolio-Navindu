"use client";
import React from "react";
import { HoverBorderGradient } from "../../../components/ui/hover-border-gradient";
import { IconFileDownload } from "@tabler/icons-react";

export default function HoverBorderGradientDemo() {
  const handleDownload = () => {
    // URL to your resume file
    const resumeUrl = "/Navindu.me.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Navindu.pdf";
    link.click();
  };

  return (
    <div className="m-40 flex justify-center text-center ">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-3 "
        onClick={handleDownload} // Attach download handler
      >
        <IconFileDownload color="gray" stroke={2} />
        <span>Resume</span>
      </HoverBorderGradient>
    </div>
  );
}
