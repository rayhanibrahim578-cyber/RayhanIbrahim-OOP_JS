class cuking{
    bersuara(){
        console.log("Meong...");
    }
}
class anjing{
    bersuara(){
        console.log("Sehat a? Manawi...");
    }
}
class hamster{
    bersuara(){
        console.log("Sik Sik...");
    }
}
const hewan = [new cuking(), new anjing()];
hewan.forEach(hewan => hewan.bersuara());

const hewan3 = new hamster();
hewan3.bersuara(); 