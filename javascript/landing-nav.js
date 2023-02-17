window.onscroll = function() {checkScroll()};
checkScroll()
function checkScroll() {
    // console.log(document.getElementById('hero').offsetHeight)
    let navbar = document.getElementById('navbar');
    if (document.documentElement.scrollTop+navbar.offsetHeight > document.getElementById('hero').offsetHeight) {
        navbar.style.background = "white"
       document.querySelectorAll('.nd').forEach((nd) => {
        nd.style.color = "black"
       })

       document.getElementById('signup').style.background = "rgba(0, 0, 0, 0.1)"
       document.getElementById("hbtn").style.background = "rgba(0, 0, 0, 0.1)";
       document.getElementById("hbtn").style.color = "black";
       document.getElementById('signup').style.color = "black"

       navbar.style.boxShadow = "0 0 1px black";
       navbar.classList.add("nav2");

       let dropdowns = document.querySelectorAll(".dropdown");
    }
    else if (document.documentElement.scrollTop > 75) {
        navbar.style.background = "#212121"
        navbar.classList.remove("nav2");

        document.querySelectorAll('.nd').forEach((nd) => {
            nd.style.color = "white"
           })

           document.getElementById('signup').style.background = "rgba(255, 255, 255, 0.1)"
       document.getElementById('signup').style.color = "white"
       document.getElementById("hbtn").style.background = "rgba(255, 255, 255, 0.1)";
       document.getElementById("hbtn").style.color = "white";

       navbar.style.boxShadow = "none"
    }
    else {
        navbar.classList.remove("nav2");
        navbar.style.background = "none"

        document.querySelectorAll('.nd').forEach((nd) => {
            nd.style.color = "white"
           })

           document.getElementById('signup').style.background = "rgba(255, 255, 255, 0.1)";
       document.getElementById('signup').style.color = "white"
       document.getElementById("hbtn").style.background = "rgba(255, 255, 255, 0.1)";
       document.getElementById("hbtn").style.color = "white";

       navbar.style.boxShadow = "none"
    }
}

function toggleMenu() {
    document.getElementById("hbmenu").classList.toggle("visible");
}
let dropdownlis = document.querySelectorAll('.dropdownli');
let timeout;

dropdownlis.forEach((li) => {
    li.addEventListener('mouseover', () => {
        document.querySelectorAll(".dropdown").forEach((dd) => {
            dd.classList.remove("show")
        })
        document.getElementById(li.getAttribute('dropdown')).classList.add("show");
        console.log(li.getAttribute('dropdown'))
        console.log('hovered')
    })

    li.addEventListener('mouseout', () => {
            document.getElementById(li.getAttribute('dropdown')).classList.remove("show");
            console.log(li.getAttribute('dropdown'))
    })
})