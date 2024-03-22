const VisiMisi = () => {
  return (
    <section className="mx-auto mt-20 grid w-full max-w-[500px] grid-cols-1 grid-rows-2 p-8 md:max-w-[1000px] md:grid-cols-2 md:grid-rows-1">
      <div
        className="mx-auto mt-0 grid w-full  grid-cols-1 grid-rows-1 sm:mt-20"
        style={{ containerType: "inline-size" }}
      >
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col gap-8  px-0  md:px-10 ">
          <h2 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-5xl font-normal text-transparent shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:text-8xl ">
            VISI
          </h2>

          <div className=" flex  h-[300px] max-w-full flex-col gap-2 overflow-y-auto rounded-xl bg-[rgba(254,180,70,0.12)] p-6 text-center backdrop-blur-sm md:h-[400px] lg:h-[400px] ">
            <p className="text-justify font-cgp  text-base font-normal  text-[#ECCC9B]  sm:text-2xl ">
              Terciptanya Parade Wisuda April ITB 2024 yang berlangsung dengan
              inovatif, bermakna, sistematis, serta bersinergi dalam
              mengapresiasi wisudawan
            </p>
          </div>
        </div>
      </div>
      <div
        className="mx-auto mt-0 grid w-full grid-cols-1 grid-rows-1 md:mt-20"
        style={{ containerType: "inline-size" }}
      >
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col gap-8 px-0  md:px-10 ">
          <h2 className=" bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-5xl font-normal text-transparent shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:text-8xl">
            Misi
          </h2>

          <div className="flex h-[400px]  max-w-full flex-col gap-2 overflow-y-auto rounded-xl bg-[rgba(254,180,70,0.12)]  p-6 text-center backdrop-blur-sm lg:h-[400px]  ">
            <p className="text-justify font-cgp text-base font-normal text-[#ECCC9B] sm:text-2xl">
              1. Menciptakan wadah apresiasi di Parade Wisuda April ITB 2024
              yang berkesan bagi seluruh elemen kampus.
            </p>

            <p className="text-justify font-cgp  text-base font-normal  text-[#ECCC9B]  sm:text-2xl">
              2. Menyusun dan mengembangkan ide-ide inovatif untuk konsep dan
              pelaksanaan Parade Wisuda April ITB 2024.
            </p>
            <p className="text-justify font-cgp  text-base font-normal  text-[#ECCC9B]  sm:text-2xl">
              3. Mengorganisir Parade Wisuda April ITB 2024 secara terstruktur
              pada setiap aspek di parade wisuda.
            </p>
            <p className="text-justify font-cgp  text-base font-normal  text-[#ECCC9B]  sm:text-2xl">
              4. Menciptakan kolaborasi dalam merencanakan dan melaksanakan
              Parade Wisuda April ITB 2024.
            </p>
            <p className="text-justify font-cgp  text-base font-normal  text-[#ECCC9B]  sm:text-2xl">
              5. Menjadikan Parade Wisuda April ITB 2024 sebagai wadah
              pengembangan diri yang efektif untuk setiap unsur yang terlibat di
              dalamnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
