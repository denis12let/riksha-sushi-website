const basketModal1 = document.getElementById("basket__modal-btn-1");
const basketModal2 = document.getElementById("basket__modal-btn-2");
const basketModalWindow = document.querySelector(".modal__wrapper-2");
const overflow = document.querySelector(".overflow");
let isModalVisible = false;

document.addEventListener("DOMContentLoaded", function () {

    basketModal1.addEventListener("click", function () {
      !isModalVisible ? basketModalAdd() : basketModalRemove();
    });
    basketModal2.addEventListener("click", function () {
      !isModalVisible ? basketModalAdd() : basketModalRemove();
    });
});

const basketModalAdd = () => {
  basketModalWindow.classList.add("show");
  overflow.classList.add("show-overflow");
  document.body.style.overflow = "hidden";
  isModalVisible = true;
};

const basketModalRemove = () => {
  basketModalWindow.classList.remove("show");
  overflow.classList.remove("show-overflow");
  document.body.style.overflow = "auto";
  isModalVisible = false;
};

basketModalWindow.addEventListener("click",function(event){
    if (event.target.closest(".basket__modal")) {
        return;
    }

    !isModalVisible ? basketModalAdd() : basketModalRemove();
});


const accountModal0 = document.getElementById("account__modal-btn-0");
const accountModal1 = document.getElementById("account__modal-btn-1");
const accountModal2 = document.getElementById("account__modal-btn-2");
const accountModalWindow = document.querySelector(".modal__wrapper-3");

document.addEventListener("DOMContentLoaded", function () {

    accountModal0.addEventListener("click", function () {
      !isModalVisible ? accountModalAdd() : accountModalRemove();
    });
    accountModal1.addEventListener("click", function () {
      !isModalVisible ? accountModalAdd() : accountModalRemove();
    });
    accountModal2.addEventListener("click", function () {
      !isModalVisible ? accountModalAdd() : accountModalRemove();
    });
});

const accountModalAdd = () => {
  accountModalWindow.classList.add("show");
  overflow.classList.add("show-overflow");
  document.body.style.overflow = "hidden";
  isModalVisible = true;
};

const accountModalRemove = () => {
  accountModalWindow.classList.remove("show");
  overflow.classList.remove("show-overflow");
  document.body.style.overflow = "auto";
  isModalVisible = false;
};


accountModalWindow.addEventListener("click", function(event){
    if (event.target.closest(".account__modal")) {
        return;
    }

    !isModalVisible ? accountModalAdd() : accountModalRemove();
});
