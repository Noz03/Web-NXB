// Basic JavaScript
console.log("Hello from script.js");

console.log("window.devicePixelRatio: ", window.devicePixelRatio);

// Mobile Menu Functions (Global scope)
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");

  if (menu && overlay) {
    if (menu.classList.contains("show")) {
      // Close menu
      menu.classList.remove("show");
      overlay.classList.add("hidden");
      document.body.style.overflow = "auto";
    } else {
      // Open menu
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
function createCard(data, isFirst = false) {
  return `
    <div class="bg-white  overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1">
      <div class="w-full  bg-[#95CC44] relative px-[22px] pt-[23px] pb-[21px]">

       <div class="absolute top-[4px] left-[33px] w-[15px] h-[15px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[5px] left-[63px] w-[14px] h-[14px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[5px] left-[92px] w-[13px] h-[13px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[6px] left-[120px] w-[12px] h-[12px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[6px] left-[147px] w-[11px] h-[11px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[7px] left-[173px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[7px] left-[198px] w-[9px] h-[9px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[8px] left-[222px] w-[8px] h-[8px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[8px] left-[245px] w-[7px] h-[7px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[9px] left-[267px] w-[6px] h-[6px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[9px] left-[288px] w-[5px] h-[5px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[10px] left-[308px] w-[4px] h-[4px] rounded-full bg-[#FFFFFF75]  "></div>
        
        <div class="absolute top-[4px] left-[3px] w-[16px] h-[16px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[32px] left-[3px] w-[15px] h-[15px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[62px] left-[3px] w-[14px] h-[14px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[91px] left-[4px] w-[13px] h-[13px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[119px] left-[4px] w-[12px] h-[12px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[146px] left-[5px] w-[11px] h-[11px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[172px] left-[5px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[197px] left-[6px] w-[9px] h-[9px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[221px] left-[6px] w-[8px] h-[8px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[244px] left-[7px] w-[7px] h-[7px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[266px] left-[7px] w-[6px] h-[6px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[287px] left-[8px] w-[5px] h-[5px] rounded-full bg-[#FFFFFF75]  "></div>
        <div class="absolute top-[307px] left-[8px] w-[4px] h-[4px] rounded-full bg-[#FFFFFF75]  "></div>
      
        <div class="relative w-full h-[261px] bg-white  overflow-hidden flex items-center justify-center mb-[26px]">
          <img class="h-full w-full ${isFirst ? "object-cover" : ""}" src="${
    data.image
  }" alt="" />
        </div>
        <div class="flex items-center text-gray-600 text-size-16px  text-[20px] font-medium text-[#303030]">
          <img
            class="w-[20px] h-[20px] mr-4"
            src="assets/svg/calendar.svg"
            alt=""
          />
          ${data.date}
        </div>
      </div>
      <div class="px-[25px] py-[26px] flex flex-col">
        
        <h3 class="text-[24px] text-size-16px font-bold text-gray-800 leading-[1.4] magin-bottom-0px mb-[27px] h-[66px] overflow-hidden line-clamp-2">
          ${data.title}
        </h3>
        <p class="text-[#303030] text-[20px] text-size-14px leading-6  mb-7 h-[98px] overflow-hidden line-clamp-4 flex-grow">
          ${data.description}
        </p>
       <div class="flex justify-center">
        <a href="#"  class="inline-block see-more-button text-[24px] text-center bg-[#02542D] text-white  py-2 lg:rounded-[25px] rounded-[15px] text-size-14px font-medium hover:bg-green-900 transition mt-auto px-[26px]">
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
          ${createCard(cardData[currentCardIndex], currentCardIndex === 0)}
          <!-- Navigation buttons positioned over the card -->
          <button id="prevBtn" class="absolute cart-item-button-left left-[-28px] top-1/4  transform -translate-y-1/2  bg-[#FFFFFF4D] text-[#303030B2] px-4 py-2 rounded-full border border-[#75C044]  font-bold hover:bg-lime-700 transition z-10 ${
            currentCardIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
          }" ${currentCardIndex === 0 ? "disabled" : ""}>
            <i class="fas fa-chevron-left text-sm"></i>
          </button>
          <button id="nextBtn" class="absolute  cart-item-button-right  right-[-28px] px-4 py-2 top-1/4 transform -translate-y-1/2  bg-[#FFFFFF4D] text-[#303030B2] border border-[#75C044]  rounded-full font-bold hover:bg-lime-700 transition z-10 ${
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
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[80px] gap-50px-1250px mb-8";
      const cardsHTML = cardData
        .map((data, index) => createCard(data, index === 0))
        .join("");
      container.innerHTML = cardsHTML;
    }

    console.log("Cards rendered successfully - Mobile:", isMobile);
  }
}

// Listen for window resize to re-render cards
window.addEventListener("resize", renderCards);

document.addEventListener("DOMContentLoaded", function () {
  // Render cards
  renderCards();
  initMobileInfiniteScroll();

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
      script.src = "js/header.js";
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

  fetch("src/components/Banner.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("banner").innerHTML = html;
      console.log("Banner loaded successfully");
      // Initialize banner slider
    })
    .catch((error) => console.error("Error loading banner:", error));

  // Initial scroll positioning is now handled by initMobileInfiniteScroll
});

// ...existing code...

function initMobileInfiniteScroll() {
  const container = document.getElementById("books-container");

  // Chỉ chạy trên mobile
  if (window.innerWidth >= 1001) return;

  const originalItems = Array.from(container.children);
  if (originalItems.length === 0) return;

  // Clear container and create seamless infinite loop
  container.innerHTML = "";

  // Create enough clones để không bao giờ thấy ending
  const totalSets = 20; // Tạo rất nhiều set để scroll dài
  const itemsPerSet = originalItems.length;

  // Build the infinite loop
  for (let setIndex = 0; setIndex < totalSets; setIndex++) {
    originalItems.forEach((item, itemIndex) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("data-set", setIndex);
      clone.setAttribute("data-item", itemIndex);

      // Thêm snap-center cho mỗi item
      clone.style.scrollSnapAlign = "center";

      container.appendChild(clone);
    });
  }

  // Thêm scroll-snap properties cho container
  container.style.scrollSnapType = "x mandatory";
  container.style.scrollPaddingLeft = "0px";
  container.style.scrollPaddingRight = "0px";

  const itemWidth = originalItems[0].offsetWidth;
  const gap = 64; // 4rem between items
  const totalItemWidth = itemWidth + gap;

  // Start ở giữa, item thứ 2 (reference book)
  const middleSet = Math.floor(totalSets / 2);
  const initialPosition = (middleSet * itemsPerSet + 1) * totalItemWidth;

  container.scrollLeft = initialPosition;

  let lastScrollLeft = initialPosition;
  let isRepositioning = false;

  container.addEventListener("scroll", () => {
    if (isRepositioning) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    // Reposition when getting close to boundaries
    const boundary = totalItemWidth * itemsPerSet * 2; // 2 sets worth of buffer

    if (scrollLeft < boundary) {
      // Near beginning, jump forward
      isRepositioning = true;

      // Tính toán vị trí snap hiện tại
      const currentSnapIndex = Math.round(scrollLeft / totalItemWidth);
      const jumpSets = 10;
      const newSnapIndex = currentSnapIndex + itemsPerSet * jumpSets;
      const newPosition = newSnapIndex * totalItemWidth;

      container.style.scrollSnapType = "none"; // Tạm tắt snap
      container.scrollLeft = newPosition;
      lastScrollLeft = newPosition;

      requestAnimationFrame(() => {
        container.style.scrollSnapType = "x mandatory"; // Bật lại snap
        isRepositioning = false;
      });
    } else if (scrollLeft > maxScrollLeft - boundary) {
      // Near end, jump backward
      isRepositioning = true;

      // Tính toán vị trí snap hiện tại
      const currentSnapIndex = Math.round(scrollLeft / totalItemWidth);
      const jumpSets = 10;
      const newSnapIndex = currentSnapIndex - itemsPerSet * jumpSets;
      const newPosition = newSnapIndex * totalItemWidth;

      container.style.scrollSnapType = "none"; // Tạm tắt snap
      container.scrollLeft = newPosition;
      lastScrollLeft = newPosition;

      requestAnimationFrame(() => {
        container.style.scrollSnapType = "x mandatory"; // Bật lại snap
        isRepositioning = false;
      });
    } else {
      lastScrollLeft = scrollLeft;
    }
  });

  // Disable smooth scroll behavior to prevent conflicts
  container.style.scrollBehavior = "auto";
  container.style.webkitOverflowScrolling = "touch";
}

// Call the function when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMobileInfiniteScroll);
} else {
  initMobileInfiniteScroll();
}

// Re-init on window resize (optional)
// let resizeTimer;
// window.addEventListener("resize", () => {
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     initMobileInfiniteScroll();
//   }, 250);
// });

// ...existing code...
