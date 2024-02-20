const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";

const dataFilter = "[data-filter]";
const portfolioData = "[data-item]";

const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

// Mobile Menu
const menu = document.querySelector(".main-menu");
const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", function() {
  if (menu.classList.contains("menu-visible")) {
    // If the menu is currently visible, hide it
    menu.classList.remove("menu-visible");
    menu.classList.add("menu-hidden");
  } else {
    // If the menu is not visible, show it
    menu.classList.remove("menu-hidden");
    menu.classList.add("menu-visible");
  }
});

/* Card Creator */
const cardCreator = (dtItem, dtOpen, imgSrc, header, content) => {
  // Get the parent element where the portfolio card will be added
  const parent = document.querySelector(".portfolio-grid");

  // Create a new portfolio card element
  const card = document.createElement("div");
  card.classList.add("portfolio-card");
  card.setAttribute("data-item", dtItem);
  card.setAttribute("data-open", dtOpen);
  // Create a new card body element
  const body = document.createElement("div");
  body.classList.add("card-body");

  // Create a new image element
  const image = document.createElement("img");
  image.setAttribute("src", imgSrc);
  image.setAttribute("alt", header);

  // Create a new link element
  const link = document.createElement("div");
  link.classList.add("card-popup-box");

  // Create a new div element
  const div = document.createElement("div");
  div.textContent = header;

  // Create a new heading element
  const heading = document.createElement("h3");
  heading.textContent = content;

  // Append the child elements to the parent element
  link.appendChild(div);
  link.appendChild(heading);
  body.appendChild(image);
  body.appendChild(link);
  card.appendChild(body);
  parent.appendChild(card);
};
/* End Card Creator */

cardCreator(
  "ui",
  "ui-1",
  "./assets/thumbnails/retrivia.png",
  "Retrivia!",
  "Retro Video Game Trivia App"
);

cardCreator(
  "app",
  "app-3",
  "./assets/thumbnails/lotf-ts.png",
  "Lord of The Forms",
  "React.ts Form"
);

cardCreator(
  "ui",
  "ui-3",
  "./assets/thumbnails/mw-homeservices.png",
  "M&W Home Services",
  "Site for Home Cleaning Service"
);

cardCreator(
  "web",
  "web-2",
  "./assets/thumbnails/SaaSProject.png",
  "Saas Website",
  "Landing Page for Mock SaaS Company"
);

cardCreator(
  "web",
  "web-1",
  "./assets/thumbnails/codeRad.png",
  "CodeRad Landing Page",
  "Static Landing Page for Mock Web Dev Agency"
);

cardCreator(
  "app",
  "app-1",
  "./assets/thumbnails/PokeMonSite.png",
  "Pokemon Site",
  "The First 151 Pokemon using PokeAPI"
);

cardCreator(
  "app",
  "app-2",
  "./assets/thumbnails/debtCalcTN.png",
  "Debt Calculator",
  "A React.js app to calculate your debt"
);

cardCreator(
  "ui",
  "ui-2",
  "./assets/thumbnails/skateRad.png",
  "SkateRad",
  "Mock Skate Shop Landing Page"
);

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
// const searchBox = document.querySelector("#search");

const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
};

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener("click", function() {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener("click", function() {
    const toggle = this.dataset.toggle;
    setActive(elm, switcherBtn);
    setTheme(toggle);
  });
}

// Portfolio Filter
/* searchBox.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}); */

for (const link of filterLink) {
  link.addEventListener("click", function() {
    setActive(link, ".filter-link");
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (card.dataset.item === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

/* About Page Marquee */
const elmsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elms-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elms", marqueeContent.children.length);

for (let i = 0; i < elmsDisplayed; i += 1) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
