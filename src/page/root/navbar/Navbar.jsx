import NavbarDrawer from "./Drawer";

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-neutral-900">
      <div className="flex-1">
        <div className="lg:hidden">
          <NavbarDrawer />
        </div>
        <button className="hidden lg:block btn btn-ghost">yhoniblog</button>
      </div>
      <div className="flex-none">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="search..."
            className="input input-sm w-30 rounded-md input-bordered"
          />
          <button className="btn btn-circle btn-ghost">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="https://source.unsplash.com/500x500" alt="" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
