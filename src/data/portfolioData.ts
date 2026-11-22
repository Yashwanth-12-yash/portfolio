import { Project, SkillCategory, ExperienceItem, ArchitectureNode } from '../types';

export const PERSONAL_INFO = {
  name: "Yashwanth K",
  title: "AI Engineer | Generative AI Developer | Python Full Stack Developer",
  headline: "Building Production-Grade Generative AI, RAG Systems & Scalable Python Architectures",
  summary: `Information Science and Engineering graduate with hands-on experience in Python and backend development, AI/ML/DL technologies, and Generative AI. Experienced in building full-stack web applications using Django and FastAPI, developing machine learning models using Scikit-learn and TensorFlow, and creating RAG-based document question-answering systems using LangChain, FAISS, and Gemini API. Strong interest in developing scalable software solutions and AI-powered applications. Seeking entry-level opportunities in Python Development, AI/ML Engineering, and Generative AI.`,
  location: "Mandya, Karnataka, India",
  phone: "+91 8088230941",
  email: "yashwanthk2004k@gmail.com",
  github: "https://github.com/Yashwanth-12-yash",
  linkedin: "https://linkedin.com/in/yashwanthk2004",
  resumePath: "/Yashwanth_K_Resume.pdf",
  stats: [
    { label: "Engineering CGPA", value: "8.1 / 10", detail: "Information Science & Engg" },
    { label: "GitHub Repositories", value: "11+", detail: "RAG, GenAI, Full-Stack, ML" },
    { label: "Industry Experience", value: "2", detail: "Data Science & Python Full-Stack" },
    { label: "Resume-Verified Stack", value: "100%", detail: "Zero fabricated claims" },
  ],
  specializations: [
    "Enterprise RAG & Hybrid Retrieval Systems",
    "LLM Document Intelligence & Gemini API",
    "FastAPI & Django REST Microservices",
    "Machine Learning & Predictive Modeling",
    "React.js Full-Stack AI Interfaces"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Generative AI & LLMs",
    categoryKey: "genai",
    description: "Production-ready document intelligence, semantic vector search, and LLM reasoning pipelines.",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)", level: "Advanced", description: "Multi-stage pipeline: chunking, vector indexing, hybrid retrieval & context synthesis" },
      { name: "LangChain", level: "Proficient", description: "Prompt templates, document loaders, chunking strategies, and retrieval chains" },
      { name: "FAISS Vector Search", level: "Proficient", description: "High-performance in-memory vector index similarity search for embeddings" },
      { name: "Gemini API & LLMs", level: "Proficient", description: "Contextual instruction following, structured reasoning, and grounded responses" },
      { name: "Prompt Engineering", level: "Proficient", description: "Few-shot prompting, system guardrails, strict context enforcement & hallucination mitigation" }
    ]
  },
  {
    title: "AI, Machine Learning & Deep Learning",
    categoryKey: "aiml",
    description: "Statistical modeling, feature engineering, and neural network workflows for predictive tasks.",
    skills: [
      { name: "Supervised Learning", level: "Proficient", description: "Classification & regression algorithms (Logistic Regression, Random Forest, KNN, Naive Bayes)" },
      { name: "Unsupervised Learning", level: "Practical", description: "Clustering, pattern recognition, and dataset segmentation" },
      { name: "Predictive Modeling", level: "Proficient", description: "End-to-end model training, validation, and inference pipelines" },
      { name: "Feature Engineering", level: "Proficient", description: "Missing value imputation, scaling, outlier handling, and correlation analysis" },
      { name: "Model Evaluation", level: "Proficient", description: "Precision, Recall, F1-Score, Confusion Matrix, and ROC-AUC metrics" },
      { name: "Natural Language Processing (NLP)", level: "Proficient", description: "Text tokenization, keyword extraction (BM25), text chunking, and similarity metrics" },
      { name: "TensorFlow & Keras", level: "Practical", description: "Deep learning neural network architecture construction and training workflows" },
      { name: "Scikit-learn", level: "Proficient", description: "Production ML pipelines, cross-validation, and algorithmic modeling" }
    ]
  },
  {
    title: "Programming & Backend Development",
    categoryKey: "backend",
    description: "High-performance asynchronous APIs, object-oriented software engineering, and database design.",
    skills: [
      { name: "Python", level: "Advanced", description: "Core Python, OOP principles, data structures, asynchronous programming, and clean code" },
      { name: "FastAPI", level: "Proficient", description: "High-throughput async REST endpoints, Pydantic data validation, and Swagger docs" },
      { name: "Django & Django REST Framework", level: "Proficient", description: "Full-stack web architecture, ORM, authentication, viewsets, and serializable APIs" },
      { name: "REST APIs & OOP", level: "Advanced", description: "Robust API architecture, decoupling, modular service layers, and schema contracts" },
      { name: "SQL & MySQL", level: "Proficient", description: "Relational schema design, normalization, complex joins, and index optimization" }
    ]
  },
  {
    title: "Frontend Development",
    categoryKey: "frontend",
    description: "Modern, responsive client interfaces engineered for real-time AI and business applications.",
    skills: [
      { name: "React.js", level: "Proficient", description: "Component-based architecture, hooks, state management, and API consumption" },
      { name: "JavaScript", level: "Proficient", description: "ES6+, async/await, DOM manipulation, and dynamic event handling" },
      { name: "HTML & CSS", level: "Proficient", description: "Semantic markup, modern flexbox/grid layouts, and responsive styling" }
    ]
  },
  {
    title: "Data Science & Analysis",
    categoryKey: "datascience",
    description: "Exploratory data analysis, numerical computing, and data visualization.",
    skills: [
      { name: "Pandas", level: "Proficient", description: "DataFrame manipulation, aggregation, time series, and dataset cleaning" },
      { name: "NumPy", level: "Proficient", description: "High-performance multi-dimensional array operations and linear algebra" },
      { name: "Matplotlib", level: "Proficient", description: "Distribution plots, correlation heatmaps, ROC curves, and EDA charts" },
      { name: "Exploratory Data Analysis (EDA)", level: "Proficient", description: "Univariate/multivariate analysis, outlier identification, and hypothesis testing" }
    ]
  },
  {
    title: "Tools & Developer Environment",
    categoryKey: "tools",
    description: "Industry-standard developer tooling, version control, and testing environments.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", description: "Branching strategies, version control, pull requests, and code review workflows" },
      { name: "Postman", level: "Proficient", description: "API testing, endpoint benchmarking, payload inspection, and collection runs" },
      { name: "VS Code & PyCharm", level: "Proficient", description: "Primary IDEs for full-stack and AI development with debugger configurations" },
      { name: "Jupyter Notebook", level: "Proficient", description: "Interactive data science experimentation, EDA visualization, and ML prototyping" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "enterprise-rag-chatbot",
    title: "Enterprise RAG Chatbot – Document Q&A System",
    subtitle: "Hybrid Vector + Keyword Search Q&A Engine for Multi-Format Documents",
    category: "Generative AI",
    highlightBadge: "Flagship AI Project",
    technologies: ["Python", "RAG", "LangChain", "FAISS", "FastAPI", "Gemini API", "BM25"],
    problemStatement: "Traditional search in enterprise documents struggles with nuanced domain queries: pure keyword search misses semantic context, while pure semantic vector search often overlooks exact keywords (part numbers, technical codes, specific legal terminology).",
    solution: "Engineered a production-ready Retrieval-Augmented Generation (RAG) system with hybrid search. Ingests PDFs, extracts and chunks text systematically, computes high-dimensional vector embeddings stored in FAISS, and pairs them with BM25 keyword retrieval. Combines and reranks results before feeding grounded context to Google Gemini API for accurate, hallucination-resistant Q&A.",
    keyFeatures: [
      "PDF Ingestion & Text Extraction: Robust parsing of complex multi-page PDF documents.",
      "Intelligent Chunking: Text splitting with LangChain Recursive Character Splitter with optimal chunk overlap to preserve cross-boundary semantics.",
      "Hybrid Retrieval Architecture: Fused FAISS dense semantic similarity vectors with BM25 sparse lexical matching for dual-spectrum recall.",
      "Grounded LLM Generation: Integrated Gemini API with prompt guardrails to synthesize answers strictly referencing retrieved context.",
      "Asynchronous Backend: Built with FastAPI for sub-second query latency and streaming responses."
    ],
    architectureOverview: "PDF Ingestion -> Recursive Chunking -> FAISS Indexing & BM25 Scoring -> Hybrid Fusion -> Context Prompt Assembly -> Gemini LLM -> Grounded Output",
    architectureSteps: [
      { step: "1. Document Ingestion", tech: "PyPDF / PDF Miner", description: "Extracts raw text streams, strips noise, and normalizes typography." },
      { step: "2. Semantic Chunking", tech: "LangChain Splitter", description: "Partitions documents into 500-token chunks with 50-token contextual overlaps." },
      { step: "3. Vector Indexing", tech: "FAISS + Embeddings", description: "Generates high-dimensional vector representations indexed for ultra-fast L2 similarity search." },
      { step: "4. Hybrid Search Fusion", tech: "FAISS + BM25", description: "Executes simultaneous lexical matching and semantic vector retrieval with weighted score fusion." },
      { step: "5. Contextual Generation", tech: "Google Gemini API", description: "Synthesizes precise answers directly grounded in retrieved chunks with citations." }
    ],
    githubUrl: "https://github.com/Yashwanth-12-yash/-Enterprise-RAG-Chatbot",
    stats: [
      { label: "Search Approach", value: "Hybrid (Vector + BM25)" },
      { label: "Vector Store", value: "FAISS" },
      { label: "Backend API", value: "FastAPI" },
      { label: "LLM Model", value: "Gemini API" }
    ]
  },
  {
    id: "tcs-rag-chatbot",
    title: "TCS RAG Chatbot – Enterprise Document Intelligence",
    subtitle: "Generative AI Q&A Assistant Grounded in Corporate Documentation",
    category: "Generative AI",
    highlightBadge: "GenAI System",
    technologies: ["Python", "RAG", "LangChain", "LLMs", "Vector Embeddings", "Context Retrieval"],
    problemStatement: "Navigating vast repositories of corporate documentation, standard operating procedures, and compliance guidelines requires employees to spend hours manually searching without direct synthesis.",
    solution: "Engineered an intelligent corporate documentation chatbot powered by Retrieval-Augmented Generation. Extracted structured text segments from organizational knowledge repositories, indexed chunks in vector stores, and interfaced with state-of-the-art LLMs to generate instant, grounded, and context-verified answers to employee inquiries.",
    keyFeatures: [
      "Document Knowledge Ingestion: Parsed multi-chapter corporate policy manuals and technical guides.",
      "Context-Aware Prompt Chains: Implemented LangChain pipelines to assemble relevant contextual excerpts into prompt templates.",
      "Strict Grounding: Guardrailed LLM responses to prevent fabrication of policy rules or facts.",
      "Interactive Q&A Session: Conversational interface preserving chat history for coherent follow-up questions."
    ],
    architectureOverview: "Policy Docs -> Text Preprocessing -> Embedding Engine -> Similarity Index -> Grounded LLM Prompt -> Conversational Answer",
    architectureSteps: [
      { step: "1. Knowledge Base Loader", tech: "LangChain Loaders", description: "Loaded structured documentation across departmental directories." },
      { step: "2. Vector Representation", tech: "Dense Embeddings", description: "Encoded paragraphs into semantic embeddings capturing enterprise taxonomy." },
      { step: "3. Semantic Retrieval", tech: "Vector Similarity", description: "Dispatched queries to retrieve the top 3-5 authoritative policy excerpts." },
      { step: "4. LLM Synthesis", tech: "Large Language Models", description: "Synthesized direct responses with source document references." }
    ],
    githubUrl: "https://github.com/Yashwanth-12-yash/TCS-RAG-Chatbot",
    stats: [
      { label: "Use Case", value: "Enterprise Q&A" },
      { label: "Architecture", value: "RAG Pipeline" },
      { label: "Language", value: "Python" },
      { label: "Integration", value: "LLM Chains" }
    ]
  },
  {
    id: "helpdesk-it-support",
    title: "HelpDesk – IT Support & Ticket Management System",
    subtitle: "Full-Stack Enterprise Support Platform with Role-Based Access & Gemini AI Assistance",
    category: "Full-Stack & AI",
    highlightBadge: "Full-Stack + AI System",
    technologies: ["Python", "Django", "Django REST Framework", "React.js", "MySQL", "Google Gemini API"],
    problemStatement: "IT support departments suffer from ticket categorization bottlenecks, inconsistent resolution response times, and lacked unified audit trails across multi-department teams.",
    solution: "Designed and implemented a comprehensive IT support platform featuring end-to-end ticket lifecycle management, role-based access control (Admin, Agent, User), department routing, SLA compliance tracking, and audit logging. Integrated Google Gemini API to deliver AI-assisted support intelligence for automated ticket triage, summarizing user issues, and drafting suggested resolutions for support engineers.",
    keyFeatures: [
      "Role-Based Access Control (RBAC): Fine-grained permissions separating customers, IT technicians, department managers, and system admins.",
      "Complete Ticket Lifecycle: Multi-status workflow (Open, In Progress, Pending SLA, Resolved, Closed) with audit trails.",
      "Department & Team Management: Automated routing of tickets to appropriate department queues with SLA alerts.",
      "Decoupled Full-Stack Architecture: High-performance Django REST Framework backend serving JSON endpoints consumed by a responsive React.js frontend.",
      "AI-Assisted Support: Integrated Google Gemini API for intelligent ticket summarization, priority classification, and automated reply suggestions.",
      "Relational Data Persistence: MySQL database with optimized relational schemas, foreign key constraints, and indexing."
    ],
    architectureOverview: "React Client -> DRF REST APIs -> Authentication & RBAC -> MySQL Database -> Gemini AI Support Agent",
    architectureSteps: [
      { step: "1. Client UI", tech: "React.js + Tailwind", description: "Interactive dashboard for users to submit tickets and agents to manage queues." },
      { step: "2. API Layer", tech: "Django REST Framework", description: "Token-authenticated endpoints for ticket CRUD, filtering, and audit logging." },
      { step: "3. Business Logic", tech: "Django ORM & Services", description: "Enforces SLA timing rules, department assignment, and permission boundaries." },
      { step: "4. AI Intelligence", tech: "Google Gemini API", description: "Analyzes incoming issue descriptions, recommends urgency score, and drafts resolution templates." },
      { step: "5. Relational Store", tech: "MySQL", description: "Structured storage for tickets, comments, SLA timestamps, and audit logs." }
    ],
    githubUrl: "https://github.com/Yashwanth-12-yash/helpdesk-it-support-system",
    stats: [
      { label: "Frontend", value: "React.js" },
      { label: "Backend", value: "Django + DRF" },
      { label: "Database", value: "MySQL" },
      { label: "AI Integration", value: "Gemini API" }
    ]
  },
  {
    id: "nextrade-ecommerce",
    title: "NexTrade – Full-Stack E-Commerce & AI Shopping Platform",
    subtitle: "Enterprise E-Commerce Engine Inspired by Amazon & Flipkart with Smart AI Shopping Assistant",
    category: "Full-Stack & AI",
    highlightBadge: "Full-Stack E-Commerce",
    technologies: ["Python", "Django", "React.js", "MySQL", "REST APIs", "AI Shopping Assistant"],
    problemStatement: "Online retail applications need responsive product catalog browsing, robust order and cart state management, secure payment flows, and conversational AI assistance to help buyers find products quickly.",
    solution: "Engineered NexTrade, a full-stack e-commerce web application featuring user authentication, product search with multi-filter facets, dynamic shopping cart, wishlist, order tracking lifecycle, administrative store management, and an integrated smart AI shopping assistant.",
    keyFeatures: [
      "User Authentication & Profiles: Secure registration, login, profile management, and order history.",
      "Dynamic Shopping Cart & Wishlist: Real-time price calculation, stock reservation, and persistent cart state.",
      "Smart Shopping Assistant: AI-assisted product recommendation and query resolution for shoppers.",
      "Admin Control Panel: Comprehensive backend dashboard for managing inventory, categories, orders, and customer queries.",
      "Relational Data Modeling: Normalized MySQL database schemas enforcing ACID transactional integrity on orders."
    ],
    architectureOverview: "React UI -> Django REST APIs -> MySQL Transaction Store -> Smart AI Recommendation Engine",
    architectureSteps: [
      { step: "1. Responsive Storefront", tech: "React.js", description: "Fast, modern user interface for product discovery, checkout, and order tracking." },
      { step: "2. Backend Services", tech: "Django", description: "Handles authentication, cart calculations, order processing, and administrative controls." },
      { step: "3. Relational Schema", tech: "MySQL", description: "Stores product catalog, variants, customer data, and transaction histories." },
      { step: "4. AI Shopping Agent", tech: "AI Integration", description: "Provides intelligent product guidance and answer queries on product specifications." }
    ],
    githubUrl: "https://github.com/Yashwanth-12-yash/NexTrade",
    stats: [
      { label: "Frontend", value: "React.js" },
      { label: "Backend", value: "Django" },
      { label: "Database", value: "MySQL" },
      { label: "Features", value: "AI Assistant" }
    ]
  },
  {
    id: "mst-global-fashion",
    title: "MST Global Fashion – Scalable Multi-Vendor E-Commerce",
    subtitle: "Multi-Currency Global Fashion Commerce Platform with AI Recommendations & Analytics",
    category: "Web & E-Commerce",
    highlightBadge: "Global Commerce",
    technologies: ["TypeScript", "React", "REST APIs", "Multi-Vendor", "AI Recommendations", "Analytics"],
    problemStatement: "Scaling international fashion retail requires multi-vendor tenant isolation, multi-currency support, tax and international shipping rules, and personalized style recommendations.",
    solution: "Developed MST Global Fashion, a scalable full-stack international fashion marketplace. Built with TypeScript and React, featuring multi-vendor merchant onboarding, localized currency conversions, tax and logistics calculation, automated stock management, and an AI recommendation engine.",
    keyFeatures: [
      "Multi-Vendor Architecture: Dedicated merchant management, product listing pipelines, and payout dashboards.",
      "Multi-Currency & Regional Taxes: Dynamic price conversion and international shipping calculation.",
      "AI-Powered Recommendations: Suggests curated style combinations and trending apparel based on customer preferences.",
      "Real-Time Merchant Analytics: Visual sales summaries, inventory velocity reports, and customer engagement metrics.",
      "Secure REST APIs: Strongly-typed endpoints with comprehensive payload validation."
    ],
    architectureOverview: "TypeScript / React Frontend -> RESTful API Services -> Multi-Vendor Inventory & Currency Engine -> AI Style Recommender",
    architectureSteps: [
      { step: "1. Multi-Device Storefront", tech: "React & TypeScript", description: "Fluid UI optimized for international shopping, filtering by size, color, brand, and currency." },
      { step: "2. Commerce Logic", tech: "REST API Services", description: "Handles checkout transactions, coupon validations, and automated order routing." },
      { step: "3. AI Style Engine", tech: "Recommendation Algorithm", description: "Matches customer browsing patterns with trending fashion catalogs." },
      { step: "4. Merchant Portal", tech: "Analytics Dashboard", description: "Provides merchants with real-time sales figures, order status updates, and returns tracking." }
    ],
    githubUrl: "https://github.com/Yashwanth-12-yash/MST-GLOBAL-FASHION-PROJECT",
    stats: [
      { label: "Type", value: "Multi-Vendor E-Commerce" },
      { label: "Language", value: "TypeScript" },
      { label: "Scope", value: "Global / Multi-Currency" },
      { label: "Intelligence", value: "AI Recommendations" }
    ]
  },
  {
    id: "edulead-crm",
    title: "EduLead CRM – Admission Lead Management System",
    subtitle: "Enterprise Admission Pipeline, Counsellor Routing & Performance Analytics for Educational Institutions",
    category: "Full-Stack & AI",
    highlightBadge: "Enterprise CRM",
    technologies: ["TypeScript", "React", "REST APIs", "Lead Ageing Engine", "Analytics Dashboard"],
    problemStatement: "Educational universities and colleges suffer from missed student leads, lack of counsellor accountability, delayed follow-ups, and inefficient multi-channel marketing attribution.",
    solution: "Built EduLead CRM, an end-to-end admission lifecycle platform. Powers automated lead capture from digital campaigns, intelligent counsellor round-robin allocation, automated lead ageing alerts, student application tracking, conversion rate funnels, and real-time operational analytics.",
    keyFeatures: [
      "Automated Lead Ingestion & Deduplication: Captures student inquiries from multiple web forms and portals.",
      "Intelligent Counsellor Assignment: Distributes inquiries dynamically based on counsellor bandwidth and program specialty.",
      "Lead Ageing & SLA Escalation: Highlights neglected leads with automated notification triggers.",
      "Application Lifecycle Tracking: Tracks status through Inquiry -> Counselling -> Document Verification -> Fee Payment -> Admitted.",
      "Institutional Analytics: Real-time visual metrics measuring conversion ratios, counsellor performance, and campaign ROI."
    ],
    architectureOverview: "React Dashboard -> Business Rules & Assignment Engine -> Data Pipeline -> Real-Time Analytics",
    architectureSteps: [
      { step: "1. Intake Layer", tech: "API Endpoints", description: "Ingests admissions leads with instant validation and duplicate rejection." },
      { step: "2. Routing Engine", tech: "Round-Robin Dispatcher", description: "Assigns prospective students to available admission officers automatically." },
      { step: "3. Ageing Tracking", tech: "Scheduled Evaluators", description: "Monitors response latencies and flags stale leads violating admission SLAs." },
      { step: "4. Executive Visualizer", tech: "Analytics Charts", description: "Surfaces live admissions numbers and conversion funnels to institutional leadership." }
    ],
    githubUrl: "https://github.com/Yashwanth-12-yash/EduLead-CRM-Admission-Lead-Management-Systems",
    stats: [
      { label: "Domain", value: "EdTech CRM" },
      { label: "Frontend", value: "TypeScript / React" },
      { label: "Key Feature", value: "Lead Ageing Engine" },
      { label: "Analytics", value: "Real-time Funnels" }
    ]
  },
  {
    id: "diabetes-prediction-ml",
    title: "Diabetes Prediction Using Machine Learning",
    subtitle: "Comparative Predictive Modeling Pipeline on the Pima Indians Dataset",
    category: "Machine Learning",
    highlightBadge: "Predictive Analytics",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    problemStatement: "Early identification of diabetes risk using non-invasive clinical indicators requires robust classification models that handle biological data skews, missing zero-values, and class imbalances.",
    solution: "Engineered an end-to-end machine learning classification pipeline on the Pima Indians Diabetes dataset. Executed comprehensive exploratory data analysis (EDA), imputed biologically impossible zero-values (glucose, blood pressure, insulin, BMI), performed feature scaling, and trained a battery of candidate algorithms. Systematically benchmarked Logistic Regression, K-Nearest Neighbors (KNN), Naive Bayes, and Random Forest using rigorous classification metrics.",
    keyFeatures: [
      "Rigorous Data Preprocessing: Detected and treated masked missing values in physiological measurements.",
      "Exploratory Data Analysis: Analyzed feature correlation matrices, distributions, and feature importance.",
      "Multi-Model Benchmarking: Trained and evaluated Logistic Regression, KNN, Gaussian Naive Bayes, and Random Forest.",
      "Holistic Evaluation: Evaluated models across Accuracy, Precision, Recall, F1-Score, and ROC-AUC curves to ensure high clinical sensitivity.",
      "Reproducible Workflow: Clean Python scripts utilizing Scikit-learn pipelines to prevent data leakage during scaling and validation."
    ],
    architectureOverview: "Raw Dataset -> Cleaning & Zero Imputation -> Feature Scaling -> Model Training (LR, KNN, NB, RF) -> Comparative Metric Evaluation",
    architectureSteps: [
      { step: "1. Data Acquisition & Inspection", tech: "Pandas", description: "Loaded Pima Indians dataset, inspected data types and statistical distribution anomalies." },
      { step: "2. Biological Imputation", tech: "NumPy & Scikit-learn", description: "Replaced erroneous 0-values in insulin/glucose/BMI with robust statistical medians." },
      { step: "3. Feature Normalization", tech: "StandardScaler", description: "Standardized numerical features to zero mean and unit variance for distance-based models." },
      { step: "4. Multi-Model Training", tech: "Scikit-learn", description: "Simultaneously trained Logistic Regression, KNN, Naive Bayes, and Random Forest." },
      { step: "5. Metric Benchmarking", tech: "Matplotlib & Scikit-learn", description: "Compared ROC-AUC, Precision-Recall trade-offs, and confusion matrix diagnostics." }
    ],
    githubUrl: "https://github.com/Yashwanth-12-yash/Diabetes-Prediction-ML",
    stats: [
      { label: "Algorithms Tested", value: "LR, KNN, NB, RF" },
      { label: "Framework", value: "Scikit-learn" },
      { label: "Data Processing", value: "NumPy & Pandas" },
      { label: "Visualization", value: "Matplotlib" }
    ]
  },
  {
    id: "iris-flower-classification",
    title: "Iris Flower Species Classification",
    subtitle: "Supervised Multiclass Classification Machine Learning Pipeline",
    category: "Machine Learning",
    highlightBadge: "Supervised ML",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    problemStatement: "Evaluating algorithmic discrimination boundaries for multiclass botanical datasets requires balanced feature representation and clear decision surfaces.",
    solution: "Implemented an end-to-end multiclass classification model using Scikit-learn to classify Iris species (Setosa, Versicolor, Virginica) based on sepal and petal physical dimensions. Generated pairplots, correlation matrices, decision boundary visualizations, and evaluated cross-validation accuracy.",
    keyFeatures: [
      "Multiclass Classification: Modeled nonlinear boundaries separating botanical species.",
      "Exploratory Visualization: Seaborn pairplots and boxplots highlighting morphological separation.",
      "Validation Metrics: Classification reports featuring macro/weighted F1-scores and confusion matrix heatmaps."
    ],
    architectureOverview: "Botanical Dataset -> Exploratory Visualization -> Feature Scaling -> Classifier Training -> Cross-Validation",
    githubUrl: "https://github.com/Yashwanth-12-yash/Iris-Flower-Classification",
    stats: [
      { label: "Model Type", value: "Multiclass Classification" },
      { label: "Toolkit", value: "Scikit-learn" },
      { label: "Dataset", value: "Iris Morphometrics" }
    ]
  },
  {
    id: "color-detection-cv",
    title: "Real-Time Color Detection with Computer Vision",
    subtitle: "Interactive Image Processing & Exact RGB/HSV Color Extraction System",
    category: "Computer Vision & Tools",
    highlightBadge: "Computer Vision",
    technologies: ["Python", "OpenCV", "NumPy", "Image Processing"],
    problemStatement: "Identifying exact color names and chromatic coordinates in diverse image lighting conditions is computationally challenging without interactive color space mapping.",
    solution: "Engineered a Python computer vision application using OpenCV that enables real-time color identification. Calculates the Euclidean distance between clicked pixel RGB coordinates and standard color space datasets, dynamically outputting the color name, hexadecimal code, and brightness parameters on an interactive display window.",
    keyFeatures: [
      "OpenCV Mouse Event Handling: Instantaneous pixel RGB coordinate capture upon click.",
      "Minimum Distance Color Mapping: Euclidean distance matching across a comprehensive chromatic dataset.",
      "Dynamic GUI Overlay: Real-time dynamic banner updating with color name, contrasting text, and RGB values."
    ],
    architectureOverview: "Image Load -> OpenCV Event Loop -> Coordinate Extraction -> Chromatic Distance Formula -> Dynamic Overlay Display",
    githubUrl: "https://github.com/Yashwanth-12-yash/color-detection-python",
    stats: [
      { label: "CV Library", value: "OpenCV" },
      { label: "Core Math", value: "Euclidean Color Distance" },
      { label: "Language", value: "Python" }
    ]
  },
  {
    id: "student-score-validator",
    title: "Student Score Validator & Performance Engine",
    subtitle: "Automated Academic Data Validation, Grade Distribution & Anomaly Detection Tool",
    category: "Computer Vision & Tools",
    highlightBadge: "Python Utility",
    technologies: ["Python", "Data Validation", "Algorithms", "Error Handling"],
    problemStatement: "Manual academic grading data entry often introduces out-of-range scores, type errors, and missing records that corrupt batch grade distributions.",
    solution: "Created an automated academic validation script in Python that parses raw examination records, enforces schema boundaries (0-100 score bounds, credit weighting rules), detects statistical outliers, and generates clean performance reports.",
    keyFeatures: [
      "Defensive Data Validation: Bounds checking, type casting, and structured error logging.",
      "Grade Distribution Computation: Automatic GPA and percentile calculations.",
      "Modular Python Architecture: Reusable functions ready to embed into larger SIS (Student Information Systems)."
    ],
    architectureOverview: "Raw Grade Data -> Schema Validation -> Outlier Filtering -> Performance Metrics Engine -> Verified Output",
    githubUrl: "https://github.com/Yashwanth-12-yash/student_score_-validator",
    stats: [
      { label: "Focus", value: "Data Integrity & Validation" },
      { label: "Language", value: "Python" },
      { label: "Pattern", value: "Defensive Programming" }
    ]
  },
  {
    id: "ds-numpy-pandas-practice",
    title: "Data Science & Numerical Computing Repositories",
    subtitle: "Hands-on Exploratory Analysis & Multi-Dimensional Array Manipulation Labs",
    category: "Machine Learning",
    highlightBadge: "Data Science Labs",
    technologies: ["Python", "NumPy", "Pandas", "Jupyter Notebook", "Vectorization"],
    problemStatement: "Mastery of advanced data science workflows requires rigorous foundational practice in vectorized broadcasting, DataFrame merging, pivoting, and memory-efficient data slicing.",
    solution: "Created comprehensive practical repositories exploring NumPy multi-dimensional array operations, linear algebra routines, broadcasting mechanics, alongside Pandas DataFrame cleaning, indexing, aggregation, time series manipulation, and statistical transformations.",
    keyFeatures: [
      "NumPy Matrix Operations: Vectorized computing avoiding slow Python loops.",
      "Pandas Transformation Workflows: Multi-index handling, groupby aggregations, and missing data strategies.",
      "Exploratory Notebooks: Documented Jupyter notebooks demonstrating clean data science best practices."
    ],
    architectureOverview: "Raw Series/Arrays -> Vectorized Transformations -> Aggregation & Filtering -> Statistical Insights",
    githubUrl: "https://github.com/Yashwanth-12-yash/NumPy-Practice",
    stats: [
      { label: "Topics", value: "NumPy & Pandas" },
      { label: "Format", value: "Jupyter Notebooks" },
      { label: "Core Concept", value: "Vectorization & EDA" }
    ]
  }
];

