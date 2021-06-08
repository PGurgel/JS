let r = prompt("digite o raio: "); //receber o valor do raio
let area = 3.14159*r*r; //declarar a area e a formula.

r =  parseFloat(r); //informar que é um valor float.

document.write("A = "+(area.toFixed(4))); //toFixed() é a quantidade de número após a casa decimais para mostrar na tela com o document.write()