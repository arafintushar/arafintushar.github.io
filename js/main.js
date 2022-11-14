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

/*==========================end of my file========================================*/

/*******************************
    home page
********************************/
const navWrapper = document.querySelector(".left-sec .nav-wrapper");
const primaryNav = navWrapper.querySelector(".primary-nav");
const hamburgerMenu = navWrapper.querySelector(".hamburger-menu");
const rightSec = document.querySelector(".right-sec");
const screenWidth = screen.width;

// for small screen add margin to to main because header is fixed and main content push to the top
// and also add top properties to the nav list
if (screenWidth < 992) {
    const navWrapperHeight = navWrapper.offsetHeight;
    rightSec.style.paddingTop = `${navWrapperHeight}px`;
    primaryNav.style.top = `${navWrapperHeight}px`;
}

// add 'opened' class to the nav-wrapper and toggle between menu(open and close) and showing navlist
hamburgerMenu.addEventListener("click", () => {
    navWrapper.classList.toggle("opened");
});

// const sentMessage = document.querySelector("#contact-sec .contact-form .btn");

// sentMessage.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("h");
// });
