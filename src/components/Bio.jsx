import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BioContainer = styled.section`
    max-width: 800px;
    margin: 4rem auto;
    padding: 2rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(90deg, #ff8a00, #e52e71);
    }
`;

const BioTitle = styled(motion.h2)`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
`;

const BioParagraph = styled(motion.p)`
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
`;

const SkillsContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 2rem;
`;

const SkillBadge = styled(motion.span)`
    padding: 8px 16px;
    border-radius: 30px;
    background: linear-gradient(135deg, #ff8a00, #e52e71);
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
    }
`;

const Bio = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.5, 
                ease: "easeOut" 
            }
        }
    };
    
    const skills = ["HTML5", "CSS", "JavaScript", "jQuery", "React JS" , "Manual testing" , "Automation testing"];
    
    return (
        <BioContainer>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                <BioTitle variants={itemVariants}>About Me</BioTitle>
                
                <BioParagraph variants={itemVariants}>
                    I have almost 3 years of experience in the field of software development.
                    Dedicated software analyst III with almost Three years of hands-on experience 
                    specializing in frontend development and in testing field.
                </BioParagraph>
                
                <BioParagraph variants={itemVariants}>
                    Proficient in HTML5, CSS, JavaScript, jQuery, React JS and many more with 
                    a proven track record of delivering high-quality projects within tight deadlines.
                </BioParagraph>
                
                <BioParagraph variants={itemVariants}>
                    Possesses strong time-management abilities and a commitment to excellence 
                    in software development. Passionate about leveraging technical skills to 
                    contribute effectively to team success and drive innovation in the field.
                </BioParagraph>
                
                <SkillsContainer variants={itemVariants}>
                    {skills.map((skill, index) => (
                        <SkillBadge 
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {skill}
                        </SkillBadge>
                    ))}
                </SkillsContainer>
            </motion.div>
        </BioContainer>
    );
};

export default Bio;