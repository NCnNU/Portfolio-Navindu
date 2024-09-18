// import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/experienceTimeline";

export function Experience() {
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
            A carrer fair organized by Faculty of Information Technology, University of Moratuwa.
          </p>

          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
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
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    // {
    //   title: "Changelog",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm  mb-4">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Card grid component
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Random file upload lol
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
