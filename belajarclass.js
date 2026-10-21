class Siswapplg{
    constructor(nama, kelas){
        this.nama = nama;
        this.kelas = kelas;
    }
    perkenalan(){
        console.log(`Nama : ${this.nama}`);
        console.log(`Kelas : ${this.kelas}`);
    }
    seragam(){
        console.log("Menggunakan seragam batik");
    }
}

const siswa3 = new Siswapplg("Baim", "XI PPLG");
siswa3.perkenalan();
const siswa1 = new Siswapplg("Papoy", "XI PPLG");
siswa1.perkenalan();
const siswa2 = new Siswapplg();
siswa2.seragam();

class Produk{
    constructor(nama, harga, jumlah){
        this.nama = nama;
        this.harga = harga;
        this.jumlah = jumlah;
    }

    tampilkanInfo(){
        console.log("Nama produk: " + this.nama);
        console.log("Harga produk: " + this.harga);
        console.log("Jumlah produk: " + this.jumlah);
    }
    hitungdiskon(persen){
        return this.harga-(this.harga * persen/100);
    }
}

const keyboard = new Produk ("Keyboard", 150000, 5);
keyboard.tampilkanInfo();
console.log("Harga Keyboard setelah diskon: " + keyboard.hitungdiskon(15));
const monitor = new Produk ("Monitor Samsung", 500000, 2);
monitor.tampilkanInfo();
console.log("Harga Monitor Samsung setelah diskon: " + monitor.hitungdiskon(15));
const mouse = new Produk ("Mouse", 300000, 7);
mouse. tampilkanInfo();
console.log("Harga mouse setelah diskon: " + mouse.hitungdiskon(15));