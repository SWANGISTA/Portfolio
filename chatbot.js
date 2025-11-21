// Chatbot Knowledge Base - Information about Clifford Maswanganye
const knowledgeBase = {
    name: "Clifford Maswanganye",
    role: "Backend Developer & Software Engineer",
    education: {
        degree: "Diploma in Science in Computer Science",
        institution: "Tshwane University of Technology",
        period: "2021 - 2024",
        focus: "Java and backend development"
    },
    experience: {
        current: {
            position: "Software Developer Intern",
            company: "Gijima",
            startDate: "August 2024",
            responsibilities: [
                "Developing business applications using Microsoft Power Apps and SharePoint",
                "Building backend services and APIs for enterprise solutions",
                "Collaborating with cross-functional teams on software development projects",
                "Implementing data integration and automation workflows"
            ]
        }
    },
    skills: {
        backend: ["Java", "Spring Boot", "Python", "RESTful APIs"],
        databases: ["MySQL", "PostgreSQL", "MongoDB"],
        tools: ["Git", "GitHub", "Docker", "Power Apps", "SharePoint", "Visual Studio Code", "NetBeans", "Android Studio"],
        machineLearning: ["TensorFlow", "Scikit-learn", "Data Analysis"],
        frontend: ["React", "JavaScript", "HTML", "CSS"]
    },
    projects: [
        {
            name: "OH Survey Application",
            description: "Full-stack survey management system built with React frontend and Spring Boot backend",
            technologies: ["React", "Spring Boot", "Java", "MySQL"]
        },
        {
            name: "Machine Learning Projects",
            description: "Collection of ML projects including predictive models and classification algorithms",
            technologies: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"]
        },
        {
            name: "Enterprise REST API",
            description: "Scalable RESTful API with JWT authentication and role-based access control",
            technologies: ["Spring Boot", "JWT", "PostgreSQL", "Docker"]
        },
        {
            name: "Power Apps Solutions",
            description: "Custom business applications using Microsoft Power Apps and SharePoint",
            technologies: ["Power Apps", "SharePoint", "Power Automate", "Microsoft 365"]
        }
    ],
    location: "Pretoria, South Africa",
    github: "https://github.com/swangista",
    interests: ["Backend Development", "Machine Learning", "Cloud Computing", "Enterprise Solutions"]
};

// AI-like Response Generator
class ChatbotAI {
    constructor() {
        this.context = [];
        this.greetings = ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening"];
    }

    // Main function to process user input and generate response
    getResponse(userInput) {
        const input = userInput.toLowerCase().trim();

        // Store context
        this.context.push(input);

        // Check for greetings
        if (this.greetings.some(greeting => input.includes(greeting))) {
            return this.getGreetingResponse();
        }

        // Check for name-related questions
        if (input.includes("name") || input.includes("who are you") || input.includes("who is")) {
            return this.getNameResponse();
        }

        // Check for education questions
        if (input.includes("education") || input.includes("study") || input.includes("university") ||
            input.includes("diploma") || input.includes("degree") || input.includes("school")) {
            return this.getEducationResponse();
        }

        // Check for experience questions
        if (input.includes("experience") || input.includes("work") || input.includes("job") ||
            input.includes("intern") || input.includes("gijima") || input.includes("company")) {
            return this.getExperienceResponse();
        }

        // Check for skills questions
        if (input.includes("skill") || input.includes("technology") || input.includes("tech stack") ||
            input.includes("know") || input.includes("language") || input.includes("framework")) {
            return this.getSkillsResponse();
        }

        // Check for backend-specific questions
        if (input.includes("backend") || input.includes("server") || input.includes("api") ||
            input.includes("spring boot") || input.includes("java")) {
            return this.getBackendResponse();
        }

        // Check for database questions
        if (input.includes("database") || input.includes("mysql") || input.includes("sql") ||
            input.includes("postgresql") || input.includes("mongodb")) {
            return this.getDatabaseResponse();
        }

        // Check for machine learning questions
        if (input.includes("machine learning") || input.includes("ml") || input.includes("ai") ||
            input.includes("tensorflow") || input.includes("data")) {
            return this.getMLResponse();
        }

        // Check for project questions
        if (input.includes("project") || input.includes("portfolio") || input.includes("built") ||
            input.includes("created") || input.includes("developed")) {
            return this.getProjectsResponse();
        }

        // Check for contact questions
        if (input.includes("contact") || input.includes("email") || input.includes("reach") ||
            input.includes("github") || input.includes("linkedin")) {
            return this.getContactResponse();
        }

        // Check for location questions
        if (input.includes("location") || input.includes("where") || input.includes("live") ||
            input.includes("from") || input.includes("based")) {
            return this.getLocationResponse();
        }

        // Check for "what can you do" type questions
        if (input.includes("what can") || input.includes("help") || input.includes("tell me about")) {
            return this.getCapabilitiesResponse();
        }

        // Default response for unrecognized questions
        return this.getDefaultResponse();
    }

