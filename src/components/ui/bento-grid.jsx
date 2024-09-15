import Image from "next/image.js";
import { cn } from "@/lib/utils.js";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, png }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-300 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 cursor-pointer",
        className
      )}
    >
      <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-white dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Image
          src={png}
          className="h-3/4 object-contain"
          alt={title}
          width={500}
          height={500}
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 text-justify">
          {description}
        </div>
      </div>
    </div>
  );
};
