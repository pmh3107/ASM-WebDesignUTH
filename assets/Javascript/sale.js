var optionSelect = document.getElementById("select");
var table = document.getElementById("table");
function filterTable() {
  var rows = table.getElementsByTagName("tr");
  var value = optionSelect.value;
  for (var i = 1; i < rows.length; i++) {
    var price = rows[i].cells[2].innerHTML;
    // nếu không có lựa chọn thì hiện tất cả
    if (value == "") {
      rows[i].style.display = "";
    } else if (value == "200") {
      // nếu chọn phổ thông hiện 200 - 600
      if (price >= 200 && price < 600) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    } else if (value == "0") {
      // nếu chọn thấp thì 0 - 200
      if (price <= 199) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    } else if (value == "600") {
      if (price >= 600) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    } else {
      rows[i].style.display = "none";
    }
  }
}
function daott(obj, type) {
  var row = obj.parentElement.parentElement;
  var tbx = row.getElementsByTagName("input");
  for (var i = 0; i < tbx.length; i++) {
    var inputType = tbx[i].getAttribute("type");
    if (inputType == "Number") {
      tbx[i].value = "";
      tbx[i].disabled = !tbx[i].disabled;
      row.cells[4].innerHTML = "";
      sumMoney();
    }
  }
  return;
}
function thanhtien(obj) {
  // Lấy hàng chứa obj
  var row = obj.parentNode.parentNode;
  // Lấy giá trị của ô đơn giá và chuyển đổi sang kiểu số
  var sotien = Number(row.cells[2].innerHTML);
  // Lấy giá trị của ô số lượng và chuyển đổi sang kiểu số
  var soluong = Number(obj.value);
  // Tính thành tiền bằng cách nhân đơn giá với số lượng
  var tienthanh = sotien * soluong;
  // Gán giá trị cho ô thành tiền và chuyển đổi sang kiểu chuỗi
  row.cells[4].innerHTML = "$" + Number(tienthanh);
}
// Hàm để tính tổng tiền
function sumMoney() {
  // Biến để lưu trữ tổng tiền
  let total = 0;
  // Lấy bảng từ HTML
  let table = document.getElementById("table");
  // Lặp qua các hàng trong bảng, bỏ qua hàng đầu tiên và hàng cuối cùng
  for (let i = 1; i < table.rows.length - 1; i++) {
    // Lấy số lượng từ cột thứ 4
    let quantity = table.rows[i].cells[3].children[0].value;
    // Lấy đơn giá từ cột thứ 3
    let price = table.rows[i].cells[2].innerHTML;
    // Nhân số lượng với đơn giá và cộng vào tổng tiền
    total += quantity * price;
  }
  // Hiển thị tổng tiền ở hàng cuối cùng của bảng
  document.getElementById("summoney").innerHTML = "$" + total;
}
