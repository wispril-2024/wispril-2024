import Image from "next/image";
import React from "react";

function SponsorCard() {
  return (
    <div className="relative z-10 flex w-[275px] flex-col items-center justify-center sm:w-[350px]">
      <Image
        src="/home/solve-education.png"
        width={720}
        height={509}
        alt="Ticket"
        className="absolute z-20 w-1/2"
      />

      <div className="z-10 h-full w-full">
        <Image
          src="/home/ticket-2.png"
          width={579}
          height={267}
          alt="Ticket"
          className="z-10"
        />
      </div>
    </div>
  );
}

export default SponsorCard;
