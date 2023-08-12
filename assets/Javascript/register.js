function notnull() {
  var ids = ["spec-infor-1", "spec-infor-2"]; // Mảng lưu trữ các id của các input
  var messages = [
    "Mã sinh viên không được để trống !!!",
    "Họ tên không được để trống !!!",
  ]; // Mảng lưu trữ các thông báo lỗi tương ứng
  var valid = true; // Biến lưu kết quả của việc kiểm tra các input
  for (var i = 0; i < ids.length; i++) {
    // Vòng lặp for duyệt qua các id
    var input = document.getElementById(ids[i]); // Lấy input theo id
    if (input.value.trim() == "") {
      // Kiểm tra xem input có để trống hay không
      input.style.border = "2px solid yellow"; // Thiết lập màu nền cho input là vàng
      alert(messages[i]); // Hiển thị thông báo lỗi
      valid = false; // Đặt biến valid thành false
    } else {
      input.style.border = "1px solid black"; // nếu đã điền thì sẽ trở về màu ban đầu
    }
  }
  return valid; //Trả về biến valid
}
function validateEmail() {
  var email = document.getElementById("spec-infor-3").value;
  // Tạo một biểu thức chính quy cho email
  var regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Kiểm tra xem chuỗi email có khớp với biểu thức chính quy hay không
  var result = regex.test(String(email).toLowerCase());
  if (result == false) {
    alert("Email không hợp lệ !!!");
    document.getElementById("spec-infor-3").style.border = "2px solid yellow";
  } else {
    document.getElementById("spec-infor-3").style.border = "1px solid black";
  }
  return result;
}
function checkboxsex() {
  var resultNa = document.getElementById("check-box-Na");
  var resultNu = document.getElementById("check-box-Nu");
  var result = resultNa.checked || resultNu.checked;
  if (result == false) {
    alert("Bạn chưa check vào mục giới tính !!!");
    document.getElementById("sex").style.border = "2px solid yellow";
  } else {
    document.getElementById("sex").style.border = "1px solid black";
  }
}
function checkboxhobby() {
  var result =
    document.getElementById("check-1").checked ||
    document.getElementById("check-2").checked ||
    document.getElementById("check-3").checked ||
    document.getElementById("check-4").checked ||
    document.getElementById("check-5").checked;
  if (result == false) {
    alert("Bạn chưa check vào mục sở thích !!!");
    document.getElementById("hobby").style.border = "2px solid yellow";
  } else {
    document.getElementById("hobby").style.border = "1px solid black";
  }
}
function checkRegion() {
  var region = document.getElementById("Selection").value; // Lấy giá trị của option được chọn
  if (region == "none") {
    alert("Bạn chưa chọn quốc gia !!!");
    document.getElementById("Selection").style.border = "2px solid yellow";
  } else {
    document.getElementById("Selection").style.border = "1px solid black";
  }
}
function updateCount() {
  var length = document.getElementById("Note-box").value.length; // Lấy số lượng kí tự trong hàm textarea
  document.getElementById("count").innerHTML = "Kí tự: " + length + "/200.";
}
