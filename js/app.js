function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string vazia
  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>";
      return;
  }

  // Converte o termo de pesquisa para minúsculas
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";

  // Verifica se a variável 'dados' está definida e se é um array
  if (!dados || !Array.isArray(dados)) {
      section.innerHTML = "<p>Erro ao buscar dados. Verifique a fonte de dados.</p>";
      return;
  }

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
      // Verifica se os campos estão presentes e são strings, caso contrário, atribui uma string vazia
      let titulo = dado.titulo ? dado.titulo.toLowerCase() : "";
      let descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
      let tags = dado.tags ? dado.tags.toLowerCase() : "";

      // se titulo, descricao ou tags inclui o termo pesquisado
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // cria um novo elemento com os resultados
          resultados += `
          <div class="item-resultado">
              <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
          `;
      }
  }

  // Se nenhum resultado for encontrado, exibe uma mensagem
  if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}