export const ARCHITECTURE_PIPELINE: ArchitectureNode[] = [
  {
    id: "client-request",
    title: "1. Client & Document Ingestion",
    subtitle: "React.js Frontend",
    category: "frontend",
    details: [
      "Responsive React interface with drag-and-drop PDF upload.",
      "Client-side file validation (size, MIME type, page limits).",
      "Asynchronous query streaming and UI state management."
    ],
    codeSnippet: `// React Upload Hook
const handleDocumentUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('document', file);
  const response = await api.post('/api/v1/documents/upload', formData);
  return response.data.document_id;
};`
  },
  {
    id: "api-gateway",
    title: "2. API Gateway & Validation",
    subtitle: "FastAPI Backend",
    category: "gateway",
    details: [
      "FastAPI async routes for non-blocking I/O operations.",
      "Pydantic schemas for strict payload validation.",
      "CORS headers and exception handling middleware."
    ],
    codeSnippet: `@app.post("/api/v1/query", response_model=QueryResponse)
async def query_document(payload: QueryRequest):
    # Asynchronous query handling
    results = await rag_service.query_hybrid(
        doc_id=payload.document_id,
        query=payload.query
    )
    return results`
  },
  {
    id: "chunking",
    title: "3. Parsing & Semantic Chunking",
    subtitle: "LangChain Document Splitter",
    category: "processor",
    details: [
      "Extracts text stream from multi-page PDFs cleanly.",
      "LangChain RecursiveCharacterTextSplitter for logical boundaries.",
      "Chunk size: 500 characters, Chunk overlap: 50 characters to prevent loss of context."
    ],
    codeSnippet: `text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\\n\\n", "\\n", " ", ""]
)
chunks = text_splitter.split_documents(pdf_docs)`
  },
  {
    id: "indexing",
    title: "4. Dual Indexing: FAISS & BM25",
    subtitle: "Dense Embeddings + Sparse Index",
    category: "retrieval",
    details: [
      "High-dimensional dense vector embeddings generated for semantic context.",
      "FAISS (Facebook AI Similarity Search) index for fast L2 distance lookup.",
      "Parallel BM25 sparse index built for exact keyword matching (codes, names, technical IDs)."
    ],
    codeSnippet: `# Dense Semantic Vector Indexing
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
vector_store = FAISS.from_documents(chunks, embeddings)

# Sparse Lexical BM25 Indexing
bm25_retriever = BM25Retriever.from_documents(chunks)
bm25_retriever.k = 4`
  },
  {
    id: "hybrid-retrieval",
    title: "5. Hybrid Retrieval & Reranking",
    subtitle: "Ensemble Scoring",
    category: "retrieval",
    details: [
      "Combines dense similarity scores with sparse BM25 keyword rankings.",
      "Mitigates pure vector search blindspots on uncommon or technical keywords.",
      "Selects top-k most relevant and diverse context passages."
    ],
    codeSnippet: `# Hybrid Ensemble Retrieval
ensemble_retriever = EnsembleRetriever(
    retrievers=[vector_store.as_retriever(search_kwargs={"k": 4}), bm25_retriever],
    weights=[0.6, 0.4] # 60% semantic, 40% lexical
)
relevant_docs = ensemble_retriever.get_relevant_documents(user_query)`
  },
  {
    id: "llm-generation",
    title: "6. Grounded Context Synthesis",
    subtitle: "Google Gemini API",
    category: "llm",
    details: [
      "Injects top retrieved passages into strict system prompt template.",
      "Instruction guardrails enforce: 'Answer strictly from context, do not hallucinate'.",
      "Outputs synthesized, cited, and accurate answer to client."
    ],
    codeSnippet: `system_prompt = """
You are an expert technical assistant. Answer the user's question 
strictly using the retrieved context below. If the answer is not in 
the context, state clearly that the document does not contain this information.

Context:
{context}

Question: {question}
Answer:"""`
  }
];

