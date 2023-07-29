const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");

let currentIndex = 0;
const slideWidth = images[0].clientWidth;

function goToSlide(index) {
  if (index < 0 || index >= images.length) return;
  currentIndex = index;
  const translateX = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

// Add event listeners to navigate with arrow keys
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  }
});

// Optional: Add navigation buttons (next and previous)
const nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.addEventListener("click", nextSlide);

const prevBtn = document.createElement("button");
prevBtn.textContent = "Previous";
prevBtn.addEventListener("click", prevSlide);

document.body.appendChild(prevBtn);
document.body.appendChild(nextBtn);

// Add click event listeners to the images
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    const link = image.parentElement.getAttribute("href");
    if (link) {
      window.open(link, "_blank"); // Open the link in a new tab
    }
  });
});
