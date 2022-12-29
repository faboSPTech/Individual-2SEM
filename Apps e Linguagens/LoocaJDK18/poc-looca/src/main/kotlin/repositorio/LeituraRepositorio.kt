package repositorio

import dominio.LeituraLooca
import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate

class LeituraRepositorio(val jdbcTemplate: JdbcTemplate) {
    fun inserirLeitura(leitura: LeituraLooca) {
        jdbcTemplate.update("""
            insert into LeituraLooca (fkMaquina, SO, usoProcessador, qtdRamTotal, qtdRamUso, qtdRamDisponivel, tamanhoDisco, dataHoraLeitura) values
            (?, ?, ?, ?, ?, ?, ?, ?)
        """,leitura.fkMaquina, leitura.SO, leitura.usoProcessador, leitura.qtdRamTotal, leitura.qtdRamUso, leitura.qtdRamDisponivel, leitura.tamanhoDisco,leitura.dataHoraLeitura)
    }

    fun listarLeitura():List<LeituraLooca> {
        return jdbcTemplate.query("select * from LeituraLooca", BeanPropertyRowMapper(LeituraLooca::class.java))
    }
}