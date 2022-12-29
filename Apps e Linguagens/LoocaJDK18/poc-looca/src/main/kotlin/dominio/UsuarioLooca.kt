package dominio

 data class UsuarioLooca(
   var email:String,
   var senha:String,
   var fkEmpresa:Int,
   var fkPerfil:Int) {
   constructor(): this("","",1000,111)
}