document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
      document.getElementById("loginMessage").textContent = "Giris basarili";
      document.getElementById("loginMessage").style.color = "green";

      localStorage.setItem("girisyapildi", "true");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } else {
      document.getElementById("loginMessage").textContent =
        "Kullanici adi veya sifre yanlis";
      document.getElementById("loginMessage").style.color = "red";
    }
  });
