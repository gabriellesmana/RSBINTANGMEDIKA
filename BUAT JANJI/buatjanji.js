const tanggalInput = document.getElementById('tanggal');
const dokterDropdown = document.getElementById('dokter');
const jamDropdown = document.getElementById('jam');

// Mendapatkan nomor antrian dari Local Storage atau menginisialisasi jika belum ada
let nomorAntrian = localStorage.getItem('nomorAntrian') ? parseInt(localStorage.getItem('nomorAntrian')) : 0;

// Menambahkan event listener untuk tanggal
tanggalInput.addEventListener('change', function() {
  // Menghapus opsi jam yang sebelumnya ditambahkan
  jamDropdown.innerHTML = '';

  // Memilih dokter yang dipilih
  const selectedDokter = dokterDropdown.value;

  // Menentukan jadwal berdasarkan dokter yang dipilih dan tanggal yang dipilih
  switch (selectedDokter) {
    case 'a':
      addJamOption(['08:00', '10:00']); // Dokter A memiliki 2 jadwal setiap harinya
      break;
    case 'b':
    case 'c':
      addJamOption(['09:00', '11:00', '13:00', '15:00']); // Dokter B dan C memiliki 4 jadwal setiap harinya
      break;
    default:
      addJamOption([]); // Tidak ada jadwal jika dokter tidak dipilih
      break;
  }
});

function addJamOption(jamList) {
  // Menambahkan opsi jam bertemu dokter ke dropdown
  jamList.forEach(jam => {
    const option = document.createElement('option');
    option.textContent = jam;
    option.value = jam;
    jamDropdown.appendChild(option);
  });
}

function submitForm() {
  // Mendapatkan nilai dari form
  const nama = document.getElementById('nama').value;
  const umur = document.getElementById('umur').value;
  const alamat = document.getElementById('alamat').value;
  const nomorHp = document.getElementById('nomor-hp').value;
  const tanggal = document.getElementById('tanggal').value;
  const dokter = document.getElementById('dokter').options[dokterDropdown.selectedIndex].text;
  const jam = document.getElementById('jam').value;
  const keluhan = document.getElementById('keluhan').value;

  // Menambah nomor antrian
  nomorAntrian += 1;

  // Menyimpan nomor antrian ke Local Storage
  localStorage.setItem('nomorAntrian', nomorAntrian);

  // Menampilkan data pada tiket
  document.getElementById('tiketNomorAntrian').textContent = `Nomor Antrian : ${nomorAntrian}`;
  document.getElementById('tiketNama').textContent = `Nama  : ${nama}`;
  document.getElementById('tiketUmur').textContent = `Umur  : ${umur}`;
  document.getElementById('tiketAlamat').textContent = `Alamat  : ${alamat}`;
  document.getElementById('tiketNomorHp').textContent = `Nomor HP : ${nomorHp}`;
  document.getElementById('tiketTanggal').textContent = `Tanggal Janji  : ${tanggal}`;
  document.getElementById('tiketDokter').textContent = `Dokter  : ${dokter}`;
  document.getElementById('tiketJam').textContent = `Jam  : ${jam}`;
  document.getElementById('tiketKeluhan').textContent = `Keluhan  : ${keluhan}`;

  // Menampilkan area tiket
  document.getElementById('tiketArea').style.display = 'block';

  // Menghilangkan form setelah submit
  document.getElementById('Formulir').style.display = 'none';
}

function printTicket() {
  window.print();
}
