import React, { useState } from "react";
import "./Experience.scss";
import { services, experiences, education } from "../../constants/Resources";

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  const getCategoryItems = () => {
    switch (activeCategory) {
      case "services":
        return services;
      case "experiences":
        return experiences;
      case "education":
        return education;
      default:
        return [];
    }
  };

  return (
    <div className="experience container" id="services">
      <div className="experience-content">
        <div className="category-column">
          <h2
            className={`category-title ${
              activeCategory === "services" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("services")}
          >
            Services
          </h2>
          <h2
            className={`category-title ${
              activeCategory === "experiences" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("experiences")}
          >
            Experiences
          </h2>
          <h2
            className={`category-title ${
              activeCategory === "education" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("education")}
          >
            Education
          </h2>
        </div>
        <div className="details-column">
          {activeCategory !== null &&
            getCategoryItems().map((item, index) => (
              <div key={index}>
                <h1 className="title">{item.title}</h1>
                {item.company && <p className="company">{item.company}</p>}
                {item.institution && <p>{item.institution}</p>}
                {item.description && <p>{item.description}</p>}
                {item.details && <p>{item.details}</p>}
                {item.year && <p>{item.year}</p>}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
