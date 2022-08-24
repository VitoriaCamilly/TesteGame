if (localStorage.getItem("Rank")) {
    const lista = JSON.parse(localStorage.getItem("Rank"));
} else {
    const lista = []
}

function modal() {
    let modal = document.getElementById('tudo');
    modal.style.zIndex = 999;
}

function FecharModal() {
    let modal = document.getElementById('tudo');
    modal.style.zIndex = 0;
}

let falso = 0;
const score = localStorage.getItem("Score")
const score1;
const score2;
const score3;

if (localStorage.getItem("Score1")) {
    score1 = localStorage.getItem("Score1");
} else {
    localStorage.setItem("Score1", score)
    score1 = localStorage.getItem("Score1");
}
if (localStorage.getItem("Score2")) {
    score2 = localStorage.getItem("Score2");
}
if (localStorage.getItem("Score3")) {
    score3 = localStorage.getItem("Score3");
}

if (score > score1) {
    falso = score1;
    score1 = score;
    score3 = score2;
    score2 = falso;
} else if (score > score2) {
    score3 = score2;
    score2 = score;
} else if (score > score3) {
    score3 = score;
}



let nomeRank = document.getElementById('nomeWin');
nomeRank.textContent = localStorage.getItem("nome1");


function nome() {


    localStorage.setItem("Score1", score1);
    localStorage.setItem("Score2", score2);
    localStorage.setItem("Score3", score3);
    // localStorage.setItem("nome1", lista[0].nome);
    if (localStorage.getItem("Score1")) {
        let nomeRank = document.getElementById('nomeWin');
        nomeRank.textContent = localStorage.getItem("Score1");
    }
    if (localStorage.getItem("Score2")) {
        let nomeRank2 = document.getElementById('nomeTwo');
        nomeRank2.textContent = localStorage.getItem("Score2");
    }
    if (localStorage.getItem("Score3")) {
        let nomeRank3 = document.getElementById('nomeTree');
        nomeRank3.textContent = localStorage.getItem("Score3");
    }





    // if (score1 >= score2 && score1 >= score3) {
    //     localStorage.setItem("nome1", nome);
    //     let nomeRank = document.getElementById('nomeWin');
    //     nomeRank.textContent = localStorage.getItem("nome1");
    //     console.log("nome", nomeRank)
    // } else if (score2 >= score1 && score2 >= score3) {
    //     localStorage.setItem("nome1", nome);
    //     let nomeRank = document.getElementById('nomeWin');
    //     nomeRank.textContent = localStorage.getItem("nome1");
    //     console.log("nome", nomeRank)
    // } else if (score3 >= score1 && score3 >= score2) {
    //     localStorage.setItem("nome1", nome);
    //     let nomeRank = document.getElementById('nomeWin');
    //     nomeRank.textContent = localStorage.getItem("nome1");
    //     console.log("nome", nomeRank)
    // } else if (score1 <= score2 && score1 >= score3 || score1 >= score2 && score1 <= score3) {
    //     localStorage.setItem("nome2", nome);
    //     let nomeRank = document.getElementById('nomeTwo');
    //     nomeRank.textContent = localStorage.getItem("nome2");
    //     console.log("nome", nomeRank)
    // } else if (score2 <= score1 && score2 >= score3 || score2 >= score1 && score2 <= score3) {
    //     localStorage.setItem("nome2", nome);
    //     let nomeRank = document.getElementById('nomeTwo');
    //     nomeRank.textContent = localStorage.getItem("nome2");
    //     console.log("nome", nomeRank)
    // } else if (score3 <= score1 && score3 >= score2 || score3 >= score1 && score3 <= score2) {
    //     localStorage.setItem("nome2", nome);
    //     let nomeRank = document.getElementById('nomeTwo');
    //     nomeRank.textContent = localStorage.getItem("nome2");
    //     console.log("nome", nomeRank)
    // } else if (score1 <= score2 && score1 <= score3) {
    //     localStorage.setItem("nome3", nome);
    //     let nomeRank = document.getElementById('nomeTree');
    //     nomeRank.textContent = localStorage.getItem("nome3");
    //     console.log("nome", nomeRank)
    // } else if (score2 <= score1 && score2 <= score3) {
    //     localStorage.setItem("nome3", nome);
    //     let nomeRank = document.getElementById('nomeTree');
    //     nomeRank.textContent = localStorage.getItem("nome3");
    //     console.log("nome", nomeRank)
    // } else if (score3 <= score1 && score3 <= score2) {
    //     localStorage.setItem("nome3", nome);
    //     let nomeRank = document.getElementById('nomeTree');
    //     nomeRank.textContent = localStorage.getItem("nome3");
    //     console.log("nome", nomeRank)
    // }
    // // 
}



function game() {
    const nome = document.querySelector("#nome").value;
    // if(lista){
    //     lista = 0;
    //     // lista.push({nome: nome, score: 0});
    // }
    lista = 0;
    localStorage.setItem("Rank", JSON.stringify(lista))
    window.location.href = "game.html";

}

