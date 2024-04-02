const accountModal0 = document.getElementById("account__modal-btn-0");
const accountModal1 = document.getElementById("account__modal-btn-1");
const accountModal2 = document.getElementById("account__modal-btn-2");
const accountModalWindow = document.querySelector(".modal__wrapper-3");

document.addEventListener("DOMContentLoaded", function () {
    const overflow = document.querySelector(".overflow");

    accountModal0.addEventListener("click", function () {
      accountModalWindow.classList.toggle("show");
      overflow.classList.toggle("show-overflow");
    });
    accountModal1.addEventListener("click", function () {
      accountModalWindow.classList.toggle("show");
      overflow.classList.toggle("show-overflow");
    });
    accountModal2.addEventListener("click", function () {
      accountModalWindow.classList.toggle("show");
      overflow.classList.toggle("show-overflow");
    });
});

accountModalWindow.addEventListener("click",function(event){
    if (event.target.closest(".account__modal")) {
        return;
    }
    const overflow = document.querySelector(".overflow");

    accountModalWindow.classList.toggle("show");
    overflow.classList.toggle("show-overflow");
});
