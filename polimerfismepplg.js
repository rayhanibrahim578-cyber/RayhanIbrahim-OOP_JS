//Buat file baru polimerfismepplg
//buat 2 method skillcoding, levelcoding

class Sagara {
    skill_coding(){
        console.log("Skill: Frontend");
    }
    level_coding(){
        console.log("Level: Junior Developer");
    }
}
class Reyhan {
    skill_coding(){
        console.log("Skill: Backend");
    }
    level_coding(){
        console.log("Level: Middle Developer");
    }
}
class Rama {
    skill_coding(){
        console.log("Skill: Game Development");
    }
    level_coding(){
        console.log("Level: Senior Developer");
    }
}

const dev = [new Sagara(), new Reyhan(), new Rama()];
dev.forEach(dev => dev.skill_coding());
dev.forEach(dev => dev.level_coding());
