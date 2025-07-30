const menuicon = document.getElementById('menu-icon');
const navbars = document.getElementById('nav-bar');
menuicon.addEventListener('click', () => { console.log('menu icon clicked!');  navbars.classList.toggle('sidebar');
if (navbars.classList.contains('sidebar')){
    menuicon.innerHTML = '&times;';
    document.body.classList.add('no-scroll');
document.documentElement.classList.add('no-scroll');
} else {
    menuicon.innerHTML = '&#9776;';
document.body.classList.remove('no-scroll');
document.documentElement.classList.remove('no-scroll');
}
});


function setupDropdown(dropdownId){
    const dropdown = document.getElementById(dropdownId);
    const dropdowncontent = dropdown.querySelector('.dropdown-content');
    dropdown.addEventListener('mouseenter',function() {
        dropdowncontent.classList.add('show');
    });
    dropdown.addEventListener('mouseleave', function() {
        dropdowncontent.classList.remove('show');
    });
}
   setupDropdown('productsDropdown');
   setupDropdown('solutionsDropdown');
   setupDropdown('servicesDropdown');



document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!carousel || !nextBtn || !prevBtn) {
    console.error("Carousel or buttons not found");
    return;
  }

  const cardWidth = 400;

  const updateZoom = () => {
    const cards = carousel.querySelectorAll(".section4cardtext");
    const center = carousel.scrollLeft + carousel.offsetWidth / 2;

    cards.forEach((card) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < cardWidth / 2) {
        card.style.transform = "scale(1)";
      } else {
        card.style.transform = "scale(0.9)";
      }
      card.style.transition = "transform 0.3s ease";
    });
  };

  const scrollToNext = () => {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft + cardWidth >= maxScrollLeft) {
      // If at the end, go to start
      carousel.scrollLeft = 0;
    } else {
      carousel.scrollLeft += cardWidth;
    }
  };

  const scrollToPrev = () => {
    if (carousel.scrollLeft <= 0) {
      // If at the start, go to end
      carousel.scrollLeft = carousel.scrollWidth;
    } else {
      carousel.scrollLeft -= cardWidth;
    }
  };

  nextBtn.addEventListener("click", () => {
    scrollToNext();
    setTimeout(updateZoom, 300);
  });

  prevBtn.addEventListener("click", () => {
    scrollToPrev();
    setTimeout(updateZoom, 300);
  });

  carousel.addEventListener("scroll", () => {
    updateZoom();
  });

  // Initial zoom
  updateZoom();
});


