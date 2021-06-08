let A = prompt();
let B = prompt();
let Media = ((A*3.5)+(B*7.5))/11; 

A = parseFloat(A);
B = parseFloat(B);
Media = parseFloat(Media);

document.write(`MEDIA = ${Media.toFixed(5)}`); //imprimir 5 números decimais após o ponto do número da média