import Navbar from "@/home/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="z-10 grow">
        <Outlet />
      </div>
    </div>
  );
}
