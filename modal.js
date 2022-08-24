function modal() {
    let modal = document.getElementById('tudo');
    modal.style.zIndex = 999;
}

function FecharModal() {
    let modal = document.getElementById('tudo');
    modal.style.zIndex = 0;
}

const score1 = localStorage.getItem("Score1");
// const score2 = 123;
// const score3 = 1;


function nome() {
    const nome = document.querySelector("#nome").value;
    if (score1 >= score2 && score1 >= score3) {
        localStorage.setItem("nome1", nome);
        let nomeRank = document.getElementById('nomeWin');
        nomeRank.textContent = localStorage.getItem("nome1");
        console.log("nome", nomeRank)
    } else if (score2 >= score1 && score2 >= score3) {
        localStorage.setItem("nome1", nome);
        let nomeRank = document.getElementById('nomeWin');
        nomeRank.textContent = localStorage.getItem("nome1");
        console.log("nome", nomeRank)
    } else if (score3 >= score1 && score3 >= score2) {
        localStorage.setItem("nome1", nome);
        let nomeRank = document.getElementById('nomeWin');
        nomeRank.textContent = localStorage.getItem("nome1");
        console.log("nome", nomeRank)
    } else if (score1 <= score2 && score1 >= score3 || score1 >= score2 && score1 <= score3) {
        localStorage.setItem("nome2", nome);
        let nomeRank = document.getElementById('nomeTwo');
        nomeRank.textContent = localStorage.getItem("nome2");
        console.log("nome", nomeRank)
    } else if (score2 <= score1 && score2 >= score3 || score2 >= score1 && score2 <= score3) {
        localStorage.setItem("nome2", nome);
        let nomeRank = document.getElementById('nomeTwo');
        nomeRank.textContent = localStorage.getItem("nome2");
        console.log("nome", nomeRank)
    } else if (score3 <= score1 && score3 >= score2 || score3 >= score1 && score3 <= score2) {
        localStorage.setItem("nome2", nome);
        let nomeRank = document.getElementById('nomeTwo');
        nomeRank.textContent = localStorage.getItem("nome2");
        console.log("nome", nomeRank)
    } else if (score1 <= score2 && score1 <= score3) {
        localStorage.setItem("nome3", nome);
        let nomeRank = document.getElementById('nomeTree');
        nomeRank.textContent = localStorage.getItem("nome3");
        console.log("nome", nomeRank)
    } else if (score2 <= score1 && score2 <= score3) {
        localStorage.setItem("nome3", nome);
        let nomeRank = document.getElementById('nomeTree');
        nomeRank.textContent = localStorage.getItem("nome3");
        console.log("nome", nomeRank)
    } else if (score3 <= score1 && score3 <= score2) {
        localStorage.setItem("nome3", nome);
        let nomeRank = document.getElementById('nomeTree');
        nomeRank.textContent = localStorage.getItem("nome3");
        console.log("nome", nomeRank)
    }
    window.location.href = "game.html";
}

