import { Link } from "react-router-dom";
import MenuIcon from "../../../assets/icon/MenuIcon";
import HomeIcon from "../../../assets/icon/HomeIcon";
import BookmarkIcon from "../../../assets/icon/BookmarkIcon";
import SettingIcon from "../../../assets/icon/SettingIcon";
import LogoutIcon from "../../../assets/icon/LogoutIcon";

const menuList = [
  {
    name: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    name: "Bookmarks",
    icon: <BookmarkIcon />,
    to: "/",
  },
  {
    name: "Settings",
    icon: <SettingIcon />,
    to: "/",
  },
  {
    name: "Logout",
    icon: <LogoutIcon />,
    to: "/",
  },
];

const NavbarDrawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn btn-square drawer-button btn-ghost rounded-full"
        >
          <MenuIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay "></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content bg-base-200">
          {menuList.map((item) => (
            <li
              className="w-full hover:bg-neutral-600 active:bg-neutral-700 rounded-md transition "
              key={item.name}
            >
              <Link className="flex items-center gap-x-4" to={item.to}>
                {item.icon} <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
