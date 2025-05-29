function switchLanguage(lang) {
    const t = translations[lang];

    // Helper function to safely update element text
    function updateElementText(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = text;
        }
    }

    // Helper function to safely update element attribute
    function updateElementAttribute(id, attr, value) {
        const element = document.getElementById(id);
        if (element) {
            element.setAttribute(attr, value);
        }
    }

    // Hero section
    updateElementText("text-greeting", t.greeting);
    updateElementText("text-intro", t.intro);
    updateElementText("text-learn-more", t.learnMore);
    updateElementText("text-contact", t.contactTitle);

    // About section
    updateElementText("text-about-title", t.aboutMe);
    updateElementText("text-about-desc", t.aboutDescription);
    updateElementText("text-highlight-title1", t.highlightCleanCode);
    updateElementText("text-highlight-desc1", t.highlightCleanCodeDesc);
    updateElementText("text-highlight-title2", t.highlightRobustSolutions);
    updateElementText("text-highlight-desc2", t.highlightRobustSolutionsDesc);
    updateElementText("text-highlight-title3", t.highlightFastLearner);
    updateElementText("text-highlight-desc3", t.highlightFastLearnerDesc);

    // Career section
    updateElementText("text-career-title", t.careerTitle);
    updateElementText("text-job-title-1", t.job1Title);
    updateElementText("text-company-1", t.job1Company);
    updateElementText("text-job1-duration", t.job1Duration);
    updateElementText("text-job1-desc1", t.job1Description1);
    updateElementText("text-job1-desc2", t.job1Description2);
    updateElementText("text-job1-desc3", t.job1Description3);
    updateElementText("text-job1-desc4", t.job1Description4);
    updateElementText("text-job-title-2", t.job2Title);
    updateElementText("text-job2-duration", t.job2Duration);
    updateElementText("text-company-2", t.job2Company);
    updateElementText("text-job2-desc1", t.job2Description1);
    updateElementText("text-job2-desc2", t.job2Description2);
    updateElementText("text-job2-desc3", t.job2Description3);
    updateElementText("text-job2-desc4", t.job2Description4);

    // Tech stack section
    updateElementText("text-tech-title", t.techStackTitle);
    updateElementText("text-tech-programming-languages", t.programmingLanguages);
    updateElementText("text-tech-frameworks", t.frameworks);
    updateElementText("text-tech-tools-and-databases", t.toolsAndDatabases);

    // Education section
    updateElementText("text-education-title", t.educationTitle);
    updateElementText("text-master-title", t.masterTitle);
    updateElementText("text-master-university-name", t.masterUniversityName);
    updateElementText("text-master-graduation", t.masterGrade);
    updateElementText("text-master-thesis-title", t.masterThesisTitle);
    updateElementText("text-master-thesis-download", t.masterThesisDownload);
    updateElementText("text-master-graduation-year", t.masterGraduationYear);
    updateElementText("text-bachelor-title", t.bachelorTitle);
    updateElementText("text-bachelor-university-name", t.bachelorUniversityName);
    updateElementText("text-bachelor-graduation", t.bachelorGrade);
    updateElementText("text-bachelor-thesis-title", t.bachelorThesisTitle);
    updateElementText("text-bachelor-thesis-download", t.bachelorThesisDownload);
    updateElementText("text-bachelor-graduation-year", t.bachelorGraduationYear);

    // Projects section
    updateElementText("text-portfolio-title", t.portfolioTitle);
    updateElementText("text-project-title1", t.projectTitle1);
    updateElementText("text-project-desc1", t.projectDesc1);
    updateElementText("text-project-link1", t.projectLink);

    // Update other project elements
    updateElementText("text-project-title2", t.projectTitle2);
    updateElementText("text-project-desc2", t.projectDesc2);
    updateElementText("text-project-link2", t.projectLink);

    updateElementText("text-project-title3", t.projectTitle3);
    updateElementText("text-project-desc3", t.projectDesc3);
    updateElementText("text-project-link3", t.projectLink);

    updateElementText("text-project-title4", t.projectTitle4);
    updateElementText("text-project-desc4", t.projectDesc4);
    updateElementText("text-project-link4", t.projectLink);

    // Photography section
    updateElementText("text-photo-title", t.photoTitle);
    updateElementText("text-photo-desc", t.photoDesc);
    updateElementText("text-photo-card-title", t.photoCardTitle);
    updateElementText("text-img01-caption", t.photo01Caption);
    updateElementText("text-img02-caption", t.photo02Caption);
    updateElementText("text-img03-caption", t.photo03Caption);
    updateElementText("text-view-more-photos", t.viewMorePhotos);

    // Contact section
    updateElementText("text-contact-title", t.contactTitle);
    updateElementText("text-contact-desc", t.contactText);
    updateElementText("text-cv-title", t.cvTitle || "Curriculum Vitae");
    updateElementText("text-cv-desc", t.cvDescription || "Download my CV to learn more about my experience and skills.");
    updateElementText("cv-link", t.cvDownload);
    updateElementAttribute("cv-link", "href", t.cvFile);

    // Social links
    updateElementText("text-social-links-title", t.connectWithMe);

    // Memory Game section
    updateElementText("text-memory-title", t.memoryGameTitle);
    updateElementText("text-memory-card-title", t.memoryCardTitle);
    updateElementText("text-memory-desc", t.memoryDescription);
    updateElementText("text-memory-matches-label", t.memoryMatchesLabel);
    updateElementText("text-memory-accuracy-label", t.memoryAccuracyLabel);
    updateElementText("text-memory-attempts-label", t.memoryAttemptsLabel);
    updateElementText("text-memory-reset", t.memoryReset);
    updateElementText("text-project-title5", t.memoryProjectTitle);
    updateElementText("text-project-desc5", t.memoryProjectDesc);
    updateElementText("text-project-link5", t.memoryPlayGame);

    // Back to home link (for memory-game.html)
    updateElementText("text-back-to-home", t.backToHome);

    // Footer
    updateElementText("text-footer", t.footerText);

    // Reinitialize animated headings after language switch
    setTimeout(() => {
        if (typeof animateHeadings === 'function') {
            animateHeadings();
        }
    }, 100);

    // Tech categories
    const techCategories = {
        languages: ["Java", "Kotlin", "Python"],
        frameworks: ["Spring Boot", "Hibernate"],
        tools: ["PostgreSQL", "Docker", "Git", "Figma", "Jira"]
    };

    // Skill levels (0-100)
    const skillLevels = {
        "Java": 95,
        "Kotlin": 70,
        "Python": 80,
        "Spring Boot": 90,
        "Hibernate": 70,
        "PostgreSQL": 75,
        "Docker": 90,
        "Git": 95,
        "Figma": 60,
        "Jira": 70
    };

    // Helper function to safely get element
    function getElement(id) {
        return document.getElementById(id);
    }

    // Clear previous tech items if elements exist
    const techLanguages = getElement("tech-languages");
    const techFrameworks = getElement("tech-frameworks");
    const techTools = getElement("tech-tools");

    if (techLanguages) techLanguages.innerHTML = "";
    if (techFrameworks) techFrameworks.innerHTML = "";
    if (techTools) techTools.innerHTML = "";

    // Function to create a tech item
    const createTechItem = (tech, container) => {
        if (!container) return;

        const item = document.createElement("div");
        item.className = "tech-item";

        const icon = document.createElement("img");
        icon.src = `assets/icons/${tech.toLowerCase().replace(/\s+/g, '-')}.svg`;
        icon.alt = `${tech} Icon`;
        icon.className = "tech-icon";

        const name = document.createElement("span");
        name.className = "tech-name";
        name.textContent = tech;

        const skillBarContainer = document.createElement("div");
        skillBarContainer.className = "skill-bar-container";

        const skillBar = document.createElement("div");
        skillBar.className = "skill-bar";
        skillBar.style.width = "0%";

        skillBarContainer.appendChild(skillBar);

        item.appendChild(icon);
        item.appendChild(name);
        item.appendChild(skillBarContainer);

        container.appendChild(item);

        // Animate skill bar after a short delay
        setTimeout(() => {
            skillBar.style.width = `${skillLevels[tech]}%`;
        }, 300);
    };

    // Populate tech items by category only if elements exist
    if (techLanguages) {
        techCategories.languages.forEach(tech => {
            if (t.techList.includes(tech)) {
                createTechItem(tech, techLanguages);
            }
        });
    }

    if (techFrameworks) {
        techCategories.frameworks.forEach(tech => {
            if (t.techList.includes(tech)) {
                createTechItem(tech, techFrameworks);
            }
        });
    }

    if (techTools) {
        techCategories.tools.forEach(tech => {
            if (t.techList.includes(tech)) {
                createTechItem(tech, techTools);
            }
        });
    }
}
