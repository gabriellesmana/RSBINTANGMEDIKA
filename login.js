// JavaScript untuk menangani klik pada gambar eyeicon //
// function togglePassword() {
//     var passwordField = document.getElementById("password");
//     var eyeIcon = document.getElementById("eyeicon");

//     if (passwordField.type === "password") {
//         passwordField.type = "text";
//         eyeIcon.src = "src/img/hide.png"; // Ganti sumber gambar sesuai kebutuhan
//     } else {
//         passwordField.type = "password";
//         eyeIcon.src = "src/img/view.png"; // Ganti sumber gambar sesuai kebutuhan
//     }
// }
// JavaScript untuk menangani klik pada gambar eyeicon //

function validateLogin() {
  
    window.location.href = "HOME/home.html";
}

// JS GABISA MASUK SELAIN DEKSTOP //

    // Function to check if device is desktop
    function isDesktop() {
      return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }
    // Function to display warning message if not desktop
    function showDeviceWarning() {
      if (!isDesktop()) {
        // Menampilkan alert dengan pesan peringatan
        alert("Maaf, perangkat Anda tidak mendukung. Harap gunakan PC/Laptop untuk pengalaman terbaik.");
        // Menghentikan proses tampilan konten
        document.body.style.display = 'none';
      }
    }
    // Memanggil fungsi untuk menampilkan pesan peringatan saat halaman dimuat
    showDeviceWarning();

// JS GABISA MASUK SELAIN DEKSTOP //