    getGreetingResponse() {
        const greetings = [
            `Hello! I'm Clifford's AI assistant. I can answer questions about his background, skills, experience, and projects. What would you like to know?`,
            `Hi there! I'm here to help you learn more about Clifford Maswanganye. Feel free to ask me anything about his work, education, or projects!`,
            `Hey! Thanks for visiting. I can tell you all about Clifford's journey as a backend developer. What interests you?`
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    getNameResponse() {
        return `His name is ${knowledgeBase.name}. He's a ${knowledgeBase.role} based in ${knowledgeBase.location}. He specializes in building robust backend systems using Java, Spring Boot, and modern technologies.`;
    }

    getEducationResponse() {
        const edu = knowledgeBase.education;
        return `Clifford holds a ${edu.degree} from ${edu.institution} (${edu.period}). During his studies, he focused on ${edu.focus}, completing projects involving JEE and MySQL, and collaborated on team projects using Agile methodologies.`;
    }

    getExperienceResponse() {
        const exp = knowledgeBase.experience.current;
        return `Clifford is currently working as a ${exp.position} at ${exp.company} since ${exp.startDate}. His key responsibilities include:\n\n` +
               exp.responsibilities.map(r => `• ${r}`).join('\n') +
               `\n\nHe's gaining valuable hands-on experience with enterprise technologies and backend systems.`;
    }

    getSkillsResponse() {
        const skills = knowledgeBase.skills;
        return `Clifford has a diverse skill set:\n\n` +
               `**Backend Development:** ${skills.backend.join(', ')}\n\n` +
               `**Databases:** ${skills.databases.join(', ')}\n\n` +
               `**Tools & Technologies:** ${skills.tools.join(', ')}\n\n` +
               `**Machine Learning:** ${skills.machineLearning.join(', ')}\n\n` +
               `**Frontend (Supporting):** ${skills.frontend.join(', ')}\n\n` +
               `He's particularly strong in backend development with Java and Spring Boot!`;
    }

    getBackendResponse() {
        return `Clifford specializes in backend development! He's proficient in:\n\n` +
               `• **Java & Spring Boot** - Building enterprise-grade REST APIs\n` +
               `• **RESTful API Design** - Creating scalable server-side applications\n` +
               `• **Database Integration** - Working with MySQL, PostgreSQL, and MongoDB\n` +
               `• **Authentication & Security** - Implementing JWT and role-based access control\n` +
               `• **Microservices** - Designing distributed systems\n\n` +
               `He's passionate about creating efficient, scalable backend solutions!`;
    }

    getDatabaseResponse() {
        return `Clifford has strong database skills! He works with:\n\n` +
               `• **MySQL** - His primary database, used extensively in projects\n` +
               `• **PostgreSQL** - For enterprise applications requiring advanced features\n` +
               `• **MongoDB** - NoSQL database for flexible data structures\n\n` +
               `He has experience with database design, optimization, and integration with Spring Boot applications.`;
    }

    getMLResponse() {
        return `Clifford has been introduced to Machine Learning and has completed several ML projects! His experience includes:\n\n` +
               `• Predictive models and classification algorithms\n` +
               `• Data analysis and preprocessing\n` +
               `• Working with TensorFlow and Scikit-learn\n` +
               `• Building ML solutions using Python\n\n` +
               `He's continuously expanding his knowledge in this exciting field!`;
    }

    getProjectsResponse() {
        return `Clifford has worked on several impressive projects:\n\n` +
               knowledgeBase.projects.map(p =>
                   `**${p.name}**\n${p.description}\nTech: ${p.technologies.join(', ')}\n`
               ).join('\n') +
               `\nYou can explore more of his work on his GitHub profile!`;
    }

    getContactResponse() {
        return `You can reach Clifford through:\n\n` +
               `📧 **Email:** Use the contact form on this website\n` +
               `💼 **GitHub:** ${knowledgeBase.github}\n` +
               `💼 **LinkedIn:** Check the social links on the homepage\n` +
               `📍 **Location:** ${knowledgeBase.location}\n\n` +
               `Feel free to connect with him for opportunities or collaborations!`;
    }

    getLocationResponse() {
        return `Clifford is based in ${knowledgeBase.location}. He's open to both local and remote opportunities in backend development and software engineering.`;
    }

    getCapabilitiesResponse() {
        return `I can help you learn about Clifford! You can ask me about:\n\n` +
               `• His education and background\n` +
               `• Work experience and current role at Gijima\n` +
               `• Technical skills (Java, Spring Boot, databases, etc.)\n` +
               `• Projects he's built\n` +
               `• Machine learning experience\n` +
               `• How to contact him\n\n` +
               `Just ask me anything you'd like to know!`;
    }

    getDefaultResponse() {
        const responses = [
            `That's an interesting question! I'm designed to answer questions about Clifford's background, skills, and experience. Could you rephrase your question, or ask about his education, work experience, or technical skills?`,
            `I'm not sure I understand that question. I can tell you about Clifford's education, work at Gijima, technical skills, or projects. What would you like to know?`,
            `Hmm, I don't have specific information about that. Try asking about his backend development skills, projects, or experience with Java and Spring Boot!`,
            `I'm here to help you learn about Clifford Maswanganye! Ask me about his education, work experience, skills, or any of his projects.`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Chatbot UI Controller
class ChatbotUI {
    constructor() {
        this.ai = new ChatbotAI();
        this.isOpen = false;
        this.messageCount = 0;
        this.init();
    }

    init() {
        this.createChatbotHTML();
        this.attachEventListeners();
        this.showWelcomeMessage();
    }

    createChatbotHTML() {
        const chatbotHTML = `
            <div class="chatbot-container" id="chatbotContainer">
                <div class="chatbot-header">
                    <div class="chatbot-header-content">
                        <div class="chatbot-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="chatbot-header-text">
                            <h3>Ask Me Anything</h3>
                            <p class="chatbot-status">Online</p>
                        </div>
                    </div>
                    <button class="chatbot-close" id="chatbotClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="chatbot-messages" id="chatbotMessages">
                    <!-- Messages will be appended here -->
                </div>
                <div class="chatbot-input-container">
                    <input
                        type="text"
                        class="chatbot-input"
                        id="chatbotInput"
                        placeholder="Ask about Clifford's experience, skills, projects..."
                        autocomplete="off"
                    >
                    <button class="chatbot-send" id="chatbotSend">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
                <div class="chatbot-suggestions" id="chatbotSuggestions">
                    <button class="suggestion-chip" data-message="What are your skills?">
                        <i class="fas fa-code"></i> Skills
                    </button>
                    <button class="suggestion-chip" data-message="Tell me about your projects">
                        <i class="fas fa-project-diagram"></i> Projects
                    </button>
                    <button class="suggestion-chip" data-message="What's your experience?">
                        <i class="fas fa-briefcase"></i> Experience
                    </button>
                </div>
            </div>
            <button class="chatbot-toggle" id="chatbotToggle">
                <i class="fas fa-comments"></i>
                <span class="chatbot-badge">1</span>
            </button>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        const toggle = document.getElementById('chatbotToggle');
        const close = document.getElementById('chatbotClose');
        const send = document.getElementById('chatbotSend');
        const input = document.getElementById('chatbotInput');
        const suggestions = document.querySelectorAll('.suggestion-chip');

        toggle.addEventListener('click', () => this.toggleChat());
        close.addEventListener('click', () => this.toggleChat());
        send.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        suggestions.forEach(chip => {
            chip.addEventListener('click', () => {
                const message = chip.getAttribute('data-message');
                input.value = message;
                this.sendMessage();
            });
        });
    }

    toggleChat() {
        const container = document.getElementById('chatbotContainer');
        const toggle = document.getElementById('chatbotToggle');
        const badge = toggle.querySelector('.chatbot-badge');

        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            container.classList.add('active');
            toggle.classList.add('active');
            badge.style.display = 'none';
            document.getElementById('chatbotInput').focus();
        } else {
            container.classList.remove('active');
            toggle.classList.remove('active');
        }
    }

    showWelcomeMessage() {
        setTimeout(() => {
            this.addMessage(
                `Hi! I'm Clifford's AI assistant. I can answer questions about his background, skills, experience, and projects. What would you like to know?`,
                'bot'
            );
        }, 500);
    }

    sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();

        if (message === '') return;

        // Add user message
        this.addMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Get AI response after a short delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.ai.getResponse(message);
            this.addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}-message`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'bot'
            ? '<i class="fas fa-robot"></i>'
            : '<i class="fas fa-user"></i>';

        const content = document.createElement('div');
        content.className = 'message-content';

        // Format the text (convert line breaks and bold text)
        const formattedText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');

        content.innerHTML = formattedText;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        messagesContainer.appendChild(messageDiv);

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Animate message entrance
        setTimeout(() => {
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 10);
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot-message typing-indicator';
        typingDiv.id = 'typingIndicator';

        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;

        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatbotUI();
});