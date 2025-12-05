console.log("Hello from Ecology.js");

// Mobile Menu Functions (Global scope)
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");

  if (menu && overlay) {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      overlay.classList.add("hidden");
      document.body.style.overflow = "auto";
    } else {
      menu.classList.add("show");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");

  if (menu && overlay) {
    menu.classList.remove("show");
    overlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

function toggleSubmenu(menuId) {
  const submenu = document.getElementById(menuId + "-submenu");
  const icon = document.getElementById(menuId + "-icon");

  if (submenu && icon) {
    if (submenu.classList.contains("hidden")) {
      submenu.classList.remove("hidden");
      icon.style.transform = "rotate(180deg)";
    } else {
      submenu.classList.add("hidden");
      icon.style.transform = "rotate(0deg)";
    }
  }
}

// Function to render cards based on screen size
document.addEventListener("DOMContentLoaded", function () {
  // Render cards
  // Load and insert footer
  fetch("src/components/Footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => console.error("Error loading footer:", error));

  fetch("src/components/Header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html;
      const script = document.createElement("script");
      script.src = "/js/header.js";
      document.body.appendChild(script);
      console.log("Header loaded successfully");

      // Load Menu component after Header
      return fetch("src/components/Menu.html");
    })
    .then((response) => response.text())
    .then((html) => {
      // Insert Menu component after header
      document.getElementById("header").insertAdjacentHTML("afterend", html);
      console.log("Menu loaded successfully");
    })
    .catch((error) => console.error("Error loading header:", error));
});
