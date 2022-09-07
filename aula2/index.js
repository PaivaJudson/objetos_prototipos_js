var pessoa = {

    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    bio: function() {
        alert(this.nome[0] + " " + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    },
    saudacao: function() {
        alert('Oi! Eu sou ' + this.nome[0] + '.');
    }
};

// É possível um objecto ser composto por outro objecto ...

var pessoa1 = {

    nome: {
        primeiro: 'Bob',
        segundo: 'Smith'
    },
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    bio: function() {
        alert(this.nome[0] + " " + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    },
    saudacao: function() {
        alert('Oi! Eu sou ' + this.nome[0] + '.');
    }
};