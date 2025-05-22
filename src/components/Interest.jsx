import React, { useState, useRef } from 'react';

const Interest = () => {
    const [activeInterest, setActiveInterest] = useState(null);
    const timeoutRef = useRef(null);

    const styles = {
        container: {
            padding: '10px 20px', // Reduced top padding from 80px to 40px
            maxWidth: '1200px',
            margin: '0 auto',
            background: '#011627',
            color: '#E5E9F0',
        },
        title: {
            fontSize: '2.5rem',
            textAlign: 'center',
            margin: '0 0 10px',
            background: 'linear-gradient(90deg, #43D9AD, #4D5BCE)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // Add text shadow for better visibility
            textShadow: '0 0 2px rgba(67, 217, 173, 0.3)',
            // Adding a fallback color in case the gradient doesn't render
            color: '#43D9AD',
            fontWeight: 'bold',
            position: 'relative',
        },
        subtitle: {
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#607B96',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 40px',
        },
        interestsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px',
        },
        interestCard: (isActive, color) => ({
            backgroundColor: 'rgba(30, 45, 61, 0.3)',
            borderRadius: '12px',
            padding: '30px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            borderLeft: `4px solid ${color}`,
            boxShadow: isActive 
                ? `0 10px 20px rgba(0,0,0,0.3), 0 6px 6px rgba(0,0,0,0.2), 0 0 0 3px ${color}22` 
                : '0 4px 6px rgba(0,0,0,0.2)',
            transform: isActive ? 'translateY(-5px)' : 'none',
            backdropFilter: 'blur(4px)',
            border: '1px solid #1E2D3D',
        }),
        icon: (color) => ({
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            fontSize: '1.8rem',
            backgroundColor: color,
        }),
        interestTitle: {
            fontSize: '1.4rem',
            marginBottom: '15px',
            fontWeight: '600',
            color: '#E5E9F0',
        },
        description: (isActive) => ({
            color: '#607B96',
            lineHeight: '1.6',
            maxHeight: isActive ? '200px' : '0',
            opacity: isActive ? '1' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease, opacity 0.5s ease, margin-top 0.3s ease',
            marginTop: isActive ? '15px' : '0',
        }),
    };

    const interests = [
        {
            id: 1,
            title: "Traveling",
            icon: "🌍",
            description: "Exploring new cultures, cuisines, and landscapes around the world. Each journey is an opportunity to gain new perspectives and create lasting memories.",
            color: "#4ECDC4"
        },
        {
            id: 2,
            title: "Learning New Technologies",
            icon: "💻",
            description: "Constantly expanding my technical knowledge by exploring emerging technologies, frameworks, and tools that shape the future of digital innovation.",
            color: "#FF6B6B"
        },
        {
            id: 3,
            title: "Coding",
            icon: "⌨️",
            description: "Building and creating through code is both my profession and passion. I enjoy solving complex problems and bringing ideas to life through programming.",
            color: "#FFE66D"
        },
        {
            id: 4,
            title: "Music",
            icon: "🎵",
            description: "Whether it's listening to my favorite playlists while coding or playing an instrument, music helps me stay focused and creative.",
            color: "#8A2BE2"
        },
        {
            id: 5,
            title: "Watching Movies",
            icon: "🎬",
            description: "Exploring futuristic worlds, advanced technologies, and thought-provoking concepts through sci-fi cinema. I enjoy stories that challenge our understanding of reality and what's possible.",
            color: "#1A535C"
        }
    ];

    const toggleInterest = (id) => {
        setActiveInterest(activeInterest === id ? null : id);
    };

    const handleMouseEnter = (id) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        // Set a small delay before activating
        timeoutRef.current = setTimeout(() => {
            setActiveInterest(id);
        }, 100);
    };

    const handleMouseLeave = () => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        // Set a small delay before deactivating
        timeoutRef.current = setTimeout(() => {
            setActiveInterest(null);
        }, 300);
    };

    return (
        <section id="interests" style={{ 
            background: '#011627', 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'flex-start', // Changed from 'center' to 'flex-start' to align at the top
            justifyContent: 'center',
            paddingTop: '40px' // Added top padding to give some space from the top
        }}>
            <div style={styles.container}>
                <h2 style={styles.title}>Personal Interests</h2>
                <p style={styles.subtitle}>
                    Beyond coding, here are some things that inspire and drive me.
                </p>
                
                <div style={styles.interestsGrid}>
                    {interests.map((interest) => (
                        <div 
                            key={interest.id}
                            style={styles.interestCard(activeInterest === interest.id, interest.color)}
                            onClick={() => toggleInterest(interest.id)}
                            onMouseEnter={() => handleMouseEnter(interest.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div style={styles.icon(interest.color)}>
                                <span>{interest.icon}</span>
                            </div>
                            <h3 style={styles.interestTitle}>{interest.title}</h3>
                            <div style={styles.description(activeInterest === interest.id)}>
                                <p>{interest.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interest;