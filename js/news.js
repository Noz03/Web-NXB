console.log("Hello from script.js");

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

// Data for the cards
const cardData = [
  {
    image: "assets/image/news-1.png",
    date: "11-09-2024",
    title: "TOP TIN TỨC GIÁO DỤC NỔI BẬT THÁNG 08/205",
    description: "Điều chỉnh nội dung sách Giáo khoa phù hợp với thực tiễn...",
    gradientFrom: "from-lime-500",
    gradientTo: "to-lime-400",
    categoryColor: "text-lime-600",
  },
  {
    image: "assets/image/news-2.png",
    date: "11-09-2024",
    title: "TOP NHỮNG ĐẦU SÁCH MỚI TRONG NĂM HỌC 2025-2026",
    description:
      "Những đầu sách mới dự kiến được phát hành trong năm học 2025-2026 bởi Công ty cổ phần Dịch vụ Xuất bản Giáo dục Hà Nội thuộc hệ sinh thái NXB Giáo dục Việt Nam",
    gradientFrom: "from-lime-500",
    gradientTo: "to-lime-400",
    categoryColor: "text-lime-600",
  },
  {
    image: "assets/image/news-3.png",
    date: "11-09-2024",
    title: "TOP ĐẦU SÁCH BÁN CHẠY  NĂM 2025",
    description:
      "Top đầu sách bán chạy năm 2025 của Công ty cổ phần Dịch vụ Xuất bản Giáo dục Hà Nội",
    gradientFrom: "from-lime-500",
    gradientTo: "to-lime-400",
    categoryColor: "text-lime-600",
  },
];

// Function to create a single card
function createCard(data) {
  return `
    <div class="bg-white  shadow-md transition-transform duration-300 hover:-translate-y-1">
      <div class="w-full h-[252px] bg-[#95CC44] relative px-[17px] pt-[17px] pb-[21px]">

       <div class="absolute top-[3.55px] left-[23px] w-[10.68px] h-[10.68px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[3.55px] left-[43px] w-[9.93px] h-[9.93px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[3.55px] left-[65px]  w-[9.22px] h-[9.22px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[4.26px] left-[85px] w-[8.51px] h-[8.51px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[4.26px] left-[104px] w-[7.81px] h-[7.81px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[4.97px] left-[123px] w-[7.1px] h-[7.1px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[4.97px] left-[140px] w-[6.39px] h-[6.39px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[5.68px] left-[157px] w-[5.68px] h-[5.68px] rounded-full bg-[#FFFFFF75]  "></div> 
        <div class="absolute top-[5.68px] left-[174px] w-[4.97px] h-[4.97px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[6.39px] left-[190px] w-[4.26px] h-[4.26px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[6.39px] left-[204px] w-[3.55px] h-[3.55px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[7.1px] left-[218px] w-[2.84px] h-[2.84px] rounded-full bg-[#FFFFFF75]  "></div>
       
        
        <div class="absolute top-[4px] left-[3px] w-[11.5px] h-[11.35px] rounded-full bg-[#FFFFFF75]  "></div>
        
        <div class="absolute top-[22.71px] left-[3px] w-[10.68px] h-[10.68px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[43.99px] left-[3px] w-[9.93px] h-[9.93px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[64.57px] left-[4px] w-[9.22px] h-[9.22px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[84.44px] left-[4px] w-[8.51px] h-[8.51px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[103.6px] left-[5px] w-[7.81px] h-[7.81px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[122px] left-[5px] w-[7.1px] h-[7.1px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[139.78px] left-[6px] w-[6.39px] h-[6.39px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[156.81px] left-[6px] w-[5.68px] h-[5.68px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[173.13px] left-[7px] w-[4.97px] h-[4.97px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[188.74px] left-[7px] w-[4.26px] h-[4.26px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[203.64px] left-[8px] w-[3.55px] h-[3.55px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[217.84px] left-[8px] w-[2.84px] h-[2.84px] rounded-full bg-[#FFFFFF75]  "></div>
      
        <div class="relative w-full h-[185px] bg-white   overflow-hidden flex items-center justify-center mb-[18px]">
          <img class="h-full w-full object-cover" src="${data.image}" alt="" />
        </div>
        <div class="flex items-center text-gray-600  text-[12px] font-medium text-[#303030]">
          <img
            class="w-[15px] h-[15px] mr-4"
            src="assets/svg/calendar.svg"
            alt=""
          />
          ${data.date}
        </div>
      </div>
      <div class="px-4 py-[18px] flex flex-col h-[228px]">
        
        <h3 class="text-[15px] font-bold text-gray-800  mb-[19px] line-height-100-news ">
          ${data.title}
        </h3>
        <p class="text-[#303030] text-[13px] leading-6 mb-8  flex-grow line-height-100-news">
          ${data.description}
        </p>
       <div class="flex justify-center">
        <a href="#"  class="inline-block text-[15px] text-center bg-[#02542D] text-white  pt-[7px] pb-[6px] lg:rounded-[25px] rounded-[15px] font-medium hover:bg-green-900 transition mt-auto px-[18px]">
          XEM THÊM
        </a>
        </div>
      </div>
    </div>
  `;
}

