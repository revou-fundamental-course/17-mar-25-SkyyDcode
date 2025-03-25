function hitungLuas() {
    // Ambil nilai sisi dari input
    var sisi = document.getElementById('sisiLuas').value;
    
    // Konversi ke angka dan hitung luas
    var luas = sisi * sisi;
    
    // Tampilkan perhitungan dan hasil
    document.getElementById('luas').innerHTML = `L = ${sisi} x ${sisi}`;
    document.getElementById('hasil-luas').innerHTML = `L = ${luas}`;
}

function hitungKeliling() {
    // Ambil nilai sisi dari input
    var sisi = document.getElementById('sisiKeliling').value;
    
    // Konversi ke angka dan hitung luas
    var keliling = 4 * sisi;
    
    // Tampilkan perhitungan dan hasil
    document.getElementById('keliling').innerHTML = `K = 4 x ${sisi}`;
    document.getElementById('hasil-keliling').innerHTML = `K = ${keliling}`;
}