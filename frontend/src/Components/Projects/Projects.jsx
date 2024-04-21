import React, { useState } from "react";
import './Projects.scss'
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { images } from "../../constants";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState([
    {
      title: "E-commerce Website",
      description:
        "Built an e-commerce website using React and Redux for state management.",
      category: "Frontend",
      tags: ["React", "Redux", "JavaScript", "CSS"],
      imgUrl: images.profile,
      projectLink: "https://trendi-fy.netlify.app",
    },
    {
      title: "Mobile App Design",
      description:
        "Designed a mobile app prototype for a travel booking application using Figma.",
      category: "UI/UX",
      tags: ["Figma", "UI Design", "Mobile App"],
      imgUrl: images.example,
      projectLink: "https://example.com/mobile-app",
    },
    {
      title: "Logo Design",
      description:
        "Created a new logo for a startup company focusing on technology solutions.",
      category: "Graphic Design",
      tags: ["Logo Design", "Brand Identity"],
      imgUrl: images.example,
      projectLink: "https://example.com/logo-design",
    },
    {
      title: "Portfolio Website",
      description:
        "Developed a personal portfolio website using HTML, CSS, and JavaScript.",
      category: "Frontend",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      imgUrl: images.example,
      projectLink: "https://example.com/portfolio",
    },
    {
      title: "Social Media Graphics",
      description:
        "Designed graphics for social media marketing campaigns for a clothing brand.",
      category: "Graphic Design",
      tags: ["Social Media", "Graphics Design", "Marketing"],
      imgUrl: images.example,
      projectLink: "https://example.com/social-media-graphics",
    },
    {
      title: "Social Media Graphics",
      description:
        "Designed graphics for social media marketing campaigns for a clothing brand.",
      category: "Fullstack",
      tags: ["Social Media", "Graphics Design", "Marketing"],
      imgUrl: images.example,
      projectLink: "https://example.com/social-media-graphics",
    },
  ]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = (item) => {
    setActiveFilter(item);
    if (item === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => project.category === item);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className='Work container' id='projects'>
      <h2 className="headerText">
        My Creative <span>Projects</span>{" "}
      </h2>
      <div className="projectFilter">
        {["All", "Frontend", "UI/UX", "Graphic Design", "Fullstack"].map(
          (item, index) => (
            <div
              key={index}
              className={`filterProjects ${
                activeFilter === item ? "item-active" : ""
              }`}
              onClick={() => filterProjects(item)}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="projects"
      >
        {filteredProjects.map((work, index) => (
          <div className="projectItem" key={index}>
            <div className="projectItemImg">
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="projectItemHover"
              >
                <div className="projectContent">
                  <h4>{work.title}</h4>
                  <p>{work.description}</p>
                  <div className="projectTag">
                    <p>{work.tags.join(", ")}</p>
                  </div>
                  <div className="linking">
                    <a
                      href={work.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a
                      href={work.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};







export default Projects;