



// BARU //

// document.getElementById('tanggal').addEventListener('change', function() {
//   updateJamPraktek();
// });

// document.getElementById('dokter').addEventListener('change', function() {
//   updateJamPraktek();
// });

// function updateJamPraktek() {
//   const tanggal = document.getElementById('tanggal').value;
//   const dokter = document.getElementById('dokter').value;
//   const jamSelect = document.getElementById('jam');
  
//   jamSelect.innerHTML = ''; // Kosongkan dulu opsi jam

//   if (tanggal && dokter) {
//     let jamPraktek;

//     switch (dokter) {
//       case 'a':
//         jamPraktek = ['09:00-10:00', '10:00-11:00', '11:00-12:00'];
//         break;
//       case 'b':
//         jamPraktek = ['13:00-14:00', '14:00-15:00', '15:00-16:00'];
//         break;
//       case 'c':
//         jamPraktek = ['16:00-17:00', '17:00-18:00', '18:00-19:00'];
//         break;
//     }

//     jamPraktek.forEach(function(jam) {
//       const option = document.createElement('option');
//       option.value = jam;
//       option.textContent = jam;
//       jamSelect.appendChild(option);
//     });
//   }
// }

// function submitForm() {
//   const form = document.getElementById('appointmentForm');
//   if (form.checkValidity()) {
//     alert('Formulir berhasil disubmit!');
//     form.reset(); // Reset form setelah submit
//   } else {
//     alert('Harap lengkapi semua bidang yang diperlukan!');
//   }
// }

// BARU //













// // const tanggalInput = document.getElementById('tanggal');
// // const dokterDropdown = document.getElementById('dokter');
// // const jamDropdown = document.getElementById('jam');

// // // Mendapatkan nomor antrian dari Local Storage atau menginisialisasi jika belum ada
// // let nomorAntrian = localStorage.getItem('nomorAntrian') ? parseInt(localStorage.getItem('nomorAntrian')) : 0;

// // // Menambahkan event listener untuk tanggal
// // tanggalInput.addEventListener('change', function() {
// //   // Menghapus opsi jam yang sebelumnya ditambahkan
// //   jamDropdown.innerHTML = '';

// //   // Memilih dokter yang dipilih
// //   const selectedDokter = dokterDropdown.value;

// //   // Menentukan jadwal berdasarkan dokter yang dipilih dan tanggal yang dipilih
// //   switch (selectedDokter) {
// //     case 'a':
// //       addJamOption(['08:00', '10:00']); // Dokter A memiliki 2 jadwal setiap harinya
// //       break;
// //     case 'b':
// //     case 'c':
// //       addJamOption(['09:00', '11:00', '13:00', '15:00']); // Dokter B dan C memiliki 4 jadwal setiap harinya
// //       break;
// //     default:
// //       addJamOption([]); // Tidak ada jadwal jika dokter tidak dipilih
// //       break;
// //   }
// // });

// // function addJamOption(jamList) {
// //   // Menambahkan opsi jam bertemu dokter ke dropdown
// //   jamList.forEach(jam => {
// //     const option = document.createElement('option');
// //     option.textContent = jam;
// //     option.value = jam;
// //     jamDropdown.appendChild(option);
// //   });
// // }

// // function submitForm() {
// //   // Mendapatkan nilai dari form
// //   const nama = document.getElementById('nama').value;
// //   const umur = document.getElementById('umur').value;
// //   const alamat = document.getElementById('alamat').value;
// //   const nomorHp = document.getElementById('nomor-hp').value;
// //   const tanggal = document.getElementById('tanggal').value;
// //   const dokter = document.getElementById('dokter').options[dokterDropdown.selectedIndex].text;
// //   const jam = document.getElementById('jam').value;
// //   const keluhan = document.getElementById('keluhan').value;

// //   // Data yang akan dikirim ke server
// //   const data = {
// //     nama,
// //     umur,
// //     alamat,
// //     nomorHp,
// //     tanggal,
// //     dokter,
// //     jam,
// //     keluhan
// //   };

// //   // Konfigurasi opsi untuk permintaan fetch
// //   const options = {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify(data)
// //   };

// //   // Kirim permintaan POST ke server
// //   fetch('/submit-form', options)
// //     .then(response => {
// //       if (response.ok) {
// //         return response.json();
// //       }
// //       throw new Error('Terjadi kesalahan saat menyimpan data');
// //     })
// //     .then(data => {
// //       // Tampilkan pesan sukses atau error
// //       alert(data.message);
// //     })
// //     .catch(error => {
// //       console.error('Error:', error);
// //       // Tampilkan pesan error
// //       alert('Terjadi kesalahan saat menyimpan data');
// //     });

// //   // Menambah nomor antrian
// //   nomorAntrian += 1;

// //   // Menyimpan nomor antrian ke Local Storage
// //   localStorage.setItem('nomorAntrian', nomorAntrian);

// //   // Menampilkan data pada tiket
// //   document.getElementById('tiketNomorAntrian').textContent = `Nomor Antrian : ${nomorAntrian}`;
// //   document.getElementById('tiketNama').textContent = `Nama  : ${nama}`;
// //   document.getElementById('tiketUmur').textContent = `Umur  : ${umur}`;
// //   document.getElementById('tiketAlamat').textContent = `Alamat  : ${alamat}`;
// //   document.getElementById('tiketNomorHp').textContent = `Nomor HP : ${nomorHp}`;
// //   document.getElementById('tiketTanggal').textContent = `Tanggal Janji  : ${tanggal}`;
// //   document.getElementById('tiketDokter').textContent = `Dokter  : ${dokter}`;
// //   document.getElementById('tiketJam').textContent = `Jam  : ${jam}`;
// //   document.getElementById('tiketKeluhan').textContent = `Keluhan  : ${keluhan}`;

// //   // Menampilkan area tiket
// //   document.getElementById('tiketArea').style.display = 'block';

// //   // Menghilangkan form setelah submit
// //   document.getElementById('Formulir').style.display = 'none';
// // }
