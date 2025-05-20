// Import AOS Animation Library
import AOS from "aos"
import "aos/dist/aos.css"

// Initialize AOS Animation Library
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
  })

  // Counter Animation
  const counters = document.querySelectorAll(".counter-number")
  const speed = 200 // The lower the slower

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-count")
      const count = +counter.innerText

      // Lower inc to slow and higher to speed up
      const inc = target / speed

      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc)
        // Call function every ms
        setTimeout(updateCount, 30)
      } else {
        counter.innerText = target
      }
    }

    // Run the function when it comes into view
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCount()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    counterObserver.observe(counter)
  })

  // Parallax effect for impact section
  window.addEventListener("scroll", () => {
    const impactSection = document.querySelector(".impact-section")
    if (impactSection) {
      const scrollPosition = window.pageYOffset
      const sectionPosition = impactSection.offsetTop
      const sectionHeight = impactSection.offsetHeight

      if (scrollPosition > sectionPosition - window.innerHeight && scrollPosition < sectionPosition + sectionHeight) {
        const yPos = -(scrollPosition - sectionPosition) / 5
        impactSection.style.backgroundPosition = `center ${yPos}px`
      }
    }
  })

  // Add hover effect to value cards
  const valueCards = document.querySelectorAll(".value-card")

  valueCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".value-icon i")
      icon.classList.add("fa-beat")

      setTimeout(() => {
        icon.classList.remove("fa-beat")
      }, 1000)
    })
  })

  // Add hover effect to service boxes
  const serviceBoxes = document.querySelectorAll(".service-box")

  serviceBoxes.forEach((box) => {
    box.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".service-icon i")
      icon.style.transition = "transform 0.6s ease"
      icon.style.transform = "rotateY(360deg)"
    })

    box.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".service-icon i")
      icon.style.transition = "none"
      icon.style.transform = "rotateY(0)"
    })
  })

  // Display current year in footer
  document.getElementById("displayDateYear").textContent = new Date().getFullYear()
})
