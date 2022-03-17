function myFunction() {
    var x = document.getElementById("myTop_nav");
    if (x.className === "top_nav") {
        x.className += " responsive";
    } else {
        x.className = "top_nav";
    }
}