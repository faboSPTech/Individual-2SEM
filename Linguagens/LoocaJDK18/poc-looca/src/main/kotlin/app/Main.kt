package app

import com.github.britooo.looca.api.core.Looca
import configuracao.Conexao
import dominio.LeituraLooca
import dominio.SistemaOperacionalLooca
import dominio.UsuarioLooca
import repositorio.LeituraRepositorio
import repositorio.SistemaRepositorio
import repositorio.UsuarioRepositorio
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import javax.swing.JOptionPane
import javax.swing.JOptionPane.*

open class Main {
    companion object{
        @JvmStatic fun main(args: Array<String>){
            val jdbcTemplate = Conexao().getJdbcTemplate()
            val leituraRepositorio = LeituraRepositorio(jdbcTemplate)
            //val usuarioRepositorio = UsuarioRepositorio(jdbcTemplate)

            //val usuarios = mutableListOf<UsuarioLooca>()

            val looca = Looca()
            val sistema = looca.sistema
            val so = sistema.sistemaOperacional

            //val login = showInputDialog("Bem-vindo ao console Greeneye!\r\n Deseja fazer login? 1 - Entrar / 2 - Sair")


            showMessageDialog(null, "Bem-vindo ao console Greeneye!")
            showMessageDialog(null, "O sistema da sua maquina é ${sistema.sistemaOperacional}")

            while (true){

                // PROCESSADOR
                val processador = looca.processador
                val usoProcessador = processador.uso

                // MEMORIA RAM
                val memoria = looca.memoria
                val ramTotal = (memoria.total.toDouble()/1024/1024/1024)
                val ramUso = (memoria.emUso.toDouble()/1024/1024/1024)
                val ramDisponivel = (memoria.disponivel.toDouble()/1024/1024/1024)

                // DISCO
                val grupoDiscos = looca.grupoDeDiscos
                val discos = grupoDiscos.discos
                val tamanhoDiscos = discos[0].tamanho.toDouble()/1024/1024/1024
                val tamanhoDiscos1 = discos[1].tamanho.toDouble()/1024/1024/1024

                // DATA HORA
                val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
                val dataHora = (LocalDateTime.now().format(formatter)).toString()

                val novaLeitura = LeituraLooca( 0, 50000, so, usoProcessador, ramTotal, ramUso, ramDisponivel, tamanhoDiscos, dataHora)
                //leituraRepositorio.inserirLeitura(novaLeitura)

                val escolha = showInputDialog("""
                    Escolha uma opção para ver a leitura:
                    1 - Uso do processador
                    2 - Memória RAM total
                    3 - Memória RAM utilizada
                    4 - Memória RAM disponível
                    5 - Tamanho do disco
                    6 - Todos
                    NDA - Sair
                """.trimIndent())

                when(escolha){
                    "1" -> {showMessageDialog(null, "Uso do processador: ${"%.0f".format(usoProcessador)}%")
                        leituraRepositorio.inserirLeitura(novaLeitura)}
                    "2" -> {showMessageDialog(null, "Memória RAM total (GB): ${"%.2f".format(ramTotal)}")
                        leituraRepositorio.inserirLeitura(novaLeitura)}
                    "3" -> {showMessageDialog(null, "Memória RAM utilizada (GB): ${"%.2f".format(ramUso)}")
                        leituraRepositorio.inserirLeitura(novaLeitura)}
                    "4" -> {showMessageDialog(null, "Memória dispónível (GB): ${"%.2f".format(ramDisponivel)}")
                        leituraRepositorio.inserirLeitura(novaLeitura)}
                    "5" -> {showMessageDialog(null, "Tamanho do(s) disco(s) (GB):Disco 1 - ${"%.2f".format(tamanhoDiscos)} / Disco 2 - ${"%.2f".format(tamanhoDiscos1)}")
                        leituraRepositorio.inserirLeitura(novaLeitura)}
                    "6" -> {showMessageDialog(null, "Todos:\r\nUso do Processador:${"%.0f".format(usoProcessador)}% \r\n" +
                            "Memória RAM: " +
                            "Total: ${"%.2f".format(ramTotal)}" +
                            "\r\nUtilizada: ${"%.2f".format(ramUso)}" +
                            "\r\nDisponível: ${"%.2f".format(ramDisponivel)}" +
                            "\r\nTamanho disco(s):Disco 1 - ${"%.2f".format(tamanhoDiscos)} / Disco 2 - ${"%.2f".format(tamanhoDiscos1)}")
                        leituraRepositorio.inserirLeitura(novaLeitura)}
                    else -> break

                }
            }
        }
    }
}