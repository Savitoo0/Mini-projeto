// INSTÂNCIAS DO DOM
const nomeCriador = document.getElementById("nameCriador");
const infoPerso = {
    nome: document.getElementById("namePerso"),
    raca: document.getElementById("racaPerso"),
    idade: document.getElementById("idadePerso"),
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

class Personagem extends Criador {
    constructor(nomeCriador, nomePerso, raca, idade, classePerso) {
      super(nomeCriador);
      this.nomePerso = nomePerso;
      this.raca = raca;
      this.idade = idade;
      this.classePerso = classePerso;
    }

exibirPerso() {
    spans[0].innerText = this.nomeCriador;
    spans[1].innerText = this.nomePerso;
    spans[2].innerText = this.raca;
    spans[3].innerText = this.idade;
    spans[4].innerText = this.classePerso;
  }
}

// EVENTOS
button.addEventListener("click", () => {
    const novoPerso = new Perso (
      nomeCriador.value,
      infoPerso.nome.value,
      infoPerso.raca.value,
      infoPerso.idade.value,
      infoPerso.classePerso.value
    );
  
    novoPerso.exibirPerso();
  });