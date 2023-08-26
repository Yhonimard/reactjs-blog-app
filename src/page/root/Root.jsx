import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-zinc-950">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
