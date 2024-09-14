// URL gambar baru
const newImageURL = 'https://sgalabel.blob.core.windows.net/agent-websites/163/medialibrary/images/163_3f6b68c234c64d9299a5a9d1e5acf607.png';

// Array nominal acak
const amounts = [
    "Rp.1.200.000", "Rp.500.000", "Rp.3.400.000", "Rp.700.000", "Rp.2.000.000",
    "Rp.4.100.000", "Rp.900.000", "Rp.1.800.000", "Rp.2.500.000", "Rp.1.100.000",
    "Rp.6.200.000", "Rp.7.800.000", "Rp.8.300.000", "Rp.750.000", "Rp.990.000",
    "Rp.5.400.000", "Rp.2.200.000", "Rp.1.300.000", "Rp.3.900.000", "Rp.4.500.000",
    "Rp.2.700.000", "Rp.1.600.000", "Rp.2.900.000", "Rp.5.700.000", "Rp.7.500.000",
    "Rp.9.000.000", "Rp.8.700.000", "Rp.3.800.000", "Rp.6.000.000", "Rp.9.200.000",
    "Rp.4.300.000", "Rp.5.100.000", "Rp.7.900.000", "Rp.2.400.000", "Rp.6.800.000",
    "Rp.1.500.000", "Rp.9.500.000", "Rp.4.900.000", "Rp.3.300.000", "Rp.2.800.000",
    "Rp.1.000.000", "Rp.6.100.000", "Rp.7.100.000", "Rp.5.800.000", "Rp.3.500.000",
    "Rp.8.000.000", "Rp.9.800.000", "Rp.4.700.000", "Rp.3.100.000"
];

// Fungsi untuk membuat username acak dengan sensor
function generateUsername() {
    const prefixes = ["10p", "20k", "30b", "40g", "50n"]; // Prefix acak
    const suffixes = ["rani", "pika", "gila", "kita", "yuna", "wani", "jana", "zara", "mira", "sita"]; // Suffix acak
    
    // Pilih prefix dan suffix acak
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    // Buat username dengan sensor
    const username = `${prefix}***${suffix}`;
    
    return username;
}

// Fungsi untuk menampilkan notifikasi
function showNotification(username, amount) {
    const wdNotify = document.createElement('div');
    wdNotify.id = 'wd-notify';
    wdNotify.style = 'position: fixed; top: 29px; margin: 20px; padding: 10px; box-shadow: rgb(9, 107, 233) 1px 2px; background: rgb(62, 62, 62); color: rgb(255, 255, 255); left: -360px; z-index: 1111000; border-radius: 5px; display: flex; align-items: center;';

    // Gambar
    const wdImage = document.createElement('img');
    wdImage.src = newImageURL;
    wdImage.style = 'height: 35px; width: 35px; float: left;';

    // Konten Teks
    const wdTextContainer = document.createElement('div');
    wdTextContainer.style = 'float: left; font-family: sans-serif; margin-left: 10px; max-width: 237px;';

    const wdTitle = document.createElement('h6');
    wdTitle.style = 'margin: 0; color: white;';
    wdTitle.innerHTML = '<b>Penarikan Dana</b>';

    const wdMessage = document.createElement('p');
    wdMessage.id = 'wd-notify-messages';
    wdMessage.style = 'margin: -1px 0px; font-size: 12px;';
    wdMessage.textContent = `${username} telah berhasil melakukan WD sebesar ${amount}`;

    // Memasukkan teks ke kontainer
    wdTextContainer.appendChild(wdTitle);
    wdTextContainer.appendChild(wdMessage);

    // Memasukkan gambar dan teks ke notifikasi
    wdNotify.appendChild(wdImage);
    wdNotify.appendChild(wdTextContainer);

    // Menambahkan notifikasi ke body
    document.body.appendChild(wdNotify);

    // Fungsi animasi untuk slide-in notifikasi
    setTimeout(() => {
        wdNotify.style.transition = 'left 0.5s ease';
        wdNotify.style.left = '20px'; // Menggerakkan notifikasi ke dalam layar
    }, 500);

    // Menghilangkan notifikasi setelah beberapa detik
    setTimeout(() => {
        wdNotify.style.transition = 'left 0.5s ease';
        wdNotify.style.left = '-360px'; // Menggerakkan notifikasi keluar layar
        setTimeout(() => document.body.removeChild(wdNotify), 1000); // Hapus elemen setelah animasi
    }, 5000);
}

// Fungsi untuk memutar notifikasi
function cycleNotifications() {
    setInterval(() => {
        const username = generateUsername();
        const amount = amounts[Math.floor(Math.random() * amounts.length)];
        showNotification(username, amount);
    }, 6000); // Notifikasi baru muncul setiap 6 detik
}

// Memulai pemutaran notifikasi
cycleNotifications();