// Mobile carousel functionality
let currentCardIndex = 0;

function renderCards() {
  const container = document.getElementById("cards-container");
  if (container) {
    // Check if it's mobile view
    const isMobile = window.innerWidth < 640; // sm breakpoint
    console.log("window.innerWidth :", window.innerWidth);

    if (isMobile) {
      // Mobile: Force change container classes and show only one card
      container.className = "block mb-8"; // Remove grid classes

      const navigationHTML = `
        <div class="relative">
          ${createCard(cardData[currentCardIndex])}
          <!-- Navigation buttons positioned over the card -->
          <button id="prevBtn" class="absolute left-[-28px] top-1/4  transform -translate-y-1/2 bg-lime-600 bg-opacity-80 text-white px-4 py-2 rounded-full font-bold hover:bg-lime-700 transition z-10 ${
            currentCardIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
          }" ${currentCardIndex === 0 ? "disabled" : ""}>
            <i class="fas fa-chevron-left text-sm"></i>
          </button>
          <button id="nextBtn" class="absolute right-[-28px] px-4 py-2 top-1/4 transform -translate-y-1/2 bg-lime-600 bg-opacity-80 text-white  rounded-full font-bold hover:bg-lime-700 transition z-10 ${
            currentCardIndex === cardData.length - 1
              ? "opacity-30 cursor-not-allowed"
              : ""
          }" ${currentCardIndex === cardData.length - 1 ? "disabled" : ""}>
            <i class="fas fa-chevron-right text-sm"></i>
          </button>
          <!-- Dots indicator below the card -->
          
        </div>
      `;
      container.innerHTML = navigationHTML;

      // Add event listeners for navigation
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");

      if (prevBtn && !prevBtn.disabled) {
        prevBtn.addEventListener("click", () => {
          if (currentCardIndex > 0) {
            currentCardIndex--;
            renderCards();
          }
        });
      }

      if (nextBtn && !nextBtn.disabled) {
        nextBtn.addEventListener("click", () => {
          if (currentCardIndex < cardData.length - 1) {
            currentCardIndex++;
            renderCards();
          }
        });
      }
    } else {
      // Desktop: Restore grid classes and show all cards
      container.className =
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-8";
      const cardsHTML = cardData.map((data) => createCard(data)).join("");
      container.innerHTML = cardsHTML;
    }

    console.log("Cards rendered successfully - Mobile:", isMobile);
  }
}

// Listen for window resize to re-render cards
window.addEventListener("resize", renderCards);

// Function to render cards based on screen size
document.addEventListener("DOMContentLoaded", function () {
  // Render cards

  renderCards();
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
    .catch((error) => console.error("Error loading header or menu:", error));
});
