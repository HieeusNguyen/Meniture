const btnRegister = document.getElementById('action-btn');

btnRegister.addEventListener('click', function () {
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
    }
});
const emailEle = document.getElementById('email');
const passEle = document.getElementById('passWord');

// Validate dữ liệu trong các ô input và highlight
function checkValidate() {
    let emailValue = emailEle.value;
    let passValue = passEle.value;

    let isCheck = true;

    // Kiểm tra trường email
    if (emailValue == '') {
        alert('Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        alert('Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }


    if (passValue == '') {
        alert('Mật khẩu không được để trống');
        isCheck = false;
    } else if (!isPass(passValue)) {
        alert('Mật khẩu không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(passEle);
    }

    return isCheck;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}
function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}