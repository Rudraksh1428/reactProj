import React from "react";
import { UserRound, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 py-20 bg-white dark:bg-black text-gray-800 dark:text-white transition-colors duration-300">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-medium mb-4">
            Reach out to us
          </h1>

          <p className="text-gray-400 dark:text-gray-400 text-base sm:text-lg max-w-lg mx-auto">
            Ready to grow your brand? Let’s connect and build something
            exceptional together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium mb-3">
                Your name
              </label>

              <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 h-14 focus-within:border-indigo-500 transition-all">
                <UserRound
                  size={20}
                  className="text-gray-500 dark:text-gray-400 shrink-0"
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full outline-none text-sm bg-transparent text-gray-800 dark:text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Email id</label>

              <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 h-14 focus-within:border-indigo-500 transition-all">
                <Mail
                  size={20}
                  className="text-gray-500 dark:text-gray-400 shrink-0"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full outline-none text-sm bg-transparent text-gray-800 dark:text-white placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Message</label>

            <textarea
              placeholder="Enter your message"
              required
              rows={6}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 outline-none focus:border-indigo-500 transition-all resize-none text-sm bg-transparent text-gray-800 dark:text-white placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-9 py-4 text-sm transition-all duration-300 hover:scale-105"
          >
            Submit
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
