const alert = document.getElementById('mybutton');

alert.addEventListener('click', function() {
    alert.innerHTML = "Button is clicked";
});

const bckgrChange = document.getElementById('mybutton2');

/* bckgrChange.addEventListener('click', function(changeBackground) {
    bckgrChange.parentNode.classList.add("red-background");
});
 */

bckgrChange.addEventListener('click', function(toggleBackground) {
    bckgrChange.parentNode.classList.toggle("red-background");
});