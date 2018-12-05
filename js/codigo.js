var puntos=0;
var banca=document.getElementById('cartaBanca');
var jugador=document.getElementById('cartaJugador');
var punt=document.getElementById('puntuacion');


while (true) {
  var cartaB= Math.floor((Math.random() * 12) + 1);
  var cartaJ= Math.floor((Math.random() * 12) + 1);
    jugador.innerHTML=`Tu carta es: ${cartaJ}`;
  var mayorMenor=prompt("¿Es tu carta mayor o menor que la de la banca?");
  if (mayorMenor=="Salir") {
    break;
  }
    if (mayorMenor=="Mayor" && cartaJ>cartaB) {
      puntos++;
    }
      else if (mayorMenor=="Menor" && cartaJ<cartaB) {
        puntos++;
      }
          else {
            puntos--;
          }
banca.innerHTML=`La carta de la banca es: ${cartaB}`;
  punt.innerHTML=`Puntuacion:${puntos}`;
}
