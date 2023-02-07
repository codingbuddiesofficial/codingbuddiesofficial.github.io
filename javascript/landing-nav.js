window.onscroll = function() {checkScroll()};
checkScroll()
function checkScroll() {
    // console.log(document.getElementById('hero').offsetHeight)
    let navbar = document.getElementById('navbar');
    if (document.documentElement.scrollTop > document.getElementById('hero').offsetHeight) {
        navbar.style.background = "white"
       document.querySelectorAll('.nd').forEach((nd) => {
        nd.style.color = "black"
       })

       document.getElementById('signup').style.background = "rgba(0, 0, 0, 0.1)"
       document.getElementById('signup').style.color = "black"

       navbar.style.boxShadow = "0 0 1px black"
    }
    else if (document.documentElement.scrollTop > 75) {
        navbar.style.background = "#212121"

        document.querySelectorAll('.nd').forEach((nd) => {
            nd.style.color = "white"
           })

           document.getElementById('signup').style.background = "rgba(255, 255, 255, 0.1)"
       document.getElementById('signup').style.color = "white"

       navbar.style.boxShadow = "none"
    }
    else {
        navbar.style.background = "none"

        document.querySelectorAll('.nd').forEach((nd) => {
            nd.style.color = "white"
           })

           document.getElementById('signup').style.background = "rgba(255, 255, 255, 0.1)"
       document.getElementById('signup').style.color = "white"

       navbar.style.boxShadow = "none"
    }
}