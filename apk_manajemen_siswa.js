class Siswa {
    //Constructor untuk menyimpan data awal siswa
    constructor(nama, kelas, nilai1, nilai2){
        this.nama = nama;
        this.kelas = kelas;
        this.nilai1 = nilai1;
        this.nilai2 =  nilai2;
    }
    //Method untuk menampilkan identitas siswa
    tampilkanData(){
        console.log("===DATA SISWA===");
        console.log("Nama: " + this.nama);
        console.log("Kelas: " + this.kelas);
    }
    //Method untuk menghitung nilai rata-rata
    hitungRataRata(){
        return(this.nilai1 + this.nilai2) / 2;
    } 
    //Method untuk menentukan status kelulusan
    cekKelulusan(){
        if (this.hitungRataRata() >= 75) {
            return"Lulus";
        } else {
            return "Belum Lulus";
        }
    }
}

//Membuat object siswa
const siswa1 = new Siswa("Sagara", "XI TM", 100, 100);
const siswa2 = new Siswa("Ibra", "XI PPLG", 60, 75);

//Menampilkan data sisa pertama
siswa1.tampilkanData();
console.log("Rata-rata: " + siswa1.hitungRataRata());
console.log("Status: " + siswa1.cekKelulusan());

//Menampilkan data siswa kedua
siswa2.tampilkanData();
console.log("Rata-rata: " + siswa2.hitungRataRata());
console.log("Status: " + siswa2.cekKelulusan());