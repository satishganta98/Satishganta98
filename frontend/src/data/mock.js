export const profileData = {
  name: "Satish Kumar Ganta",
  title: "Cybersecurity Analyst & SOC Officer",
  tagline: "Protecting Digital Assets. Hunting Threats. Securing the Future.",
  email: "gsk07818@gmail.com",
  phone: "+353876498503",
  location: "Dublin, Ireland",
  linkedin: "https://linkedin.com/in/satishkumarganta",
  github: "https://github.com/satishganta98",
  about: "Results-driven Cybersecurity Professional with expertise in Security Operations Center (SOC) activities, threat detection, and incident response. Currently serving as a SOC Officer at Accenture, I specialize in leveraging SIEM tools like Splunk Enterprise to identify and mitigate security threats. With a Master's degree in Data Analytics and a strong foundation in machine learning, I bring a unique analytical approach to cybersecurity challenges.",
  
  stats: [
    { label: "Years in Cybersecurity", value: "2+" },
    { label: "Industry Certifications", value: "7" },
    { label: "Security Incidents Handled", value: "500+" },
    { label: "Avg Response Time", value: "<1hr" }
  ],

  achievements: [
    {
      title: "15% Threat Reduction",
      description: "Reduced potential threat impact on operations monthly through timely incident response actions."
    },
    {
      title: "40+ Weekly Alerts",
      description: "Identified and escalated an average of 10 critical security incidents each week using Splunk Enterprise."
    },
    {
      title: "20% Security Enhancement",
      description: "Assessed existing protocols and integrated new measures to strengthen defense against cyber threats."
    },
    {
      title: "10% Awareness Improvement",
      description: "Developed clear incident reports improving security awareness and response readiness across teams."
    }
  ],

  skills: {
    technical: [
      "Splunk Enterprise",
      "SIEM & EDR Tools",
      "Host & Network Forensics",
      "Malware Analysis",
      "SOC & Blue Team Operations",
      "Incident Response",
      "Threat Hunting",
      "Log Analysis",
      "Remediation Planning",
      "Cyber Threat Intelligence (CTI)",
      "Cloud Security (Azure/AWS)",
      "Security Audit",
      "Python",
      "SQL"
    ],
    tools: [
      "Splunk",
      "Power BI",
      "Tableau",
      "MS Excel",
      "Docker",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "NLTK"
    ],
    professional: [
      "Problem-Solving",
      "Clear Communication",
      "Technical Report Writing",
      "Executive Reporting",
      "Client Interface",
      "Team Collaboration"
    ]
  },
  
  experience: [
    {
      id: 1,
      company: "Accenture",
      role: "Response & SOC Officer",
      location: "Dublin, County Dublin, Ireland",
      duration: "June 2025 — Present",
      highlights: [
        "Managed immediate responses to security alerts, reducing potential threat impact on Accenture operations by an estimated 15% monthly through timely actions.",
        "Used Splunk Enterprise for detection logs and analysis, identifying and escalating an average of 10 critical security incidents each week.",
        "Assessed existing security protocols and integrated new measures to strengthen overall defense, enhancing protection against common cyber threats by 20%.",
        "Collaborated with internal teams to share incident findings, developing clear reports that helped improve security awareness and response readiness by 10%."
      ]
    },
    {
      id: 2,
      company: "Melmaa Tech",
      role: "Machine Learning and Data Analytics Intern",
      location: "Hyderabad, Telangana, India",
      duration: "Jul 2022 — Jan 2023",
      highlights: [
        "Preprocessed large and complex datasets using Pandas and NumPy, preparing data for analysis and improving processing efficiency by 25% for various projects.",
        "Implemented machine learning models with Scikit-learn for predictive analytics, providing insights that supported business decisions and improved forecast accuracy by 15%.",
        "Visualized complex data trends using Power BI and Tableau, creating clear dashboards that helped stakeholders understand key performance metrics by 20%.",
        "Managed and extracted data from SQL (PostgreSQL) databases, ensuring data integrity and efficient retrieval for analytical reporting purposes in projects."
      ]
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "Master's Degree in Data Analytics",
      institution: "National College of Ireland",
      duration: "Sept 2023 — Nov 2024",
      coursework: "Advanced Data Mining, Big Data Analytics, Statistical Modeling, Machine Learning Algorithms, Data Visualization"
    },
    {
      id: 2,
      degree: "Bachelor of Technology (BTech) in Computer Science",
      institution: "Indian Institute Of Industry Interaction Education and Research",
      duration: "Jul 2018 — Apr 2022",
      coursework: "Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Introduction to Cyber Security"
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "SIEM Automation & Alert Optimization Platform",
      category: "SIEM & Automation",
      description: "Developed an automated alert correlation system using Splunk SPL and Python to reduce false positives and improve SOC efficiency. Implemented custom detection rules and automated response workflows.",
      technologies: ["Splunk Enterprise", "Python", "SPL", "REST API", "JSON"],
      highlights: [
        "Reduced false positive alerts by 35% through intelligent correlation logic",
        "Automated tier-1 incident categorization saving 15+ hours weekly",
        "Created 20+ custom Splunk dashboards for real-time threat visibility",
        "Integrated with ticketing systems for automated incident escalation"
      ],
      metrics: {
        impact: "35% reduction in false positives",
        efficiency: "15 hours saved per week",
        coverage: "20+ custom detection rules"
      },
      github: "https://github.com/satishganta98",
      status: "Production"
    },
    {
      id: 2,
      title: "Threat Hunting Dashboard with ML Anomaly Detection",
      category: "Threat Hunting",
      description: "Built an advanced threat hunting platform combining Splunk analytics with Python-based machine learning models to identify anomalous user behavior and potential insider threats.",
      technologies: ["Splunk", "Python", "Scikit-learn", "Pandas", "Power BI", "UEBA"],
      highlights: [
        "Implemented ML models (Isolation Forest, LSTM) for behavioral anomaly detection",
        "Detected 12 potential insider threat indicators in testing phase",
        "Created interactive Power BI dashboards for executive reporting",
        "Integrated threat intelligence feeds for enhanced context"
      ],
      metrics: {
        accuracy: "92% anomaly detection rate",
        detection: "12 threats identified",
        responseTime: "<30 min average investigation"
      },
      github: "https://github.com/satishganta98",
      status: "Active Development"
    },
    {
      id: 3,
      title: "Automated Incident Response Playbook System",
      category: "Incident Response",
      description: "Designed and implemented automated incident response playbooks for common attack scenarios including phishing, malware infections, and data exfiltration attempts.",
      technologies: ["Python", "Splunk SOAR", "MITRE ATT&CK", "Bash", "PowerShell"],
      highlights: [
        "Created 15+ automated playbooks covering MITRE ATT&CK techniques",
        "Reduced mean time to respond (MTTR) by 40% for common incidents",
        "Automated evidence collection and containment actions",
        "Integrated with EDR tools for automated host isolation"
      ],
      metrics: {
        playbooks: "15+ automated workflows",
        mttr: "40% faster response time",
        automation: "70% of tier-1 tasks automated"
      },
      github: "https://github.com/satishganta98",
      status: "Production"
    },
    {
      id: 3,
      title: "Phishing Detection & Response Framework",
      category: "Email Security",
      description: "Built an intelligent phishing detection system using NLP and machine learning to analyze email content, URLs, and attachments for malicious indicators.",
      technologies: ["Python", "NLTK", "Scikit-learn", "VirusTotal API", "Splunk"],
      highlights: [
        "Analyzed 10,000+ emails with 94% phishing detection accuracy",
        "Automated URL and attachment sandboxing with VirusTotal integration",
        "Created user reporting portal for suspected phishing emails",
        "Generated executive reports on phishing trends and user training needs"
      ],
      metrics: {
        accuracy: "94% detection rate",
        volume: "10,000+ emails analyzed",
        response: "Automated URL/file scanning"
      },
      github: "https://github.com/satishganta98",
      status: "Production"
    },
    {
      id: 4,
      title: "Network Traffic Analysis & Threat Intelligence Platform",
      category: "Network Security",
      description: "Developing a network traffic analysis tool that correlates flow data with threat intelligence feeds to identify command-and-control communications and data exfiltration.",
      technologies: ["Python", "Zeek", "Splunk", "Threat Intelligence APIs", "Docker"],
      highlights: [
        "Processing network traffic data for behavioral analysis",
        "Integrating threat intelligence feeds (AlienVault, VirusTotal, AbuseIPDB)",
        "Building IOC detection and correlation engine",
        "Developing automated alerting and firewall integration"
      ],
      metrics: {
        dataVolume: "Traffic analysis in progress",
        iocs: "Detection engine in development",
        feeds: "3 threat intel sources integrated"
      },
      github: "https://github.com/satishganta98",
      status: "In Development"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "Nov 2025",
      certificateUrl: null,
      certificateType: null
    },
    {
      id: 2,
      name: "CompTIA Network+",
      issuer: "CompTIA",
      date: "Nov 2025",
      certificateUrl: null,
      badgeUrl: null,
      certificateType: null
    },
    {
      id: 3,
      name: "CompTIA CySA+ Certification",
      issuer: "CompTIA",
      date: "Dec 2025",
      certificateUrl: null,
      certificateType: null
    },
    {
      id: 4,
      name: "Splunk Certified Cybersecurity Defense Analyst",
      issuer: "Splunk",
      date: "Dec 2025",
      certificateUrl: null,
      certificateType: null
    },
    {
      id: 5,
      name: "Career Essentials in System Administration",
      issuer: "Microsoft & LinkedIn",
      date: "Dec 2025",
      certificateUrl: null,
      certificateType: null
    },
    {
      id: 6,
      name: "CompTIA Security Analytics Professional – CSAP",
      issuer: "CompTIA",
      date: "Dec 2025",
      certificateUrl: null,
      certificateType: null
    },
    {
      id: 7,
      name: "SC-300 Identity and Access Administrator",
      issuer: "Microsoft",
      date: "Jan 2026",
      certificateUrl: null,
      certificateType: null
    }
  ]
};
