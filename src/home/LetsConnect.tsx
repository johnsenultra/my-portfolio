import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function LetsConnect() {
  return (
    <section className="" data-aos="fade-up" data-aos-duration="800">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-4 px-5 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Let’s Connect
        </h2>
        <p className="mt-3 max-w-xl text-sm text-gray-600 md:text-xl">
          Got ideas in mind? I’m open for collaborations and inquiries — feel
          free to reach out!
        </p>
        <a href="mailto:jansennn42@gmail.com">
          <Button className="mt-5 w-full rounded-xl border border-gray-900 bg-black px-4 py-5 text-sm font-bold text-white transition-all duration-100 ease-in hover:border-gray-900 hover:bg-gray-900 focus:border-black focus:ring-black focus:outline-none md:w-[10rem]">
            Send Email{" "}
            <span className="ml-2">
              <Mail className="animate-bounce" />
            </span>
          </Button>
        </a>
      </div>
    </section>
  );
}
