package repositorio

import dominio.SistemaOperacionalLooca
import org.springframework.jdbc.core.JdbcTemplate

class SistemaRepositorio(val jdbcTemplate: JdbcTemplate) {
    fun inserirSO(sistemaLooca: SistemaOperacionalLooca) {
        jdbcTemplate.update("""
            insert into SistemaOperacionalLooca (idSistema, SO) values
            (?)
        """, sistemaLooca.SO)
    }
}