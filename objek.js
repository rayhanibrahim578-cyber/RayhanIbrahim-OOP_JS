const buku = {
    judul: "Hujan",
    penulis: "Tere Liye",
    tahun_terbit: "2016",

    dibaca:function(){
        console.log("Buku " + this.judul + " telah anda baca");
    }
};

const mobil = {
    merek: "Mazdan Miata",
    warna: "rubby red",
    kecepatan: 0,

    jalan:function(){
        this.kecepatan += 100;
        console.log("mobil berjalan dikecepatan " + this.kecepatan);
    }
}

console.log(buku.judul);
console.log(buku.penulis);
console.log(buku.tahun_terbit);
buku.dibaca();
mobil.jalan();