document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const reopenBox = document.getElementById("reopenBox");

    function toggleNavbar() {
        if (navbar.style.display === "none") {
            // Show the navbar and hide the reopen button
            navbar.style.display = "flex";
            reopenBox.style.display = "none";
        } else {
            // Hide the navbar and show the reopen button
            navbar.style.display = "none";
            reopenBox.style.display = "block";
        }
    }

    // Attach event listeners for toggling
    document.querySelector(".navbar__toggle").addEventListener("click", toggleNavbar);
    reopenBox.addEventListener("click", toggleNavbar);
});

//logo cursor blink
document.getElementById("navbar__logo").addEventListener("mouseenter", function() {
    this.innerHTML += '<span class="cursor">|</span>';
});

document.getElementById("navbar__logo").addEventListener("mouseleave", function() {
    const cursor = this.querySelector(".cursor");
    if (cursor) cursor.remove();
});
