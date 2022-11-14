const projects = [
    {
        id: 1,
        type: "portfolio",
        title: "portfolio",
        link: "#",
        img: "../images/project-1.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
        tech: "HTML, CSS, javaScript, Bootstrap",
    },
    {
        id: 2,
        type: "portfolio",
        title: "portfolio",
        link: "#",
        img: "../images/project-1.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
        tech: "HTML, CSS, javaScript, Bootstrap",
    },
    {
        id: 3,
        type: "e-commerce",
        title: "e-commerce",
        link: "#",
        img: "../images/project-1.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
        tech: "HTML, CSS, javaScript, Bootstrap",
    },
    {
        id: 4,
        type: "others",
        title: "other",
        link: "#",
        img: "../images/project-1.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
        tech: "HTML, CSS, javaScript, Bootstrap",
    },
    {
        id: 5,
        type: "e-commerce",
        title: "e-commerce",
        link: "#",
        img: "../images/project-1.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
        tech: "HTML, CSS, javaScript, Bootstrap",
    },
    {
        id: 6,
        type: "portfolio",
        title: "portfolio",
        link: "#",
        img: "../images/project-1.jpg",
        details:
            "Here we replace text to project summury for give a small overview of project",
        tech: "HTML, CSS, javaScript, Bootstrap",
    },
];

/*******************************
    project page
********************************/
const portfolioSec = document.getElementById("portfolio-sec");
//projects body where we place all project
const projectBody = portfolioSec.querySelector(".projects");
//project filter buttons
const projectBtns = portfolioSec.querySelectorAll(
    ".section-heading .section-heading__portfolio-filters .filter-btn"
);

let loadProject;
//this is when page is load by default all projects will load
window.addEventListener("load", () => {
    loadProject = projects;
    loadProject = loadProject.map((project) => {
        return `<div class="project">
        <div
            class="project-img"
            style="
                background-image: url('${project.img}');
            "
        >
            <span class="sr-only">project image</span>
        </div>
        <div class="project-details">
            <h3 class="project-title | h3 fw-bold">
                ${project.title}
            </h3>
            <div class="project-tech">
                ${project.tech}
            </div>
            <a
                href="${project.link}"
                target="_blank"
                class="project-prev"
                >Live preview</a
            >
        </div>
    </div>`;
    });
    loadProject = loadProject.join("");
    projectBody.innerHTML = loadProject;
});

//now we listen for click in which we filter our project
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
            return `<div class="project">
        <div
            class="project-img"
            style="
                background-image: url('${project.img}');
            "
        >
            <span class="sr-only">project image</span>
        </div>
        <div class="project-details">
            <h3 class="project-title | h3 fw-bold">
                ${project.title}
            </h3>
            <div class="project-tech">
                ${project.tech}
            </div>
            <a
                href="${project.link}"
                target="_blank"
                class="project-prev"
                >Live preview</a
            >
        </div>
    </div>`;
        });
        filtertedProject = filtertedProject.join("");
        projectBody.innerHTML = filtertedProject;
    }

    projectBtns.forEach((btn) => {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
        }
    });
    e.target.classList.add("active");
}
