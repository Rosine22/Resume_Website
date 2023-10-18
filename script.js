// This is the document that adds interaction to my Resume.

document.querySelector(".button-1").addEventListener("click", function downToContacts() {

    let chosenElement = document.getElementById("my-contact");
    chosenElement.scrollIntoView({behavior: "smooth", block: "start"});   
})

document.querySelector(".top").addEventListener("click", function backToTop() {

    let clickedButton = document.getElementById("at-top");
    clickedButton.scrollIntoView({behavior: "smooth", block: "start"})
})

document.querySelector(".git-hub").addEventListener("click", function directingGitHub() {
    window.location.href = "https://github.com/Rosine22?tab=repositories"
})

document.querySelector(".insta-gram").addEventListener("click", function directingInstagram() {
    window.location.href = "https://www.instagram.com/rosin_e55/"
})
document.querySelector(".whatsapp").addEventListener("click", function directingInstagram() {
    window.location.href = "+2507003719"
})

