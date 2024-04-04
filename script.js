// Get the open menu icon element
const openMenuIcon = document.getElementById("open-menu");
// Get the close menu icon element
const closeMenuIcon = document.getElementById("close-menu");
// Get the navigation element
const nav = document.querySelector('nav');
// Get the body element
const body = document.body;
// Initialize a boolean to track if the modal is open
let isModalOpen = false;

// Function to open or close the sidebar
const openOrCloseSideBar = () =>{
    // Toggle the isModalOpen boolean
    isModalOpen = !isModalOpen;
    
    // If the modal is open
    if (isModalOpen){
        // Display the navigation as flex
        nav.style.display = "flex";
        // Add the 'fixed' class to the navigation
        nav.classList.add('fixed');
        // Add the 'transparent-bg' class to the body
        body.classList.add('transparent-bg');
    } else {
        // Hide the navigation
        nav.style.display = "none";
        // Remove the 'fixed' class from the navigation
        nav.classList.remove('fixed')
        // Remove the 'transparent-bg' class from the body
        body.classList.remove('transparent-bg');
    }
    // Toggle the 'hidden-on-mobile' class for the open menu icon
    openMenuIcon.classList.toggle("hidden-on-mobile");
    // Toggle the 'hidden-on-mobile' class for the close menu icon
    closeMenuIcon.classList.toggle("hidden-on-mobile");
}

// Add a click event listener to the open menu icon to run the openOrCloseSideBar function
openMenuIcon.addEventListener("click", openOrCloseSideBar);
// Add a click event listener to the close menu icon to run the openOrCloseSideBar function
closeMenuIcon.addEventListener("click", openOrCloseSideBar);
