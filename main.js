var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
function openTabs(tab) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab).classList.add("active-tab");

}


function emptyInputBoxes() {
    emailInputBox = document.getElementById("email-input").value = "";
    nameInputBox = document.getElementById("name-input").value = "";
    messageInputBox = document.getElementById("message-input").value = "";
}


function openNav() {
    var mobileMenu = document.getElementById("navbar-mobile");
    mobileMenu.classList.toggle("show");
}