const minusBtn = document.querySelector(".number-minus");
const plusBtn = document.querySelector(".number-plus");
const itemCount = document.getElementById("count");
const price1 = document.querySelector(".price-1 p");
const price2 = document.querySelector(".price-2 p");
const reviewBtn = document.getElementById("btn-1");

const priceOld = Number(price1.textContent.slice(0, price1.textContent.length-2));
const priceNew = Number(price2.textContent.slice(0, price2.textContent.length-2));

function handleMinusClick() {


    if(itemCount.textContent != '1'){
        let count = Number(itemCount.textContent) - 1;
        itemCount.textContent = String(count);
        price1.textContent = String(priceOld * count) + " ₽";
        price2.textContent = String(priceNew * count) + " ₽";
    }
}

function handlePlusClick(){
    let count = Number(itemCount.textContent) + 1;
    itemCount.textContent = String(count);
    price1.textContent = String(priceOld * count) + " ₽";
    price2.textContent = String(priceNew * count) + " ₽";
}


minusBtn.addEventListener("click", handleMinusClick);
plusBtn.addEventListener("click", handlePlusClick);