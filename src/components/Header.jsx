import React from "react";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  PlusIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Header() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="sticky top-0 bg-white flex items-center p-2 lg:px-5  shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <img
          src="https://links.papareact.com/5me"
          alt="brand"
          width={40}
          height={40}
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-800" />
          <input
            className="hidden md:inline-flex ml2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-0 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}

      <div className="hidden md:block">
        <div className="flex items-center sm:space-x-2 justify-end">
          <img
            src={user.photoURL}
            alt={user.displayName}
            width={40}
            height={40}
            onClick={() => auth.signOut()}
          />
          <p className="whitespace-nowrap font-semibold pr-3">TestUser</p>
          <PlusIcon className="icon" />
          <ChatBubbleOvalLeftIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </div>
    </div>
  );
}
