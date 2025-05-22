import React, { useState, useEffect } from 'react';
import '../components/About.css';
import Bio from './Bio'; 
import Skills from './Skills';
import Education from './Education';
import Interest from './Interest';
import { FaUser, FaCode, FaGraduationCap, FaGamepad, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const About = () => {
    const [activeSection, setActiveSection] = useState('personal');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile/tablet
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            setSidebarOpen(window.innerWidth > 768);
        };
        
        // Initial check
        checkIfMobile();
        
        // Add resize listener
        window.addEventListener('resize', checkIfMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="about-container">
            <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-item" onClick={() => setActiveSection('personal')}>
                    <FaUser className="sidebar-icon" />
                    <span>Bio</span>
                </div>
                <div className="sidebar-item" onClick={() => setActiveSection('skills')}>
                    <FaCode className="sidebar-icon" />
                    <span>Skills</span>
                </div>
                <div className="sidebar-item" onClick={() => setActiveSection('education')}>
                    <FaGraduationCap className="sidebar-icon" />
                    <span>Education</span>
                </div>
                <div className="sidebar-item" onClick={() => setActiveSection('interests')}>
                    <FaGamepad className="sidebar-icon" />
                    <span>Interests</span>
                </div>
            </div>
            
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                {sidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
            </div>
            
            <div className="vertical-line-container">
                <div className="vertical-line"></div>
            </div>
            
            <div className={`about-content ${sidebarOpen ? '' : 'expanded'}`}>
                {/* Content will change based on active section */}
                {activeSection === 'personal' && (
                    <div className="section-content">
                        <Bio /> {/* Render the Bio component here */}
                    </div>
                )}
                
                {activeSection === 'skills' && (
                    <div className="section-content">
                        <Skills /> 
                    </div>
                )}
                
                {activeSection === 'education' && (
                    <div className="section-content">
                        <Education />
                    </div>
                )}
                
                {activeSection === 'interests' && (
                    <div className="section-content">
                        <Interest /> 
                        {/* Add your interests here */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;