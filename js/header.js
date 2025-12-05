console.log("Hello from header.js");

const lang = document.querySelector(".lang");
const currentPath = window.location.pathname;
console.log("Current path:", currentPath);

// Xử lý active state cho menu items
const menuLinks = document.querySelectorAll(".nav a");

// Kiểm tra submenu trước
let hasActiveSubmenu = false;
menuLinks.forEach((link) => {
  const parentLi = link.closest("li");
  const dropdown = parentLi.querySelector(".dropdown");

  if (dropdown) {
    const subLinks = dropdown.querySelectorAll("a");
    subLinks.forEach((subLink) => {
      if (subLink.getAttribute("href") === currentPath) {
        // Active submenu item
        const subLi = subLink.closest("li");
        subLi.classList.add("bg-[#13ae5b]", "text-white");
        subLi.style.backgroundColor = "#13ae5b";
        subLi.style.color = "white";

        // Active parent menu item
        parentLi.classList.add("bg-[#14AE5C]", "text-white");
        hasActiveSubmenu = true;
      }
    });
  }
});

// Kiểm tra menu chính chỉ khi không có submenu active
if (!hasActiveSubmenu) {
  menuLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const parentLi = link.closest("li");

    if (
      (href === "/" &&
        (currentPath === "/" || currentPath === "/index.html")) ||
      (href !== "/" && href === currentPath)
    ) {
      parentLi.classList.add("bg-[#14AE5C]", "text-white");
    }
  });
}

// Xử lý dropdown cho desktop (hover) và mobile (click)
const menuItems = document.querySelectorAll(".nav li");
const header = document.querySelector("header");

menuItems.forEach((li) => {
  const dropdown = li.querySelector(".dropdown");

  if (dropdown) {
    dropdown.style.zIndex = "9999";

    // Desktop: hover
    li.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 768) {
        dropdown.classList.remove("hidden");
      }
    });

    li.addEventListener("mouseleave", () => {
      if (window.innerWidth >= 768) {
        dropdown.classList.add("hidden");
      }
    });

    // Mobile + Desktop: click để toggle
    li.addEventListener("click", (e) => {
      // Chỉ xử lý trên mobile
      if (window.innerWidth >= 1024) return;

      // Nếu click vào link bên trong dropdown → để navigate
      if (e.target.closest(".dropdown") && e.target.tagName === "A") {
        return;
      }

      // Ngăn navigate nếu click vào link chính có dropdown
      if (e.target.tagName === "A") {
        e.preventDefault();
      }

      // Toggle dropdown
      e.stopPropagation();
      const isHidden = dropdown.classList.toggle("hidden");

      // Điều chỉnh padding header (tuỳ chọn)
      if (header) {
        header.style.paddingBottom = isHidden ? "" : "40px";
      }
    });
  }
});

// Đóng dropdown khi click ra ngoài
document.addEventListener("click", (e) => {
  const nav = document.querySelector(".nav");
  if (nav && !nav.contains(e.target)) {
    const allDropdowns = nav.querySelectorAll(".dropdown");
    allDropdowns.forEach((dropdown) => {
      dropdown.classList.add("hidden");
    });
  }
});

// Xử lý chức năng lang
if (lang) {
  lang.addEventListener("click", function () {
    const lang = document.querySelector(".lang");
    lang.classList.toggle("text-primary");
    lang.classList.toggle("text-white");
  });
} else {
  console.log("Lang not found");
}
