const URL = 'https://dummyjson.com/products'

async function chamarApi(){
    const resposta = await fetch(URL)
    if (resposta.status === 200){
        const dados = await resposta.json()
        const todosOsProdutos = dados.products

        const container = document.getElementById("dados-container")

        for (let i = 0; i < todosOsProdutos.length; i++){
            if (
            //   todosOsProdutos[i].category === 'fragrances' &&
            //   todosOsProdutos[i].rating > 2 &&
              todosOsProdutos[i].price < 1000
            ){
                // Criação do card visual
                const card = document.createElement("div")
                card.classList.add("card")

                card.innerHTML = `
                    <img src="${todosOsProdutos[i].thumbnail}" alt="${todosOsProdutos[i].title}" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;" />
                    <div class="card-title">${todosOsProdutos[i].title}</div>
                    <div class="card-preco">💰 R$ ${todosOsProdutos[i].price}</div>
                    <div style="font-size: 0.9rem; color: #888;">⭐ ${todosOsProdutos[i].rating}</div>
                    <div style="font-size: 0.85rem; margin-top: 0.5rem;">${todosOsProdutos[i].description}</div>
                `

                container.appendChild(card)
            }
        }
    }
}
chamarApi()

