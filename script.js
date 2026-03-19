const projects = [
  {
    title: "Poultry Farm Management System",
    image: "./assets/project-1.png",
    description:
      "A system to manage poultry farm inventory, sales and records.",
    github: "https://github.com/joha786/Poultry-Farm-Management-System",
  },

  {
    title: "UrbanNest: A Complete Home Solution",
    image: "./assets/project-2.png",
    description:
      "A platform that helps users find home services and housing solutions.",
    github: "https://github.com/joha786/UrbanNest",
  },

  {
    title: "Weather Monitoring System",
    image: "./assets/project-3.png",
    description:
      "A system that monitors and displays real-time weather conditions.",
    github: "#",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const projectContainer = document.getElementById("project-list");

  projects.forEach((project) => {
    projectContainer.innerHTML += `
<div class="details-container color-container">

<div class="article-container">
<img src="${project.image}" class="project-img">
</div>

<h2 class="experience-sub-title project-title">${project.title}</h2>

<p class="project-description">${project.description}</p>

<div class="btn-container">
<button class="btn btn-color-2 project-btn"
onclick="location.href='${project.github}'">
Github
</button>
</div>

</div>
`;
  });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  let error = document.getElementById("form-error");

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || subject === "" || message === "") {
    error.innerText = "All fields are required";
    return;
  }

  if (!emailPattern.test(email)) {
    error.innerText = "Invalid Email Format";
    return;
  }

  error.style.color = "green";
  error.innerText = "Message sent successfully!";
});

// theme toggle buttons (desktop + mobile)
const toggle = document.getElementById("theme-toggle");
const toggleMobile = document.getElementById("theme-toggle-mobile");

function switchTheme() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

if (toggle) toggle.addEventListener("click", switchTheme);
if (toggleMobile) toggleMobile.addEventListener("click", switchTheme);

window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
