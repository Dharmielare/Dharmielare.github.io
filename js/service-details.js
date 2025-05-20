// Service Details Page JavaScript
import AOS from "aos" // Declare the AOS variable

document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS Animation
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  })

  // Portfolio Item Hover Effect
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const overlay = this.querySelector(".portfolio-overlay")
      const content = this.querySelector(".overlay-content")

      overlay.style.opacity = "1"
      content.style.opacity = "1"
      content.style.transform = "translateY(0)"
    })

    item.addEventListener("mouseleave", function () {
      const overlay = this.querySelector(".portfolio-overlay")
      const content = this.querySelector(".overlay-content")

      overlay.style.opacity = "0"
      content.style.opacity = "0"
      content.style.transform = "translateY(20px)"
    })
  })

  // Feature Item Animation
  const featureItems = document.querySelectorAll(".feature-item")

  featureItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".feature-icon i")
      icon.style.transform = "scale(1.2)"
    })

    item.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".feature-icon i")
      icon.style.transform = "scale(1)"
    })
  })

  // Choose Item Animation
  const chooseItems = document.querySelectorAll(".choose-item")

  chooseItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".choose-icon i")
      icon.style.transform = "scale(1.2)"
    })

    item.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".choose-icon i")
      icon.style.transform = "scale(1)"
    })
  })

  // Detail Card Animation
  const detailCards = document.querySelectorAll(".detail-card")

  detailCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".card-icon i")
      icon.style.transform = "rotate(360deg)"
      icon.style.transition = "transform 0.5s ease"
    })

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".card-icon i")
      icon.style.transform = "rotate(0deg)"
    })
  })

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
})
