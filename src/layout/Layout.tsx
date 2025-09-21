import Navbar from "@/home/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="relative z-10 grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
