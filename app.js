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


