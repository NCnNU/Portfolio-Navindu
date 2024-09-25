// import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/experienceTimeline";

interface ExperienceProps {
  id: string;
}

export default function Experience({ id }: ExperienceProps) {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm  mb-2  font-semibold">
            IEEE Computer Society - University of Moratuwa
          </p>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm  mb-4 font-semibold">
            Lead - Event Committee
          </p>
          <p
            className="
            text-neutral-400 dark:text-neutral-200 text-xs md:text-sm  mb-16
          "
          >
            Manage event scheduling, coordinate timelines, and oversee the
            seamless execution of all technical and logistical aspects to ensure
            successful events.
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm  mb-2  font-semibold">
            IEEE Student Branch - University of Moratuwa
          </p>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm  mb-4 font-semibold">
            Member - Web Development And Media Committee
          </p>
          <p
            className="
            text-neutral-400 dark:text-neutral-200 text-xs md:text-sm  mb-16
          "
          >
            Manage and develop the website to ensure an effective online
            presence. Provide photography for event coverage and promotions.
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm  mb-2  font-semibold">
            FIT Future Careers
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm  mb-4 font-semibold">
            Executive Committee
          </p>
          <p
            className="
            text-neutral-400 dark:text-neutral-200 text-xs md:text-sm  mb-8
          "
          >
            A carrer fair organized by Faculty of Information Technology,
            University of Moratuwa.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm  mb-2  font-semibold">
            IEEEXtreme 17.0 | MoraXtreme 8.0
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm  mb-4 font-semibold">
            Chairperson
          </p>
          <p
            className="
            text-neutral-400 dark:text-neutral-200 text-xs md:text-sm  mb-8
          "
          >
            MoraXtreme 8.0 is a 24-hour coding competition with 150+
            participants, organized by the IEEE Computer Society and IEEE
            Student Branch of the University of Moratuwa. IEEEXtreme 17.0, a
            global event hosted in University premises for University Students.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} id={id} />
    </div>
  );
}
