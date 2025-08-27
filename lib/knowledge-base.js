// Complete knowledge base for Sidd's AI Assistant
export const SIDD_COMPLETE_PROFILE = {
  // Core Identity
  identity: {
    fullName: "Siddharth Karani",
    preferredName: "Sidd",
    birthDate: "April 18, 2006",
    birthplace: "Boston, Massachusetts (Dorchester)",
    currentLocation: "Boston, MA - East Village Residence Hall, Northeastern",
    hometown: "Wilmington, MA",
    heritage: "Indian (parents are immigrants)",
    languages: ["English", "Hindi", "Marathi"],
    personalityTraits: {
      superpower: "Being doubted - it makes me work twice as hard to prove them wrong",
      humor: "Dry sense of humor",
      communication: "I tend to match the tone and linguistic patterns of who I'm talking to",
      social: "I understand people well",
      drive: "Incredibly motivated when challenged"
    }
  },

  // Personal Journey & Origin Story
  origin: {
    earlyLife: "Born in Boston to immigrant Indian parents, grew up in Dorchester until family of 4 moved to suburbs. Super energetic kid, into all sports, curious about the world.",
    techSpark: "First hooked by Brickbreaker on BlackBerry - my gateway to technology",
    gamingPath: "Got into video games throughout childhood, then started modding games in middle/high school - creating menus, additional content. That's what really sparked my CS interest.",
    educationJourney: {
      elementary: "1st-5th grade in India, learned Hindi and Marathi. MSWLogo turtle language in tech class really fueled my inspiration",
      highSchool: "First formal programming class, but was already learning Java from cousin in Seattle (who went to UWash for CS). Took AP CS classes, then dual enrollment senior year - took Java, C++, Linux classes",
      keyMoment: "Successfully hacking a game and creating a wall hack script - that's when I knew CS was for me"
    },
    inspiration: "My dad - project manager in tech, been in the space since before I was born, always at cutting-edge companies (currently at Five9)"
  },

  // Athletic & Personal Interests
  athletics: {
    tennis: {
      journey: "Played throughout childhood in India and US. Played club and high school varsity while still in middle school",
      achievements: ["UTR ranked", "MVP", "Coaches Award", "League All-Star all 4 HS years", "North Shore League Champions 2020-2024"],
      coaching: "Volunteer coach since April 2021, taught nearly 100 students - continuing through college"
    },
    childhood: "Collected Hot Wheels, went to car shows, can name basically any car and brand - always had a fascination with motors"
  },

  interests: {
    reading: "Sci-fi books like I, Robot by Asimov",
    music: "Bollywood and R&B",
    travel: "Love exploring new places",
    cars: "Lifelong fascination with automotive technology"
  },

  // Academic Profile
  education: {
    current: {
      university: "Northeastern University",
      year: "Sophomore (Class of 2027)",
      major: "Computer Science and Mathematics",
      gpa: "4.0/4.0",
      honors: "John Martinson Honors Program, Khoury College",
      currentCourses: ["Algorithms & Data Structures", "Theory of Computation", "Linear Algebra", "Probability and Statistics"],
      completedCourses: ["Fundamentals of CS", "Discrete Structures", "Logic & Computation", "Object Oriented Design", "Differential Equations"],
      activities: ["Oasis NEU", "AI Club (aineu.org)", "Disrupt Finhacks", "Northeastern Electrical Racing", "Real Estate Club"]
    },
    dualEnrollment: {
      school: "Middlesex Community College",
      gpa: "3.81/4.0",
      period: "2023-2024 (Senior year of HS)",
      courses: ["Programming I & II (C++/Java)", "Operating Systems", "Computer Security", "Calculus II & III", "English Composition II", "Economics & Management in Tech"]
    },
    highSchool: {
      school: "Wilmington High School",
      gpa: "4.12/4.3",
      activities: ["Treasurer of Math Club", "Project Manager FTC Robotics", "President Engineering Club", "Vice President CS Club"]
    }
  },

  // Professional Experience
  experience: {
    current: {
      role: "Undergraduate Research Assistant",
      institution: "Northeastern University",
      advisor: "Professor Mohit Singhal",
      period: "May 2025 - Present",
      focus: "AI Bias Detection in Academic Peer Reviews",
      details: [
        "Developing models to identify bias against non-native English speakers",
        "Using NLI methods with GPT-4 and BERT",
        "Analyzing top ML conference reviews (ICML, ICLR)",
        "Working on fairness and diversity in STEM academia"
      ]
    },
    past: [
      {
        role: "Summer Research Assistant",
        institution: "UMass Amherst",
        period: "June 2023 - July 2023",
        advisors: "Professors Shubha Tewari and Donald Candela",
        focus: "ML applications to physics and finance",
        achievements: [
          "Developed stock prediction models using RBF techniques",
          "Forecasted Meta stock 30 days ahead",
          "Applied Python for data visualization (Matplotlib, Seaborn)"
        ]
      },
      {
        role: "Project Manager - FTC Robotics Team #14864",
        period: "September 2021 - June 2024",
        achievements: [
          "Developed autonomous systems with Java",
          "Implemented TensorFlow Lite for object detection",
          "Designed Pedro pathing algorithms for optimal navigation",
          "Led integration between coding and hardware teams"
        ]
      }
    ]
  },
// Technical Skills
  technical: {
    languages: {
      expert: ["Python"],
      proficient: ["Java", "C++", "JavaScript"],
      learning: ["Swift (iOS dev)", "C", "R (mathematical programming)"]
    },
    frameworks: {
      ai_ml: ["TensorFlow", "TensorFlow Lite", "PyTorch", "OpenCV", "Scikit-learn", "BERT", "GPT-4"],
      web: ["React", "Node.js", "HTML/CSS", "Next.js"],
      data: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scipy"],
      cloud: ["AWS (pursuing Solutions Architect cert)", "Docker"],
      other: ["Git", "PostgreSQL", "MATLAB", "DrRacket"]
    },
    specializations: ["Computer Vision", "AI Bias Detection", "Financial Modeling", "Autonomous Systems", "NLP"]
  },

  // Projects & Achievements
  projects: {
    featured: [
      {
        name: "FiTag",
        type: "Hackathon Winner",
        event: "EasyA X VeChain at Harvard (October 2023)",
        description: "Blockchain supply chain tracker for ethical sourcing",
        tech: ["VeChain", "Web3", "Smart Contracts"],
        highlight: "Collaborated with developers from Princeton, Yale, other top institutions"
      },
      {
        name: "AI Review Bias Detection",
        type: "Current Research",
        repo: "ai_review_fetcher (forked)",
        description: "Detecting bias against non-native English speakers in peer reviews",
        tech: ["Python", "BERT", "GPT-4", "NLP"],
        impact: "Improving fairness in academic publishing"
      },
      {
        name: "Stock Price Prediction",
        type: "Research Project",
        tech: ["Python", "SVR", "RBF/Linear/Polynomial kernels", "Pandas", "NumPy"],
        description: "ML system predicting Meta stock 30 days ahead",
        mentor: "Professor Tewari at UMass"
      },
      {
        name: "Lane Detection System",
        type: "Computer Vision",
        tech: ["Python", "OpenCV", "Canny edge detection", "Hough Transform"],
        description: "Real-time lane detection for autonomous vehicles",
        repo: "Lane-detection-using-OpenCV"
      },
      {
        name: "Connections Game",
        type: "Class Project",
        tech: ["Java", "javalib", "Object-Oriented Design"],
        description: "Recreation of NYT Connections game with full gameplay",
        features: ["Shuffle mechanism", "Category detection", "Interactive UI"]
      },
      {
        name: "Expense Tracker",
        type: "OASIS Project",
        period: "January - April 2025",
        tech: ["React", "Node.js", "Payment APIs"],
        description: "Collaborative expense tracking platform with 3 partners"
      }
    ],
    hackathons: ["EasyA X VeChain", "Financial technology hackathons", "Robotics competitions", "Disrupt Finhacks"],
    github: {
      username: "siddkarani",
      repos: ["ai_review_fetcher", "14864_2024-2025", "Lane-detection-using-OpenCV", "siddkarani.github.io"],
      contribution: "Active in open source, believes GitHub is what internet was created for"
    }
  },

  // Career Aspirations
  career: {
    targetCompanies: {
      tech: ["Tesla", "Google", "Meta", "Amazon", "Adobe"],
      ai: ["Anthropic", "OpenAI", "DeepMind"],
      fintech: ["Two Sigma", "Jane Street", "Citadel", "Vivint"],
      defense: ["Shield AI", "Anduril Industries"],
      automotive: "Special interest due to lifelong car fascination"
    },
    shortTerm: {
      goals: [
        "AWS Solutions Architect certification by Spring 2025",
        "Master Swift for iOS development",
        "Learn mathematical programming (C, R)",
        "Secure internship at target company",
        "Publish research on AI bias"
      ],
      focus: "Agentic AI solutions for enterprise, end-to-end service ownership, large-scale client needs"
    },
    longTerm: {
      vision: "Lead AI implementation focusing on employee productivity and customer impact",
      path: [
        "Industry experience first",
        "Masters in CS (after working)",
        "MBA in Finance",
        "Transition to startup space after gaining experience"
      ],
      interests: ["Defense tech startups", "AI ethics and safety", "Sustainable AI practices"],
      legacy: "Make a lasting impact on AI ethicality and human-centric technology development"
    }
  },
// Philosophy & Beliefs
  philosophy: {
    onAI: {
      ethics: "AI should respect and empower human knowledge, be transparent and fair",
      fears: "Like offshoring jobs to other countries, companies will offshore our jobs to AI, leading to middle class decline - already worse than before French Revolution",
      vision: "Build systems that are human-centric, ethical, and sustainable",
      responsibility: "Focus on leaving the world better than we found it"
    },
    onTech: {
      role: "Technology has ever-increasing role but needs research to flourish WITH humans",
      openSource: "GitHub is my saving grace - open source is what internet was created for",
      innovation: "True innovation empowers people rather than replacing them",
      negatives: "Concerned about tech's impact on developing children - need more research and data"
    },
    personal: {
      success: "The happiness after fixing all bugs and seeing a project run as intended - no satisfaction like it",
      learning: "1 hour study sessions with 15 min breaks - train brain to expect reward for job well done",
      workLife: "Ideal: 40-hour week, hybrid/remote - first time in history we can work in PJs!",
      vegetarian: "Lifelong vegetarian - believe it leads to sharper mind, critical thinking, and happiness"
    },
    advice: {
      toFreshmen: "Network, network, network - unfortunately CS is becoming more about who you know",
      onDoubt: "Being doubted is my superpower - makes me work twice as hard",
      onCollaboration: "Bring diverse perspectives together - teacher's insights + engineer's skills = powerful solutions"
    }
  },

  // Additional Context
  additionalInfo: {
    writingSamples: [
      "Honors 1102 essay on AI ethics and empowering futures",
      "Impact area simulations on interdisciplinary problem solving",
      "StoryMap project on responsible tech development"
    ],
    academicApproach: "Asset-based community development perspective - find and use special strengths of people",
    researchInterests: [
      "Ethical AI development",
      "Bias mitigation in ML",
      "Human-AI collaboration",
      "Sustainable computing"
    ],
    certifications: {
      completed: ["Udemy Web Development Bootcamp"],
      inProgress: ["AWS Solutions Architect - Associate (by Spring 2025)"]
    },
    volunteerWork: {
      tennis: "Coaching through local recreation department since April 2021",
      impact: "Taught fundamental skills to ~100 students of all ages",
      commitment: "Continuing from high school through college"
    }
  },

  // Quirks & Fun Facts
  personalQuirks: {
    carEnthusiast: "Can identify almost any car make/model - collected Hot Wheels, attended car shows",
    techCuriosity: "Used to dismantle computers to understand them - traced silver pathways on motherboards",
    linguistic: "Naturally matches communication patterns and accents of conversation partners",
    gaming: "Started with Brickbreaker, progressed to modding games - created wall hacks",
    motivation: "Works twice as hard when doubted - it's my superpower"
  },

  // Contact & Links
  contact: {
    email: "sidd.karani06@gmail.com",
    phone: "(781) 960-8959",
    linkedin: "linkedin.com/in/sidd-karani/",
    github: "github.com/siddkarani",
    location: "Boston, MA 02120",
    nuid: "002491647"
  }
};

// Export for use
export default SIDD_COMPLETE_PROFILE;
