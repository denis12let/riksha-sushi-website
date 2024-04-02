const reviewModal1 = document.getElementById("btn-1");
const reviewModal2 = document.getElementById("review__modal-btn-1");
const reviewModal3 = document.getElementById("review__modal-btn-2");
const reviewModalWindow = document.querySelector(".modal__wrapper-4");

document.addEventListener("DOMContentLoaded", function(){
    
    reviewModal1.addEventListener("click", function () {
        !isModalVisible ? reviewModalAdd() : reviewModalRemove();
    });
    reviewModal2.addEventListener("click", function () {
        !isModalVisible ? reviewModalAdd() : reviewModalRemove();
    });
    reviewModal3.addEventListener("click", function () {
        !isModalVisible ? reviewModalAdd() : reviewModalRemove();
    });
});

const reviewModalAdd = () => {
    reviewModalWindow.classList.add("show");
    overflow.classList.add("show-overflow");
    document.body.style.overflow = "hidden";
    isModalVisible = true;
  };
  
  const reviewModalRemove = () => {
    reviewModalWindow.classList.remove("show");
    overflow.classList.remove("show-overflow");
    document.body.style.overflow = "auto";
    isModalVisible = false;
  };
  


reviewModalWindow.addEventListener("click", function(event){
    if (event.target.closest(".review__modal")) {
        return;
    }

    !isModalVisible ? reviewModalAdd() : reviewModalRemove();
});