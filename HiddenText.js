// JavaScript source code
var tag = document.getElementById('hidden');
var button = document.querySelector('button');
button.addEventListener('click', function () {
    tag.classList.toggle('hidden');
});
function toggleText() {
    var text = document.getElementById("hidden");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

