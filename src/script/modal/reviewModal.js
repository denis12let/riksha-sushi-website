const reviewModal1 = document.getElementById("btn-1");
const reviewModal2 = document.getElementById("review__modal-btn-1");
const reviewModal3 = document.getElementById("review__modal-btn-2");
const reviewModalWindow = document.querySelector(".modal__wrapper-4");
const overflow = document.querySelector(".overflow");

document.addEventListener("DOMContentLoaded", function(){
    
    reviewModal1.addEventListener("click", function () {
        reviewModalWindow.classList.toggle("show");
        overflow.classList.toggle("show-overflow");
    });
    reviewModal2.addEventListener("click", function () {
        reviewModalWindow.classList.toggle("show");
        overflow.classList.toggle("show-overflow");
    });
    reviewModal3.addEventListener("click", function () {
        reviewModalWindow.classList.toggle("show");
        overflow.classList.toggle("show-overflow");
    });
});

reviewModalWindow.addEventListener("click", function(event){
    console.log(11);
    if (event.target.closest(".review__modal")) {
        return;
    }

    reviewModalWindow.classList.toggle("show");
    overflow.classList.toggle("show-overflow");
});