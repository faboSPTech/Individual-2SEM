package repositorio

import dominio.UsuarioLooca
import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate

class UsuarioRepositorio(val jdbcTemplate: JdbcTemplate) {

    fun entrar(email:String, senha:String):UsuarioLooca{

        val erroUsuario = UsuarioLooca("","", 0,111)
        val Usuario = jdbcTemplate.query(
            "select * from Usuario where email = ? and senha = ?;", BeanPropertyRowMapper(UsuarioLooca::class.java),email, senha
        )
        if (Usuario.size == 0){
            println("USUARIO ERRADO")
            return erroUsuario
        } else{
            return Usuario[0]
        }
    }
}