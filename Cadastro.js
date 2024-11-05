class Personagem {
  constructor(nome, classe, raca, nivel) {
      this.nome = nome;
      this.classe = classe;
      this.raca = raca;
      this.nivel = nivel;
  }
}

const personagens = [];

const formCadastro = document.getElementById('form-cadastro');
const tabelaPersonagens = document.getElementById('tabela-personagens');

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

function renderizarPersonagens() {
  const tbody = tabelaPersonagens.querySelector('tbody');
  tbody.innerHTML = '';

  personagens.forEach((personagem, index) => {
      const linha = tbody.insertRow();
      const celulaNome = linha.insertCell();
      const celulaClasse = linha.insertCell();
      const celulaRaca = linha.insertCell();
      const celulaNivel = linha.insertCell();
      const celulaAcoes = linha.insertCell();
      celulaAcoes.classList.add('acoes');

      celulaNome.textContent = personagem.nome;
      celulaClasse.textContent = personagem.classe;
      celulaRaca.textContent = personagem.raca;
      celulaNivel.textContent = personagem.nivel;

      // Botões Editar e Excluir
      const botaoEditar = document.createElement('button');
      botaoEditar.classList.add('editar');
      botaoEditar.textContent = 'Editar';
      botaoEditar.addEventListener('click', () => {
          editarPersonagem(index);
      });

      const botaoExcluir = document.createElement('button');
      botaoExcluir.classList.add('excluir');
      botaoExcluir.textContent = 'Excluir';
      botaoExcluir.addEventListener('click', () => {
          excluirPersonagem(index);
      });

      celulaAcoes.appendChild(botaoEditar);
      celulaAcoes.appendChild(botaoExcluir);
  });
}

function editarPersonagem(index) {
  const personagem = personagens[index];

  // Preenche o formulário com os dados do personagem
  document.getElementById('nome').value = personagem.nome;
  document.getElementById('classe').value = personagem.classe;
  document.getElementById('raca').value = personagem.raca;
  document.getElementById('nivel').value = personagem.nivel;

  // Define um evento para o botão "Salvar"
  formCadastro.addEventListener('submit', (event) => {
      event.preventDefault();

      // Atualiza os dados do personagem no array
      personagem.nome = document.getElementById('nome').value;
      personagem.classe = document.getElementById('classe').value;
      personagem.raca = document.getElementById('raca').value;
      personagem.nivel = parseInt(document.getElementById('nivel').value);

      formCadastro.removeEventListener('submit', arguments.callee);
      formCadastro.reset();
      renderizarPersonagens();
  });

  // Altera o texto do botão para "Salvar"
  formCadastro.querySelector('button').textContent = 'Salvar';
}

function excluirPersonagem(index) {
  personagens.splice(index, 1);
  renderizarPersonagens();
}

renderizarPersonagens();