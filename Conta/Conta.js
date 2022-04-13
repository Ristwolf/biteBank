// Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            throw new error("Voce nao deveria instanciar um objeto do tipo Conta diretamente, pois ela e uma classe abstrata")
        }
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }

    // Metodo Abstrato - Proibe alguem de sacar sem pagar a taxa
    sacar(valor){
        throw new error("O metodo sacar da conta e abstrato")
    }

    _sacar(valor,taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        this._saldo += valor;           
    }

    tranferir(valor, conta){
                const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);        
    }
}