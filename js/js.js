
// Get the about link, container, and document
const aboutLink = document.getElementById('aboutLink');
const aboutContainer = document.getElementById('aboutContainer');
const doc = document.documentElement;

// Add click event listener to the about link to prevent container hiding when it's clicked
aboutLink.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling up to document
});

// Add click event listener to the document
doc.addEventListener('click', function(event) {
    // Check if the clicked element is not the about link or the container
    if (event.target !== aboutLink && event.target !== aboutContainer) {
        // Hide the container
        aboutContainer.style.display = 'none';
    }
});

// Add click event listener to show the container when the "About" link is clicked
aboutLink.addEventListener('click', function() {
    // Toggle the display of the container when the "About" link is clicked
    aboutContainer.style.display = aboutContainer.style.display === 'block' ? 'none' : 'block';
});

//contact form

// Open the form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Close the form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Close the form if clicked outside of it or on the cancel button
document.addEventListener("click", function(event) {
    var form = document.getElementById("myForm");
    var closeButton = event.target.matches(".cancel");
    var insideForm = event.target.closest(".form-popup");
    var openButton = event.target.closest(".Pop_Up_Button");
    var contactButton = event.target.closest(".contact");
    
    if ((closeButton || (!insideForm && !openButton && !contactButton)) && form.style.display === "block") {
        closeForm();
    }
}, false);


//end contact form


//NAVBAR 



//END NAVBAR



//FOTO DYNAMIC
// Wait for the page to finish loading
window.addEventListener('load', function () {
    // Get the image element
    var nameElement = document.querySelector('.fname');

    // Gradually increase the opacity of the image to 1
    nameElement.style.opacity = 1;
});


//END FOTO DYNAMIC
function scrollToContent() {
    var content = document.getElementById('content');
    content.scrollIntoView({ behavior: 'smooth' });
}


// Get the initial scroll position
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

// Add scroll event listener
window.addEventListener('scroll', function() {
    // Get the current scroll position
    var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check the scroll direction
    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        document.body.style.backgroundColor = '#000000'; // Fade background to black
    } else {
        // Scrolling up
        document.body.style.backgroundColor = '#f0f0f0'; // Lighten background color
    }

    // Update the last scroll position
    lastScrollTop = currentScrollTop;
});