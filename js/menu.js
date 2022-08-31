const menuButton = document.getElementById('menuButton');
const menuSpace = document.getElementById('menuSpace')
const body = document.getElementById('body');
// Text inside the menu 👇
const itemOptions = document.querySelectorAll('.menuItemOption');
// Menu Background 👇
const menuBackground = document.getElementById("menuBackground");


// Menu already opened? 
// false = closed, true = open 👇
let menuButtonToggle = false; 
// Light background behind menu? 
// false = no, true = yes 👇
let lightSectionBehind = false;


menuButton.onclick = () => {
    // Check whether the menu is already open (menuButtonToggle = false means closed)
    if (!menuButtonToggle) {
        // Disable Scrolling
        body.classList.add('disbleScrolling')

        // Delete ending classes if applied.
        // To items
        itemOptions.forEach(function(element) {
            element.classList.remove("menuItemOptionEnd");
        })
        // And background
        menuBackground.classList.remove("menuBackgroundEnd");

        //Remove menu icon background.
        document.getElementsByClassName('menu-icon')[0].classList.remove('menuBackground');

        // Make the menu appear
        menuSpace.classList.toggle ('invisible')
        // Set menuButtonToggle to true so the menu won't open again.
        menuButtonToggle = true;

        // If there's a light background behind the menu, text will turn black.
        if (lightSectionBehind) {
            itemOptions.forEach(function(element) {
                element.style.color = 'black';
            })
        } else {
            itemOptions.forEach(function(element) {
                element.style.color = 'white';
            })
        }
    } else if (menuButtonToggle) {
        closeMenu();
    }
}

function closeMenu() {
    // Ending animation to each element.
    // Items
    itemOptions.forEach(function(element) {
        element.classList.toggle("menuItemOptionEnd");
    })
    // Background
    menuBackground.classList.toggle("menuBackgroundEnd");
    // Make the menu icon get back to its normal state
    document.getElementsByClassName('menu-icon__cheeckbox')[0].checked = false;
    // Apply background to the menu icon.
    document.getElementsByClassName('menu-icon')[0].classList.add('menuBackground');
    // Set a timeout to let the animation be visible.
    setTimeout(() => {
        // Enable Scrolling
        body.classList.remove('disbleScrolling')
        // Make the menu dissapear 
        menuSpace.classList.toggle ('invisible')
        // Set menuButtonToggle to false so the menu can be opened again.
        menuButtonToggle = false;
    }, 500)
}


// C o l o r   F i x //

// Menu Lines
const menu = document.getElementsByClassName('menuLine');
// Light Section
const lightSection = document.querySelector('.lightSection');

//Set an intersection observer
const sectionObserver = new IntersectionObserver 
(function(entries) {
    entries.forEach(entry => {
        // If it is intersecting, menu bars turn black
        if(entry.isIntersecting) {
            menu[0].style.backgroundColor = 'black';
            menu[1].style.backgroundColor = 'black';
            // Set lightSectionBehind to true so if the menu is opened, text is black aswell.
            lightSectionBehind = true;
        //otherwise, they'll return to white
        } else { 
            menu[0].style.backgroundColor = 'white';
            menu[1].style.backgroundColor = 'white';
            // Set lightSectionBehind back to false.
            lightSectionBehind = false;
        }
    })
});
// Set the observer for a light section.
sectionObserver.observe(lightSection);