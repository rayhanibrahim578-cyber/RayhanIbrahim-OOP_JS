class Hewan {
    bersuara(){
        console.log("Suara Minion");
    }
}

class cuking extends Hewan {
    mengeong(){
        console.log("PAPOYYYY");
    }
}

const cuking1 = new cuking();
cuking1.bersuara();
cuking1.mengeong();