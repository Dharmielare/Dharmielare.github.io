// Import necessary libraries
const AOS = window.AOS
const $ = window.$

// Initialize AOS Animation Library
AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
})

// Initialize Owl Carousel for Testimonials
$(document).ready(() => {
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  })

  // Sticky Header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("header-scrolled")
    } else {
      $(".header").removeClass("header-scrolled")
    }
  })

  // Smooth scrolling for anchor links
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          1000,
        )
        return false
      }
    }
  })

  // Set active class to nav-item based on current page
  const currentLocation = location.pathname
  const navItems = document.querySelectorAll(".nav-link")

  navItems.forEach((item) => {
    if (
      item.getAttribute("href") === currentLocation ||
      (currentLocation === "/" && item.getAttribute("href") === "index.html")
    ) {
      item.parentElement.classList.add("active")
    }
  })

  // Display current year in footer
  document.getElementById("displayDateYear").textContent = new Date().getFullYear()

  // Form submission with animation
  $("#contactForm").submit((e) => {
    e.preventDefault()

    // Add animation class to button
    $(".submit-btn").addClass("sending")
    $(".submit-btn").html('<i class="fas fa-spinner fa-spin"></i> Sending...')

    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
      $(".submit-btn").removeClass("sending")
      $(".submit-btn").html('<i class="fas fa-check"></i> Message Sent!')
      $("#contactForm")[0].reset()

      setTimeout(() => {
        $(".submit-btn").html('SEND MESSAGE <i class="fas fa-paper-plane ms-2"></i>')
      }, 3000)
    }, 2000)
  })

  // Service card hover effect
  $(".service-card").hover(
    function () {
      $(this).find(".service-icon img").css("transform", "rotate(360deg)")
    },
    function () {
      $(this).find(".service-icon img").css("transform", "rotate(0deg)")
    },
  )

  // Add animation to elements when they come into view
  const animateElements = document.querySelectorAll(".animate-on-scroll")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated")
        }
      })
    },
    { threshold: 0.1 },
  )

  animateElements.forEach((element) => {
    observer.observe(element)
  })
})

// Additional animations for carousel
document.addEventListener("DOMContentLoaded", () => {
  // Add parallax effect to carousel
  const carousel = document.getElementById("header-carousel")

  if (carousel) {
    const carouselItems = carousel.querySelectorAll(".carousel-item")

    carouselItems.forEach((item) => {
      const img = item.querySelector("img")

      if (img) {
        window.addEventListener("scroll", () => {
          const scrollPosition = window.scrollY
          if (scrollPosition < window.innerHeight) {
            img.style.transform = `translateY(${scrollPosition * 0.4}px)`
          }
        })
      }
    })
  }
})
