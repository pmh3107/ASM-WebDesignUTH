<!DOCTYPE html>
<html lang="vi">
  <head>
    <title>HT-Cẩm nang du lịch</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- link các icon -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- link icon title -->
    <link
      rel="stylesheet"
      href="assets//fonts/fontawesome-free-6.4.0-web/css/all.min.css"
    />
    <link rel="icon" href="../assets/image\favicon\android-icon-36x36.png" />
    <style>
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            background: aqua;
        }
        .container img{
            display: block;
            margin: auto;
            transform: translateX(-20px);
            height: 150px;
            width: 150px;
        }
        .container h1{
            font-size: 3rem;
            margin: 5px 0 40px;
        }
        .container a{
            font-size: 1.2rem;
            color: initial;
        }
    </style>
  </head>
  <?php
    require 'connect.php';
    if(isset($_POST['btn-regis'])){
    $studentcode = $_POST['student-code'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $gender = $_POST['gender'];
    $Nationality = $_POST['Nationality'];
    $Note = $_POST['Note'];
    $sql = "INSERT INTO `users` (`studentcode`, `fullname`, `email`, `password`, `gender`, `Nationality`, `Note`) 
    VALUES('$studentcode','$fullname','$email',md5('$password'),'$gender','$Nationality','$Note')";
    if ($connect ->query($sql)==TRUE){ }
    else{ echo "Lỗi {$sql}".$connect->error; } }
?>
  <body>
      <!-- container -->
      <div class="container">
        <div class="notification">
            <img src="../assets/image/Check.png" alt="">
            <h1>Bạn đã đăng ký thành công !</h1>
            <a href="../index.html">Quay trở về trang chủ !</a>
        </div>
    </div>
  </body>
</html>

