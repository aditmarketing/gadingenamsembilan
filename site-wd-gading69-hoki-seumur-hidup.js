// URL gambar baru
const newImageURL = 'https://sgalabel.blob.core.windows.net/agent-websites/163/medialibrary/images/163_3f6b68c234c64d9299a5a9d1e5acf607.png';

// Array nominal acak
const amounts = [
    "Rp.200.000", "Rp.502.400", "Rp.300.000", "Rp.155.000", "Rp.79.000",
    "Rp.1.000.000", "Rp.480.000", "Rp.100.000", "Rp.57.000", "Rp.1.100.000",
    "Rp.53.000", "Rp.102.160", "Rp.3.300.000", "Rp.52.000", "Rp.990.000",
    "Rp.400.000", "Rp.150.000", "Rp.300.000", "Rp.355.000", "Rp.350.000",
    "Rp.130.000", "Rp.201.000", "Rp.487.800", "Rp.100.000", "Rp.487.800",
    "Rp.1.000.000", "Rp.557.000", "Rp.301.000", "Rp.502.500", "Rp.600.000",
    "Rp.250.000", "Rp.220.000", "Rp.79.520", "Rp.102.160", "Rp.151.000",
    "Rp.75.000", "Rp.532.000", "Rp.157.000", "Rp.200.000", "Rp.355.000",
    "Rp.51.000", "Rp.79.000", "Rp.600.000", "Rp.201.000", "Rp.434.000",
    "Rp.350.000", "Rp.1.000.000", "Rp.410.000", "Rp.532.000", "Rp.3.003.000",
];

// Fungsi untuk membuat username acak dengan sensor
function generateUsername() {
    const prefixes = ["pan", "Mak", "Ber", "ma", "sor", "Ja", "pri", "Fuj", "Ra", "Sc", "ko", "ka", "Ga", "Wa", "Su", "Mun", "Yu", "gar", "ab", "den", "uy", "ka", "ad", "ma", "ok", "br", "Da", "Ja", "Ad", "Li", "De", "Uh", "ba", "BA", "el", "su", "da", "pe", "te", "ci", "cu"]; // Prefix acak
    const suffixes = ["98", "23", "12", "01", "41", "12", "57", "76", "jt", "yz", "ip", "86", "29", "88", "78", "13", "ti", "08", "us", "om", "ca", "03", "44", "84", "57", "ar", "02", "ce", "50", "an", "us", "gg", "a1", "jp", "uy", "ia", "ck", "to", "in", "ke"]; // Suffix acak
    
    // Pilih prefix dan suffix acak
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    // Buat username dengan sensor
    const username = `${prefix}****${suffix}`;
    
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
