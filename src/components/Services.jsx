import React from "react";
import assets from "../assets/assets";
import Title from "./Title";

const Services = () => {
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

  return (
    <section
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-20 text-gray-700 dark:text-white overflow-hidden"
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
            key={index}
            className="flex flex-col items-start gap-4 p-6 rounded-xl border border-gray-200 dark:border-white/20 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.icon}
              alt=""
              className="w-12 h-12 object-contain"
            />

            <h3 className="text-xl font-medium">{service.title}</h3>

            <p className="text-sm leading-6 text-gray-500 dark:text-white/75">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
