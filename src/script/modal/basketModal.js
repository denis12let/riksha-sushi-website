const basketModal1 = document.getElementById("basket__modal-btn-1");
const basketModal2 = document.getElementById("basket__modal-btn-2");
const basketModalWindow = document.querySelector(".modal__wrapper-2");

document.addEventListener("DOMContentLoaded", function () {
    const overflow = document.querySelector(".overflow");

    basketModal1.addEventListener("click", function () {
      basketModalWindow.classList.toggle("show");
      overflow.classList.toggle("show-overflow");
    });
    basketModal2.addEventListener("click", function () {
      basketModalWindow.classList.toggle("show");
      overflow.classList.toggle("show-overflow");
    });
});

basketModalWindow.addEventListener("click",function(event){
    if (event.target.closest(".basket__modal")) {
        return;
    }
    const overflow = document.querySelector(".overflow");

    basketModalWindow.classList.toggle("show");
    overflow.classList.toggle("show-overflow");
});
