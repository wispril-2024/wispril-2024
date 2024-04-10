const VisiMisi = () => {
  return (
    <section className="grid w-full max-w-2xl grid-cols-1 gap-8 px-5 sm:grid-cols-2 lg:max-w-4xl lg:gap-12">
      {/* Visi */}
      <div className="flex flex-col gap-6 lg:gap-8">
        <h2 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-4xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-6xl">
          VISI
        </h2>

        <div className="sm: flex h-fit flex-col rounded-xl bg-[rgba(254,180,70,0.12)] p-5 text-center backdrop-blur-sm sm:h-[350px] lg:p-7">
          <p className="font-cgp text-base font-normal text-[#ECCC9B] lg:text-xl ">
            Terciptanya Parade Wisuda April ITB 2024 yang berlangsung dengan
            inovatif, bermakna, sistematis, serta bersinergi dalam mengapresiasi
            wisudawan
          </p>
        </div>
      </div>

      {/* Misi */}
      <div className="flex flex-col gap-6 lg:gap-8">
        <h2 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-4xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-6xl">
          Misi
        </h2>

        <ul className="flex h-fit flex-col gap-2 rounded-xl bg-[rgba(254,180,70,0.12)] p-5 text-center backdrop-blur-sm sm:h-[350px] sm:overflow-y-auto lg:gap-4 lg:p-7 ">
          <li className="font-cgp text-base font-normal text-[#ECCC9B] lg:text-xl">
            1. Menciptakan wadah apresiasi di Parade Wisuda April ITB 2024 yang
            berkesan bagi seluruh elemen kampus.
          </li>

          <li className="font-cgp text-base font-normal text-[#ECCC9B] lg:text-xl">
            2. Menyusun dan mengembangkan ide-ide inovatif untuk konsep dan
            pelaksanaan Parade Wisuda April ITB 2024.
          </li>
          <li className="font-cgp text-base font-normal text-[#ECCC9B] lg:text-xl">
            3. Mengorganisir Parade Wisuda April ITB 2024 secara terstruktur
            pada setiap aspek di parade wisuda.
          </li>
          <li className="font-cgp text-base font-normal text-[#ECCC9B] lg:text-xl">
            4. Menciptakan kolaborasi dalam merencanakan dan melaksanakan Parade
            Wisuda April ITB 2024.
          </li>
          <li className="font-cgp text-base font-normal text-[#ECCC9B] lg:text-xl">
            5. Menjadikan Parade Wisuda April ITB 2024 sebagai wadah
            pengembangan diri yang efektif untuk setiap unsur yang terlibat di
            dalamnya.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VisiMisi;
