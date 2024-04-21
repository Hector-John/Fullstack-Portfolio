import React from "react";
import { motion } from "framer-motion";
import "./Services.scss";
import { images } from "../../constants";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Craft captivating user interfaces that captivate and engage users, ensuring seamless interaction and intuitive navigation.",
      imgUrl: images.example,
    },

    {
      title: "UI/UX Design",
      description:
        "Design user-centric interfaces that prioritize usability and enhance user satisfaction, leveraging industry-standard design tools.",
      imgUrl: images.example,
    },
    {
      title: "Graphic Design",
      description:
        "Produce visually compelling content for branding, marketing, and communication purposes, creating memorable and impactful designs.",
      imgUrl: images.example,
    },
    {
      title: "Backend Development",
      description:
        "Exploring the realm of backend development to master the art of crafting scalable and reliable server-side solutions.",
      imgUrl: images.example,
    },
  ];

  return (
    <div className="servicesPage container" id="Services">
      <h2>
        I Know That <span>Good Design</span>
        <br /> Means <span>Good Business</span>
      </h2>
      <div className="profile">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="profileItem"
            key={service.title + index}
          >
            <img src={service.imgUrl} alt="" />
            <h2 className="aboutTitle">{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
