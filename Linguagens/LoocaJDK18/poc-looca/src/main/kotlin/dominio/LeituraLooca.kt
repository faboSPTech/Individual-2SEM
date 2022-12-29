package dominio

data class LeituraLooca(
    var idLeituraLooca:Int,
    var fkMaquina:Int,
    var SO:String,
    var usoProcessador:Double,
    var qtdRamTotal:Double,
    var qtdRamUso:Double,
    var qtdRamDisponivel:Double,
    var tamanhoDisco:Double,
    var dataHoraLeitura:String) {
    constructor() : this(0, 50000, "",0.0, 0.0, 0.0, 0.0, 0.0, "")
}