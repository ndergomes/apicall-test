const URL = 'https://dummyjson.com/products'

async function chamarApi(){
    const resposta = await fetch(URL)
    if (resposta.status === 200){
        const dados = await resposta.json()
        const todosOsProdutos = dados.products
        // console.log(todosOsProdutos)
        for (i = 0; i < todosOsProdutos.length; i++){
            if (todosOsProdutos[i].category === 'fragrances' && todosOsProdutos[i].rating > 4 && todosOsProdutos[i].price < 100){
                console.log(`Nome: ${todosOsProdutos[i].title}\nCategoria: ${todosOsProdutos[i].category}\nRating: ${todosOsProdutos[i].rating}\nPreço: ${todosOsProdutos[i].price}\n---------------------------------------`)
            }
        }
    }
}
chamarApi()
