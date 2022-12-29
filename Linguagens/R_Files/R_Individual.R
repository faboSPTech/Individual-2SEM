#Bibliotecas de conexão

library(tidyverse)
library(httr)
library(odbc)
library(sqldf)
library(DBI)
library(dbplyr)
library(dplyr)
library(RODBC)


#criando uma conexão com o banco

conn <- DBI::dbConnect(odbc::odbc(),
                       Driver   = "{ODBC Driver 18 for SQL Server}",
                       Server   = "greeneye.database.windows.net",
                       Database = "greeneye",
                       UID      = rstudioapi::askForPassword("Database User"),
                       PWD      = rstudioapi::askForPassword("Database Password"),
                       Port     = 1433)

#criando uma conexão para recebimento de dados do pipefy

while(TRUE){
url <- "https://api.pipefy.com/graphql"
encode <- "json"

#montagem da query de pedidos com os dados

payloadTotal <- "{\"query\": \"{pipe(id: 302716733){name cards_count opened_cards_count } } \"}"
payloadTotal2 <- "{\"query\": \"{pipe(id: 302716733){phases {id name cards_count}}}\"}"
response <- VERB("POST", url, body = payloadTotal, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
response3 <- VERB("POST", url, body = payloadTotal2, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
responseTotal <- data.frame(content(response))
responseTotal2 <- data.frame(content(response3))

payloadTriagem <- "{\"query\": \"{phase(id:317649044) {cards_count} } \"}"
responseTriagem <- VERB("POST", url, body = payloadTriagem, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
response2 <- data.frame(content(responseTriagem))

payloadRam <- "{\"query\": \"{pipe(id: 302716733) {phases {name cards_count(filter: {cardLabelIds: 307950378})} }} \"}"
responseRam <- VERB("POST", url, body = payloadRam, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
responseRam2 <- data.frame(content(responseRam))

payloadCpu <- "{\"query\": \"{pipe(id: 302716733) {phases {name cards_count(filter: {cardLabelIds: 307951087})} }} \"}"
responseCpu <- VERB("POST", url, body = payloadCpu, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
responseCpu2 <- data.frame(content(responseCpu))

payloadDisco <- "{\"query\": \"{pipe(id: 302716733) {phases {name cards_count(filter: {cardLabelIds: 307951088})} }} \"}"
responseDisco <- VERB("POST", url, body = payloadDisco, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
responseDisco2 <- data.frame(content(responseDisco))



#crição de data.frames ajustados de acordo com as tabelas do SQL Server

cardsTotais <- data.frame("Nome Suporte"= c(responseTotal$data.pipe.name),
                          "Cards Total"= c(responseTotal$data.pipe.cards_count), 
                          "Cards Aberto"= c(responseTotal$data.pipe.opened_cards_count),
                          "Cards Finalizados"= c(responseTotal2$data.pipe.phases.cards_count.3)+ 
                            c(responseTotal2$data.pipe.phases.cards_count.5),
                          "Cards Atrasados"= c(responseTotal2$data.pipe.phases.cards_count.4),
                          "Datas"= Sys.Date())


Triagem <- data.frame("TriagemTotal"= c(response2$cards_count),
                      "RAM"= c(responseRam2$data.pipe.phases.cards_count),
                      "CPU"= c(responseCpu2$data.pipe.phases.cards_count),
                      "DISCO"= c(responseDisco2$data.pipe.phases.cards_count),
                      "dtColeta"= Sys.Date())

dbBegin(conn)

#Inserindo no banco da Azure os dados dos data.frames

dbExecute(
  conn,
  "INSERT INTO CardsTotais VALUES (?, ?, ?, ?, ?, ?)",
  params = list(cardsTotais$Nome.Suporte, cardsTotais$Cards.Total, 
                cardsTotais$Cards.Aberto, cardsTotais$Cards.Finalizados, 
                cardsTotais$Cards.Atrasados, cardsTotais$Datas)
)

dbExecute(
  conn,
  "INSERT INTO Triagem VALUES (?, ?, ?, ?,?)",
  params = list(Triagem$TriagemTotal , Triagem$RAM,Triagem$CPU,Triagem$DISCO,Triagem$dtColeta)
)


dbCommit(conn)
}