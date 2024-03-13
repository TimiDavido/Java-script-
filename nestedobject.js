class Footballer {
    constructor(name, age, ...clubDetails) {
        this.name = name;
        this.age = age;
        this.club = new Club(...clubDetails);
    }
}

class Club {
    constructor(clubname, clublocation, clubposition, clubnickname) {
        this.clubname = clubname;
        this.clublocation = clublocation;
        this.clubposition = clubposition;
        this.clubnickname = clubnickname;
    }
}


const player1 = new footballer("Phil Foden", 23, "Manchester CIty",
                                                 "England",
                                                 "1ST",
                                                 "Cityzens")

const player2 = new footballer("Timi David", 15, "Manchester CIty",
                                                 "England",
                                                 "1ST",
                                                 "Cityzens")

console.log(player1.name)