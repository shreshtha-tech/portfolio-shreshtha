// Portfolio Configuration File
// This file contains all the configurable data for easy editing

const portfolioConfig = {
    // Personal Information
    personalInfo: {
        name: "Shreshtha Gupta",
        title: "CS-AIML Student & Full Stack Developer",
        location: "Kanpur, Uttar Pradesh",
        phone: "+91-9118600339",
        email: "gshreshtha7698@gmail.com", // Main contact email
        techEmail: "sg26.tech@gmail.com", // Alternative email
        linkedin: "shreshtha-gupta",
        github: "Shreshtha-gupta",
        
        // Profile description
        profile: "Final-year B.Tech student in CS-AIML with a strong foundation in full-stack web development. Passionate about building real-world solutions and constantly expanding technical horizons through projects and certifications."
    },
    
    // Education Details
    education: [
        {
            institution: "Pranveer Singh Institute of Technology",
            degree: "B.Tech CS-AIML",
            duration: "Dec 2022 – July 2026",
            percentage: "70.0%",
            location: "Kanpur, Uttar Pradesh",
            coursework: [
                "Data Structures & Algorithms",
                "Machine Learning",
                "Database Management System (DBMS)",
                "Artificial Intelligence",
                "Backend with Django",
                "Javascript",
                "UI/UX using Figma"
            ]
        },
        {
            institution: "Mercy Memorial School",
            degree: "ISC - Class 12",
            duration: "2021",
            percentage: "84.4%",
            location: "Kanpur, Uttar Pradesh"
        },
        {
            institution: "Mercy Memorial School",
            degree: "ICSE - Class 10", 
            duration: "2019",
            percentage: "80%",
            location: "Kanpur, Uttar Pradesh"
        }
    ],
    
    // Technical Skills
    skills: {
        "Programming Languages": [
            "C++", "Python (NumPy, Pandas)", "Java", "SQL", 
            "Go", "HTML", "CSS", "JavaScript"
        ],
        "Web Frameworks": [
            "ReactJS", "Node.js", "Express.js", "Django", "Tailwind CSS"
        ],
        "Tools & Platforms": [
            "Git", "GitHub", "Docker", "Postman", "Jupyter Notebook", 
            "Figma", "VS Code", "PyCharm"
        ],
        "Operating Systems": [
            "Linux", "Windows", "MacOS", "Ubuntu"
        ],
        "Libraries & Technologies": [
            "NumPy", "Pandas", "Machine Learning", "AI", 
            "NLP", "DBMS", "Data Structures & Algorithms"
        ]
    },
    
    // Projects
    projects: [
        {
            id: 1,
            name: "DataDrill",
            technologies: ["Go-lang", "Web Scraping", "Concurrency"],
            year: "2023",
            description: "Built a web scraper in Go to extract structured data from dynamic websites, leveraging goroutines for fast and concurrent processing. Using Go to extract and parse data from dynamic websites. Utilized goroutines for efficient concurrency and faster data retrieval.",
            features: [
                "Dynamic website data extraction",
                "Concurrent processing with goroutines", 
                "Structured data parsing",
                "Fast and efficient data retrieval"
            ],
            github: "https://github.com/Shreshtha-gupta/DataDrill", // Update with actual link
            demo: "#", // Update with actual demo link
            icon: "fas fa-spider"
        },
        {
            id: 2,
            name: "CogniMate",
            technologies: ["Tailwind CSS", "NLP", "Machine Learning", "Gemini API"],
            year: "2024", 
            description: "Developed an intelligent chatbot using NLP and machine learning, enabling real-time user interaction, task automation, and personalized responses. Implemented by integrating Gemini API for advanced language understanding, enabling dynamic, context-aware conversations and real-time user support.",
            features: [
                "Real-time user interaction",
                "Task automation capabilities",
                "Personalized responses",
                "Gemini API integration",
                "Context-aware conversations"
            ],
            github: "https://github.com/Shreshtha-gupta/CogniMate", // Update with actual link
            demo: "#", // Update with actual demo link
            icon: "fas fa-robot"
        }
    ],
    
    // Certifications
    certifications: [
        {
            name: "AWS Cloud Technical Essentials",
            provider: "Coursera",
            year: "2024",
            credential: "#" // Add credential link if available
        },
        {
            name: "HTML, CSS, JavaScript Bootcamp, Python",
            provider: "Infosys Springboard", 
            year: "2024",
            credential: "#"
        },
        {
            name: "Programming in Python Course",
            provider: "Coursera",
            year: "2024",
            credential: "#"
        },
        {
            name: "TCS iON Career Edge – Young Professional",
            provider: "TCS",
            year: "2024",
            credential: "#"
        },
        {
            name: "AWS Cloud Practitioner Essentials",
            provider: "AWS",
            year: "2024", 
            credential: "#"
        },
        {
            name: "Complete Web Development Course",
            provider: "Udemy",
            year: "2024",
            credential: "#"
        }
    ],
    
    // Contact Settings
    contactSettings: {
        primaryEmail: "gshreshtha7698@gmail.com",
        enablePhoneVerification: true,
        requiredFields: ["name", "email", "phone", "subject", "message"],
        
        // Email templates
        emailTemplates: {
            subject: "Portfolio Contact: {{subject}}",
            body: `
Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from Portfolio Contact Form
Timestamp: {{timestamp}}
            `
        },
        
        // Phone validation settings
        phoneValidation: {
            countryCode: "+91",
            pattern: /^(\+91|91|0)?[6789]\d{9}$/,
            format: "Indian mobile number"
        }
    },
    
    // Social Media Links
    socialMedia: {
        github: "https://github.com/Shreshtha-gupta",
        linkedin: "https://linkedin.com/in/shreshtha-gupta",
        email: "mailto:gshreshtha7698@gmail.com",
        phone: "tel:+919118600339",
        
        // Additional social media (uncomment and update as needed)
        // twitter: "https://twitter.com/your_handle",
        // instagram: "https://instagram.com/your_handle",
        // youtube: "https://youtube.com/your_channel",
    },
    
    // Theme Settings
    theme: {
        primaryColor: "#8b5cf6", // Purple
        secondaryColor: "#6366f1", // Indigo
        accentColor: "#ec4899", // Pink
        warningColor: "#f59e0b", // Amber
        successColor: "#10b981", // Emerald
        errorColor: "#ef4444", // Red
        
        // Gradient combinations
        gradients: {
            primary: "linear-gradient(45deg, #6366f1, #8b5cf6)",
            secondary: "linear-gradient(45deg, #8b5cf6, #ec4899)", 
            accent: "linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899, #f59e0b)",
            background: "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #0c0c0c 100%)"
        }
    },
    
    // Animation Settings
    animations: {
        loadingDuration: 3000, // Loading screen duration in ms
        typingSpeed: 100, // Typing animation speed in ms
        scrollOffset: 80, // Navbar height offset for smooth scrolling
        
        // Animation delays
        staggerDelay: 100, // Delay between animated elements
        fadeInDuration: 800, // Fade in animation duration
    },
    
    // Feature Flags
    features: {
        particleBackground: false, // Enable/disable particle animation
        themeToggle: false, // Enable/disable theme toggle
        progressBar: true, // Show scroll progress bar
        copyEmailOnClick: true, // Copy email to clipboard on click
        enhancedAnimations: true, // Enhanced scroll animations
        formValidation: true, // Real-time form validation
        phoneFormatting: true, // Auto-format phone numbers
    },
    
    // SEO Settings
    seo: {
        title: "Shreshtha Gupta - Full Stack Developer & CS-AIML Student",
        description: "Portfolio of Shreshtha Gupta, a passionate CS-AIML student and full-stack developer from Kanpur, specializing in web development, machine learning, and artificial intelligence.",
        keywords: [
            "Shreshtha Gupta", "Full Stack Developer", "CS-AIML", 
            "Web Developer", "Machine Learning", "Artificial Intelligence",
            "React", "Node.js", "Python", "Go", "Portfolio"
        ],
        author: "Shreshtha Gupta",
        og: {
            type: "website",
            url: "https://your-portfolio-url.com", // Update with actual URL
            image: "https://your-portfolio-url.com/og-image.jpg" // Add OG image
        }
    },
    
    // Resume Settings
    resumeSettings: {
        filename: "Shreshtha_Gupta_Resume.pdf",
        sections: [
            "profile", "education", "skills", "projects", 
            "certifications", "extracurricular"
        ],
        
        // Additional resume data
        extracurricular: [
            "Actively participated in national-level hackathons and competitive programming contests",
            "Volunteered at tech community events by organizing and coordinating technical workshops and seminars"
        ]
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}

// Make available globally for browser usage
if (typeof window !== 'undefined') {
    window.portfolioConfig = portfolioConfig;
}

// Helper functions for configuration usage
const configHelpers = {
    // Get skill by category
    getSkillsByCategory(category) {
        return portfolioConfig.skills[category] || [];
    },
    
    // Get project by ID
    getProjectById(id) {
        return portfolioConfig.projects.find(project => project.id === id);
    },
    
    // Get certification by name
    getCertificationByName(name) {
        return portfolioConfig.certifications.find(cert => cert.name === name);
    },
    
    // Get theme color
    getThemeColor(colorName) {
        return portfolioConfig.theme[colorName] || portfolioConfig.theme.primaryColor;
    },
    
    // Check if feature is enabled
    isFeatureEnabled(featureName) {
        return portfolioConfig.features[featureName] || false;
    },
    
    // Get email template
    getEmailTemplate(templateName) {
        return portfolioConfig.contactSettings.emailTemplates[templateName] || '';
    },
    
    // Format email template with data
    formatEmailTemplate(templateName, data) {
        let template = this.getEmailTemplate(templateName);
        
        // Replace placeholders with actual data
        Object.keys(data).forEach(key => {
            const placeholder = `{{${key}}}`;
            template = template.replace(new RegExp(placeholder, 'g'), data[key]);
        });
        
        // Add timestamp
        template = template.replace('{{timestamp}}', new Date().toISOString());
        
        return template;
    },
    
    // Validate phone number using config pattern
    validatePhone(phoneNumber) {
        const pattern = portfolioConfig.contactSettings.phoneValidation.pattern;
        const cleanPhone = phoneNumber.replace(/\D/g, '');
        return pattern.test(cleanPhone);
    }
};

// Make helpers available globally
if (typeof window !== 'undefined') {
    window.configHelpers = configHelpers;
}