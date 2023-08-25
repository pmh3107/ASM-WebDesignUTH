var valid = true; // Biến lưu kết quả của việc kiểm tra các input
function notnull() {
  var ids = ["spec-infor-1", "spec-infor-2"]; // Mảng lưu trữ các id của các input
  var messages = [
    "Mã sinh viên không được để trống !!!",
    "Họ tên không được để trống !!!",
  ]; // Mảng lưu trữ các thông báo lỗi tương ứng
  for (var i = 0; i < ids.length; i++) {
    // Vòng lặp for duyệt qua các id
    var input = document.getElementById(ids[i]); // Lấy input theo id
    if (input.value.trim() == "") {
      // Kiểm tra xem input có để trống hay không
      input.style.backgroundColor = " yellow"; // Thiết lập màu nền cho input là vàng
      alert(messages[i]); // Hiển thị thông báo lỗi
      valid = false; // Đặt biến valid thành false
    } else {
      input.style.backgroundColor = "white"; // nếu đã điền thì sẽ trở về màu ban đầu
      valid = true;
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
    document.getElementById("spec-infor-3").style.backgroundColor = " yellow";
    valid = false;
  } else {
    document.getElementById("spec-infor-3").style.backgroundColor = "white";
    valid = true;
  }
  return valid;
}
function checkboxsex() {
  var resultNa = document.getElementById("check-box-Na");
  var resultNu = document.getElementById("check-box-Nu");
  var result = resultNa.checked || resultNu.checked;
  if (result == false) {
    alert("Bạn chưa check vào mục giới tính !!!");
    document.getElementById("sex").style.backgroundColor = " yellow";
    valid = false;
  } else {
    document.getElementById("sex").style.backgroundColor = "white";
    valid = true;
  }
  return valid;
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
    document.getElementById("hobby").style.backgroundColor = " yellow";
    valid = false;
  } else {
    document.getElementById("hobby").style.backgroundColor = "white";
    valid = true;
  }
  return valid;
}
function checkRegion() {
  var region = document.getElementById("Selection").value; // Lấy giá trị của option được chọn
  if (region == "none") {
    alert("Bạn chưa chọn quốc gia !!!");
    document.getElementById("Selection").style.backgroundColor = " yellow";
    valid = false;
  } else {
    document.getElementById("Selection").style.backgroundColor = "white";
    valid = true;
  }
  return valid;
}
function updateCount() {
  var length = document.getElementById("Note-box").value.length; // Lấy số lượng kí tự trong hàm textarea
  document.getElementById("count").innerHTML = "Kí tự: " + length + "/200.";
}

function Checkpass() {
  var pass1 = document.getElementById("pass-1").value;
  var pass2 = document.getElementById("pass-2").value;
  console.log(pass1);
  console.log(pass2);
  if (pass1 == "") {
    alert("Mật khẩu không được để trống");
    document.getElementById("pass-1").style.backgroundColor = "yellow";
    document.getElementById("pass-2").style.backgroundColor = "yellow";
    valid = false;
  } else {
    if (pass1 != pass2) {
      alert("Mật khẩu không khớp !!!");
      document.getElementById("pass-1").style.backgroundColor = "yellow";
      document.getElementById("pass-2").style.backgroundColor = "yellow";
      valid = false;
    } else {
      document.getElementById("pass-1").style.backgroundColor = "white";
      document.getElementById("pass-2").style.backgroundColor = "white";
      valid = true;
    }
  }
  return valid;
}

function validateAll() {
  // Gọi các hàm khác trong hàm này

  notnull();
  validateEmail();
  checkboxsex();
  checkboxhobby();
  checkRegion();
  Checkpass();
}

function validateForm() {
  var valid = true;
  valid = notnull() && valid;
  valid = validateEmail() && valid;
  valid = checkboxsex() && valid;
  valid = checkboxhobby() && valid;
  valid = checkRegion() && valid;
  valid = Checkpass() && valid;
  return valid;
}

function checktosubmit() {
  var button = document.getElementById("submit-btn"); // Lấy button theo id
  // Hàm xử lý sự kiện click của button
  valid = validateForm() && valid; // Gọi hàm kiểm tra lỗi và lưu kết quả vào biến valid
  console.log(valid);
  if (valid == true) {
    // Nếu không có lỗi
    button.setAttribute("type", "submit"); // Thay đổi type của button thành submit
    button.click(); // Gọi lại sự kiện click của button để submit form
  } else {
    // Nếu có lỗi
    alert("Vui lòng sửa các lỗi trước khi gửi form"); // Hiển thị thông báo lỗi
  }
}

// function checktosubmit() {
//   // Lấy form theo class
//   var form = document.querySelector(".register");
//   form.addEventListener("submit", function (event)) ;
//     // Gọi hàm validateAll () và lưu kết quả vào biến valid
//     valid = validateForm() && valid; // Gọi hàm kiểm tra lỗi và lưu kết quả vào biến valid
//     console.log(valid);
//     if (valid == true) {
//       // Nếu không có lỗi
//       // Cho phép gửi form bình thường
//     } else {
//       // Nếu có lỗi
//       // Ngăn chặn việc gửi form
//       event.preventDefault();
//       // Hiển thị thông báo lỗi
//       alert("Vui lòng sửa các lỗi trước khi gửi form");
//     }
//   }
// }
