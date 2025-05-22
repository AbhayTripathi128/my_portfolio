import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Project = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const projects = [
        {
            id: 1,
            title: "iQ3Connect",
            period: "11/04/2021 to 02/04/2022",
            role: "Frontend developer",
            description: "Building a web learning platform like Coursera and Udemy and upload the content and courses related to mechanical field. Link this platform to their server and website using OpenEDX and Web designing skills.",
            bulletPoints: [
                "Build the basic website using the HTML, CSS, jQuery and JavaScript.",
                "Upload the content they are providing and 3D mechanical designs to their web platform and implement them as a learner using OpenEDX.",
                "Link the web platform to company's website and server that improves learning experience.",
                "Build mechanical 3D models using Blender and upload them on website."
            ],
            technologies: ["HTML", "CSS", "jQuery", "JavaScript", "OpenEDX", "Blender"],
            color: "#4A90E2"
        },
        {
            id: 2,
            title: "DXC Technology",
            period: "March 2023 to October 2024",
            role: "Software Analyst II",
            description: "Automation and Bug fixes for Client application.",
            bulletPoints: [
                "Automation – Working extensively with Eclipse IDE and Selenium Java to develop and execute test scripts. Automate repetitive task using Selenium Java and improve testing efficiency and accuracy.",
                "Issue resolution – Resolved customer tickets from client database to fixes bug, reduced ticket count by identifying and addressing issues. Eliminate system gaps to enhance functionality and improve user experience.",
                "Contributed to process optimization by improving workflows and enhanced system functionality to meet expectation."
            ],
            technologies: ["Eclipse IDE", "Selenium", "Java", "Automation Testing"],
            color: "#50E3C2"
        },
        {
            id: 3,
            title: "DXC Technology",
            period: "November 2024 to Current",
            role: "Software Analyst III",
            description: "Test matrix design and execution for application quality assurance.",
            bulletPoints: [
                "Test Matrix Design - Develop a comprehensive test matrix that ensures complete coverage of all application scenarios and functionalities. This includes functional validation, performance assessment, and speed optimization to maintain optimal application efficiency and reliability.",
                "Test Execution and Defect Management – Execute test cases and document the outcomes, ensuring validation against expected functionality. Log test results in HPQC, and in case of any discrepancies or defects, promptly raise and manage them in JIRA for efficient tracking and resolution."
            ],
            technologies: ["HPQC", "JIRA", "Test Matrix Design", "Functional Testing" , "Manual Testing"],
            color: "#F5A623"
        }
    ];

    const styles = {
        section: {
            padding: '4rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'transparent',
        },
        title: {
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(to right, #4A90E2, #50E3C2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        timeline: {
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '1rem 0',
        },
        timelineItem: {
            position: 'relative',
            paddingLeft: '2rem',
            marginBottom: '3rem',
        },
        timelineDot: {
            position: 'absolute',
            left: '-8px',
            top: '1.5rem',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            zIndex: 1,
        },
        timelineLine: {
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '1px',
            background: '#4A90E2',
            opacity: 0.5,
        },
        card: {
            background: 'rgba(30, 41, 59, 0.7)',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(74, 144, 226, 0.1)',
        },
        cardHeader: {
            padding: '1.5rem',
            borderBottom: '1px solid rgba(74, 144, 226, 0.2)',
        },
        cardTitle: {
            fontSize: '1.4rem',
            margin: '0 0 0.5rem 0',
            fontWeight: 600,
            color: '#ffffff',
        },
        metaInfo: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.9rem',
            color: '#a3b3c9',
        },
        metaItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
        },
        cardBody: {
            padding: '1.5rem',
            color: '#e0e6ed',
        },
        description: {
            marginBottom: '1.5rem',
            lineHeight: 1.6,
        },
        expandButton: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(74, 144, 226, 0.1)',
            border: '1px solid rgba(74, 144, 226, 0.3)',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
            color: '#50E3C2',
        },
        expandedContent: {
            marginTop: '1.5rem',
            padding: '1rem 0',
            borderTop: '1px solid rgba(74, 144, 226, 0.2)',
        },
        bulletPoints: {
            paddingLeft: '1.5rem',
            marginBottom: '1.5rem',
        },
        bulletItem: {
            marginBottom: '0.75rem',
            lineHeight: 1.6,
        },
        techContainer: {
            marginTop: '1.5rem',
        },
        techTitle: {
            fontSize: '1.1rem',
            marginBottom: '0.75rem',
            color: '#ffffff',
        },
        techTags: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
        },
        techTag: {
            background: 'rgba(80, 227, 194, 0.15)',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: 500,
            color: '#50E3C2',
            border: '1px solid rgba(80, 227, 194, 0.3)',
        }
    };

    return (
        <section style={styles.section}>
            <motion.h1 
                style={styles.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Professional Experience
            </motion.h1>
            
            <div style={styles.timeline}>
                <div style={styles.timelineLine}></div>
                
                {projects.map((project) => (
                    <motion.div 
                        key={project.id}
                        style={styles.timelineItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{...styles.timelineDot, backgroundColor: project.color}}></div>
                        
                        <motion.div 
                            style={styles.card}
                            whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
                        >
                            <div style={{...styles.cardHeader, borderTop: `4px solid ${project.color}`}}>
                                <h2 style={styles.cardTitle}>{project.title}</h2>
                                <div style={styles.metaInfo}>
                                    <div style={styles.metaItem}>
                                        <FaCalendarAlt />
                                        <span>{project.period}</span>
                                    </div>
                                    <div style={styles.metaItem}>
                                        <FaBriefcase />
                                        <span>{project.role}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={styles.cardBody}>
                                <p style={styles.description}>{project.description}</p>
                                
                                <button 
                                    style={styles.expandButton}
                                    onClick={() => toggleExpand(project.id)}
                                >
                                    {expandedId === project.id ? (
                                        <>
                                            <FaChevronUp /> <span>Show Less</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaChevronDown /> <span>Show More</span>
                                        </>
                                    )}
                                </button>
                                
                                {expandedId === project.id && (
                                    <motion.div 
                                        style={styles.expandedContent}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 style={styles.techTitle}>Key Responsibilities:</h3>
                                        <ul style={styles.bulletPoints}>
                                            {project.bulletPoints.map((point, index) => (
                                                <li key={index} style={styles.bulletItem}>{point}</li>
                                            ))}
                                        </ul>
                                        
                                        <div style={styles.techContainer}>
                                            <h3 style={styles.techTitle}>Technologies Used:</h3>
                                            <div style={styles.techTags}>
                                                {project.technologies.map((tech, index) => (
                                                    <span key={index} style={styles.techTag}>{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Project;