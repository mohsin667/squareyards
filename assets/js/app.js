$(document).ready(function () {
  const cityDropMenu = document.querySelector("#cityDropMenu");
  const mobileMenu = document.querySelector("#mobileMenu");
  const dropList = document.querySelector(".dropList");
  const navbar = document.querySelector(".navbar-collapse");
  const lists = Array.from(dropList.querySelectorAll("li"));
  const popUp = document.querySelector("#popup");
  const layer = document.querySelector("#layer");
  const sideMenu = document.querySelector("#sideMenu");
  const toggleLists = () => {
    dropList.classList.toggle("toggle");
  };
  cityDropMenu.addEventListener("click", () => {
    dropList.classList.toggle("toggle");
  });

  mobileMenu.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });

  lists.forEach(function (item, index) {
    item.addEventListener("click", toggleLists);
  });

  layer.addEventListener("click", function () {
    popUp.style.display = "none";
  });

  sideMenu.addEventListener("click", function () {
    popUp.style.display = "flex";
  });

  function sliders() {
    $(".scroller").slick({
      draggable: false,
      slidesToShow: 4,
      prevArrow: '<button class="slide-arrow prev-arrow"><img src="./assets/img/next.png" /></button>',
      nextArrow: '<button class="slide-arrow next-arrow"><img src="./assets/img/next.png" /></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            draggable: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            draggable: false,
            slidesToShow: 1
          }
        }
      ]
    });
    $(".inner-item").slick({
      dots: true,
      prevArrow: '<button class="slide-arrow prev-arrow"><img src="./assets/img/inner-right.png" /></button>',
      nextArrow: '<button class="slide-arrow next-arrow"><img src="./assets/img/inner-right.png" /></button>'
    });
  }
  sliders();
});
