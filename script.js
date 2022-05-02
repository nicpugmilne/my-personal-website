const aboutMe = document.getElementById("aboutMe");
const button = document.getElementById("moreInfo");

function displayToggle() {
    if (button.textContent === "View more") {
      aboutMe.style.display = "block";
      button.textContent = "See less";
    } else {
        button.textContent = "View more";
        aboutMe.style.display = "none";
    }
  }

