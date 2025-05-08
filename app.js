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
    document.querySelectorAll(".carousel").forEach(carousel => {
      const mainImage = carousel.querySelector(".carousel-main img");
      const thumbnails = carousel.querySelectorAll(".carousel-thumbnails .thumbnail");
      let currentIndex = 0;
      let interval;
  
      const updateCarousel = (index) => {
        const newSrc = thumbnails[index].src;
        mainImage.style.opacity = 0;
        setTimeout(() => {
          mainImage.src = newSrc;
          mainImage.style.opacity = 1;
        }, 500);
  
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
          clearInterval(interval);
          currentIndex = index;
          updateCarousel(currentIndex);
          startCarousel();
        });
      });
  
      updateCarousel(currentIndex);
      startCarousel();
    });
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

// Attach event listener to the button
playButton.addEventListener("click", () => {               
    // Generate a random number between 1 and 100
    const randNum = Math.floor(Math.random() * 100) + 1;
    let randNum2, message, imageSource, videoFile;

    if (randNum === 1) {
        videoFile = "/fun/fdsr.mp4"; // Path to video 1
        message = "I have two pet turtles, Phineas & Ferb!";
        imageSource = "/fun/turtles.jpg";;
    } else if (randNum >= 2 && randNum <= 10) {
        videoFile = "/fun/fdr.mp4"; // Path to video 2
        randNum2 = Math.floor(Math.random() * 5) + 1;
        message = getMessageForNumberRare(randNum2);
        imageSource = getImageForNumberRare(randNum2);
    } else {
        videoFile = "/fun/fdc.mp4"; // Path to video 3
        randNum2 = Math.floor(Math.random() * 20) + 1;
        message = getMessageForNumberCommon(randNum2);
    }

    // Stop any ongoing fade-out
    videoPlayer.style.animation = "none"; 
    videoPlayer.style.opacity = "1"; // Reset opacity

    // Ensure video is visible
    fun_videoContainer.style.display = "block";

    // Update the video source and load it
    videoSource.src = videoFile;
    videoPlayer.load();
    videoPlayer.play(); // Start playing

    // Display the message in the HTML
    const textBox = document.getElementById("textBox");
    const textContent = document.getElementById("textContent");
    const textImage = document.getElementById("textImage");

    if (textBox && textContent && textImage && randNum <= 10) {
        textContent.textContent = message;
        textBox.style.display = "flex"; // Show the text box
        textImage.src = imageSource; // Set the image source
        textImage.style.display = "flex"; // Ensure the image is visible
    } else if (textBox && textContent && textImage) {
        textContent.textContent = message;
        textBox.style.display = "flex"; // Show the text box
        textImage.style.display = "none"; // Ensure the image is hidden
    }
    

    // Remove any existing 'timeupdate' listeners to avoid duplicates
    videoPlayer.removeEventListener("timeupdate", fadeOut);
    videoPlayer.addEventListener("timeupdate", fadeOut);
});

// Define a function for the fade-out logic
function fadeOut() {
    if (videoPlayer.duration - videoPlayer.currentTime <= 2) {
        videoPlayer.style.animation = "fadeOut 2s forwards";
        // Remove the event listener after the fade-out
        videoPlayer.removeEventListener("timeupdate", fadeOut);
    }
}

// Function to map numbers to messages
function getMessageForNumberCommon(number) {
    switch (number) {
        case 1:
            return "I used to be on the bowling team in highschool and uni.";
        case 2:
            return "I really like ping-pong.";
        case 3:
            return "I used to play a lot of badminton as a kid.";
        case 4:
            return "I just got into pickleball!";
        case 5:
            return "I really like anime.";
        case 6:
            return "I've seen over 600 different anime series.";
        case 7:
            return "My favorite colour is blue.";
        case 8:
            return "My favorite animal is the turtle.";
        case 9:
            return "I used to be really good at origami.";
        case 10:
            return "I used to work construction with my dad.";
        case 11:
            return "I used to be the audio tech in stage crew and worked as one for a community college.";
        case 12:
            return "My favorite retro game is Tetris.";
        case 13:
            return "I love to cook.";
        case 14:
            return "I love making videos.";
        case 15:
            return "I didn't listen to music till I went to college";
        case 16:
            return "I started learning the guitar because of the anime: Bocchi the Rock!";
        case 17:
            return "My fascination with time travel started with the Disney original, Minutemen.";
        case 18:
            return "I have a younger sister.";
        case 19:
            return "I was hospitalized for Anti-NMDr-encephalitis.";
        case 20:
            return "No fact, ROLL AGAIN! ☻";
        default:
            return "Unknown result.";
    }
}

// Function to map randNum2 to an image source
function getImageForNumberRare(number) {
    switch (number) {
        case 1: return "/fun/ball.jpg";
        case 2: return "/fun/ll.png";
        case 3: return "/fun/mm.png";
        case 4: return "/fun/sg.jpg";
        case 5: return "/images/fun.jpg";
        default: return "/images/fun.jpg"; // Fallback image
    }
}

function getMessageForNumberRare(number) {
    switch (number) {
        case 1:
            return "This is what the inside of a bowling ball looks like.";
        case 2:
            return "My third fav. anime is Land of the Lustrous";
        case 3:
            return "My second fav. anime is Madoka Magika";
        case 4:
            return "My #1 fav. anime is Steins;Gate";
        case 5:
            return "I love anime conventions";
        default:
            return "Unknown result.";
    }
}
