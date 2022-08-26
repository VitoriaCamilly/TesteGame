function modal() {
    let modal = document.getElementById('tudo');
    modal.style.zIndex = 999;
}

function FecharModal() {
    let modal = document.getElementById('tudo');
    modal.style.zIndex = 0;
}

let listaNome = [];
let listaScore = [];

function addNome() {
    if (localStorage.listaNomeTotal) {
        listaNome = JSON.parse(localStorage.getItem('listaNomeTotal'));
    }

    let novoNome = document.getElementById('nome').value;
    listaNome.push(novoNome);
    document.getElementById('nome').value = "";
    localStorage.listaNomeTotal = JSON.stringify(listaNome);
}

function addScore() {
    if (localStorage.listaScoreTotal) {
        listaScore = JSON.parse(localStorage.getItem('listaScoreTotal'));
    }

    let novoScore = document.getElementById('score').value;
    listaScore.push(novoScore);
    document.getElementById('score').value = "";
    localStorage.listaScoreTotal = JSON.stringify(listaScore);
}

function mostrarRanking(){
    let modal = document.getElementById('ranking');
    modal.style.zIndex = 999;
}

function verificarScoreVencedor(){
    let numeros = [];
    for(let i=0; i<listaScore.length; i++){
        numeros.push(parseInt(listaScore[i]));
    }

    let maiorValor = Math.max.apply(null, numeros);
    for (let i=0; i<numeros.length; i++){
        if (maiorValor == numeros[i]){
            return i;
        }
    }
}

function verificarScoreSegundo(){
    let numeros = [];
    for(let i=0; i<listaScore.length; i++){
        numeros.push(parseInt(listaScore[i]));
    }
    let maiorValor = Math.max.apply(null, numeros);
    for (let i=0; i<numeros.length; i++){
        if (maiorValor == numeros[i]){
            numeros[i] = 0;
        }
    }
    console.log(numeros);

    let segundoValor = Math.max.apply(null, numeros);
    for (let i=0; i<numeros.length; i++){
        if (segundoValor == numeros[i]){
            return i;
        }
    }
}

function verificarScoreTerceiro(){
    let numeros = [];
    for(let i=0; i<listaScore.length; i++){
        numeros.push(parseInt(listaScore[i]));
    }
    let maiorValor = Math.max.apply(null, numeros);
    for (let i=0; i<numeros.length; i++){
        if (maiorValor == numeros[i]){
            numeros[i] = 0;
        }
    }
    
    let segundoValor = Math.max.apply(null, numeros);
    for (let i=0; i<numeros.length; i++){
        if (segundoValor == numeros[i]){
            numeros[i] = 0
        }
    }

    let terceiroValor = Math.max.apply(null, numeros);
    for (let i=0; i<numeros.length; i++){
        if (terceiroValor == numeros[i]){
            return i;
        }
    }
}

function adicionarNaLista(){
    let indice = verificarScoreVencedor();
    let nome = listaNome[indice];
    let score = listaScore[indice];
    let vencedorNome = document.getElementById('nomeWin');
    vencedorNome.textContent = nome;
    let vencedorScore = document.getElementById('score1');
    vencedorScore.textContent = score;
    
    let indice2 = verificarScoreSegundo();
    let nome2 = listaNome[indice2];
    let score2 = listaScore[indice2];
    let vencedorNome2 = document.getElementById('nomeTwo');
    vencedorNome2.textContent = nome2;
    let vencedorScore2 = document.getElementById('score2');
    vencedorScore2.textContent = score2;
    
    let indice3 = verificarScoreTerceiro();
    let nome3 = listaNome[indice3];
    let score3 = listaScore[indice3];
    let vencedorNome3 = document.getElementById('nomeTree');
    vencedorNome3.textContent = nome3;
    let vencedorScore3 = document.getElementById('score3');
    vencedorScore3.textContent = score3;
}


function game() {
    addNome();
    addScore();
    adicionarNaLista();
    // window.location.href = "game.html";
}

















// let falso = 0;
// const score = localStorage.getItem("Score")
// const score1;
// const score2;
// const score3;

// if (localStorage.getItem("Score1")) {
//     score1 = localStorage.getItem("Score1");
// } else {
//     localStorage.setItem("Score1", score)
//     score1 = localStorage.getItem("Score1");
// }
// if (localStorage.getItem("Score2")) {
//     score2 = localStorage.getItem("Score2");
// }
// if (localStorage.getItem("Score3")) {
//     score3 = localStorage.getItem("Score3");
// }

// if (score > score1) {
//     falso = score1;
//     score1 = score;
//     score3 = score2;
//     score2 = falso;
// } else if (score > score2) {
//     score3 = score2;
//     score2 = score;
// } else if (score > score3) {
//     score3 = score;
// }



// let nomeRank = document.getElementById('nomeWin');
// nomeRank.textContent = localStorage.getItem("nome1");

// function game() {
//     const nome = document.querySelector("#nome").value;
//     // if(lista){
//     //     lista = 0;
//     //     // lista.push({nome: nome, score: 0});
//     // }
//     lista = 0;
//     localStorage.setItem("Rank", JSON.stringify(lista))
//     window.location.href = "game.html";

// }

// function nome() {
//     localStorage.setItem("Score1", score1);
//     localStorage.setItem("Score2", score2);
//     localStorage.setItem("Score3", score3);
//     // localStorage.setItem("nome1", lista[0].nome);
//     if (localStorage.getItem("Score1")) {
//         let nomeRank = document.getElementById('nomeWin');
//         nomeRank.textContent = localStorage.getItem("Score1");
//     }
//     if (localStorage.getItem("Score2")) {
//         let nomeRank2 = document.getElementById('nomeTwo');
//         nomeRank2.textContent = localStorage.getItem("Score2");
//     }
//     if (localStorage.getItem("Score3")) {
//         let nomeRank3 = document.getElementById('nomeTree');
//         nomeRank3.textContent = localStorage.getItem("Score3");
//     }
// }