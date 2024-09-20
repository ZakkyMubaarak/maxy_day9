// Inisialisasi peta menggunakan LeafletJS
var map = L.map('map').setView([-6.228895985318463, 106.76827178394953], 16); // Koordinat Jakarta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);
L.marker([-6.228895985318463, 106.76827178394953]).addTo(map).bindPopup('Our Office Location').openPopup();

// Data untuk dropdown kota berdasarkan provinsi
const cities = {
  "Jakarta": ["Jakarta Pusat", "Jakarta Barat", "Jakarta Selatan", "Jakarta Timur", "Jakarta Utara"],
  "Jawa Barat": ["Bandung", "Bekasi", "Depok", "Bogor"],
  "Jawa Timur": ["Surabaya", "Malang", "Kediri", "Jember"]
};

// Update kota berdasarkan provinsi yang dipilih
document.getElementById('province').addEventListener('change', function() {
  const selectedProvince = this.value;
  const cityDropdown = document.getElementById('city');
  
  // Kosongkan dropdown kota
  cityDropdown.innerHTML = '<option value="" selected>Select your city</option>';
  
  // Tambahkan opsi kota sesuai provinsi
  if (selectedProvince && cities[selectedProvince]) {
    cities[selectedProvince].forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.text = city;
      cityDropdown.add(option);
    });
  }
});

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Ambil data dari form
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const province = document.getElementById('province').value;
  const message = document.getElementById('message').value;

  // Buat pesan untuk WhatsApp
  const waMessage = `Halo! saya ${name} dari ${city}, ${province}. ${message}`;
  
  // Arahkan ke WhatsApp dengan pesan
  window.open(`https://wa.me/6289684982580?text=${encodeURIComponent(waMessage)}`, '_blank');
});
