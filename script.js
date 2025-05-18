document.addEventListener("DOMContentLoaded", function () {
  // モバイル用ナビゲーションのトグル表示
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // 予約フォームの送信処理（デモ用）
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("ご予約ありがとうございます。確認のメールをお送りしました。");
      bookingForm.reset();
    });
  }

  // お問い合わせフォームの送信処理（デモ用）
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("お問い合わせありがとうございます。ご連絡いたします。");
      contactForm.reset();
    });
  }
});
