import DynamicText from "@/components/kokonutui/dynamic-text";
import { Button } from "@/components/ui/button";
import { CloudDownload, HandshakeIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="h-full w-full bg-gradient-to-t from-[#c9ffac] to-white pt-15 dark:from-[#111111] dark:to-[#0a0a0a]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <section className="z-10 mx-auto mt-12 flex max-w-screen-lg flex-col items-center md:px-20">
        <div className="my-4 w-[8rem] rounded-4xl bg-gray-900 text-center text-white">
          <DynamicText />
        </div>
        <div className="mt-10 mb-10">
          <h1 className="hero-text text-4xl font-[500] uppercase italic sm:text-5xl md:text-6xl lg:text-7xl">
            J
            <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
              ohnsen Ultra
            </span>
          </h1>
        </div>
        <div className="max-w-7xl px-3 text-center md:px-0">
          <p className="text-sm text-gray-600 sm:text-xl">
            <span className="mb-1 inline-block w-4 border-b-2 border-gray-700"></span>{" "}
            A freelancer and full stack developer specializing in building
            high-quality custom web solutions, workflow automation, and AI
            integrations.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-screen-lg pb-20">
        <div className="mx-auto flex max-w-[45rem] flex-col justify-center gap-4 px-5 md:flex-row">
          <Link to="/message-me">
            <Button className="w-full rounded-4xl border border-gray-900 bg-black px-4 py-5 text-sm font-bold text-white transition-all duration-100 ease-in hover:border-gray-900 hover:bg-gray-900 focus:border-black focus:ring-black focus:outline-none md:w-[10rem]">
              Let’s Connect
              <span className="ml-1">
                <HandshakeIcon />
              </span>
            </Button>
          </Link>
          <Button className="w-full rounded-4xl border border-gray-900 bg-transparent px-4 py-5 text-sm font-bold text-black transition-all duration-200 ease-in hover:border-gray-800 hover:bg-gray-200 hover:text-gray-800 focus:border-black focus:ring-black focus:outline-none md:w-[10rem]">
            Download CV
            <span className="ml-1">
              <CloudDownload />
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
}
