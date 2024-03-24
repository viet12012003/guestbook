// Thay đổi nội dung búc thư ở đây
var letterContent =
  "Cảm ơn em đã dành thời gian để xem trò con bò của anh và anh có những điều muốn gửi gắm đến elm bé của anhhh❤️ Cảm ơn em đã đến bên anh và cho anh thấy được thế giới này thật tuyệt vời làm sao. Anh biết em bé còn giữ cho riêng mình những suy nghĩ và cảm xúc không vui nhưng hãy chia sẻ chúng với anh vì những điều đó dễ tiêu cực. Anh muốn thấy đứa trẻ vô tri, hồn nhiên mãi xuất hiện trong mắt anh thôi. Anh không có năng lực quay lại quá khứ để chữa lành cho em, nhưng hãy để anh bù đắp tất cả những điều đó cho em nhé🥺 Anh rất rất yêu em💕";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});
