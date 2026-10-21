class Mobil {
    constructor(merek){
        this.merek = merek;
    }
    //method public
    nyalakan(){
        console.log("Nyalakan Mobil");
        this.#prosesMesin();    //private karena ada #
        console.log("Mobil siap digunakan");
    }
    //Method private
    #prosesMesin(){
        console.log("Proses mesin");
    }
}

const mobil = new Mobil("Toyota");
mobil.nyalakan();
const mobilsport = new Mobil("Lamborghini");
mobilsport.nyalakan();
const mobilSUV = new Mobil("Honda");
mobilSUV.nyalakan();