//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên
showSlides((slideIndex = 0));

function currentSlide(n) {
    showSlides((slideIndex = n));
}

var modal = document.querySelector(".modal");
window.addEventListener("load", () => {
    if (sessionStorage.getItem("show") == 1) {
        modal.style.display = "none";
        console.log("none");
    } else {
        modal.style.display = "flex";
        console.log("flex");
    }
});

var close = document.querySelector(".close-btn");
close.addEventListener("click", handle);
function handle() {
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
    sessionStorage.setItem("show", 1);
}
