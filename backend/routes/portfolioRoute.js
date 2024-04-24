const router = require("express").Router();
const {
  Intro,
  About,
  Experience,
  Education,
  Projects,
  Contact,
} = require("../models/portfolioModel");

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intro = await Intro.find();
        const about = await About.find();
        const experience = await Experience.find();
        const education = await Education.find();
        const projects = await Projects.find();
        const contact = await Contact.find();

        res.status(200).send({
            intro: intro[0],
            about: about[0],
            experience: experience,
            education: education,
            projects: projects,
            contact: contact[0],
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
