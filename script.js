document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".product-card");
    const productName = this.parentElement.querySelector("h3").innerText;
    const productPrice = this.parentElement.querySelector(".price").innerText;
    const productImage = this.parentElement.querySelector("img").src;

    let sepet = JSON.parse(localStorage.getItem("sepet")) || [];

    sepet.push({
      name: productName,
      price: productPrice,
      image: productImage,
    });

    localStorage.setItem("sepet", JSON.stringify(sepet));
    alert("Urun sepete eklendi");
  });
});

const urunlerScroll = document.getElementById("urunlerScroll");
document.querySelector(".kaydir-sol").addEventListener("click", function () {
  urunlerScroll.scrollLeft -= 300;
});
document.querySelector(".kaydir-sag").addEventListener("click", function () {
  urunlerScroll.scrollLeft += 300;
});

// SEPETIM BUTTONU TIKLAMA
document.getElementById("sepetBtn").addEventListener("click", function () {
  window.open("sepetim.html", "_blank");
});

// Sepete urun ekleme

function sepeteEkle(urunAdi, fiyat) {
  let sepet = JSON.parse(localStorage.getItem("sepet")) || [];
  sepet.push({
    name: urunAdi,
    price: fiyat,
  });
  localStorage.setItem("sepet", JSON.stringify(sepet));
  alert("Urun sepete eklendi");
}

document.getElementById("loginBtn").addEventListener("click", function () {
  window.location.href = "login.html";
});

document.querySelectorAll(".kaldir-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const index = this.getAttribute("data-index");
    sepet.splice(index, 1);
    localStorage.setItem("sepet", JSON.stringify(sepet));
    location.reload();
  });
});

function urunkaldir(index) {
  const sepet = JSON.parse(localStorage.getItem("sepet")) || [];
  sepet.splice(index, 1);
  localStorage.setItem("sepet", JSON.stringify(sepet));
  location.reload();
}
