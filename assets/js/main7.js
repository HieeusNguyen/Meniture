function send()
{
    var arr = document.getElementsByTagName('input'); 
    var tarea = document.getElementsByTagName('textarea');
    console.log(arr);
    var hoten = arr[1].value;
    var email = arr[2].value;
    var dienthoai = arr[3].value;
    var diachi = arr[4].value;
    var noidung = tarea[0].value;
    if(hoten == "" || email == "" || dienthoai == "" || diachi == "" || noidung == "" )
    {
        alert("Nhập đầy đủ thông tin !");
        console.log("Hello");
        return;
    }
    if(isNaN(dienthoai))
    {
        alert("Số điện thoại không chính xác !");
        return;      
    }
}
