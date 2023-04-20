// Array<Negociacao> mesma coisa que 
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray<Negociacao> mesma coisa que readonly Negociacao []
    lista() {
        return this.negociacoes;
    }
}
