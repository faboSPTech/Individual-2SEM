import java.util.Timer
import kotlin.concurrent.schedule

class CartaoDebito(titular: String, saldo: Double): Conta(titular, saldo) {

    fun pagar(valor: Double) {
        Timer().schedule(2000) {
            if (saldo > 0) {
                saldo -= valor
            }
            println("Saldo debitado!")
        }

    }


}

