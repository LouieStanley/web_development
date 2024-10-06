var popupoverlay = document.querySelector(".pop-overlay"); 
var popupbox = document.querySelector(".pop-box");

var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelpopup = document.getElementById("cancle-popup");
cancelpopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitle = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author-input");
var bookdescripition = document.getElementById("book-descripition-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitle.value}</h2>
                    <h5>${bookauthor.value}</h5>
                    <p>${bookdescripition.value}</p>
                    <button class="delete-book">Delete</button>`;
    container.append(div);
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    
    booktitle.value = '';
    bookauthor.value = '';
    bookdescripition.value = '';
});

container.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-book")) {
        event.target.parentElement.remove();
    }
});