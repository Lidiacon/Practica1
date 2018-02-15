/**
 * MemoryGame es la clase que representa nuestro juego. Contiene un array con la cartas del juego,
 * el número de cartas encontradas (para saber cuándo hemos terminado el juego) y un texto con el mensaje
 * que indica en qué estado se encuentra el juego
 */
var MemoryGame = MemoryGame || {};

/**
 * Constructora de MemoryGame
 */
 MemoryGame = function(gs) {
	this.cards = [];
	this.message = "";
	this.gs = gs;

};


MemoryGame.initGame = function(){
	for(let i = 0; i < 18; i++){
		let random = Math.floor(Math.random() * 18);
		if(cards[random] == null){
			cards[random] = {card:i, state:"off"};
		}
		else{
			for(let j = random;;j = j++ % 18){
				if(cards[j] == null){
					cards[j] = {card:i, state:"off"};
					break;
				}
			}
		}
	}

	this.loop();

}

MemoryGame.draw = function(){
	
}

MemoryGame.loop = function(){

}

MemoryGame.onClick = function(card){

}

/**
 * Constructora de las cartas del juego. Recibe como parámetro el nombre del sprite que representa la carta.
 * Dos cartas serán iguales si tienen el mismo sprite.
 * La carta puede guardar la posición que ocupa dentro del tablero para luego poder dibujarse
 * @param {string} id Nombre del sprite que representa la carta
 */
MemoryGameCard = function(id) {

};

MemoryGameCard.flip = function(){

}

MemoryGameCard.found = function(){

}

MemoryGameCard.compareTo = function(otherCard){

}

MemoryGameCard.draw = function(gs, pos){

}