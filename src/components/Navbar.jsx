import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <a
        href="#"
        aria-label="PROJECT Home"
        className="flex items-center gap-3 group"
      >
        <img
          src={assets.logo}
          className="w-12 sm:w-14 transition-transform duration-300 group-hover:scale-105"
          alt="PROJECT Logo"
        />

        <span className="text-2xl sm:text-3xl font-black tracking-widest text-gray-900 dark:text-white">
          PRO<span className="text-purple-600">JECT</span>
        </span>
      </a>

      <div
        className={`flex gap-5 text-gray-700 dark:text-white sm:items-center max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:bottom-0 max-sm:z-30 max-sm:min-h-screen max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 max-sm:transition-all max-sm:duration-300 ${
          sidebarOpen
            ? "max-sm:w-60 max-sm:pl-10"
            : "max-sm:w-0 max-sm:overflow-hidden max-sm:pl-0"
        }`}
      >
        <button
          type="button"
          onClick={closeSidebar}
          aria-label="Close navigation menu"
          className="absolute right-4 top-4 sm:hidden"
        >
          <img src={assets.close_icon} alt="" className="w-5" />
        </button>

        <a href="#" onClick={closeSidebar} className="sm:hover:border-b">
          Home
        </a>

        <a
          href="#services"
          onClick={closeSidebar}
          className="sm:hover:border-b"
        >
          Services
        </a>

        <a
          href="#our-work"
          onClick={closeSidebar}
          className="sm:hover:border-b"
        >
          Our Work
        </a>

        <a
          href="#contact-us"
          onClick={closeSidebar}
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="sm:hidden text-3xl text-gray-800 dark:text-white"
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        <a
          href="#contact-us"
          className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
