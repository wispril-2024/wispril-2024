import bannerdown from "../../public/about-us/bannerDown.png";
import bannerup from "../../public/about-us/bannerUp.png";
import Image from "next/image";

export default function Description() {
  return (
    <section className=" relative mt-24 md:mt-40  ">
      <Image
        src={bannerup}
        alt="Banner"
        width={284}
        height={271}
        className=" absolute -top-36  left-0   hidden md:flex lg:left-36"
      />

      <Image
        src={bannerup}
        alt="Banner"
        width={150}
        height={144}
        className="absolute  -top-20  left-3 md:hidden "
      />
      <p className="  px-20  text-justify font-cgp text-base font-normal  text-[#ECCC9B] md:px-28 md:text-3xl  lg:px-80  ">
        Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus.
      </p>
      <Image
        src={bannerdown}
        alt="Banner"
        width={284}
        height={271}
        className="absolute -bottom-36  right-0 hidden md:flex lg:right-36"
      />
      <Image
        src={bannerdown}
        alt="Banner"
        width={150}
        height={144}
        className="absolute  -bottom-16  right-3  md:hidden"
      />
    </section>
  );
}
