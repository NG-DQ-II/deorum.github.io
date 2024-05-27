// Container statements
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

// Button declarations
const cartBtn = document.getElementById ('cart-btn');
const addCartBtn = document.getElementById ('add-cart-btn');
const searchBtn = document.getElementById ('search-btn');
const menuBtn = document.getElementById ('menu-btn');







// Function that veryfies if the clicks were made on the propper part
function handleDocumentClick(event) {
    // Verifies if the click where on a propper container or button
    if (
        !navbar.contains(event.target) &&
        !searchForm.contains(event.target) &&
        !cartItem.contains(event.target) &&
        event.target !== cartBtn &&
        event.target !== searchBtn &&
        event.target !== menuBtn
    ) {
        // Removes "active"
        navbar.classList.remove("active");
        searchForm.classList.remove("active");
        cartItem.classList.remove("active");
    }
}

// Detects click on every part of the document
document.addEventListener('click', handleDocumentClick);

// Detects click on menu button and shows the container
menuBtn.addEventListener('click', () => {
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
    } else {
        navbar.classList.add('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove("active");
    }
})

// Detects click on search button and shows the container
searchBtn.addEventListener('click', () => {
    if (searchForm.classList.contains("active")) {
        searchForm.classList.remove("active");
    } else {
        navbar.classList.remove('active');
        searchForm.classList.add('active');
        cartItem.classList.remove("active");
    }
})

// Detects click on cart button and shows the container
cartBtn.addEventListener('click', () => {
    if (cartItem.classList.contains("active")) {
        cartItem.classList.remove("active");
    } else {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        cartItem.classList.add("active");
    }
})

// Removes containers when detects scroll
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}
