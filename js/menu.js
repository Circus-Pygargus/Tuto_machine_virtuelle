// trouve la navbar
var navBabar = document.querySelector("#navbabar");

// récup la position avant scroll dans la page
var prevScrollPos = window.pageYOffset;

// ajoute évènement scroll
window.addEventListener("scroll", function(){
    // récup la position après scroll dans la page
    var currentScrollPos = window.pageYOffset;
    // compare les positions
    // on descend dans la page
    if (prevScrollPos > currentScrollPos) {
        navBabar.style.left = "50px";
    }
    // on monte dans la page
    else {
        navBabar.style.left = "-250px";
    }
    // on réattribue pour que ça fonctionne quelque soit la position dans la page
    prevScrollPos = currentScrollPos;
});