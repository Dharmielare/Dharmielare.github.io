// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Import AOS and Swiper
  const AOS = window.AOS
  const Swiper = window.Swiper

  // Preloader
  const preloader = document.querySelector(".preloader")
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.classList.add("fade-out")
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    })
  }

  // Initialize AOS Animation
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  })

  // Sticky Header
  const header = document.querySelector(".header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky")
    }
  })

  // Hero Slider
  const heroSlider = new Swiper(".hero-slider", {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    parallax: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    on: {
      init: () => {
        // Ensure first slide is properly visible
        const activeSlide = document.querySelector(".swiper-slide-active")
        if (activeSlide) {
          activeSlide.style.opacity = 1
        }
      },
    },
  })

  // Testimonial Slider
  const testimonialSlider = new Swiper(".testimonial-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  })

  // Back to top button
  const backToTop = document.querySelector(".back-to-top")
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("active")
      } else {
        backToTop.classList.remove("active")
      }
    })

    backToTop.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Add your form submission logic here
      // For now, we'll just show a success message
      const submitBtn = contactForm.querySelector("button[type='submit']")
      const originalText = submitBtn.innerHTML

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
      submitBtn.disabled = true

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
        contactForm.reset()

        setTimeout(() => {
          submitBtn.innerHTML = originalText
          submitBtn.disabled = false
        }, 3000)
      }, 2000)
    })
  }

  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear()

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          const headerHeight = document.querySelector(".header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Mobile Navigation Toggle
  const navbarToggler = document.querySelector(".navbar-toggler")
  const navbarCollapse = document.querySelector(".navbar-collapse")

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", () => {
      navbarCollapse.classList.toggle("show")
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !navbarToggler.contains(e.target) &&
        !navbarCollapse.contains(e.target) &&
        navbarCollapse.classList.contains("show")
      ) {
        navbarCollapse.classList.remove("show")
      }
    })
  }
})
