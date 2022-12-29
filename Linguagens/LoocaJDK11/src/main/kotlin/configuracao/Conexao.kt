package configuracao

import org.apache.commons.dbcp2.BasicDataSource
import org.springframework.jdbc.core.JdbcTemplate

class Conexao {

    fun getJdbcTemplate(): JdbcTemplate {
        val dataSource = BasicDataSource();
        dataSource.driverClassName = "com.microsoft.sqlserver.jdbc.SQLServerDriver"
        dataSource.url = "jdbc:sqlserver://greeneye.database.windows.net;database=greeneye"
        dataSource.username = "greeneyeADM"
        dataSource.password = "Greeneye123@"

        val jdbcTemplate = JdbcTemplate(dataSource)
        return jdbcTemplate
    }
}