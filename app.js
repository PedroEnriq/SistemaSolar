function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if (!campoPesquisa){
        section.innerHTML = "<p>Nenhum planeta encontrado. Digite o nome do planeta.</p>";
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    let nome;
    let descricao;
    let tags;
    console.log(campoPesquisa);
    for (let dado of dados){
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>${dado.nome}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>`;
        }
        if(!resultados){
            resultados = "<p>Nenhum planeta encontrado</p>";
        }
    }
    section.innerHTML = resultados;
}






