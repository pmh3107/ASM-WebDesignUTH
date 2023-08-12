const images = [
  "assets/image/Da_lat_blog1.jpg",
  "assets/image/Da_lat_blog3.jpg",
  "assets/image/Da_lat_blog4.jpg",
  "assets/image/Ha-long-blog1.jpg",
  "assets/image/Ha-long-blog2.jpg",
  "assets/image/Ha-long-blog3.jpg",
  "assets/image/Ha-long-blog4.jpg",
  "assets/image/Hue_blog1.jpg",
  "assets/image/Hue_blog2.png",
  "assets/image/Hue_blog3.jpg",
  "assets/image/Nha-Trang-blog1.jpg",
  "assets/image/Nha-Trang-blog2.jpg",
  "assets/image/Nha-Trang-blog3.jpg",
  "assets/image/Phu_Yen_blog1.png",
  "assets/image/Phu_Yen_blog4.jpg",
  "assets/image/Phu_Yen_blog3.png",
  "assets/image/Phu-Quoc-blog1.jpg",
  "assets/image/Phu-Quoc-blog3.jpg",
  "assets/image/Phu-Quoc-blog4.jpg",
  "assets/image/Phu-Quoc-blog5.jpg",
];
let currentIndex = 0;

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const image = document.getElementById("image");

previousBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  image.src = images[currentIndex];
  for (var i = 1; i < 2; i++) {
    count = currentIndex + 1;
    document.getElementById("count").innerHTML = "Hình ảnh: " + count + "/20";
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
  for (var i = 1; i < 2; i++) {
    count = currentIndex + i;
    document.getElementById("count").innerHTML = "Hình ảnh: " + count + "/20";
  }
});
