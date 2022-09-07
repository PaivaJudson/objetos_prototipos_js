class celular {

    constructor() {
        this.cor = "prata";
        this.nome = "Judson Paiva";
    }

    ligar() {
        console.log("Fazer uma ligação");
    }

}


console.log(new celular());


/*
let celular = function() {

    this.cor = "prata";

    this.ligar = function() {
        console.log("Fazer uma ligação");
    };

    this.nome = "Judson Paiva";
}


let objecto = new celular();

console.log(objecto);
console.log(objecto.ligar());

*/


/* Datas e Arrays
let agora = new Date();


let array = ['Judson Paiva', 'Uno', 10, true, new Date(), function() {}];


array.forEach(function(v, i) {
    console.log(i, v);
});

*/


/* eventos
window.addEventListener('focus', event => {
    console.log("Focus");
});

document.addEventListener('click', accao => {
    console.log('click');
});

*/