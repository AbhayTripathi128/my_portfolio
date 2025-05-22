import React, { useState, useEffect, useRef } from 'react';
import '../components/Education.css'; // Import your CSS file for styling

const Education = () => {
    const [animate, setAnimate] = useState(false);
    const sectionRef = useRef(null);
    
    useEffect(() => {
        // Use Intersection Observer for better animation triggering
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimate(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section className="education-section" ref={sectionRef}>
            <div className="container">
                <h2 className={`section-title ${animate ? 'animate' : ''}`}>
                    <span className="accent">Educational</span> Background
                </h2>
                
                <div className="education-timeline">
                    <div className={`education-card ${animate ? 'animate-1' : ''}`}>
                        <div className="card-content">
                            <div className="education-year">2018-2022</div>
                            <h3 className="institution">MITWPU, Pune</h3>
                            <p className="degree">Bachelor's Degree</p>
                            <div className="score">
                                <span className="highlight">CGPA - 9.1</span>
                            </div>
                            <p className="description">
                                Completed my undergraduate studies with academic excellence, developing strong
                                knowledge in core subjects and practical applications.
                            </p>
                        </div>
                        <div className="card-decoration"></div>
                    </div>

                    <div className={`education-card ${animate ? 'animate-2' : ''}`}>
                        <div className="card-content">
                            <div className="education-year">2018</div>
                            <h3 className="institution">Heliger Borden Education Center</h3>
                            <p className="degree">XIIth Science</p>
                            <div className="score">
                                <span className="highlight">70%</span>
                            </div>
                            <p className="description">
                                Built a strong foundation in science with focus on developing analytical and
                                problem-solving skills essential for higher education.
                            </p>
                        </div>
                        <div className="card-decoration"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;