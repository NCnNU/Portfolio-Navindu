"use client";

import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo({
  Icon,
  text,
  imageUrl,
  link,
}: {
  Icon: React.ElementType;
  text: string;
  imageUrl: string;
  link: string;
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="h-[8rem] relative flex items-center justify-center cursor-pointer">
        <DirectionAwareHover imageUrl={imageUrl}>
          <Icon className="h-6 w-6 text-white dark:text-neutral-300" />
          <p className="font-bold text-sm">{text}</p>
        </DirectionAwareHover>
      </div>
    </a>
  );
}
