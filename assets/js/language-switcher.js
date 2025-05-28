function switchLanguage(lang) {
    const t = translations[lang];
    // Hero section
    document.getElementById("text-greeting").innerText = t.greeting;
    document.getElementById("text-intro").innerText = t.intro;
    document.getElementById("text-learn-more").innerText = t.learnMore;

    // About section
    document.getElementById("text-about-title").innerText = t.aboutMe;
    document.getElementById("text-about-desc").innerText = t.aboutDescription;
    document.getElementById("text-highlight-title1").innerText = t.highlightCleanCode;
    document.getElementById("text-highlight-desc1").innerText = t.highlightCleanCodeDesc;
    document.getElementById("text-highlight-title2").innerText = t.highlightRobustSolutions;
    document.getElementById("text-highlight-desc2").innerText = t.highlightRobustSolutionsDesc;
    document.getElementById("text-highlight-title3").innerText = t.highlightFastLearner;
    document.getElementById("text-highlight-desc3").innerText = t.highlightFastLearnerDesc;

    // Career section
    document.getElementById("text-career-title").innerText = t.careerTitle;
    document.getElementById("text-job-title-1").innerText = t.job1Title;
    document.getElementById("text-company-1").innerText = t.job1Company;
    document.getElementById("text-job1-desc1").innerText = t.job1Description1;
    document.getElementById("text-job1-desc2").innerText = t.job1Description2;
    document.getElementById("text-job1-desc3").innerText = t.job1Description3;
    document.getElementById("text-job1-desc4").innerText = t.job1Description4;
    document.getElementById("text-job-title-2").innerText = t.job2Title;
    document.getElementById("text-company-2").innerText = t.job2Company;
    document.getElementById("text-job2-desc1").innerText = t.job2Description1;
    document.getElementById("text-job2-desc2").innerText = t.job2Description2;
    document.getElementById("text-job2-desc3").innerText = t.job2Description3;
    document.getElementById("text-job2-desc4").innerText = t.job2Description4;

    // Tech stack section
    document.getElementById("text-tech-title").innerText = t.techStackTitle;

    // Education section
    document.getElementById("text-education-title").innerText = t.educationTitle;
    document.getElementById("text-master-title").innerText = t.masterTitle;
    document.getElementById("text-master-university-name").innerText = t.masterUniversityName;
    document.getElementById("text-master-graduation").innerText = t.masterGrade;
    document.getElementById("text-master-thesis-title").innerText = t.masterThesisTitle;
    document.getElementById("text-master-thesis-download").innerText = t.masterThesisDownload;
    document.getElementById("text-master-graduation-year").innerText = t.masterGraduationYear;
    document.getElementById("text-bachelor-title").innerText = t.bachelorTitle;
    document.getElementById("text-bachelor-university-name").innerText = t.bachelorUniversityName;
    document.getElementById("text-bachelor-graduation").innerText = t.bachelorGrade;
    document.getElementById("text-bachelor-thesis-title").innerText = t.bachelorThesisTitle;
    document.getElementById("text-bachelor-thesis-download").innerText = t.bachelorThesisDownload;
    document.getElementById("text-bachelor-graduation-year").innerText = t.bachelorGraduationYear;

    // Projects section
    document.getElementById("text-portfolio-title").innerText = t.portfolioTitle;
    document.getElementById("text-project-title1").innerText = t.projectTitle1;
    document.getElementById("text-project-desc1").innerText = t.projectDesc1;
    document.getElementById("text-project-link1").innerText = t.projectLink;

    // Update other project elements
    document.getElementById("text-project-title2").innerText = t.projectTitle2;
    document.getElementById("text-project-desc2").innerText = t.projectDesc2;
    document.getElementById("text-project-link2").innerText = t.projectLink;

    document.getElementById("text-project-title3").innerText = t.projectTitle3;
    document.getElementById("text-project-desc3").innerText = t.projectDesc3;
    document.getElementById("text-project-link3").innerText = t.projectLink;

    document.getElementById("text-project-title4").innerText = t.projectTitle4;
    document.getElementById("text-project-desc4").innerText = t.projectDesc4;
    document.getElementById("text-project-link4").innerText = t.projectLink;

    // Photography section
    document.getElementById("text-photo-title").innerText = t.photoTitle;
    document.getElementById("text-photo-desc").innerText = t.photoDesc;
    document.getElementById("text-photo-card-title").innerText = t.photoCardTitle;
    document.getElementById("text-img01-caption").innerText = t.photo01Caption;
    document.getElementById("text-img02-caption").innerText = t.photo02Caption;
    document.getElementById("text-img03-caption").innerText = t.photo03Caption;
    document.getElementById("text-view-more-photos").innerText = t.viewMorePhotos;

    // Contact section
    document.getElementById("text-contact-title").innerText = t.contactTitle;
    document.getElementById("text-contact-desc").innerText = t.contactText;
    document.getElementById("text-cv-title").innerText = t.cvTitle || "Curriculum Vitae";
    document.getElementById("text-cv-desc").innerText = t.cvDescription || "Download my CV to learn more about my experience and skills.";
    document.getElementById("cv-link").innerText = t.cvDownload;
    document.getElementById("cv-link").setAttribute("href", t.cvFile);

    // Social links
    document.getElementById("text-social-links-title").innerText = t.connectWithMe;

    // Footer
    document.getElementById("text-footer").innerText = t.footerText;

    // Reinitialize animated headings after language switch
    setTimeout(() => {
        animateHeadings();
    }, 100);

    // Tech categories
    const techCategories = {
        languages: ["Java", "Kotlin", "Python"],
        frameworks: ["Spring Boot", "Hibernate"],
        tools: ["PostgreSQL", "Docker", "Git", "Figma", "Jira"]
    };

    // Skill levels (0-100)
    const skillLevels = {
        "Java": 90,
        "Kotlin": 85,
        "Python": 75,
        "Spring Boot": 88,
        "Hibernate": 80,
        "PostgreSQL": 85,
        "Docker": 78,
        "Git": 92,
        "Figma": 70,
        "Jira": 82
    };

    // Clear previous tech items
    document.getElementById("tech-languages").innerHTML = "";
    document.getElementById("tech-frameworks").innerHTML = "";
    document.getElementById("tech-tools").innerHTML = "";

    // Function to create a tech item
    const createTechItem = (tech, container) => {
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

    // Populate tech items by category
    techCategories.languages.forEach(tech => {
        if (t.techList.includes(tech)) {
            createTechItem(tech, document.getElementById("tech-languages"));
        }
    });

    techCategories.frameworks.forEach(tech => {
        if (t.techList.includes(tech)) {
            createTechItem(tech, document.getElementById("tech-frameworks"));
        }
    });

    techCategories.tools.forEach(tech => {
        if (t.techList.includes(tech)) {
            createTechItem(tech, document.getElementById("tech-tools"));
        }
    });
}