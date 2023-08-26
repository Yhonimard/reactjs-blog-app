import { Link, NavLink } from "react-router-dom";
import HomeIcon from "../../assets/icon/HomeIcon";
import BookmarkIcon from "../../assets/icon/BookmarkIcon";
import SettingIcon from "../../assets/icon/SettingIcon";
import LogoutIcon from "../../assets/icon/LogoutIcon";
import { memo } from "react";

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

const HomeLeftBar = () => {
  return (
    <div className="sticky top-20">
      <ul className="rounded-box menu-lg">
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
  );
};

export default HomeLeftBar;
