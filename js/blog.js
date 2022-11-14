const blogs = [
    {
        id: 1,
        type: "technology",
        title: "Format releases a new tool that enables direct video hosting",
        link: "#",
        img: "../images/cover.jpg",
        author: "arafin shahadat",
        date: "22 Oct 2022",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
    {
        id: 2,
        type: "technology",
        title: "Format releases a new tool that enables direct video hosting",
        link: "#",
        img: "../images/cover.jpg",
        author: "arafin shahadat",
        date: "22 Oct 2022",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
    {
        id: 3,
        type: "latest",
        title: "Format releases a new tool that enables direct video hosting",
        link: "#",
        img: "../images/cover.jpg",
        author: "arafin shahadat",
        date: "22 Oct 2022",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
    {
        id: 4,
        type: "latest",
        title: "Format releases a new tool that enables direct video hosting",
        link: "#",
        img: "../images/cover.jpg",
        author: "arafin shahadat",
        date: "22 Oct 2022",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
    {
        id: 5,
        type: "others",
        title: "Format releases a new tool that enables direct video hosting",
        link: "#",
        img: "../images/cover.jpg",
        author: "arafin shahadat",
        date: "22 Oct 2022",
        details:
            "Here we replace text to project summury for give a small overview of project",
    },
];

/*******************************
    blogs page
********************************/
const blogSec = document.getElementById("blog-sec");
//blogs body where we place all project
const blogBody = blogSec.querySelector(".blogs");
//blog filter buttons
const blogBtns = blogSec.querySelectorAll(
    ".section-heading .section-heading__blog-filters .filter-btn"
);

let loadBlog;
//this is when page is load by default all blogs will load
window.addEventListener("load", () => {
    loadBlog = blogs;
    loadBlog = loadBlog.map((blog) => {
        return `<a class="blog" href="${blog.link}">
        <div
            class="blog-img"
            style="
                background-image: url('${blog.img}');
            "
        ></div>
        <div class="blog-info">
            <div class="blog-info__time | muted-txt">
                <div class="author">by ${blog.author}</div>
                <div>/</div>
                <div class="date">${blog.date}</div>
            </div>
            <div
                class="blog-info__title | txt-neutral-800 fw-bold"
            >
                ${blog.title}
            </div>
            <div
                class="blog-info__read-more | fw-bold txt-primary-500"
            >
                read more
            </div>
        </div>
    </a>`;
    });
    loadBlog = loadBlog.join("");
    blogBody.innerHTML = loadBlog;
});

//now we listen for click in which we filter our blog
blogBtns.forEach((btn) => {
    btn.addEventListener("click", filterBlogs);
});

function filterBlogs(e) {
    if (e.target.dataset.type === "all") {
        blogBody.innerHTML = loadBlog;
    } else {
        let filterBlog;
        filterBlog = filterBlog = blogs.filter((blog) => {
            if (blog.type === e.target.dataset.type) return blog;
        });
        filterBlog = filterBlog.map((blog) => {
            return `<a class="blog" href="${blog.link}">
        <div
            class="blog-img"
            style="
                background-image: url('${blog.img}');
            "
        ></div>
        <div class="blog-info">
            <div class="blog-info__time | muted-txt">
                <div class="author">by ${blog.author}</div>
                <div>/</div>
                <div class="date">${blog.date}</div>
            </div>
            <div
                class="blog-info__title | txt-neutral-800 fw-bold"
            >
                ${blog.title}
            </div>
            <div
                class="blog-info__read-more | fw-bold txt-primary-500"
            >
                read more
            </div>
        </div>
    </a>`;
        });
        filterBlog = filterBlog.join("");
        blogBody.innerHTML = filterBlog;
    }

    blogBtns.forEach((btn) => {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
        }
    });
    e.target.classList.add("active");
}

//popup box

// const blogsDet = blogBody.querySelectorAll(".blog");
// console.dir(blogsDet);

// const popup = document.querySelector(".popup-box");
// const popupCloseBtn = popup.querySelector(".popup-inner .close-btn");

// blogsDet.forEach((blog) => {
//     blog.addEventListener("click", () => {
//         popup.classList.add("active");
//         console.log(1);
//     });
// });
// popupCloseBtn.addEventListener("click", () => {
//     popup.classList.remove("active");
// });
