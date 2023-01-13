// Pure JS code

// function filter(elem) {
// 	let app = document.querySelectorAll('.app');
// 	let website = document.querySelectorAll('.website');
// 	let interaction = document.querySelectorAll('.interaction');
// 	let allCat = document.querySelectorAll('.allCat');
//
// 	for (let i = 0; i < allCat.length; i++) {
// 		allCat[i].style.display = 'none';
// 	}
//
// 	if (elem == 'app') {
// 		for (let i = 0; i < app.length; i++) {
// 			app[i].style.display = 'block';
// 		}
// 	} else if (elem == 'website') {
// 		for (let i = 0; i < website.length; i++) {
// 			website[i].style.display = 'block';
// 		}
// 	} else if (elem == 'interaction') {
// 		for (let i = 0; i < app.length; i++) {
// 			interaction[i].style.display = 'block';
// 		}
// 	} else {
// 		for (let i = 0; i < allCat.length; i++) {
// 			allCat[i].style.display = 'block';
// 		}
// 	}
// }

// Alternate version of code on jquery

//	Filter

let filter = $("[data-filter]");

filter.on("click", function (event) {
  event.preventDefault();

  let cat = $(this).data("filter");

  if (cat == "all") {
    $("[data-cat]").removeClass("hide");
  } else {
    $("[data-cat]").each(function () {
      let workCat = $(this).data("cat");

      if (workCat != cat) {
        $(this).addClass("hide");
      } else {
        $(this).removeClass("hide");
      }
    });
  }
});

// Modal =============

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function (event) {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data("modal");

  $(modalId).addClass("show");
  $("body").addClass("no-scroll");

  setTimeout(function () {
    $(modalId).find(".modal__dialog").css({
      transform: "rotateX(0)",
    });
  }, 200);

  worksSlider.slick("setPosition");
});

modalClose.on("click", function (event) {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents(".modal");

  modalParent.find(".modal__dialog").css({
    transform: "rotateX(90deg)",
  });

  setTimeout(function () {
    modalParent.removeClass("show");
    $("body").removeClass("no-scroll");
  }, 200);
});

$(".modal").on("click", function (event) {
  let $this = $(this);

  $this.find(".modal__dialog").css({
    transform: "rotateX(90deg)",
  });

  setTimeout(function () {
    $this.removeClass("show");
    $("body").removeClass("no-scroll");
  }, 200);
});

$(".modal__dialog").on("click", function (event) {
  event.stopPropagation();
});

$(function () {
  //		fixed header

  let header = $("#header");
  let introH = $("#intro").innerHeight();
  let scrollOffset = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#nav_toggle");

  // Fixed Header

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Nav Toggle

  navToggle.on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("show");
    nav.toggleClass("show");
  });

  //Smooth Scroll

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    $("nav, a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: elementOffset - 70,
      },
      700
    );
  }); //Smooth Scroll

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    $("nav, a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: elementOffset - 70,
      },
      700
    );
  });

  // Nav Toggle

  navToggle.on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    nav.toggleClass("active");
  });
});
