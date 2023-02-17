function persegi(sisi) {
    console.log(`Luas Persegi: ${ sisi ** 2}`);
    console.log(`Keliling Persegi: ${ 4 * sisi}`);
}

function persegiPanjang(panjang, lebar) {
    console.log(`Luas Persegi Panjang ${panjang * lebar}`);
    console.log(`keliling Persegi Panjang ${2 * (panjang + lebar)}`);
}

module.exports = {persegi, persegiPanjang}