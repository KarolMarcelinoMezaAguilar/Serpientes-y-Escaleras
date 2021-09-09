class Dice {
    roll() {
        return Math.ceil(Math.random()*6);
    }
}
let dice = new Dice();

//Jugadores
class Player{

    constructor(){
        this.position = 0;
    }

    gPos(){
        return this.position;
    }
    
    round(){
        let d = dice.roll();
        this.position = board[d + this.position];
    }
}

//Tablero: https://i.pinimg.com/originals/be/2d/cd/be2dcd8a37998d6fbf9e9d3b0d582cff.jpg
let board=[];
for (let i = 0; i < 110; i++) {
    board[i]=i;
}

//Serpientes
board[16] = 6;
board[46] = 25;
board[49] = 11;
board[62] = 19;
board[64] = 60;
board[74] = 53;
board[89] = 68;
board[92] = 88;
board[95] = 75;
board[99] = 80;

//Escaleras
board[2] = 38;
board[7] = 14;
board[15] = 26;
board[21] = 42;
board[28] = 84;
board[36] = 44;
board[51] = 67;
board[71] = 91;
board[87] = 94;

//Turnos
let player1 = new Player();
let player2 = new Player();
let turno = 1;

while(player1.gPos() < 100 && player2.gPos() < 100){
    console.log(`Turno:${turno++}`);
    player1.round();
    console.log(`El jugador 1 cayó en la casilla: ${player1.gPos()}`);
    player2.round();
    console.log(`El jugador 2 cayó en la casilla: ${player2.gPos()}`);
}

//Final
console.log();
if (player1.gPos() >= 100) {
    console.log('¡El jugador 1 ha ganado!');
} else {
    console.log('¡El jugador 2 ha ganado!');
}