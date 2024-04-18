import { getFormattedDate } from "@/lib/utils";
import type { MenfessMessage } from "@/types/menfess";
import Image from "next/image";

type MenfessCardProps = MenfessMessage;

const MenfessCard = ({ sender, message, createdAt }: MenfessCardProps) => {
  return (
    <article className="flex w-full max-w-4xl flex-col gap-2 rounded-lg border-2 border-[#F4D38E] bg-[#82080A] p-4 lg:gap-3 lg:p-5">
      <div className="flex flex-row items-center gap-2 lg:gap-3">
        {/* Avatar */}
        <Image
          src="/components/default-avatar.png"
          alt="Default Avatar"
          className="aspect-square size-12 rounded-full border-2 border-[#F4D38E] object-cover object-center lg:size-14"
          width={40}
          height={40}
        />

        {/* Message Info */}
        <div className="flex w-full flex-col">
          {/* sender */}
          <p className="line-clamp-1 font-cgp text-base font-bold text-[#F4D38E] lg:text-lg">
            {sender ?? "Anonymous"}
          </p>

          {/* Date */}
          <p className="font-cgp text-xs font-semibold text-[#F4D38E] lg:text-sm">
            {getFormattedDate(createdAt, true)}
          </p>
        </div>
      </div>

      {/* Message Content */}
      <p className="font-cgp text-sm font-normal text-[#F4D38E] lg:text-base">
        {message}
      </p>
    </article>
  );
};

export { MenfessCard };
