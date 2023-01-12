const frutas = [
    {
        nomeDaFruta: 'Uva'
    },
    {
        nomeDaFruta: 'Manga'
    },
    {
        nomeDaFruta: 'Pêra'
    },
    {
        nomeDaFruta: 'Morango'
    },
    {
        nomeDaFruta: 'Laranja'
    },
]
function createList(list){
    let secaoDasFrutas = document.querySelector(".secaoFrutas")
    let listaDeFrutas = document.createElement('ul')
    listaDeFrutas.setAttribute('id','listaItens')
    secaoDasFrutas.appendChild(listaDeFrutas)
    console.log(secaoDasFrutas)
    console.log(listaDeFrutas)
    for(i = 0; i < list.length; i++){
        console.log(list[i].nomeDaFruta)
        let nomes = list[i].nomeDaFruta
        let itens = document.createElement('li')
        itens.setAttribute('class','frutas')
        itens.setAttribute('id',`box${[i+1]}`)
        itens.innerText = nomes;
        
        listaDeFrutas.append(itens)
        
    }
}console.log(createList(frutas))