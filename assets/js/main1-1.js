var submit = document.querySelector(".action-btn");
submit.addEventListener("click", handle);
function handle() {
    var fullNameId = document.querySelector(".fullName").value;
    var emailId = document.querySelector(".email").value;
    var passWordId = document.querySelector(".passWord").value;
    var phoneNumberId = document.querySelector(".phoneNumber").value;

    if (!fullNameId.match(/^[a-zA-Z\s]+$/)) {
        alert("Họ tên chỉ được chứa các ký tự chữ cái và dấu cách!");
        console.log(fullNameId);
        return false;
    }

    if(!emailId.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
    {
      alert("Email không hợp lệ. Vui lòng nhập lại!")
      console(emailId);
      return false;
    }

    if (!passWordId.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)) {
      alert("Mật khẩu ít nhất là 6 kí tự");
      console.log(passWordId);
      return false;
  }

  if (!phoneNumberId.match(/^[0-9]{10}$/)) {
    alert("Số điện thoại gồm 10 số");
    console.log(phoneNumberId);
    return false;
}

    alert(
        "Tên: " +
            fullNameId +
            "\nEmail: " +
            emailId +
            "\nPassword: " +
            passWordId +
            "\nPhone Number: " +
            phoneNumberId
    );
}
