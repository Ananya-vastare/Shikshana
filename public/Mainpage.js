window.onload = function () {
    console.log("Mainpage.html loaded. LoggedIn =", sessionStorage.getItem("loggedIn"));
    if (sessionStorage.getItem("loggedIn") !== "true") {
        alert("You must log in first.");
        window.location.href = "login.html";
    }
};
// Optionally, you can clear the session on logout
function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.assign("login.html");
}
function generateRoadmap() {
    const input = document.getElementById('goalInput').value.trim()
    const errorMsg = document.getElementById('errorMsg')
    const roadmapContainer = document.getElementById('roadmapContainer')
    const roadmapTitle = document.getElementById('roadmapTitle')
    const roadmapSteps = document.getElementById('roadmapSteps')

    if (!input) {
        errorMsg.classList.remove('hidden')
        roadmapContainer.classList.add('hidden')
        return
    }

    errorMsg.classList.add('hidden')

    let roadmap = []
    const goalInput = input.toLowerCase()

    if (goalInput.includes('learn') || goalInput.includes('full stack')) {
        roadmap = [
            { id: 1, title: 'Learn Fundamentals', description: 'Master HTML, CSS, JavaScript and basic programming concepts', duration: '4 weeks' },
            { id: 2, title: 'Frontend Framework', description: 'Learn React/Angular/Vue and state management', duration: '6 weeks' },
            { id: 3, title: 'Backend Development', description: 'Learn Node.js, Express, databases (SQL/NoSQL)', duration: '6 weeks' },
            { id: 4, title: 'Build Projects', description: 'Create full-stack applications with frontend and backend', duration: '8 weeks' },
            { id: 5, title: 'DevOps Basics', description: 'Learn deployment, CI/CD, Docker basics', duration: '4 weeks' }
        ]
    }
    else if (goalInput.toLowerCase().includes('frontend')) {
        roadmap = [
            { id: 1, title: 'HTML/CSS Mastery', description: 'Learn semantic HTML and advanced CSS techniques', duration: '3 weeks' },
            { id: 2, title: 'JavaScript Deep Dive', description: 'Master JavaScript fundamentals and ES6+ features', duration: '5 weeks' },
            { id: 3, title: 'Framework Specialization', description: 'Become proficient in React, Angular or Vue', duration: '6 weeks' },
            { id: 4, title: 'State Management', description: 'Learn Redux, Context API or Vuex', duration: '3 weeks' },
            { id: 5, title: 'Build Portfolio', description: 'Create 3-5 impressive frontend projects', duration: '6 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('backend')) {
        roadmap = [
            { id: 1, title: 'Programming Fundamentals', description: 'Master core programming concepts in Python/Java/JavaScript', duration: '4 weeks' },
            { id: 2, title: 'Server-Side Framework', description: 'Learn Express (Node), Django (Python) or Spring Boot (Java)', duration: '6 weeks' },
            { id: 3, title: 'Database Mastery', description: 'Learn SQL and NoSQL databases', duration: '5 weeks' },
            { id: 4, title: 'API Development', description: 'Build RESTful and GraphQL APIs', duration: '4 weeks' },
            { id: 5, title: 'Authentication & Security', description: 'Implement JWT, OAuth and security best practices', duration: '3 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('mobile')) {
        roadmap = [
            { id: 1, title: 'Choose Platform', description: 'Decide between iOS (Swift), Android (Kotlin) or Cross-platform (Flutter/React Native)', duration: '1 week' },
            { id: 2, title: 'Learn Fundamentals', description: 'Master the chosen platform/language fundamentals', duration: '6 weeks' },
            { id: 3, title: 'UI/UX for Mobile', description: 'Learn mobile design principles and implementation', duration: '4 weeks' },
            { id: 4, title: 'State Management', description: 'Learn platform-specific state management solutions', duration: '3 weeks' },
            { id: 5, title: 'Publish First App', description: 'Complete and publish an app to app stores', duration: '5 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('data analyst')) {
        roadmap = [
            { id: 1, title: 'Learn SQL', description: 'Master database querying with SQL', duration: '4 weeks' },
            { id: 2, title: 'Data Visualization', description: 'Learn tools like Tableau, PowerBI or matplotlib', duration: '5 weeks' },
            { id: 3, title: 'Statistics Fundamentals', description: 'Learn descriptive and inferential statistics', duration: '6 weeks' },
            { id: 4, title: 'Python/R for Analysis', description: 'Master pandas (Python) or tidyverse (R)', duration: '6 weeks' },
            { id: 5, title: 'Build Portfolio', description: 'Complete 3-5 data analysis projects', duration: '8 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('data scientist')) {
        roadmap = [
            { id: 1, title: 'Math Fundamentals', description: 'Brush up on linear algebra, calculus and statistics', duration: '8 weeks' },
            { id: 2, title: 'Programming Skills', description: 'Master Python and data science libraries (NumPy, pandas)', duration: '6 weeks' },
            { id: 3, title: 'Machine Learning Basics', description: 'Learn supervised and unsupervised learning', duration: '8 weeks' },
            { id: 4, title: 'Advanced Topics', description: 'Deep learning, NLP, computer vision', duration: '12 weeks' },
            { id: 5, title: 'Real-world Projects', description: 'Work on Kaggle competitions or real datasets', duration: '10 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('machine learning')) {
        roadmap = [
            { id: 1, title: 'Math Preparation', description: 'Linear algebra, probability, statistics', duration: '6 weeks' },
            { id: 2, title: 'Python Mastery', description: 'Learn Python and ML libraries (scikit-learn, TensorFlow)', duration: '5 weeks' },
            { id: 3, title: 'Core ML Algorithms', description: 'Learn regression, classification, clustering', duration: '8 weeks' },
            { id: 4, title: 'Model Evaluation', description: 'Learn metrics, validation techniques', duration: '4 weeks' },
            { id: 5, title: 'Specialization', description: 'Choose NLP, CV, or other specialization', duration: '10 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('devops')) {
        roadmap = [
            { id: 1, title: 'Learn Linux', description: 'Master command line and shell scripting', duration: '4 weeks' },
            { id: 2, title: 'Cloud Fundamentals', description: 'Learn AWS/Azure/GCP basics', duration: '5 weeks' },
            { id: 3, title: 'CI/CD Pipelines', description: 'Master Jenkins, GitHub Actions', duration: '4 weeks' },
            { id: 4, title: 'Containerization', description: 'Learn Docker and Kubernetes', duration: '6 weeks' },
            { id: 5, title: 'Infrastructure as Code', description: 'Learn Terraform, Ansible', duration: '5 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('cybersecurity')) {
        roadmap = [
            { id: 1, title: 'Networking Basics', description: 'Learn TCP/IP, DNS, HTTP protocols', duration: '5 weeks' },
            { id: 2, title: 'Operating Systems', description: 'Understand Windows/Linux security', duration: '4 weeks' },
            { id: 3, title: 'Security Fundamentals', description: 'Learn encryption, authentication, vulnerabilities', duration: '6 weeks' },
            { id: 4, title: 'Tools & Techniques', description: 'Master Wireshark, Metasploit, Burp Suite', duration: '8 weeks' },
            { id: 5, title: 'Certifications', description: 'Prepare for CEH, CISSP or Security+', duration: '10 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('ui/ux') || goalInput.toLowerCase().includes('designer')) {
        roadmap = [
            { id: 1, title: 'Design Principles', description: 'Learn color theory, typography, layout', duration: '5 weeks' },
            { id: 2, title: 'Tools Mastery', description: 'Master Figma, Adobe XD, Sketch', duration: '6 weeks' },
            { id: 3, title: 'User Research', description: 'Learn personas, user journeys, testing', duration: '4 weeks' },
            { id: 4, title: 'Prototyping', description: 'Create interactive prototypes', duration: '4 weeks' },
            { id: 5, title: 'Build Portfolio', description: 'Create 3-5 complete design projects', duration: '8 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('graphic design')) {
        roadmap = [
            { id: 1, title: 'Design Fundamentals', description: 'Learn composition, color theory, typography', duration: '6 weeks' },
            { id: 2, title: 'Adobe Suite', description: 'Master Photoshop, Illustrator, InDesign', duration: '8 weeks' },
            { id: 3, title: 'Branding', description: 'Learn logo design, visual identity', duration: '5 weeks' },
            { id: 4, title: 'Print vs Digital', description: 'Understand different design mediums', duration: '4 weeks' },
            { id: 5, title: 'Specialization', description: 'Choose packaging, motion graphics, etc.', duration: '10 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('video edit')) {
        roadmap = [
            { id: 1, title: 'Software Choice', description: 'Learn Premiere Pro, Final Cut or DaVinci Resolve', duration: '4 weeks' },
            { id: 2, title: 'Editing Basics', description: 'Master cutting, transitions, pacing', duration: '6 weeks' },
            { id: 3, title: 'Color Grading', description: 'Learn color correction and grading', duration: '5 weeks' },
            { id: 4, title: 'Motion Graphics', description: 'Basic After Effects and animation', duration: '6 weeks' },
            { id: 5, title: 'Build Reel', description: 'Create a professional demo reel', duration: '8 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('singer') || goalInput.toLowerCase().includes('vocal')) {
        roadmap = [
            { id: 1, title: 'Vocal Foundations', description: 'Learn proper breathing and posture', duration: '4 weeks' },
            { id: 2, title: 'Ear Training', description: 'Develop pitch recognition and control', duration: '6 weeks' },
            { id: 3, title: 'Vocal Exercises', description: 'Daily warmups and technique drills', duration: 'Ongoing' },
            { id: 4, title: 'Repertoire Building', description: 'Learn 5-10 songs in your range', duration: '8 weeks' },
            { id: 5, title: 'Performance Skills', description: 'Practice stage presence and mic technique', duration: '6 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('music producer')) {
        roadmap = [
            { id: 1, title: 'DAW Mastery', description: 'Learn Ableton, FL Studio or Logic Pro', duration: '6 weeks' },
            { id: 2, title: 'Music Theory', description: 'Learn chords, scales, song structure', duration: '8 weeks' },
            { id: 3, title: 'Sound Design', description: 'Create and manipulate sounds', duration: '6 weeks' },
            { id: 4, title: 'Mixing Basics', description: 'Learn EQ, compression, effects', duration: '8 weeks' },
            { id: 5, title: 'Release Music', description: 'Complete and distribute first track', duration: '10 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('photographer')) {
        roadmap = [
            { id: 1, title: 'Camera Basics', description: 'Master exposure, ISO, shutter speed', duration: '4 weeks' },
            { id: 2, title: 'Composition', description: 'Learn rule of thirds, leading lines', duration: '5 weeks' },
            { id: 3, title: 'Lighting', description: 'Understand natural and artificial light', duration: '6 weeks' },
            { id: 4, title: 'Editing', description: 'Learn Lightroom/Photoshop basics', duration: '5 weeks' },
            { id: 5, title: 'Build Portfolio', description: 'Create cohesive photo series', duration: '10 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('writer') || goalInput.toLowerCase().includes('author')) {
        roadmap = [
            { id: 1, title: 'Reading', description: 'Read extensively in your genre', duration: 'Ongoing' },
            { id: 2, title: 'Writing Habit', description: 'Establish daily writing routine', duration: '4 weeks' },
            { id: 3, title: 'Craft Development', description: 'Study plot, character, dialogue', duration: '8 weeks' },
            { id: 4, title: 'First Draft', description: 'Complete manuscript/collection', duration: 'Varies' },
            { id: 5, title: 'Editing', description: 'Revise and polish your work', duration: '6 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('animator')) {
        roadmap = [
            { id: 1, title: 'Principles of Animation', description: 'Learn squash/stretch, anticipation', duration: '6 weeks' },
            { id: 2, title: 'Software Choice', description: 'Master Maya, Blender or After Effects', duration: '8 weeks' },
            { id: 3, title: 'Storyboarding', description: 'Learn visual storytelling', duration: '5 weeks' },
            { id: 4, title: 'Character Animation', description: 'Master walk cycles and expressions', duration: '10 weeks' },
            { id: 5, title: 'Demo Reel', description: 'Create professional animation portfolio', duration: '12 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('illustrator') || goalInput.toLowerCase().includes('digital art')) {
        roadmap = [
            { id: 1, title: 'Drawing Fundamentals', description: 'Learn perspective, anatomy, shading', duration: '10 weeks' },
            { id: 2, title: 'Digital Tools', description: 'Master Photoshop, Procreate or Illustrator', duration: '8 weeks' },
            { id: 3, title: 'Style Development', description: 'Experiment to find your voice', duration: '12 weeks' },
            { id: 4, title: 'Color Theory', description: 'Master color harmony and palettes', duration: '6 weeks' },
            { id: 5, title: 'Build Portfolio', description: 'Create 10-15 strong pieces', duration: '15 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('digital market')) {
        roadmap = [
            { id: 1, title: 'Fundamentals', description: 'Learn SEO, social media, email marketing', duration: '6 weeks' },
            { id: 2, title: 'Analytics', description: 'Master Google Analytics, Facebook Insights', duration: '5 weeks' },
            { id: 3, title: 'Content Creation', description: 'Learn copywriting and visual content', duration: '6 weeks' },
            { id: 4, title: 'Advertising', description: 'Understand Google/Facebook ads', duration: '5 weeks' },
            { id: 5, title: 'Campaign Management', description: 'Run complete marketing campaigns', duration: '8 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('product manager')) {
        roadmap = [
            { id: 1, title: 'Business Fundamentals', description: 'Learn basic economics and business models', duration: '5 weeks' },
            { id: 2, title: 'User Research', description: 'Master personas, user stories, JTBD', duration: '6 weeks' },
            { id: 3, title: 'Agile Methodologies', description: 'Learn Scrum, Kanban frameworks', duration: '4 weeks' },
            { id: 4, title: 'Roadmapping', description: 'Create product roadmaps and PRDs', duration: '5 weeks' },
            { id: 5, title: 'Metrics & Analytics', description: 'Learn KPIs and product analytics', duration: '6 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('entrepreneur') || goalInput.toLowerCase().includes('startup')) {
        roadmap = [
            { id: 1, title: 'Idea Validation', description: 'Research market and validate idea', duration: '4 weeks' },
            { id: 2, title: 'Business Plan', description: 'Create lean canvas/business model', duration: '5 weeks' },
            { id: 3, title: 'MVP Development', description: 'Build minimum viable product', duration: '8 weeks' },
            { id: 4, title: 'Funding Strategy', description: 'Explore bootstrapping vs investors', duration: '4 weeks' },
            { id: 5, title: 'Launch & Growth', description: 'Develop go-to-market strategy', duration: '12 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('business analyst')) {
        roadmap = [
            { id: 1, title: 'Business Fundamentals', description: 'Learn organizational structures', duration: '5 weeks' },
            { id: 2, title: 'Requirements Gathering', description: 'Master stakeholder interviews', duration: '6 weeks' },
            { id: 3, title: 'Process Modeling', description: 'Learn BPMN, flowcharts', duration: '4 weeks' },
            { id: 4, title: 'Data Analysis', description: 'Basic SQL and Excel skills', duration: '5 weeks' },
            { id: 5, title: 'Solution Evaluation', description: 'Learn cost-benefit analysis', duration: '4 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('sales')) {
        roadmap = [
            { id: 1, title: 'Product Knowledge', description: 'Master your product/service details', duration: '3 weeks' },
            { id: 2, title: 'Sales Process', description: 'Learn prospecting to closing', duration: '5 weeks' },
            { id: 3, title: 'Communication Skills', description: 'Develop active listening and persuasion', duration: '6 weeks' },
            { id: 4, title: 'CRM Tools', description: 'Master Salesforce or similar', duration: '3 weeks' },
            { id: 5, title: 'Negotiation', description: 'Learn win-win negotiation tactics', duration: '5 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('social media')) {
        roadmap = [
            { id: 1, title: 'Platform Knowledge', description: 'Understand each platform\'s strengths', duration: '4 weeks' },
            { id: 2, title: 'Content Strategy', description: 'Develop posting schedule and themes', duration: '5 weeks' },
            { id: 3, title: 'Community Building', description: 'Learn engagement strategies', duration: '6 weeks' },
            { id: 4, title: 'Analytics', description: 'Master platform insights', duration: '4 weeks' },
            { id: 5, title: 'Advertising', description: 'Learn paid social strategies', duration: '5 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('teacher') || goalInput.toLowerCase().includes('educator')) {
        roadmap = [
            { id: 1, title: 'Subject Mastery', description: 'Deepen knowledge in teaching area', duration: '8 weeks' },
            { id: 2, title: 'Pedagogy', description: 'Learn teaching methodologies', duration: '6 weeks' },
            { id: 3, title: 'Lesson Planning', description: 'Create engaging lesson plans', duration: '5 weeks' },
            { id: 4, title: 'Classroom Management', description: 'Develop discipline strategies', duration: '6 weeks' },
            { id: 5, title: 'Assessment', description: 'Learn effective evaluation methods', duration: '4 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('professor') || goalInput.toLowerCase().includes('academic')) {
        roadmap = [
            { id: 1, title: 'Research Focus', description: 'Identify research specialization', duration: '6 weeks' },
            { id: 2, title: 'Literature Review', description: 'Survey existing research', duration: '8 weeks' },
            { id: 3, title: 'Methodology', description: 'Develop research approach', duration: '6 weeks' },
            { id: 4, title: 'Writing', description: 'Produce academic papers', duration: '10 weeks' },
            { id: 5, title: 'Publishing', description: 'Submit to journals/conferences', duration: '12 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('public speaker')) {
        roadmap = [
            { id: 1, title: 'Content Development', description: 'Craft compelling messages', duration: '6 weeks' },
            { id: 2, title: 'Delivery Skills', description: 'Practice voice modulation, pacing', duration: '8 weeks' },
            { id: 3, title: 'Stage Presence', description: 'Work on body language', duration: '6 weeks' },
            { id: 4, title: 'Overcoming Fear', description: 'Practice in small groups', duration: '5 weeks' },
            { id: 5, title: 'First Talks', description: 'Deliver 5-10 minute presentations', duration: '8 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('career counselor')) {
        roadmap = [
            { id: 1, title: 'Assessment Tools', description: 'Learn personality/career tests', duration: '5 weeks' },
            { id: 2, title: 'Labor Market', description: 'Research job trends', duration: '4 weeks' },
            { id: 3, title: 'Coaching Skills', description: 'Develop active listening', duration: '6 weeks' },
            { id: 4, title: 'Resume Help', description: 'Learn resume best practices', duration: '4 weeks' },
            { id: 5, title: 'Interview Prep', description: 'Practice mock interviews', duration: '5 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('ngo') || goalInput.toLowerCase().includes('social worker')) {
        roadmap = [
            { id: 1, title: 'Cause Selection', description: 'Identify focus area', duration: '3 weeks' },
            { id: 2, title: 'Community Needs', description: 'Research local issues', duration: '5 weeks' },
            { id: 3, title: 'Volunteer', description: 'Gain field experience', duration: '6 weeks' },
            { id: 4, title: 'Fundraising', description: 'Learn grant writing', duration: '6 weeks' },
            { id: 5, title: 'Program Design', description: 'Develop intervention plans', duration: '8 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('fitness')) {
        roadmap = [
            { id: 1, title: 'Assessment', description: 'Evaluate current fitness level and set targets', duration: '1 week' },
            { id: 2, title: 'Establish Routine', description: 'Create a workout schedule and stick to it', duration: '2 weeks' },
            { id: 3, title: 'Nutrition Plan', description: 'Develop a healthy eating plan', duration: '3 weeks' },
            { id: 4, title: 'Progress Tracking', description: 'Monitor improvements and adjust plan', duration: 'Ongoing' }
        ];
    } else if (goalInput.toLowerCase().includes('chef') || goalInput.toLowerCase().includes('culinary')) {
        roadmap = [
            { id: 1, title: 'Knife Skills', description: 'Master basic cuts and techniques', duration: '4 weeks' },
            { id: 2, title: 'Cooking Methods', description: 'Learn dry/moist heat techniques', duration: '6 weeks' },
            { id: 3, title: 'Flavor Profiles', description: 'Understand balancing tastes', duration: '5 weeks' },
            { id: 4, title: 'Menu Planning', description: 'Create balanced menus', duration: '4 weeks' },
            { id: 5, title: 'Specialization', description: 'Choose cuisine or pastry focus', duration: '10 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('interior design')) {
        roadmap = [
            { id: 1, title: 'Design Principles', description: 'Learn space, light, color theory', duration: '6 weeks' },
            { id: 2, title: 'Materials', description: 'Understand different surfaces', duration: '5 weeks' },
            { id: 3, title: 'Software', description: 'Master SketchUp, AutoCAD', duration: '8 weeks' },
            { id: 4, title: 'Client Needs', description: 'Learn to interpret briefs', duration: '4 weeks' },
            { id: 5, title: 'Portfolio', description: 'Create 3-5 complete designs', duration: '10 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('journalist')) {
        roadmap = [
            { id: 1, title: 'Writing Skills', description: 'Master AP style and news writing', duration: '6 weeks' },
            { id: 2, title: 'Research', description: 'Develop investigative skills', duration: '5 weeks' },
            { id: 3, title: 'Interviewing', description: 'Learn questioning techniques', duration: '4 weeks' },
            { id: 4, title: 'Ethics', description: 'Understand media law and ethics', duration: '4 weeks' },
            { id: 5, title: 'Specialization', description: 'Choose news, features, etc.', duration: '8 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('financial advisor')) {
        roadmap = [
            { id: 1, title: 'Financial Basics', description: 'Learn markets, products', duration: '6 weeks' },
            { id: 2, title: 'Regulations', description: 'Understand compliance', duration: '5 weeks' },
            { id: 3, title: 'Client Skills', description: 'Develop advisory approach', duration: '6 weeks' },
            { id: 4, title: 'Planning Tools', description: 'Learn financial modeling', duration: '8 weeks' },
            { id: 5, title: 'Certifications', description: 'Prepare for CFP or similar', duration: '12 weeks' }
        ];
    } else if (goalInput.toLowerCase().includes('life coach')) {
        roadmap = [
            { id: 1, title: 'Active Listening', description: 'Develop coaching presence', duration: '6 weeks' },
            { id: 2, title: 'Questioning', description: 'Learn powerful questions', duration: '5 weeks' },
            { id: 3, title: 'Frameworks', description: 'Study coaching models', duration: '6 weeks' },
            { id: 4, title: 'Niche', description: 'Choose specialization area', duration: '4 weeks' },
            { id: 5, title: 'Certification', description: 'Get ICF or similar credential', duration: '10 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('mechanical engineer')) {
        roadmap = [
            { id: 1, title: 'Fundamentals', description: 'Master physics & engineering principles', duration: '8 weeks' },
            { id: 2, title: 'CAD & Design', description: 'Learn SolidWorks, AutoCAD, etc.', duration: '6 weeks' },
            { id: 3, title: 'Manufacturing', description: 'Understand machining & production processes', duration: '6 weeks' },
            { id: 4, title: 'Internship', description: 'Gain hands-on industry experience', duration: '10 weeks' },
            { id: 5, title: 'Certification', description: 'Get certified (FE, PE, etc.)', duration: '12 weeks' }
        ];
    }

    else if (goalInput.toLowerCase().includes('civil engineer')) {
        roadmap = [
            { id: 1, title: 'Structural Basics', description: 'Study materials & mechanics', duration: '7 weeks' },
            { id: 2, title: 'Construction Management', description: 'Learn project handling & site work', duration: '6 weeks' },
            { id: 3, title: 'Software Skills', description: 'Master AutoCAD, Revit, STAAD.Pro', duration: '8 weeks' },
            { id: 4, title: 'Internship', description: 'Hands-on site work and project execution', duration: '10 weeks' },
            { id: 5, title: 'Certification', description: 'Earn relevant professional credentials', duration: '12 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('robotics') || goalInput.toLowerCase().includes('robotics engineer')) {
        roadmap = [
            { id: 1, title: 'Basic Electronics', description: 'Learn circuits and components', duration: '6 weeks' },
            { id: 2, title: 'Programming Fundamentals', description: 'Master Python/C++ for robotics', duration: '8 weeks' },
            { id: 3, title: 'Mechanical Design', description: 'CAD and 3D modeling skills', duration: '10 weeks' },
            { id: 4, title: 'Control Systems', description: 'PID controllers and sensors', duration: '12 weeks' },
            { id: 5, title: 'AI Integration', description: 'Machine learning for robotics', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('aerospace') || goalInput.toLowerCase().includes('aerospace engineer')) {
        roadmap = [
            { id: 1, title: 'Aerodynamics Basics', description: 'Learn fluid dynamics principles', duration: '8 weeks' },
            { id: 2, title: 'Propulsion Systems', description: 'Study jet/rocket engines', duration: '10 weeks' },
            { id: 3, title: 'Materials Science', description: 'Aerospace-grade materials', duration: '12 weeks' },
            { id: 4, title: 'Flight Mechanics', description: 'Orbital dynamics and control', duration: '14 weeks' },
            { id: 5, title: 'Avionics', description: 'Aircraft electronics systems', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('chemical') || goalInput.toLowerCase().includes('chemical engineer')) {
        roadmap = [
            { id: 1, title: 'Thermodynamics', description: 'Chemical process energy', duration: '8 weeks' },
            { id: 2, title: 'Reaction Engineering', description: 'Kinetics and reactors', duration: '10 weeks' },
            { id: 3, title: 'Process Design', description: 'Flow diagrams and equipment', duration: '12 weeks' },
            { id: 4, title: 'Separation Techniques', description: 'Distillation/absorption', duration: '10 weeks' },
            { id: 5, title: 'Plant Safety', description: 'HAZOP and risk assessment', duration: '8 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('environmental') || goalInput.toLowerCase().includes('environmental scientist')) {
        roadmap = [
            { id: 1, title: 'Ecosystems', description: 'Biodiversity studies', duration: '6 weeks' },
            { id: 2, title: 'Pollution Control', description: 'Air/water/soil remediation', duration: '10 weeks' },
            { id: 3, title: 'Environmental Policy', description: 'Regulations and compliance', duration: '8 weeks' },
            { id: 4, title: 'Climate Science', description: 'Carbon footprint analysis', duration: '12 weeks' },
            { id: 5, title: 'GIS Applications', description: 'Geospatial mapping tools', duration: '10 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('biomedical') || goalInput.toLowerCase().includes('biomedical engineer')) {
        roadmap = [
            { id: 1, title: 'Anatomy Fundamentals', description: 'Human body systems', duration: '8 weeks' },
            { id: 2, title: 'Medical Devices', description: 'Pacemakers/imaging systems', duration: '12 weeks' },
            { id: 3, title: 'Biomaterials', description: 'Implants and prosthetics', duration: '10 weeks' },
            { id: 4, title: 'Regulatory Affairs', description: 'FDA/CE certification', duration: '8 weeks' },
            { id: 5, title: 'Neural Engineering', description: 'Brain-machine interfaces', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('accountant') || goalInput.toLowerCase().includes('cpa')) {
        roadmap = [
            { id: 1, title: 'Financial Accounting', description: 'GAAP principles', duration: '8 weeks' },
            { id: 2, title: 'Taxation', description: 'Income/corporate tax laws', duration: '10 weeks' },
            { id: 3, title: 'Auditing', description: 'Risk assessment procedures', duration: '12 weeks' },
            { id: 4, title: 'Management Accounting', description: 'Cost analysis', duration: '8 weeks' },
            { id: 5, title: 'ERP Systems', description: 'SAP/Oracle training', duration: '10 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('investment') || goalInput.toLowerCase().includes('analyst')) {
        roadmap = [
            { id: 1, title: 'Financial Markets', description: 'Stocks/bonds/derivatives', duration: '6 weeks' },
            { id: 2, title: 'Valuation Methods', description: 'DCF/Comparables', duration: '10 weeks' },
            { id: 3, title: 'Portfolio Theory', description: 'Modern portfolio management', duration: '12 weeks' },
            { id: 4, title: 'Economic Indicators', description: 'Macroeconomic analysis', duration: '8 weeks' },
            { id: 5, title: 'CFA Preparation', description: 'Chartered Financial Analyst', duration: '20 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('stock market') || goalInput.toLowerCase().includes('trader')) {
        roadmap = [
            { id: 1, title: 'Technical Analysis', description: 'Chart patterns/indicators', duration: '8 weeks' },
            { id: 2, title: 'Risk Management', description: 'Position sizing/stop-loss', duration: '6 weeks' },
            { id: 3, title: 'Algorithmic Trading', description: 'Python for trading bots', duration: '12 weeks' },
            { id: 4, title: 'Options Strategies', description: 'Straddles/strangles', duration: '10 weeks' },
            { id: 5, title: 'Market Psychology', description: 'Behavioral finance', duration: '8 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('banking') || goalInput.toLowerCase().includes('banking professional')) {
        roadmap = [
            { id: 1, title: 'Banking Operations', description: 'Retail/corporate banking', duration: '6 weeks' },
            { id: 2, title: 'Credit Analysis', description: 'Loan underwriting', duration: '10 weeks' },
            { id: 3, title: 'Risk Compliance', description: 'Basel III regulations', duration: '8 weeks' },
            { id: 4, title: 'Fintech Integration', description: 'Digital banking tools', duration: '12 weeks' },
            { id: 5, title: 'Wealth Management', description: 'Private banking services', duration: '14 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('economist') || goalInput.toLowerCase().includes('economic')) {
        roadmap = [
            { id: 1, title: 'Microeconomics', description: 'Supply/demand theory', duration: '8 weeks' },
            { id: 2, title: 'Macroeconomics', description: 'GDP/unemployment models', duration: '10 weeks' },
            { id: 3, title: 'Econometrics', description: 'Statistical modeling', duration: '12 weeks' },
            { id: 4, title: 'Policy Analysis', description: 'Fiscal/monetary impacts', duration: '10 weeks' },
            { id: 5, title: 'Development Economics', description: 'Global poverty studies', duration: '14 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('actuary') || goalInput.toLowerCase().includes('actuarial')) {
        roadmap = [
            { id: 1, title: 'Probability Theory', description: 'SOA Exam P prep', duration: '12 weeks' },
            { id: 2, title: 'Financial Mathematics', description: 'Exam FM syllabus', duration: '14 weeks' },
            { id: 3, title: 'Insurance Models', description: 'Life/health insurance', duration: '16 weeks' },
            { id: 4, title: 'Enterprise Risk', description: 'ERM frameworks', duration: '12 weeks' },
            { id: 5, title: 'Fellowship Exams', description: 'Specialization track', duration: '24 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('crypto') || goalInput.toLowerCase().includes('bitcoin')) {
        roadmap = [
            { id: 1, title: 'Blockchain Basics', description: 'Consensus mechanisms', duration: '6 weeks' },
            { id: 2, title: 'Technical Analysis', description: 'On-chain metrics', duration: '8 weeks' },
            { id: 3, title: 'DeFi Protocols', description: 'Yield farming/staking', duration: '10 weeks' },
            { id: 4, title: 'Smart Contracts', description: 'Solidity programming', duration: '12 weeks' },
            { id: 5, title: 'Regulatory Landscape', description: 'KYC/AML compliance', duration: '8 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('nurse') || goalInput.toLowerCase().includes('paramedic')) {
        roadmap = [
            { id: 1, title: 'Anatomy & Physiology', description: 'Human body systems', duration: '12 weeks' },
            { id: 2, title: 'Clinical Skills', description: 'Patient assessment', duration: '14 weeks' },
            { id: 3, title: 'Pharmacology', description: 'Medication administration', duration: '10 weeks' },
            { id: 4, title: 'Emergency Care', description: 'Trauma life support', duration: '16 weeks' },
            { id: 5, title: 'Specialization', description: 'ICU/ER/pediatric focus', duration: '20 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('doctor') || goalInput.toLowerCase().includes('mbbs') || goalInput.toLowerCase().includes('md')) {
        roadmap = [
            { id: 1, title: 'Pre-Medical', description: 'Biology/Chemistry foundation', duration: '24 weeks' },
            { id: 2, title: 'Medical School Core', description: 'Pathology/Pharmacology', duration: '36 weeks' },
            { id: 3, title: 'Clinical Rotations', description: 'Hospital specialties', duration: '48 weeks' },
            { id: 4, title: 'Residency', description: 'Specialty training', duration: '104 weeks' },
            { id: 5, title: 'Board Exams', description: 'USMLE/PLAB preparation', duration: '24 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('psychologist') || goalInput.toLowerCase().includes('therapist')) {
        roadmap = [
            { id: 1, title: 'Intro Psychology', description: 'Behavioral theories', duration: '8 weeks' },
            { id: 2, title: 'Abnormal Psych', description: 'Diagnostic criteria', duration: '12 weeks' },
            { id: 3, title: 'Counseling Techniques', description: 'CBT/DBT methods', duration: '14 weeks' },
            { id: 4, title: 'Assessment Tools', description: 'Psychometric testing', duration: '10 weeks' },
            { id: 5, title: 'Licensure Prep', description: 'State exam requirements', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('nutritionist') || goalInput.toLowerCase().includes('dietitian')) {
        roadmap = [
            { id: 1, title: 'Human Nutrition', description: 'Macro/micronutrients', duration: '8 weeks' },
            { id: 2, title: 'Medical Nutrition', description: 'Disease management', duration: '12 weeks' },
            { id: 3, title: 'Diet Planning', description: 'Meal customization', duration: '10 weeks' },
            { id: 4, title: 'Sports Nutrition', description: 'Performance diets', duration: '8 weeks' },
            { id: 5, title: 'Certification', description: 'RD exam preparation', duration: '14 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('physiotherapist') || goalInput.toLowerCase().includes('physical therapy')) {
        roadmap = [
            { id: 1, title: 'Musculoskeletal Anatomy', description: 'Joint/muscle systems', duration: '12 weeks' },
            { id: 2, title: 'Therapeutic Exercises', description: 'Rehab protocols', duration: '14 weeks' },
            { id: 3, title: 'Electrotherapy', description: 'Modality applications', duration: '10 weeks' },
            { id: 4, title: 'Neurological Rehab', description: 'Stroke recovery', duration: '16 weeks' },
            { id: 5, title: 'Clinical Internship', description: 'Hands-on practice', duration: '20 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('yoga') || goalInput.toLowerCase().includes('yoga instructor')) {
        roadmap = [
            { id: 1, title: 'Asana Foundation', description: 'Basic postures', duration: '6 weeks' },
            { id: 2, title: 'Pranayama', description: 'Breath control', duration: '8 weeks' },
            { id: 3, title: 'Anatomy for Yoga', description: 'Injury prevention', duration: '10 weeks' },
            { id: 4, title: 'Philosophy', description: 'Yoga sutras', duration: '12 weeks' },
            { id: 5, title: 'Teacher Training', description: '200-hour certification', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('healthcare data') || goalInput.toLowerCase().includes('medical analyst')) {
        roadmap = [
            { id: 1, title: 'Medical Terminology', description: 'ICD-10 coding', duration: '8 weeks' },
            { id: 2, title: 'SQL for Healthcare', description: 'EHR database queries', duration: '10 weeks' },
            { id: 3, title: 'Predictive Modeling', description: 'Patient outcome analysis', duration: '12 weeks' },
            { id: 4, title: 'HIPAA Compliance', description: 'Data security', duration: '6 weeks' },
            { id: 5, title: 'Visualization Tools', description: 'Tableau/Power BI', duration: '8 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('lawyer') || goalInput.toLowerCase().includes('advocate')) {
        roadmap = [
            { id: 1, title: 'Legal Research', description: 'Case law analysis', duration: '10 weeks' },
            { id: 2, title: 'Constitutional Law', description: 'Fundamental rights', duration: '12 weeks' },
            { id: 3, title: 'Civil Procedure', description: 'Court processes', duration: '14 weeks' },
            { id: 4, title: 'Specialization', description: 'Corporate/criminal law', duration: '16 weeks' },
            { id: 5, title: 'Bar Exam Prep', description: 'State-specific testing', duration: '20 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('judge') || goalInput.toLowerCase().includes('legal clerk')) {
        roadmap = [
            { id: 1, title: 'Judicial Process', description: 'Courtroom procedures', duration: '12 weeks' },
            { id: 2, title: 'Legal Writing', description: 'Opinion drafting', duration: '14 weeks' },
            { id: 3, title: 'Ethics', description: 'Judicial conduct', duration: '10 weeks' },
            { id: 4, title: 'Case Management', description: 'Docket control', duration: '8 weeks' },
            { id: 5, title: 'Appointment Process', description: 'Judicial exams', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('civil servant') || goalInput.toLowerCase().includes('ias') || goalInput.toLowerCase().includes('ips')) {
        roadmap = [
            { id: 1, title: 'Prelims Prep', description: 'GS/CSAT syllabus', duration: '24 weeks' },
            { id: 2, title: 'Mains Strategy', description: 'Essay/optional subjects', duration: '28 weeks' },
            { id: 3, title: 'Current Affairs', description: 'Daily news analysis', duration: '32 weeks' },
            { id: 4, title: 'Interview Prep', description: 'Personality test', duration: '16 weeks' },
            { id: 5, title: 'Service Allocation', description: 'Cadre research', duration: '8 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('politician') || goalInput.toLowerCase().includes('political analyst')) {
        roadmap = [
            { id: 1, title: 'Political Theory', description: 'Ideologies comparison', duration: '8 weeks' },
            { id: 2, title: 'Campaign Strategy', description: 'Voter outreach', duration: '12 weeks' },
            { id: 3, title: 'Policy Analysis', description: 'Legislative impact', duration: '14 weeks' },
            { id: 4, title: 'Public Speaking', description: 'Speechwriting', duration: '10 weeks' },
            { id: 5, title: 'Grassroots Work', description: 'Constituency building', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('public policy') || goalInput.toLowerCase().includes('policy specialist')) {
        roadmap = [
            { id: 1, title: 'Policy Frameworks', description: 'Formulation models', duration: '10 weeks' },
            { id: 2, title: 'Stakeholder Analysis', description: 'Interest groups', duration: '12 weeks' },
            { id: 3, title: 'Cost-Benefit Analysis', description: 'Economic impact', duration: '14 weeks' },
            { id: 4, title: 'Implementation', description: 'Program evaluation', duration: '16 weeks' },
            { id: 5, title: 'Advocacy', description: 'Lobbying techniques', duration: '8 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('diplomat') || goalInput.toLowerCase().includes('foreign service')) {
        roadmap = [
            { id: 1, title: 'International Relations', description: 'Diplomatic history', duration: '12 weeks' },
            { id: 2, title: 'Protocol Training', description: 'State etiquette', duration: '8 weeks' },
            { id: 3, title: 'Language Proficiency', description: 'French/Spanish/Arabic', duration: '24 weeks' },
            { id: 4, title: 'Crisis Management', description: 'Conflict resolution', duration: '16 weeks' },
            { id: 5, title: 'FSOT Prep', description: 'Foreign Service exam', duration: '20 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('actor') || goalInput.toLowerCase().includes('performer')) {
        roadmap = [
            { id: 1, title: 'Method Acting', description: 'Stanislavski techniques', duration: '12 weeks' },
            { id: 2, title: 'Voice Modulation', description: 'Diction exercises', duration: '10 weeks' },
            { id: 3, title: 'Movement', description: 'Stage combat', duration: '8 weeks' },
            { id: 4, title: 'Audition Prep', description: 'Monologue practice', duration: '14 weeks' },
            { id: 5, title: 'Reel Development', description: 'Demo footage', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('screenwriter') || goalInput.toLowerCase().includes('scriptwriter')) {
        roadmap = [
            { id: 1, title: 'Story Structure', description: 'Learn three-act structure', duration: '8 weeks' },
            { id: 2, title: 'Character Development', description: 'Creating compelling characters', duration: '6 weeks' },
            { id: 3, title: 'Dialogue Writing', description: 'Natural speech patterns', duration: '10 weeks' },
            { id: 4, title: 'Formatting', description: 'Industry standard script formats', duration: '4 weeks' },
            { id: 5, title: 'Pitching', description: 'Selling your script', duration: '8 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('radio jockey') || goalInput.toLowerCase().includes('podcast host')) {
        roadmap = [
            { id: 1, title: 'Voice Training', description: 'Breathing and articulation', duration: '6 weeks' },
            { id: 2, title: 'Script Writing', description: 'Creating engaging content', duration: '8 weeks' },
            { id: 3, title: 'Audio Editing', description: 'Basic sound engineering', duration: '10 weeks' },
            { id: 4, title: 'Interview Skills', description: 'Guest interaction techniques', duration: '8 weeks' },
            { id: 5, title: 'Brand Building', description: 'Developing your unique style', duration: '12 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('game designer')) {
        roadmap = [
            { id: 1, title: 'Game Mechanics', description: 'Core gameplay concepts', duration: '10 weeks' },
            { id: 2, title: 'Level Design', description: 'Creating engaging environments', duration: '12 weeks' },
            { id: 3, title: 'Narrative Design', description: 'Storytelling in games', duration: '8 weeks' },
            { id: 4, title: 'Prototyping', description: 'Rapid game development', duration: '14 weeks' },
            { id: 5, title: 'Playtesting', description: 'User feedback integration', duration: '10 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('theatre director')) {
        roadmap = [
            { id: 1, title: 'Script Analysis', description: 'Interpreting plays', duration: '8 weeks' },
            { id: 2, title: 'Blocking', description: 'Stage movement planning', duration: '10 weeks' },
            { id: 3, title: 'Actor Coaching', description: 'Performance direction', duration: '12 weeks' },
            { id: 4, title: 'Technical Theatre', description: 'Lights, sound, set design', duration: '14 weeks' },
            { id: 5, title: 'Production Management', description: 'Budgeting and scheduling', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('makeup artist')) {
        roadmap = [
            { id: 1, title: 'Color Theory', description: 'Skin tones and color matching', duration: '6 weeks' },
            { id: 2, title: 'Basic Techniques', description: 'Foundation, contouring, highlighting', duration: '8 weeks' },
            { id: 3, title: 'Special Effects', description: 'Bruises, aging, fantasy looks', duration: '12 weeks' },
            { id: 4, title: 'Hair Styling', description: 'Wigs and hairpieces', duration: '10 weeks' },
            { id: 5, title: 'Portfolio Development', description: 'Building your professional portfolio', duration: '14 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('fashion designer')) {
        roadmap = [
            { id: 1, title: 'Sketching', description: 'Fashion illustration', duration: '8 weeks' },
            { id: 2, title: 'Pattern Making', description: 'Drafting and draping', duration: '12 weeks' },
            { id: 3, title: 'Textiles', description: 'Fabric knowledge', duration: '10 weeks' },
            { id: 4, title: 'Sewing Techniques', description: 'Garment construction', duration: '14 weeks' },
            { id: 5, title: 'Collection Development', description: 'Creating a cohesive line', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('electrician')) {
        roadmap = [
            {
                id: 1, title: 'Electrical Theory', description: 'Ohm\'s Law, circuits', duration: '10 weeks'
            },
            { id: 2, title: 'Wiring', description: 'Residential and commercial', duration: '12 weeks' },
            { id: 3, title: 'Safety Procedures', description: 'OSHA standards', duration: '8 weeks' },
            { id: 4, title: 'Code Compliance', description: 'National Electrical Code', duration: '14 weeks' },
            { id: 5, title: 'Troubleshooting', description: 'Diagnosing electrical problems', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('plumber')) {
        roadmap = [
            { id: 1, title: 'Pipe Systems', description: 'Materials and installation', duration: '10 weeks' },
            { id: 2, title: 'Fixture Installation', description: 'Sinks, toilets, showers', duration: '8 weeks' },
            { id: 3, title: 'Drainage', description: 'Waste removal systems', duration: '12 weeks' },
            { id: 4, title: 'Water Supply', description: 'Pressure and flow', duration: '10 weeks' },
            { id: 5, title: 'Code Requirements', description: 'Local plumbing codes', duration: '14 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('auto mechanic')) {
        roadmap = [
            { id: 1, title: 'Engine Repair', description: 'Internal combustion systems', duration: '12 weeks' },
            { id: 2, title: 'Electrical Systems', description: 'Automotive electronics', duration: '10 weeks' },
            { id: 3, title: 'Brakes', description: 'Hydraulic systems', duration: '8 weeks' },
            { id: 4, title: 'Suspension', description: 'Alignment and steering', duration: '10 weeks' },
            { id: 5, title: 'Diagnostics', description: 'Computerized systems', duration: '14 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('tailor') || goalInput.toLowerCase().includes('fashion tailor')) {
        roadmap = [
            { id: 1, title: 'Measuring', description: 'Taking accurate body measurements', duration: '6 weeks' },
            { id: 2, title: 'Pattern Alteration', description: 'Adjusting commercial patterns', duration: '10 weeks' },
            { id: 3, title: 'Sewing Techniques', description: 'Hand and machine stitching', duration: '12 weeks' },
            { id: 4, title: 'Fabric Knowledge', description: 'Working with different materials', duration: '8 weeks' },
            { id: 5, title: 'Custom Fitting', description: 'Creating made-to-measure garments', duration: '14 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('carpenter')) {
        roadmap = [
            { id: 1, title: 'Tool Mastery', description: 'Hand and power tools', duration: '8 weeks' },
            { id: 2, title: 'Joinery', description: 'Wood connection techniques', duration: '12 weeks' },
            { id: 3, title: 'Framing', description: 'Structural construction', duration: '10 weeks' },
            { id: 4, title: 'Finishing', description: 'Staining and sealing', duration: '8 weeks' },
            { id: 5, title: 'Blueprint Reading', description: 'Interpreting construction plans', duration: '10 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('construction worker') || goalInput.toLowerCase().includes('certified')) {
        roadmap = [
            { id: 1, title: 'Safety Certification', description: 'OSHA 10/30 training', duration: '4 weeks' },
            { id: 2, title: 'Tool Operation', description: 'Heavy equipment basics', duration: '8 weeks' },
            { id: 3, title: 'Site Preparation', description: 'Grading and foundation', duration: '10 weeks' },
            { id: 4, title: 'Material Handling', description: 'Concrete, steel, lumber', duration: '8 weeks' },
            { id: 5, title: 'Specialized Skills', description: 'Choose an area of focus', duration: '12 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('blockchain developer')) {
        roadmap = [
            { id: 1, title: 'Cryptography Basics', description: 'Hashing, digital signatures', duration: '8 weeks' },
            { id: 2, title: 'Smart Contracts', description: 'Solidity programming', duration: '12 weeks' },
            { id: 3, title: 'DApp Development', description: 'Decentralized applications', duration: '14 weeks' },
            { id: 4, title: 'Blockchain Protocols', description: 'Ethereum, Hyperledger', duration: '10 weeks' },
            { id: 5, title: 'Security Practices', description: 'Auditing smart contracts', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('cloud architect') || goalInput.toLowerCase().includes('aws') || goalInput.toLowerCase().includes('azure') || goalInput.toLowerCase().includes('gcp')) {
        roadmap = [
            { id: 1, title: 'Cloud Fundamentals', description: 'IaaS, PaaS, SaaS', duration: '8 weeks' },
            { id: 2, title: 'Core Services', description: 'Compute, storage, networking', duration: '12 weeks' },
            { id: 3, title: 'Security', description: 'IAM, encryption, compliance', duration: '10 weeks' },
            { id: 4, title: 'Architecture Patterns', description: 'High availability, scalability', duration: '14 weeks' },
            { id: 5, title: 'Cost Optimization', description: 'Monitoring and budgeting', duration: '10 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('iot developer')) {
        roadmap = [
            { id: 1, title: 'Embedded Systems', description: 'Microcontrollers basics', duration: '10 weeks' },
            { id: 2, title: 'Sensor Networks', description: 'Data collection and transmission', duration: '12 weeks' },
            { id: 3, title: 'Edge Computing', description: 'Local data processing', duration: '10 weeks' },
            { id: 4, title: 'Cloud Integration', description: 'Connecting to cloud platforms', duration: '14 weeks' },
            { id: 5, title: 'Security Considerations', description: 'Protecting IoT devices', duration: '16 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('ethical hacker') || goalInput.toLowerCase().includes('penetration tester')) {
        roadmap = [
            { id: 1, title: 'Networking Fundamentals', description: 'TCP/IP, protocols', duration: '8 weeks' },
            { id: 2, title: 'Linux Proficiency', description: 'Kali Linux tools', duration: '10 weeks' },
            { id: 3, title: 'Vulnerability Assessment', description: 'Scanning and analysis', duration: '12 weeks' },
            { id: 4, title: 'Exploitation Techniques', description: 'Common attack vectors', duration: '14 weeks' },
            { id: 5, title: 'Reporting', description: 'Documenting findings', duration: '8 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('game developer') || goalInput.toLowerCase().includes('unity') || goalInput.toLowerCase().includes('unreal')) {
        roadmap = [
            { id: 1, title: 'Game Physics', description: 'Collision, gravity systems', duration: '10 weeks' },
            { id: 2, title: 'AI Programming', description: 'NPC behavior', duration: '12 weeks' },
            { id: 3, title: 'Graphics Pipeline', description: 'Shaders, rendering', duration: '14 weeks' },
            { id: 4, title: 'Multiplayer Networking', description: 'Synchronization', duration: '16 weeks' },
            { id: 5, title: 'Performance Optimization', description: 'Memory management', duration: '12 weeks' }
        ];
    }
    else if (goalInput.toLowerCase().includes('ar') || goalInput.toLowerCase().includes('vr') || goalInput.toLowerCase().includes('augmented reality') || goalInput.toLowerCase().includes('virtual reality')) {
        roadmap = [
            { id: 1, title: '3D Modeling', description: 'Assets creation', duration: '12 weeks' },
            { id: 2, title: 'Spatial Computing', description: 'Understanding 3D space', duration: '10 weeks' },
            { id: 3, title: 'Interaction Design', description: 'User input methods', duration: '14 weeks' },
            { id: 4, title: 'Platform SDKs', description: 'ARKit, Oculus, etc.', duration: '16 weeks' },
            { id: 5, title: 'Performance Optimization', description: 'Frame rate maintenance', duration: '12 weeks' }
        ];
    }
    else {
        roadmap = [
            { id: 1, title: 'Research & Planning', description: `Gather information and resources for "${input}"`, duration: '2 weeks' },
            { id: 2, title: 'Initial Steps', description: `Start working on "${input}"`, duration: '2 weeks' },
            { id: 3, title: 'Refine & Iterate', description: `Improve progress and adapt based on challenges`, duration: '2 weeks' },
            { id: 4, title: 'Final Push', description: `Wrap up and finalize the "${input}" goal`, duration: '2 weeks' }
        ]
    }
    roadmapTitle.textContent = `Your Roadmap for: ${input}`
    roadmapSteps.innerHTML = ''

    roadmap.forEach((step, index) => {
        const isLast = index === roadmap.length - 1

        roadmapSteps.innerHTML += `
          <div class="flex gap-12 items-start">
  <!-- Left Column: Icon & Connecting Line -->
  <div class="flex flex-col items-center">
    <!-- Icon Container with Solid Blue Background -->
    <div class="bg-blue-600 p-4 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300">
      <i class="lucide lucide-${isLast ? 'star' : 'check'} w-7 h-7 text-white"></i>
    </div>
    <!-- Conditional Connecting Line -->
    ${!isLast ? '<div class="w-0.5 h-full bg-blue-300 mt-6"></div>' : ''}
  </div>

  <!-- Right Column: Step Information -->
  <div class="flex-1 pb-10">
    <!-- Title with Elegant Font Styling -->
    <h4 class="font-semibold text-3xl text-blue-800 hover:text-blue-500 transition-colors duration-300 mb-4">${step.title}</h4>
    
    <!-- Description Text with Slightly Lighter Blue Color -->
    <p class="text-lg text-blue-700 leading-relaxed mb-5">${step.description}</p>

    <!-- Duration Information with Subtle Text Color -->
    <div class="flex items-center text-sm text-blue-500">
      <i class="lucide lucide-calendar w-5 h-5 text-blue-400 mr-3"></i>
      <span>${step.duration}</span>
    </div>
  </div>
</div>
        `
    })

    roadmapContainer.classList.remove('hidden')

    // Generate 5 YouTube search links based on the user's goal
    const youtubeLinksEl = document.getElementById('youtubeLinks');
    if (youtubeLinksEl) {
        youtubeLinksEl.innerHTML = ''; // Clear previous links
        for (let i = 1; i <= 5; i++) {
            // Create a new div for each YouTube link
            const linkDiv = document.createElement('div');
            linkDiv.classList.add('youtube-link'); // Optional: add a class for styling

            const youtubeLink = document.createElement('a');
            const searchQuery = encodeURIComponent('how to become a ' + goalInput + ' step ' + i);
            youtubeLink.href = `https://www.youtube.com/results?search_query=${searchQuery}`;
            youtubeLink.textContent = `YouTube Resource for Step ${i}`;
            youtubeLink.target = '_blank'; // Open in new tab

            // Append the link inside the div
            linkDiv.appendChild(youtubeLink);

            // Append the div to the youtubeLinks container
            youtubeLinksEl.appendChild(linkDiv);
        }
    }
}