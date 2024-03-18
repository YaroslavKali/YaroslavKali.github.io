const bioBtn = document.getElementById("bio-btn");
const socialBtn = document.getElementById("social-btn");
const bioSection = document.getElementById("bio");
const socialSection = document.getElementById("social");

bioBtn.addEventListener("click", () => {
    bioSection.classList.remove("hidden");
    socialSection.classList.add("hidden");
});

socialBtn.addEventListener("click", () => {
    bioSection.classList.add("hidden");
    socialSection.classList.remove("hidden");
});