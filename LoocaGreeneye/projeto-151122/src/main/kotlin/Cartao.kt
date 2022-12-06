open class Cartao(val titular: String, private var saldo: Double) {

    fun getSaldo(): Double {
        return saldo
    }

    fun pagar(valor:Double){
        if (saldo > 0){
            saldo -= valor
        }
    }



}

