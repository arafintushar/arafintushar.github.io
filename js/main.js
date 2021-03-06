/*=============================== my file========================================*/

const institues = [
    {
        no: 1,
        year: "2020-2024",
        degree: "bsc",
        program: "petroleum and mining engineering",
        name: "Military Institue of Science and technology",
        description:
            "Major in UI Design, UX Design, Interaction Design, User Empathy, Branding.",
    },
    {
        no: 2,
        year: "2016-2018",
        degree: "hsc",
        program: "science",
        name: "adamjee cantonment college",
        description:
            "Major in UI Design, UX Design, Interaction Design, User Empathy, Branding.",
    },
    {
        no: 3,
        year: "2014-2016",
        degree: "ssc",
        program: "science",
        name: "Rajendrapur cantonment public school",
        description:
            "Major in UI Design, UX Design, Interaction Design, User Empathy, Branding.",
    },
];

const experiences = [
    {
        id: 1,
        year: "2020-2022",
        name: "Freelance",
        post: "web developer",
        location: "dhaka, bangladesh",
        description:
            "After finishing my studies, I first concentrated on my work in Behance, here I worked as a web designer.",
    },
    {
        id: 2,
        year: "2020-2022",
        name: "fivver",
        post: "web developer",
        location: "dhaka, bangladesh",
        description:
            "After finishing my studies, I first concentrated on my work in Behance, here I worked as a web designer.",
    },
    {
        id: 3,
        year: "2020-2022",
        name: "upwork",
        post: "web developer",
        location: "dhaka, bangladesh",
        description:
            "After finishing my studies, I first concentrated on my work in Behance, here I worked as a web designer.",
    },
];

const skills = [
    {
        id: 1,
        name: "html",
        progress: "90",
    },
    {
        id: 2,
        name: "css",
        progress: "75",
    },
    {
        id: 2,
        name: "Bootstrap",
        progress: "50",
    },
    {
        id: 3,
        name: "javaScript",
        progress: "70",
    },
];

const projects = [
    {
        id: 1,
        type: "portfolio",
        title: "portfolio",
        link: "#",
        img: "./img/project-1.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
    {
        id: 2,
        type: "portfolio",
        title: "portfolio",
        link: "#",
        img: "./img/project-2.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
    {
        id: 3,
        type: "e-commerce",
        title: "e-commerce",
        link: "#",
        img: "./img/project-3.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
    {
        id: 4,
        type: "others",
        title: "other",
        link: "#",
        img: "./img/project-4.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
    {
        id: 5,
        type: "e-commerce",
        title: "e-commerce",
        link: "#",
        img: "./img/project-5.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
    {
        id: 6,
        type: "portfolio",
        title: "portfolio",
        link: "#",
        img: "./img/project-6.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
];
/*==========================end of my file========================================*/

/*******************************
    menu
********************************/

const menu = document.querySelector(".menu");
const sideBar = document.querySelector(".side-bar");
const navLinks = document.querySelectorAll(".side-bar .nav-links .nav-link");

menu.addEventListener("click", toggleMenu);
navLinks.forEach((link) => {
    link.addEventListener("click", activeNav);
});

function toggleMenu() {
    sideBar.classList.toggle("active-side-bar");
    menu.classList.toggle("open-side-bar");
}
function activeNav() {
    navLinks.forEach((link) => {
        link.classList.remove("active");
    });
    this.classList.add("active");
    if (menu.classList.contains("open-side-bar")) {
        sideBar.classList.toggle("active-side-bar");
        menu.classList.toggle("open-side-bar");
    }
}

/*******************************
    resume section
********************************/

/* my education */
const myEducation = document.querySelector(
    ".my-resume .my-education .institutes"
);

let updateInstitues = institues.map((institue) => {
    return `<div class="institue">
    <div data-year="${institue.year}" class="institue__degree">${institue.degree}</div>
    <div class="institue__program">${institue.program}</div>
    <div class="institue__name">${institue.name}</div>
    <div class="institue__description">${institue.description}</div>
</div>`;
});

updateInstitues = updateInstitues.join("");

myEducation.innerHTML = updateInstitues;

/* my experience */
const myExperience = document.querySelector(
    ".my-resume .my-experience .companies"
);

let updateExperience = experiences.map((experience) => {
    return `<div class="company">
    <div data-year="${experience.year}" class="company__name">${experience.name}</div>
    <div class="company__post">${experience.post}</div>
    <div class="company__location">${experience.location}</div>
    <div class="company__description">${experience.description}</div>
</div>`;
});

updateExperience = updateExperience.join("");
myExperience.innerHTML = updateExperience;

/* skills */
const mySkills = document.querySelector(".my-resume .skills .all-skill");

let updateSkills = skills.map((skill) => {
    return `<div class="skill">
    <div class="skill__name">${skill.name} :</div>
    <div class="skill__progressbar">
        <div style="width: ${skill.progress}%;" class="skill__progressbar__progress"></div>
    </div>
</div>`;
});

updateSkills = updateSkills.join("");
mySkills.innerHTML = updateSkills;

/*******************************
    project section
********************************/
const projectBody = document.querySelector(".project-sec .projects");

const projectBtns = document.querySelectorAll(
    ".project-sec .project__btn-group .btn"
);
let loadProject;
window.addEventListener("load", () => {
    loadProject = projects;
    loadProject = loadProject.map((project) => {
        return `<a href="${project.link}" class="project" style="background-image: url('${project.img}')">
        <div class="card">
            <h4 class="card__title">${project.title}</h4>
            <div class="card__details">${project.details}</div>
        </div>
    </a>`;
    });
    loadProject = loadProject.join("");
    projectBody.innerHTML = loadProject;
});

projectBtns.forEach((btn) => {
    btn.addEventListener("click", filterProjects);
});

function filterProjects(e) {
    if (e.target.dataset.type === "all") {
        projectBody.innerHTML = loadProject;
    } else {
        let filtertedProject;
        filtertedProject = filtertedProject = projects.filter((project) => {
            if (project.type === e.target.dataset.type) return project;
        });
        filtertedProject = filtertedProject.map((project) => {
            return `<a href="${project.link}" class="project" style="background-image: url('${project.img}')">
                <div class="card">
                    <h4 class="card__title">${project.title}</h4>
                    <div class="card__details">${project.details}</div>
                </div>
            </a>`;
        });
        filtertedProject = filtertedProject.join("");
        projectBody.innerHTML = filtertedProject;
    }

    projectBtns.forEach((btn) => {
        if (btn.classList.contains("active-project-btn")) {
            btn.classList.remove("active-project-btn");
        }
    });
    e.target.classList.add("active-project-btn");
}

/*******************************
    footer section
********************************/
let currentYear = new Date();
currentYear = currentYear.getFullYear();

document.querySelector(".footer-year").innerHTML = currentYear;
