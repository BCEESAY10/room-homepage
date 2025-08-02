// Mobile Navigation
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navClose = document.getElementById("navClose");
const overlay = document.getElementById("overlay");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("active");
  overlay.classList.add("active");
});

navClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
}

// Slider functionality
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideTitle = document.getElementById("slideTitle");
const slideText = document.getElementById("slideText");

let currentSlide = 0;

const slideData = [
  {
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  slideTitle.textContent = slideData[index].title;
  slideText.textContent = slideData[index].text;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-play slider (optional)
setInterval(nextSlide, 5000);

// Close mobile menu when clicking on menu links
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
