// INSTÂNCIAS DO DOM
const nomeCriador = document.getElementById("nameCriador");
const infoPerso = {
    nome: document.getElementById("namePerso"),
    raca: document.getElementById("racaPerso"),
    idade: document.getElementById("idadePerso"),
    classe: document.getElementByid("classePerso"),
    nivel: document.getElementByid("nivelPerso")
  };
  const button = document.getElementById("submit");
  const spans = document.querySelectorAll(".span");

// MODELOS
class Criador {
    constructor(nomeCriador) {
      this.nomeCriador = nomeCriador;
    }
  
    mostrarCriador() {
      console.log(this.nomeCriador);
    }
}

formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('namePerso').value;
  const classe = document.getElementById('classePerso').value;
  const raca = document.getElementById('racaPerso').value;
  const nivel = parseInt(document.getElementById('nivelPerso').value);

  const novoPersonagem = new Personagem(nome, classe, raca, nivel);
  personagens.push(novoPersonagem);

  formCadastro.reset();
  renderizarPersonagens();
});


const Perso= [];

/*const formCadastro = document.getElementById('info_personagem'); */
const tabelaPersonagens = document.getElementById('infor_personagem');

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const classe = document.getElementById('classe').value;
    const raca = document.getElementById('raca').value;
    const nivel = parseInt(document.getElementById('nivel').value);

    const novoPersonagem = new Personagem(nome, classe, raca, nivel);
    personagens.push(novoPersonagem);

    formCadastro.reset();
    renderizarPersonagens();
});
