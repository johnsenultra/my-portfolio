import DynamicText from "@/components/kokonutui/dynamic-text";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-full w-full bg-white">
      {/* Amber Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Your Content/Components */}
      <div className="relative grow">
        <section className="z-10 mx-auto mt-8 flex max-w-screen-xl flex-col items-center md:px-20">
          <div className="my-4 w-[8rem] rounded-4xl bg-gray-900 text-center text-white">
            <p>
              <DynamicText />
            </p>
          </div>
          <div className="mt-4 mb-10">
            <h1 className="text-4xl font-[900] uppercase sm:text-5xl md:text-6xl lg:text-7xl">
              J
              <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
                ohnsen Ultra
              </span>
            </h1>
          </div>
          <div className="max-w-7xl px-5 text-center text-sm text-gray-600 sm:text-xl md:px-0">
            <p>
              I’m a full-stack freelance software engineer specializing in
              building high-quality custom web solutions, workflow automation,
              and AI integrations.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-9 max-w-screen-xl">
          <div className="flex justify-center">
            <Button className="text-sm font-bold">Download CV</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
