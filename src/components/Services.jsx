import React, { useState } from "react";
import assets from "../assets/assets";
import Title from "./Title";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage, and convert.",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description:
        "We help you execute your plan and deliver measurable results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setActiveCard(index);
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-20 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        aria-hidden="true"
        className="absolute -top-20 -left-20 -z-10 w-72 opacity-50 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to decision and execution, we craft digital solutions which move your business forward."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {servicesData.map((service, index) => (
          <div
            key={service.title}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => setActiveCard(null)}
            className="group relative rounded-xl p-px overflow-hidden transition-transform duration-300 ease-out hover:scale-105 hover:z-10"
          >
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-200"
              style={{
                background: `radial-gradient(180px circle at ${cursor.x}px ${cursor.y}px, rgba(99, 102, 241, 0.95), transparent 70%)`,
                opacity: activeCard === index ? 1 : 0,
              }}
            />

            <div className="relative flex h-full flex-col items-start gap-4 rounded-[11px] border border-gray-200 bg-white p-6 transition-colors duration-300 group-hover:border-transparent dark:border-white/20 dark:bg-[#111111]">
              <img
                src={service.icon}
                alt=""
                className="h-12 w-12 object-contain"
              />

              <h3 className="text-xl font-medium">{service.title}</h3>

              <p className="text-sm leading-6 text-gray-500 dark:text-white/75">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
