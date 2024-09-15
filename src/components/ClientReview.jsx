import itemsData from "@/data/ourClientReview.json";
import { cn } from "@/lib/utils.js";
import PropTypes from "prop-types";
import Marquee from "./ui/marquee";
import Image from "next/image";

const reviews = itemsData.clientReview;

export default function ClientReview() {
  return (
    <div
      id="ClientReview"
      className="bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 p-10 h-full"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-3">Customer Reflections</h1>
        <h1 className="text-base">
          Learn what our customers appreciate about our service.
        </h1>
        <div className="relative flex h-[380px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
          <Marquee pauseOnHover className="[--duration:20s]">
            {reviews.map((item) => (
              <ReviewCard key={item.id} {...item} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
        </div>
      </div>
    </div>
  );
}

const ReviewCard = ({ name, review, image }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt=""
          src={image}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-left">{review}</blockquote>
    </figure>
  );
};

// PropTypes validation
ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
