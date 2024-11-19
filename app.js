document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const reopenBox = document.getElementById("reopenBox");
    const content = document.querySelector(".content");

    // Center the content based on the navbar's state
    function centerContent() {
        if (content) {
            const navbarWidth = navbar.offsetWidth;
            if (navbar.classList.contains("closed")) {
                content.style.transform = "translateX(0)"; // Content stays centered when navbar is closed
            } else {
                content.style.transform = `translateX(${navbarWidth/2}px)`; // Content moves right when navbar opens
            }
        }
    }

    // Toggle navbar (open/close) function
    function toggleNavbar() {
        navbar.classList.toggle("closed"); // Toggle the 'closed' class to animate the navbar
        if (navbar.classList.contains("closed")) {
            reopenBox.style.display = "block"; // Show the reopen button when navbar is closed
        } else {
            reopenBox.style.display = "none"; // Hide the reopen button when navbar is open
        }
        centerContent(); // Adjust content centering after toggling
    }

    // Initially center content (based on the navbar being open by default)
    centerContent();

    // Attach event listeners for toggling
    document.querySelector(".navbar__toggle").addEventListener("click", toggleNavbar);
    reopenBox.addEventListener("click", toggleNavbar);

    // Re-center content on window resize
    window.addEventListener("resize", centerContent);
});

//logo cursor blink
document.getElementById("navbar__logo").addEventListener("mouseenter", function() {
    this.innerHTML += '<span class="cursor">|</span>';
});

document.getElementById("navbar__logo").addEventListener("mouseleave", function() {
    const cursor = this.querySelector(".cursor");
    if (cursor) cursor.remove();
});

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("current-image");
    const thumbnails = document.querySelectorAll(".thumbnail");
    let currentIndex = 0;
    let interval;
  
    const updateCarousel = (index) => {
      // Update the main image source
      const newSrc = thumbnails[index].src;
      mainImage.style.opacity = 0; // Fade out current image
      setTimeout(() => {
        mainImage.src = newSrc; // Change image after fade out
        mainImage.style.opacity = 1; // Fade in new image
      }, 500); // Sync with fade-out duration (500ms)
  
      // Update the active thumbnail
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      thumbnails[index].classList.add("active");
    };
  
    const startCarousel = () => {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        updateCarousel(currentIndex);
      }, 6900);
    };
  
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        clearInterval(interval); // Stop automatic cycling
        currentIndex = index;
        updateCarousel(currentIndex);
        startCarousel(); // Restart the carousel
      });
    });
  
    // Initialize carousel
    updateCarousel(currentIndex);
    startCarousel();
  });

function copyEmailToClipboard() {
    // Copy the email to the clipboard
    const email = "petrtran01@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        // Show the notification message
        const notification = document.getElementById("copyNotification");
        notification.style.display = "inline";

        // Hide the notification after 2 seconds
        setTimeout(() => {
            notification.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}


