import { Negociacao } from "./negociacao.js";

// Array<Negociacao> mesma coisa que 

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

// ReadonlyArray<Negociacao> mesma coisa que readonly Negociacao []

    public lista(): readonly Negociacao [] {
        return this.negociacoes;
    }
}

