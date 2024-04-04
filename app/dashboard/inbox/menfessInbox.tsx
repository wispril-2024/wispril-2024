interface MenfessInbosProps {
  name: string;
  message: string;
  pp: string;
}
const MenfessInbox: React.FC<MenfessInbosProps> = ({ name, message, pp }) => {
  return (
    <div className="z-10 mt-5 flex w-2/3 flex-row gap-2.5 rounded-[0.5rem] border-2 border-[#F4D38E] bg-[#82080A] p-6">
      <div>
        <img
          src={pp}
          alt="menfesspicture"
          className="rounded-full border-2 border-[#F4D38E] object-cover"
          width={60}
          height={60}
          style={{ aspectRatio: "1 / 1" }}
        />
      </div>
      <div className="flex w-full flex-col gap-2.5">
        <p className="font-cgp font-bold text-[#F4D38E]">{name}</p>
        <p className="text-justify font-cgp font-normal text-[#F4D38E]">
          {" "}
          {message}{" "}
        </p>
      </div>
    </div>
  );
};

export default MenfessInbox;