export const EXPERIENCE_EDUCATION: ExperienceItem[] = [
  {
    id: "data-science-intern",
    type: "experience",
    organization: "Palle Technologies",
    location: "Bengaluru, Karnataka, India",
    role: "Data Science Intern",
    duration: "Internship",
    responsibilities: [
      "Preprocessed datasets and performed exploratory data analysis (EDA) using Python, NumPy, Pandas, and Matplotlib.",
      "Applied supervised and unsupervised learning techniques to real-world datasets for predictive analysis.",
      "Built complete ML workflows covering feature engineering, model training, performance comparison, and evaluation metrics."
    ],
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Exploratory Data Analysis"],
    keyOutcome: "Engineered robust predictive pipelines with rigorous data cleaning, feature selection, and model evaluation."
  },
  {
    id: "python-fullstack-trainee",
    type: "experience",
    organization: "Palle Technologies",
    location: "Bengaluru, Karnataka, India",
    role: "Python Full Stack Trainee",
    duration: "Training Program",
    responsibilities: [
      "Developed full-stack web applications using Python, Django, SQL, HTML, CSS, and JavaScript.",
      "Built database-driven features and integrated backend logic with user-facing interfaces.",
      "Practiced end-to-end application development, relational database design, and debugging through hands-on projects."
    ],
    technologies: ["Python", "Django", "SQL", "HTML", "CSS", "JavaScript", "Relational Databases"],
    keyOutcome: "Mastered full-stack application lifecycle, RESTful architectural patterns, and relational data modeling."
  },
  {
    id: "education-degree",
    type: "education",
    organization: "Ghousia College of Engineering, Ramanagara",
    location: "Ramanagara, Karnataka, India (VTU)",
    role: "Bachelor of Engineering – Information Science and Engineering",
    duration: "2022 – 2026",
    cgpaOrScore: "8.1 CGPA",
    responsibilities: [
      "Graduating in Information Science and Engineering under Visvesvaraya Technological University (VTU).",
      "Core coursework: Data Structures and Algorithms, Database Management Systems, Object-Oriented Programming, Artificial Intelligence, Machine Learning, Computer Networks, and Software Engineering.",
      "Maintained a strong cumulative grade point average of 8.1 / 10."
    ],
    technologies: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Python", "OOP"],
    keyOutcome: "Strong theoretical foundations in computer science coupled with practical AI and software engineering skills."
  }
];

