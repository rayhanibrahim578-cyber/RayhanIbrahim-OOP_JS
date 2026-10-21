class Rekening {
    //data private, tidak bisa diakses langsung dari luar class
    #saldo = 0;

    constructor(saldoAwal){
        this.#saldo = saldoAwal;
    }
    //method untuk menambah saldo
    setor(jumlah){
        if(jumlah > 0){
            this.#saldo += jumlah;
            console.log("setor tunai berhasil");
        }else(
            console.log("jumlah setor harus > 0")
        )
    }
    //method mengambil saldo
    tarik(jumlah){
        if(jumlah > 0 && jumlah <= this.#saldo){
            console.log("penarikan saldo berhasil");
        }else{
            console.log("penarikan saldo gagal");
        }
    }
    lihatsaldo(){
        console.log("Saldo anda Rp." + this.#saldo);
    }
}
//buat objek baru
const rekening = new Rekening(100000);
//menggunakan method yang kita buat
rekening.lihatsaldo();
rekening.setor(50000);
rekening.tarik(90000);
rekening.lihatsaldo();