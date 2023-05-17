// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto{
    constructor(nome, data_cadastro, descricao, preco){
        this.nome = nome;
        this.data_cadastro = data_cadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrar_produto(){
        return this.nome +  this.data_cadastro + this.descricao + this.preco;
    }
}

class ProdutoDestaque extends Produto{
    constructor(nome, data_cadastro, descricao, preco, produto_destaque){
        super(nome, data_cadastro, descricao, preco);
        this.produto_destaque = produto_destaque;
    }
    mostrar_produto_destaque(){
        return `
            <div clas="vermeio">${this.nome}</div>
            <div>${this.data_cadastro}</div>
        `
        //return this.nome +  this.data_cadastro + this.descricao + this.preco + this.produto_destaque;
    }
}

const produto = new ProdutoDestaque("Caderno universitário capa dura 1x1 80 folhas, Brief Azul, Spiral, 211695 - PT 1 UN", "17/05/2023", "Caderno", 55.99, "https://img.kalunga.com.br/fotosdeprodutos/139353d.jpg" );
console.log(produto.mostrar_produto_destaque());

const div = document.getElementById('ProdutoDestaque');
div.insertAdjacentHTML('afterbegin', produto.mostrar_produto_destaque());