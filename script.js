var status = 0;

let root = document.documentElement;

var navbar = document.querySelector("nav");

function darkmode() {
    //console.log("hello");

    if (status == 0) {
        status = 1;
        root.style.setProperty('--white', '#000000');
        root.style.setProperty('--black', '#ffffff');  
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
    } else {
        status = 0;
        root.style.setProperty('--white', '#ffffff');
        root.style.setProperty('--black', '#000000');
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
    }
}