export const GITHUB_DATA = {
  username: "Yashwanth-12-yash",
  profileUrl: "https://github.com/Yashwanth-12-yash",
  bio: "AI Engineer & Python Full Stack Developer specializing in Generative AI, RAG Systems, FastAPI, and Machine Learning.",
  allRepos: [
    {
      name: "-Enterprise-RAG-Chatbot",
      description: "AI-powered PDF Question Answering using RAG, FAISS, BM25, FastAPI and Gemini API.",
      url: "https://github.com/Yashwanth-12-yash/-Enterprise-RAG-Chatbot",
      language: "Python",
      languageColor: "#3572A5",
      category: "Generative AI",
      topics: ["rag", "langchain", "faiss", "fastapi", "gemini-api", "hybrid-search"]
    },
    {
      name: "TCS-RAG-Chatbot",
      description: "Generative AI-powered TCS chatbot using Retrieval-Augmented Generation (RAG) to answer questions from relevant documents and provide context-aware LLM responses.",
      url: "https://github.com/Yashwanth-12-yash/TCS-RAG-Chatbot",
      language: "Python",
      languageColor: "#3572A5",
      category: "Generative AI",
      topics: ["rag", "generative-ai", "llm", "document-qa", "langchain"]
    },
    {
      name: "helpdesk-it-support-system",
      description: "Enterprise HelpDesk and IT Support Ticket Management System built with Django REST Framework, React, MySQL, and Google Gemini AI.",
      url: "https://github.com/Yashwanth-12-yash/helpdesk-it-support-system",
      language: "Python",
      languageColor: "#3572A5",
      category: "Full-Stack & AI",
      topics: ["django", "react", "rest-api", "gemini-ai", "mysql", "rbac", "sla"]
    },
    {
      name: "NexTrade",
      description: "Modern full-stack e-commerce web application inspired by Flipkart and Amazon with React, Django, MySQL, and AI-powered shopping features.",
      url: "https://github.com/Yashwanth-12-yash/NexTrade",
      language: "Python",
      languageColor: "#3572A5",
      category: "Full-Stack & AI",
      topics: ["django", "react", "ecommerce", "mysql", "ai-assistant"]
    },
    {
      name: "MST-GLOBAL-FASHION-PROJECT",
      description: "Scalable full-stack global fashion e-commerce platform with multi-vendor, inventory, multi-currency, AI recommendations, and REST APIs.",
      url: "https://github.com/Yashwanth-12-yash/MST-GLOBAL-FASHION-PROJECT",
      language: "TypeScript",
      languageColor: "#3178c6",
      category: "Web & E-Commerce",
      topics: ["typescript", "react", "ecommerce", "multi-vendor", "ai-recommendations"]
    },
    {
      name: "EduLead-CRM-Admission-Lead-Management-Systems",
      description: "Full-stack Admission Lead Management System for educational institutions managing counsellor routing, lead ageing, applications, and analytics.",
      url: "https://github.com/Yashwanth-12-yash/EduLead-CRM-Admission-Lead-Management-Systems",
      language: "TypeScript",
      languageColor: "#3178c6",
      category: "Full-Stack & AI",
      topics: ["typescript", "react", "crm", "lead-management", "analytics"]
    },
    {
      name: "Diabetes-Prediction-ML",
      description: "Machine Learning project for predicting diabetes using the Pima Indians Diabetes Dataset with Scikit-learn comparative modeling.",
      url: "https://github.com/Yashwanth-12-yash/Diabetes-Prediction-ML",
      language: "Jupyter Notebook",
      languageColor: "#DA5B0B",
      category: "Machine Learning",
      topics: ["machine-learning", "scikit-learn", "pandas", "eda", "classification"]
    },
    {
      name: "Iris-Flower-Classification",
      description: "Supervised multiclass machine learning classification model predicting Iris species based on sepal and petal dimensions.",
      url: "https://github.com/Yashwanth-12-yash/Iris-Flower-Classification",
      language: "Jupyter Notebook",
      languageColor: "#DA5B0B",
      category: "Machine Learning",
      topics: ["machine-learning", "scikit-learn", "classification", "iris-dataset"]
    },
    {
      name: "color-detection-python",
      description: "Real-time color identification from images calculating Euclidean RGB distance to label color names using OpenCV and Python.",
      url: "https://github.com/Yashwanth-12-yash/color-detection-python",
      language: "Python",
      languageColor: "#3572A5",
      category: "Computer Vision & Tools",
      topics: ["opencv", "computer-vision", "image-processing", "python"]
    },
    {
      name: "student_score_-validator",
      description: "Python utility for academic score validation, data integrity checks, and student performance metrics computation.",
      url: "https://github.com/Yashwanth-12-yash/student_score_-validator",
      language: "Python",
      languageColor: "#3572A5",
      category: "Computer Vision & Tools",
      topics: ["python", "data-validation", "grading-system"]
    },
    {
      name: "NumPy-Practice & pandas-practice",
      description: "Comprehensive data science and exploratory data analysis notebooks covering matrix vectorization and dataset transformations.",
      url: "https://github.com/Yashwanth-12-yash/NumPy-Practice",
      language: "Jupyter Notebook",
      languageColor: "#DA5B0B",
      category: "Machine Learning",
      topics: ["numpy", "pandas", "data-science", "eda"]
    }
  ],
  languages: [
    { name: "Python", percent: 64, color: "#3b82f6" },
    { name: "TypeScript / React", percent: 22, color: "#3178c6" },
    { name: "Jupyter Notebooks", percent: 9, color: "#DA5B0B" },
    { name: "SQL & HTML/CSS", percent: 5, color: "#06b6d4" }
  ]
};
