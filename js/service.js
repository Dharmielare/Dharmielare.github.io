// Import AOS Animation Library
import AOS from "aos"
import $ from "jquery"

// Initialize AOS Animation Library
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
  })

  // Initialize Testimonial Slider
  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
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
    })
  })

  // Add hover effect to process steps
  const processSteps = document.querySelectorAll(".process-step")

  processSteps.forEach((step) => {
    step.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".process-icon i")
      icon.style.transform = "scale(1.2)"
      icon.style.color = "#ff6b00"
    })

    step.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".process-icon i")
      icon.style.transform = "scale(1)"
      icon.style.color = "#0056b3"
    })
  })

  // Parallax effect for CTA section
  window.addEventListener("scroll", () => {
    const ctaSection = document.querySelector(".cta-section")
    if (ctaSection) {
      const scrollPosition = window.pageYOffset
      const sectionPosition = ctaSection.offsetTop
      const sectionHeight = ctaSection.offsetHeight

      if (scrollPosition > sectionPosition - window.innerHeight && scrollPosition < sectionPosition + sectionHeight) {
        const yPos = -(scrollPosition - sectionPosition) / 5
        ctaSection.style.backgroundPosition = `center ${yPos}px`
      }
    }
  })

  // Display current year in footer
  document.getElementById("displayDateYear").textContent = new Date().getFullYear()
})
