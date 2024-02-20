import Image from "next/image";

const TITLE = "Welcome to the 4 Quotients Self Reflection Quiz";
const DESCRIPTION = "Learn about your life";
const CTA = "Take the Quiz";

export default function Home() {
  return (
    <>
        <div className="z-10 w-full max-w-xl px-5 xl:px-0">
          {/* <Header/> */}
          <h1
            className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          >
            {TITLE}
          </h1>
          <p
            className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            {DESCRIPTION}
          </p>
          <button>{CTA}</button>
        </div>
      </>
    );
  }
