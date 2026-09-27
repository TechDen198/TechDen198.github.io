/* =========================================================
   SHADAB ALAM PORTFOLIO
   Edit your content in the data objects below.
   ========================================================= */

const portfolio = {
  skills: [
    "Figma",
    "UI Design",
    "UX Research",
    "Wireframing",
    "Prototyping",
    "Usability Testing",
    "Responsive Design",
    "Design Systems",
    "HTML & CSS"
  ],

  projects: [
    {
      number: "01 · RENTAL MARKETPLACE",
      title: "To-let Globe",
      description: "A rental marketplace for PGs, flats, houses and offices with listing management, advanced search & filters, tenant screening and online payments.",
      tags: ["Web", "Marketplace", "UX"],
      link: "https://www.behance.net/princeshadab"
    },
    {
      number: "02 · RENT AGREEMENT",
      title: "Online Rent Agreement",
      description: "A streamlined rent-agreement product with customizable templates, e-signatures, secure cloud storage, and automated renewals & reminders.",
      tags: ["Product", "UX Flow", "Web"],
      link: "https://www.behance.net/princeshadab"
    },
    {
      number: "03 · RESTAURANT APP",
      title: "Hunger Killer",
      description: "Mobile-first restaurant app focused on ordering, menu discovery, table booking and loyalty, with clear onboarding and frictionless checkout.",
      tags: ["Mobile", "UI", "Checkout"],
      link: "https://www.behance.net/princeshadab"
    },
    {
      number: "04 · RENTAL WEBSITE",
      title: "LeaseLoom",
      description: "A modern rental website connecting renters and landlords with curated listings, reviews and a supportive blog, focused on discoverability and trust.",
      tags: ["Website", "Conversion", "UI/UX"],
      link: "https://www.behance.net/princeshadab"
    }
  ],

  experience: [
    {
      date: "2024",
      title: "UI/UX Designer — To-let Globe",
      description: "Website design for a rental marketplace, covering listings, search and payments."
    }
  ],

  education: [
    {
      title: "B.Sc. Chemistry (Hons.)",
      description: "VKSU, Ara · 2019–2023"
    },
    {
      title: "UI/UX Specialization",
      description: "California Institute of the Arts (CalArts) · 2023",
      link: "https://coursera.org/share/d79a85981e705a21d40e3008727e1806"
    },
    {
      title: "Augmented Reality and ARCore",
      description: "Certificate listed in the supplied portfolio.",
      link: "https://coursera.org/share/cadc2db9be67878be5b694749e396670"
    },
    {
      title: "Visual Communication & Interaction Design",
      description: "Certificates listed from CalArts and Coursera programs."
    }
  ]
};

const skills = document.querySelector("#skills");
skills.innerHTML = portfolio.skills.map(skill => `<span class="skill">${skill}</span>`).join("");

const projectGrid = document.querySelector("#projectGrid");
projectGrid.innerHTML = portfolio.projects.map(project => `
  <article class="project">
    <span class="project-number">${project.number}</span>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    <div class="project-bottom">
      <span class="muted">Case study via Behance</span>
      <a href="${project.link}" target="_blank" rel="noopener">Open ↗</a>
    </div>
  </article>
`).join("");

const experienceList = document.querySelector("#experienceList");
experienceList.innerHTML = portfolio.experience.map(item => `
  <div class="role">
    <span class="date">${item.date}</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  </div>
`).join("");

const educationList = document.querySelector("#educationList");
educationList.innerHTML = portfolio.education.map(item => `
  <article class="cert">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    ${item.link ? `<a class="button" href="${item.link}" target="_blank" rel="noopener">View certificate ↗</a>` : ""}
  </article>
`).join("");

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
