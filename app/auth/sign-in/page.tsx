import SignInForm from "../../auth/sign-in/sign-in-form";
import { type Metadata } from "next";
import Image from "next/image";

const metadata: Metadata = {
  title: "Sign In | Wispril 2024",
};

const SignInPage = async () => {
  return (
    <main className="relative flex h-full min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      {/* Rectangle */}
      <Image
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/auth/sign-in/rectangle-1.jpg"
        alt="Background Image"
        fill={true}
        sizes="100vw"
        priority
      />

      {/* Arch */}
      <Image
        className="absolute inset-0 object-center"
        src="/auth/sign-in/arch.png"
        alt="arch"
        fill={true}
      />

      {/* Siluet 1*/}
      <div className="absolute inset-20 -bottom-64 flex items-center justify-center md:-bottom-60 xl:-bottom-24">
        {[1, 2, 3, 4].map((index) => (
          <Image
            key={`siluet-${index}`}
            className="mx-16"
            src="/auth/sign-in/siluet.svg"
            alt="siluet"
            width={400}
            height={400}
          />
        ))}
      </div>

      {/* Siluet 2*/}
      <div className="absolute inset-20 -bottom-72 flex items-center justify-center md:-bottom-80 xl:-bottom-32">
        {[1, 2, 3].map((index) => (
          <Image
            key={`siluet-${index}`}
            className="mx-36"
            src="/auth/sign-in/siluet-2.svg"
            alt="siluet"
            width={400}
            height={400}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative flex h-[320px] w-[300px] items-center justify-center rounded-lg bg-[#FEB446] bg-opacity-10 backdrop-blur-sm md:h-[420px] md:w-[540px] lg:rounded-2xl xl:h-[540px] xl:w-[800px]">
        <div className="absolute -top-16 flex items-center justify-center md:-top-32 xl:-top-24">
          <h1 className="absolute z-20 mb-16 bg-gradient-to-r from-red-800 to-red-600 bg-clip-text font-westmeath text-4xl font-bold text-transparent md:mb-32 md:text-6xl">
            LOG IN
          </h1>
          <Image
            className="md:w-6/5 z-10"
            src="/auth/sign-in/title-login.svg"
            alt="title"
            width={600}
            height={600}
          />
        </div>
        <div className="absolute z-30 w-full px-6 md:px-12 lg:px-10 xl:px-20">
          <SignInForm />
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
