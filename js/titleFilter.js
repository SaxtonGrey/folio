let currentIndex = 0;
const listItems = document.querySelectorAll(".header-lg .title-filter li");

function fadeIn(element) {
  element.style.opacity = 0;
  const fadeInterval = setInterval(function() {
    if (element.style.opacity < 1) {
      element.style.opacity = parseFloat(element.style.opacity) + 0.05;
    } else {
      clearInterval(fadeInterval);
    }
  }, 25); // Adjust the interval and step value as needed
}

function fadeOut(element) {
  element.style.opacity = 1;
  const fadeInterval = setInterval(function() {
    if (element.style.opacity > 0) {
      element.style.opacity = parseFloat(element.style.opacity) - 0.05;
    } else {
      clearInterval(fadeInterval);
    }
  }, 25); // Adjust the interval and step value as needed
}

function cycleListItems() {
  // Hide the current item with a fade-out effect
  const currentListItem = listItems[currentIndex];
  fadeOut(currentListItem);

  // Wait for the fade-out effect to complete before changing content
  setTimeout(() => {
    currentListItem.classList.remove("active");

    // Go to the next item or loop back to the start
    currentIndex = (currentIndex + 1) % listItems.length;

    // Display the next item with a fade-in effect
    const nextListItem = listItems[currentIndex];
    fadeIn(nextListItem);
    nextListItem.classList.add("active");
  }, 500); // Adjust the delay as needed
}

// Set an interval to cycle through items every 2 seconds
setInterval(cycleListItems, 2500);

// Initialize the first item to be shown with a fade-in effect
fadeIn(listItems[0]);
listItems[0].classList.add("active");
