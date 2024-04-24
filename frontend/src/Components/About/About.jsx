import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import SectionTitle from "../../constants/SectionTitle";

const About = () => {
  return (
    <div className="aboutMe container" id="about">
      <SectionTitle title="About Me" className="title"/>
      <div className="details">
      <div className="img">
        <dotlottie-player
          src="https://lottie.host/be9a8be2-a209-49aa-bd91-8969cd03266a/P6YopAYEyt.json"
          background="transparent"
          speed="1"
          
          loop
          autoplay
          className="lottie"
        ></dotlottie-player>
      </div>
      <div className="text">
        <p>
          As a frontend developer with a passion for crafting captivating user
          experiences, I specialize in seamlessly blending form and function to
          create digital products that resonate with audiences. With a
          background in UI/UX design, I bring a meticulous eye for detail to
          every project, ensuring that each element not only looks stunning but
          also enhances usability. Beyond coding, I find inspiration in the
          immersive worlds of gaming, where creativity fuels my work and sparks
          innovative solutions. Whether I'm diving into the intricacies of
          JavaScript frameworks or refining animations, I approach each
          project with a blend of technical expertise and creative flair.
        </p>

        <p>
          In addition to my frontend prowess, I am actively expanding my skill
          set into backend development, eager to explore the full spectrum of
          web technologies. With a solid foundation in frontend technologies, I am now delving into server-side programming languages
          and database management, seeking to enhance the holistic development
          process. Beyond the screen, I actively contribute to web development
          communities, sharing insights, and collaborating with fellow
          developers to push the boundaries of innovation. With a relentless
          drive for growth and a passion for creating meaningful digital
          experiences, I am committed to continually evolving my skills and
          shaping the future of web development.
        </p>
      </div>
      </div>
      <div className="tools">
      <motion.div
          whileInView={{ y: [0, -100], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="headerInfo"
        >
          <img src={images.javascript} alt="" />
          <img src={images.react} alt="" />
          <img src={images.figma} alt="" />
          <img src={images.sass} alt="" />
          <img src={images.node} alt="" />
          <img src={images.tailwind} alt="" />
          <img src={images.mongodb} alt="" />

          </motion.div>
      </div>
    </div>
  );
};

export default About;
