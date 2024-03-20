import { Graduate } from "./graduatesView";
import { cn } from "@/lib/utils";
import { DialogContent, DialogOverlay, Dialog } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";

const containerWidth = 2596;
const containerHeight = 1362;
const containerRatio = containerWidth / containerHeight;

type CardDetailsProp = {
  onClose?: () => void;
  data: Graduate | null;
};

export function CardDetails({ onClose = () => {}, data }: CardDetailsProp) {
  const portrait = window.innerHeight > window.innerWidth;
  const open = data != null;

  return (
    <Dialog open={open}>
      <DialogContent className="fixed left-0 top-0 z-[51] flex h-screen w-screen items-center justify-center text-[#F4D38E] duration-1000 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
        <DialogOverlay
          onClick={onClose}
          className="absolute left-0 top-0 h-full w-full bg-black"
        />
        <div
          className={cn("max-w-screen relative z-[51] m-5 flex max-h-screen")}
          data-state={open ? "open" : "closed"}
          style={{
            aspectRatio: portrait ? 1 / containerRatio : containerRatio,
          }}
        >
          <Image
            src={`/graduates/card-details-background${
              portrait ? "-rotated" : ""
            }.png`}
            priority={true}
            alt=""
            width={containerHeight}
            height={containerWidth}
          />
          {data != null ? (
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center gap-5 overflow-hidden",
                portrait
                  ? "flex-col px-[20%] py-[40%]"
                  : "flex-row px-[20%] pb-[13%] pt-[7%]"
              )}
            >
              <button
                onClick={onClose}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2",
                  portrait ? "left-[15%] top-[10%]" : "left-[10%] top-[15%] "
                )}
              >
                <X strokeWidth={5} className="text-lg" />
              </button>
              <img
                className={cn(
                  "object-scale-down",
                  portrait ? "max-h-[50%]" : "max-h-full"
                )}
                src="/graduates/placeholder.png"
              />
              <div
                className={cn(
                  "flex flex-col gap-3 overflow-x-scroll p-1",
                  portrait ? "w-full" : "h-full"
                )}
              >
                <div
                  className={cn(
                    "flex w-full flex-col font-westmeath",
                    portrait ? "items-center" : ""
                  )}
                >
                  <p className="text-3xl">Biodata Wisudawan</p>
                  <p className="text-2xl">{data.name}</p>
                  <p>NIM Wisudawan</p>
                  <p>{data.program}</p>
                </div>

                <div
                  className={cn(
                    "flex w-full flex-col gap-2",
                    portrait ? "items-center" : "mt-auto"
                  )}
                >
                  <input
                    className="w-full rounded-xl border-2 border-[#F4D38E] bg-[#82080A] px-2 py-1 font-westmeath placeholder-[#F4D38E]"
                    placeholder="Anonymous"
                    spellCheck={false}
                  />
                  <input
                    className="w-full rounded-xl border-2 border-[#F4D38E] bg-[#82080A] px-2 py-1 font-westmeath placeholder-[#F4D38E]"
                    placeholder="Write menfess to Wisudawan"
                    spellCheck={false}
                  />
                  <button
                    className={cn(
                      "rounded-xl bg-[#FFDFA4] px-6 py-1 font-westmeath text-[#B87D12]",
                      portrait ? "" : "self-start"
                    )}
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
