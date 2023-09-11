const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible";

//Popup Modal Creator
const popUpCreator = (id, title, paragraph, imageSrc) => {
  // Create the modal element
  const metaTag = document.head.getElementsByClassName(id);
  const modal = document.createElement("div");
  modal.setAttribute("id", id);
  modal.classList.add("modal");
  modal.setAttribute("data-animation", "slideInOutTop");

  // Create the modal dialog element
  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog");

  // Create the modal header element
  const modalHeader = document.createElement("header");
  modalHeader.classList.add("modal-header");

  // Create the modal title element
  const modalTitle = document.createElement("h3");
  modalTitle.textContent = title;

  // Create the modal close button element
  const modalCloseButton = document.createElement("i");
  modalCloseButton.classList.add("fas", "fa-times");
  modalCloseButton.setAttribute("data-close", "");

  // Append the modal title and close button elements to the modal header
  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(modalCloseButton);

  // Create the modal body element
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  // Create the image wrapper element
  const link = document.createElement("a");
  link.setAttribute("href", metaTag[0].getAttribute("data-href"));
  link.setAttribute("target", "blank");
  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("img-wrapper");

  // Create the image element
  const image = document.createElement("img");
  image.setAttribute("src", imageSrc);
  image.setAttribute("alt", "Portfolio Image");

  const cta = document.createElement("p");
  cta.textContent = "Click Image to View Site";

  // Append the image element to the image wrapper
  imgWrapper.appendChild(image);
  imgWrapper.appendChild(cta);
  link.appendChild(imgWrapper);

  // Create the text wrapper element
  const textWrapper = document.createElement("div");
  textWrapper.classList.add("text-wrapper");

  // Create the description elements
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = paragraph;

  p.appendChild(strong);
  textWrapper.appendChild(p);

  const para = document.createElement("p");
  const metaContent = metaTag[0].getAttribute("content");
  para.textContent = metaContent;
  textWrapper.appendChild(para);

  // Append the image wrapper and text wrapper elements to the modal body
  modalBody.appendChild(link);
  modalBody.appendChild(textWrapper);

  // Append the modal header and modal body elements to the modal dialog
  modalDialog.appendChild(modalHeader);
  modalDialog.appendChild(modalBody);

  // Append the modal dialog element to the modal element
  modal.appendChild(modalDialog);

  document.body.append(modal);

  // Add the new element to the existing node list
  const closeModalsArray = Array.from(closeModal);
  const newCloseModalArray = closeModalsArray.concat(modalCloseButton);

  // Uodate EventListener
  for (let elm of newCloseModalArray) {
    elm.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.classList.remove(
        isVisible
      );
      document.body.style.overflowY = "scroll";
    });
  }
};

const portfolioCards = document.querySelectorAll(".portfolio-card");
// console.log(portfolioCards);

portfolioCards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector(".card-body img").getAttribute("src");
    const id = card.getAttribute("data-open");
    const metaHook = id;
    const title = card.querySelector(".card-popup-box div").textContent;
    const paragraph = card.querySelector(".card-popup-box h3").textContent;
    if (document.getElementById(id) === null)
      popUpCreator(id, title, paragraph, img, metaHook);
  });
});

/* Modal Variables*/
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

/* Modal/Full Site Modal "open buttons" */
for (let elm of openModal) {
  elm.addEventListener("click", function() {
    const modalId = this.dataset.open;
    setTimeout(() => {
      document.getElementById(modalId).classList.add(isVisible);
      document.body.style.overflowY = "hidden";
    }, 75);
  });
}

for (let elm of closeModal) {
  elm.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    document.body.style.overflowY = "scroll";
  });
}

// Modal
document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.is-visible")) {
    document.body.style.overflowY = "scroll";
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    document.body.style.overflowY = "scroll";
  }
});
