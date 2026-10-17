import React from "react";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-slate-50 dark:bg-black text-gray-700 dark:text-gray-300 pt-10 sm:pt-14 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 transition-colors duration-300">
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10 pb-12">
        <div className="flex flex-col gap-5">
          <a
            href="#hero"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            PRO<span className="text-purple-700">JECT</span>
          </a>

          <p className="max-w-md text-sm sm:text-base text-gray-500 dark:text-gray-400">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-5 text-sm sm:text-base">
            <li>
              <a
                href="#hero"
                className="hover:text-indigo-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-indigo-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#our-work"
                className="hover:text-indigo-600 transition-colors"
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-indigo-600 transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-600 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:max-w-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Subscribe to our newsletter
          </h3>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mt-7"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 min-w-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm outline-none focus:border-indigo-500 rounded-sm text-gray-800 dark:text-white placeholder:text-gray-400 transition-colors"
            />

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 text-sm rounded-sm transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-800" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 py-7">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          Copyright {new Date().getFullYear()} © PROJECT - All Rights Reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z" />
            </svg>
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.5l7.3-8.4L1.9 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-6c0-1.4 0-3.3-2-3.3s-2.3 1.5-2.3 3.2V21H9.5V9Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
