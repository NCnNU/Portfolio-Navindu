  import { FocusCards } from "@/components/ui/focus-cards";

  export function ProjectCards() {
    const cards = [
      {
        title: "SportZi",
        src: "/images/sportziLogo2.png",
      },
      {
        title: "Rise Up Mora",
        src: "/images/riseupmoralogo2.png",
      },
      {
        title: "IEEE SB UOM",
        src: "/images/ieeesbuomlogo1.png",
      },
      {
        title: "EAP",
        src: "/images/eaplogo1.png",
      },
      {
        title: "Pet Caretaker",
        src: "/images/petCaretakerlogo1.png",
      },
      {
        title: "Me",
        src: "/images/n.png",
      },
    ];

    return <FocusCards cards={cards} />;
  }
