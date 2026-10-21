//buat class parent
class PPLG {
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    perkenalan(){
        console.log("Halo, saya siswa dari XI-PPLG, nama saya " + this.nama);
        console.log("Umur saya adalah " + this.umur);
    }
}

//buat class child
class papoy extends PPLG{
    constructor(nama, umur, kelas){
        super(nama, umur);
        this.kelas = kelas;
    }
    belajar(){
        console.log(this.nama + " Sedang Belajar");
    }                      
}       

//buat objek baru
const papoy1 = new papoy ("Sagara", 17, "XI PPLG");

//memanggil method yang diiwariskan
papoy1.perkenalan();

//memanggil method baruu
papoy1.belajar();

//menampilkan properti class
console.log("kelas : " + papoy1.kelas);