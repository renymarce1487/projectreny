/*
Algoritmo

[x] Colocar os produtos na tela.
 [x] Saber quem são os produtos.
 [x] Onde colocar os produtos.
 [x] Estilizar os produtos
[x] Filtrar os produtos pelo input.
 [x] Saber quando algo foi digitado no Input
 [x] Filtrar os produtos que contenham a palavra chave
 [x] Colocar os produtos filtrados na tela
[] filtrar produtos pelo menu.
 [x] Saber quando o botão for clicado.
 [x] Saber qual botão foi clicado.
 [] Trocar o CSS do botao clicado.
 [] Filtrar os produtos de acordo com a categoria.
 [] Colocar os produtos filtrados na tela.

 Variáveis
 funções
 laços de repetição
 Template String
 eventos
 seletores
 Estrutura de dados
*/
let textoPesquisa = "";
let categoriaatual = "all";
let produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7999,
        precoOriginal: 8999.00,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8999,
        precoOriginal: 10999.00,
        desconto: 18,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1899,
        precoOriginal: 2299.00,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5499,
        precoOriginal: 6299.00,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3299,
        precoOriginal: 3799.00,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 499.00,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "headphones",
        preco: 2499,
        precoOriginal: 2999.00,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7999.00,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
        descricao: "Notebook Windows premium"
    }
];

let containerProducts = document.querySelector(".products-container");
let inputsearch = document.querySelector(".search-input");
let todosbotoes = document.querySelectorAll(".category-btn");


function mostrarProducts() {
    let cardproducthtml = "";

    let produtosFiltrados = produtos.filter(prod => {

        let passoucategoria = (categoriaatual === "all" || prod.categoria === categoriaatual)

        let passouPesquisa = prod.nome.toLowerCase().includes(textoPesquisa.toLowerCase())

        return passouPesquisa && passoucategoria
    })
    //console.log(produtosFiltrados)
    produtosFiltrados.forEach(prod => {

        cardproducthtml = cardproducthtml + `<div class="product-card">
                <img class="product-img" src="${prod.imagem}"
                    alt="${prod.nome}">
                <div class="product-info">
                    <h3 class="product-name">${prod.nome}</h3>
                    <p class="product-description">${prod.descricao}</p>
                    <p class="product-price">R$ ${prod.preco}</p>
                    <button class="product-button">Ver Detalhes</button>
                </div>
            </div>`
    })
    containerProducts.innerHTML = cardproducthtml;
}

function pesquisar() {
    textoPesquisa = inputsearch.value;
    mostrarProducts()
}

function mudarCategoria(categoria) {
    categoriaatual = categoria; // categoria atual vai ser igual à categori clicada

    todosbotoes.forEach(btn => {
        btn.classList.remove('active')

        if (btn.getAttribute("data-category") === categoriaatual) {
            btn.classList.add("active");
        }

    })

    mostrarProducts()
}

window.addEventListener('DOMContentLoaded', () => {
    inputsearch.addEventListener('input', pesquisar)
    mostrarProducts()
    todosbotoes.forEach(btn => {
        btn.addEventListener("click", () => {
            let categoria = btn.getAttribute("data-category");

            mudarCategoria(categoria)
        })
    })

})


