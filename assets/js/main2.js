var mess = document.querySelector(".product-img");
mess.addEventListener("click", handle);
function handle(){
    var money = document.querySelector(".product-price ").textContent;
    var title = document.querySelector(".product-title a").textContent;
    console.log(money);
    alert("Gia: " + money);
    alert("Tieu de: " + title);
}