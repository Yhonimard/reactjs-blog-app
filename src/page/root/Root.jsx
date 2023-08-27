import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Add from "../../components/post/Add";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-zinc-950">
        <Outlet />
      </main>
      <Add />
    </>
  );
};

export default Root;
