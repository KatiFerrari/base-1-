// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto{
    constructor(nome,dataCad, descricao, preco){
        this.nome = nome;
        this.dataCad = dataCad;
        this.descricao = descricao;
        this.preco = preco;
    }

    mostrarProdutos(){
        return this.nome + " " + this.dataCad + " " +  this.descricao + " " + this.preco
    }

}
class DestProdutos extends Produto {
    constructor(nome,dataCad, descricao, preco){
        super (nome,dataCad, descricao, preco)
    }
}

const produtos = new Produto("Caderno", "26/02/2023", "Caderno Universitário Fases da Lua 160 folhas", 55.5)
const DestProdutos = new DestProdutos("Caderno", "26/02/2023", "Caderno Universitário Fases da Lua 160 folhas", 55.5)
console.log(produto.mostrarProdutos())
console.log(DestProdutos.mostrarProdutos())

