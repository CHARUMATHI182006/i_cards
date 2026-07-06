var form=document.querySelector(".popup-box");
var overlay=document.querySelector(".overlay");
var popup=document.querySelector(".add");
popup.addEventListener("click",function(){
    overlay.style.display="block";
    form.style.display="block";
})
var book=document.getElementById("add-book");

function additional(){
    var title=document.getElementById("book-title").value;
var author=document.getElementById("book-author").value;
var description=document.getElementById("book-description").value;
    var whole=document.querySelector(".container");
    var container=document.createElement("div");
    container.setAttribute("class","book-container")
    container.innerHTML="<h2>"+title+"</h2>"+"<br>"+"<h3>"+author+"</h3>"+"<br>"+"<p style='text-align: justify;'>"+description+"</p>"+"<button id='del-btn' onclick='Remove(event)'>Delete</button>";
whole.append(container);
overlay.style.display="none";
    form.style.display="none";
    document.querySelector(".form").reset();
}
var del=document.getElementById("del-btn");
function Remove(event){
   event.target.parentElement.remove();
}
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none";
    form.style.display="none";
    document.querySelector(".form").reset();
})
var addbook = document.getElementById("add-book");
addbook.addEventListener("click",function(event){
    event.preventDefault()
})