import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import SidebarRow from "./SidebarRow";

export default function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w[600px] xl:min-w[300px] ">
      <SidebarRow
        src="https://otakukart.com/wp-content/uploads/2022/03/hisoka-featured.jpg"
        title="profile"
      />

      <SidebarRow Icon={ComputerDesktopIcon} tittle="Watch" />
      <SidebarRow Icon={UsersIcon} tittle="Friends" />
      <SidebarRow Icon={UserGroupIcon} tittle="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} tittle="Marketplace" />
      <SidebarRow Icon={CalendarIcon} tittle="Events" />
      <SidebarRow Icon={ClockIcon} tittle="wMemories" />
      <SidebarRow Icon={ChevronDownIcon} tittle="See more" />
    </div>
  );
}
