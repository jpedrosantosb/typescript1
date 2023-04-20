import { Negociacao } from "./negociacao.js";

// Array<Negociacao> mesma coisa que 

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

// ReadonlyArray<Negociacao> mesma coisa que readonly Negociacao []

    lista(): readonly Negociacao [] {
        return this.negociacoes;
    }
}

