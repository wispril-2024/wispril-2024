interface MenfessInbosProps {
  name: string;
  message: string;
  pp: string;
}
const MenfessInbox: React.FC<MenfessInbosProps> = ({name,message,pp}) => {
  return (
    <div className="flex w-2/3 flex-row mt-5 z-10 rounded-[0.5rem] border-2 gap-2.5 border-[#F4D38E] bg-[#82080A] p-6">
      <div>
        <img
            src={pp}
            alt="menfesspicture"
            className="rounded-full object-cover border-2 border-[#F4D38E]"
            width={60}
            height={60}
            style={{aspectRatio: '1 / 1'}}
        />
      </div>
      <div className="flex flex-col w-full gap-2.5">
        <p className="font-cgp font-bold text-[#F4D38E]">{name}</p>
        <p className="font-cgp font-normal text-justify text-[#F4D38E]"> {message} </p>
      </div>
    </div>
  )
}

export default MenfessInbox