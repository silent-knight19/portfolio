import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaServer, FaTools, FaGithub, FaAws } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiMui, SiGraphql, SiJest } from 'react-icons/si';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  {
    title: 'Frontend Development',
    icon: <FaCode className="skill-icon" />,
    description: 'Crafting engaging and responsive user experiences with modern web technologies.',
    skills: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Material-UI', icon: <SiMui /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ]
  },
  {
    title: 'Backend Development',
    icon: <FaServer className="skill-icon" />,
    description: 'Building robust and scalable server-side applications and APIs.',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'RESTful APIs', icon: <FaCode /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
    ]
  },
  {
    title: 'Database Management',
    icon: <FaDatabase className="skill-icon" />,
    description: 'Designing and optimizing databases for performance and scalability.',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Mongoose ODM', icon: <FaDatabase /> },
      { name: 'Database Optimization', icon: <FaTools /> },
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: <FaTools className="skill-icon" />,
    description: 'Version control, testing, and deployment workflows.',
    skills: [
      { name: 'Git & GitHub', icon: <FaGithub /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Jest', icon: <SiJest /> },
      { name: 'Agile/Scrum', icon: <FaTools /> },
    ]
  }
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="skills-section" style={{backgroundColor:"#f8f8f8",width:"100%",margin:"auto"}}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Technical Arsenal</h2>
          <p>As a Full-Stack MERN developer, I bring a robust set of skills to design, develop, and deploy high-performance web applications.</p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category"
              variants={item}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="skill-header">
                <div className="icon-wrapper">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <p className="skill-description">{category.description}</p>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;