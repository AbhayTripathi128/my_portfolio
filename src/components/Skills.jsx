import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faCode, faArrowRight);

const SkillsWrapper = styled.div`
  height: 100%;
  max-height: calc(100vh - 110px);
  overflow: hidden;
  padding: 20px;
  background-color: #011627;
  color: #E5E9F0;
  
  @media (max-width: 768px) {
    padding: 15px 15px 60px;
    max-height: none; /* Remove max height restriction on mobile */
    height: auto;
    overflow: visible;
  }
  
  @media (max-width: 480px) {
    padding: 15px 10px 40px;
  }
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  height: auto;
  max-height: calc(100vh - 220px);
  overflow-y: auto;
  padding-right: 10px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1E2D3D;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #43D9AD;
    border-radius: 10px;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-height: none;
    overflow-y: visible;
    padding-right: 0;
    gap: 12px;
  }
`;

const CategoryCard = styled(motion.div)`
  background: rgba(30, 45, 61, 0.3);
  border-radius: 12px;
  border: 1px solid #1E2D3D;
  padding: 20px;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.3rem;
    color: #43D9AD;
    margin-bottom: 15px;
    border-bottom: 1px solid #1E2D3D;
    padding-bottom: 8px;
    display: flex;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 5px;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 12px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    
    h3 {
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
  }
`;

const CategoryIcon = styled.span`
  display: inline-block;
  margin-right: 8px;
  background: rgba(67, 217, 173, 0.2);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(65px, 1fr));
    gap: 10px;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  
  .skill-icon-container {
    width: 48px;
    height: 48px;
    background: rgba(67, 217, 173, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-bottom: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }
  
  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    filter: ${props => props.category !== "Frontend Skills" ? "brightness(0) invert(1)" : "none"};
  }
  
  .fa-icon {
    color: #E5E9F0;
    font-size: 1.5rem;
  }
  
  .skill-name {
    font-size: 0.85rem;
    color: #607B96;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  &:hover .skill-icon-container,
  &.active .skill-icon-container {
    background: rgba(67, 217, 173, 0.3);
    transform: translateY(-5px);
  }
  
  &:hover .skill-name,
  &.active .skill-name {
    color: #E5E9F0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #43D9AD, #4D5BCE);
    transition: width 0.3s ease;
  }
  
  &:hover::after,
  &.active::after {
    width: 70%;
  }
  
  @media (max-width: 768px) {
    .skill-icon-container {
      width: 42px;
      height: 42px;
      padding: 7px;
    }
    
    img {
      width: 24px;
      height: 24px;
    }
    
    .fa-icon {
      font-size: 1.2rem;
    }
    
    .skill-name {
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 480px) {
    .skill-icon-container {
      width: 38px;
      height: 38px;
      padding: 6px;
    }
    
    img {
      width: 22px;
      height: 22px;
    }
    
    .skill-name {
      font-size: 0.7rem;
    }
  }
`;

const PageTitle = styled(motion.h2)`
  font-size: 2rem;
  color: #E5E9F0;
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #43D9AD, #4D5BCE);
  }
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 25px;
    
    &:after {
      width: 80px;
      bottom: -8px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 20px;
    
    &:after {
      width: 60px;
      height: 2px;
    }
  }
`;

const CategorySwipeIndicator = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #607B96;
    margin: 15px 0 5px;
    font-size: 0.9rem;
    
    svg {
      margin-left: 8px;
      animation: swipeRight 1.5s infinite;
    }
    
    @keyframes swipeRight {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(5px); }
    }
  }
`;

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [activeSkill, setActiveSkill] = useState(null);
    
    const skillCategories = [
        {
            category: "Frontend Skills",
            icon: "🌐",
            skills: [
                { name: "HTML5", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
                { name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
                { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
                { name: "jQuery", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
                { name: "React.JS", icon: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png" }
            ]
        },
        {
            category: "Backend Skills",
            icon: "⚙️",
            skills: [
                { name: "Node.js", icon: "https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png" },
                { name: "Vue.js", icon: "https://cdn.iconscout.com/icon/free/png-512/vuejs-1175052.png" }
            ]
        },
        {
            category: "Programming",
            icon: "💻",
            skills: [
                { name: "Java", icon: "https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png" },
                { name: "Python", icon: "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png" }
            ]
        },
        {
            category: "Testing Skills",
            icon: "🧪",
            skills: [
                { name: "Manual testing", icon: "code" },
                { name: "Selenium automation", icon: "code" },
                { name: "Test matrix design", icon: "code" }
            ]
        },
    ];
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { duration: 0.5 }
        }
    };

    const handleSkillClick = (categoryName, skillName) => {
        const skillKey = `${categoryName}-${skillName}`;
        setActiveSkill(activeSkill === skillKey ? null : skillKey);
    };

    return (
        <SkillsWrapper>
            <PageTitle
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Skills
            </PageTitle>
            
            <CategorySwipeIndicator>
                Swipe for more <FontAwesomeIcon icon="arrow-right" />
            </CategorySwipeIndicator>
            
            <CategoryContainer>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'contents' }}
                >
                    {skillCategories.map((category, index) => (
                        <CategoryCard 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3>
                                <CategoryIcon>{category.icon}</CategoryIcon>
                                {category.category}
                            </h3>
                            <SkillGrid>
                                {category.skills.map((skill, i) => (
                                    <SkillItem 
                                        key={i}
                                        category={category.category}
                                        onHoverStart={() => setHoveredSkill(`${category.category}-${skill.name}`)}
                                        onHoverEnd={() => setHoveredSkill(null)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={activeSkill === `${category.category}-${skill.name}` ? 'active' : ''}
                                        onClick={() => handleSkillClick(category.category, skill.name)}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.3 + (i * 0.05) }}
                                    >
                                        <div className="skill-icon-container">
                                            {skill.icon === "code" ? (
                                                <FontAwesomeIcon icon="code" className="fa-icon" />
                                            ) : (
                                                <img src={skill.icon} alt={skill.name} />
                                            )}
                                        </div>
                                        <span className="skill-name">{skill.name}</span>
                                    </SkillItem>
                                ))}
                            </SkillGrid>
                        </CategoryCard>
                    ))}
                </motion.div>
            </CategoryContainer>
        </SkillsWrapper>
    );
};

export default Skills;