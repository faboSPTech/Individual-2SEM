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
                         UID      = "greeneyeADM",
                         PWD      = "Greeneye123@",
                         Port     = 1433)

while (TRUE) {
  
  #criando uma conexão para recebimento de dados do pipefy
  
  url <- "https://api.pipefy.com/graphql"
  
  print('ola')
  
  #montagem da query de pedidos com os dados
  payload2 <- "{\"query\": \"{pipe(id: 302821771){name cards_count opened_cards_count } } \"}"
  payload3 <- "{\"query\": \"{pipe(id: 302821771){phases {id name cards_count} } } \"}"
  
  #payload4 <- "{\"query\": \"{cards(pipe_id: 302821771) {edges {node {id title current_phase {id} } } } } \"}"
  #payload5 <- "{\"query\": \"{pipe(id: 302821771){labels {id name} } } \"}"
  
  payload6 <- "{\"query\": \"{pipe(id: 302821771){phases {name cards_count(filter: {cardLabelIds: 307911460} ) } } } \"}"
  payload7 <- "{\"query\": \"{pipe(id: 302821771){phases {name cards_count(filter: {cardLabelIds: 307911461} ) } } } \"}"
  payload8 <- "{\"query\": \"{pipe(id: 302821771){phases {name cards_count(filter: {cardLabelIds: 307911462} ) } } } \"}"
  payload9 <- "{\"query\": \"{pipe(id: 302821771){phases {name cards_count(filter: {cardLabelIds: 307912031} ) } } } \"}"
  payload10 <- "{\"query\": \"{pipe(id: 302821771){phases {name cards_count(filter: {cardLabelIds: 307912032} ) } } } \"}"
  payload11 <- "{\"query\": \"{pipe(id: 302821771){phases {name cards_count(filter: {cardLabelIds: 307912033} ) } } } \"}"
  payload12 <- "{\"query\": \"{pipe(id: 302821771){phases {name cards_count(filter: {cardLabelIds: 307912034} ) } } } \"}"
  payload13 <- "{\"query\": \"{pipe(id: 302821771){phases {name cards_count(filter: {cardLabelIds: 307912035} ) } } } \"}"
  payload14 <- "{\"query\": \"{pipe(id: 302821771){phases {name cards_count(filter: {cardLabelIds: 307912036} ) } } } \"}"
  
  encode <- "json"
  
  #pegando a autorização dos dados da query das tabelas
  response <- VERB("POST", url, body = payload2, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  response3 <- VERB("POST", url, body = payload3, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  
  #response4 <- VERB("POST", url, body = payload4, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  #response5 <- VERB("POST", url, body = payload5, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  
  response6 <- VERB("POST", url, body = payload6, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  response7 <- VERB("POST", url, body = payload7, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  response8 <- VERB("POST", url, body = payload8, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  response9 <- VERB("POST", url, body = payload9, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  response10 <- VERB("POST", url, body = payload10, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  response11 <- VERB("POST", url, body = payload11, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  response12 <- VERB("POST", url, body = payload12, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  response13 <- VERB("POST", url, body = payload13, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  response14 <- VERB("POST", url, body = payload14, add_headers("authorization" = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNjc5NjQsImVtYWlsIjoiZ3JlZW5leWVfMDhAb3V0bG9vay5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjEyNzUxfX0.hU4Zrka-Vlzoqt-q48wR95XKF-mCiluOIqYaEuC1J-M-qjC3j054DO68oTrnYKFlYf6UuHPkyPCvSMueRfvqYA"), content_type("application/json"), accept("application/json"), encode = encode)
  
  #criando data.frames  com as respostas adquiridas
  response2 <- data.frame(content(response))
  response3 <- data.frame(content(response3))
  
  #response4 <- data.frame(content(response4))
  #response5 <- data.frame(content(response5))
  
  response6 <- data.frame(content(response6))
  response7 <- data.frame(content(response7))
  response8 <- data.frame(content(response8))
  response9 <- data.frame(content(response9))
  response10 <- data.frame(content(response10))
  response11 <- data.frame(content(response11))
  response12 <- data.frame(content(response12))
  response13 <- data.frame(content(response13))
  response14 <- data.frame(content(response14))
  
  #crição de data.frames ajustados de acordo com as tabelas do SQL Server
  
  tratHigh <- data.frame("High"= c(response6$data.pipe.phases.cards_count)+
                           c(response6$data.pipe.phases.cards_count.1)+
                           c(response6$data.pipe.phases.cards_count.2)+
                           c(response6$data.pipe.phases.cards_count.3)+
                           c(response6$data.pipe.phases.cards_count.4)+
                           c(response6$data.pipe.phases.cards_count.5))
  
  tratMedium <- data.frame("Medium"= c(response7$data.pipe.phases.cards_count)+
                             c(response7$data.pipe.phases.cards_count.1)+
                             c(response7$data.pipe.phases.cards_count.2)+
                             c(response7$data.pipe.phases.cards_count.3)+
                             c(response7$data.pipe.phases.cards_count.4)+
                             c(response7$data.pipe.phases.cards_count.5))
  
  tratLow <- data.frame("Low"= c(response8$data.pipe.phases.cards_count)+
                          c(response8$data.pipe.phases.cards_count.1)+
                          c(response8$data.pipe.phases.cards_count.2)+
                          c(response8$data.pipe.phases.cards_count.3)+
                          c(response8$data.pipe.phases.cards_count.4)+
                          c(response8$data.pipe.phases.cards_count.5))
  
  tratNivel1 <- data.frame("Nivel 1"= c(response9$data.pipe.phases.cards_count)+
                             c(response9$data.pipe.phases.cards_count.1)+
                             c(response9$data.pipe.phases.cards_count.2)+
                             c(response9$data.pipe.phases.cards_count.3)+
                             c(response9$data.pipe.phases.cards_count.4)+
                             c(response9$data.pipe.phases.cards_count.5))
  
  tratNivel2 <- data.frame("Nivel 2"= c(response10$data.pipe.phases.cards_count)+
                             c(response10$data.pipe.phases.cards_count.1)+
                             c(response10$data.pipe.phases.cards_count.2)+
                             c(response10$data.pipe.phases.cards_count.3)+
                             c(response10$data.pipe.phases.cards_count.4)+
                             c(response10$data.pipe.phases.cards_count.5))
  
  tratNivel3 <- data.frame("Nivel 3"= c(response11$data.pipe.phases.cards_count)+
                             c(response11$data.pipe.phases.cards_count.1)+
                             c(response11$data.pipe.phases.cards_count.2)+
                             c(response11$data.pipe.phases.cards_count.3)+
                             c(response11$data.pipe.phases.cards_count.4)+
                             c(response11$data.pipe.phases.cards_count.5))
  
  tratProb <- data.frame("Problemas"= c(response12$data.pipe.phases.cards_count)+
                           c(response12$data.pipe.phases.cards_count.1)+
                           c(response12$data.pipe.phases.cards_count.2)+
                           c(response12$data.pipe.phases.cards_count.3)+
                           c(response12$data.pipe.phases.cards_count.4)+
                           c(response12$data.pipe.phases.cards_count.5))
  
  tratReq <- data.frame("Requisicoes"= c(response13$data.pipe.phases.cards_count)+
                          c(response13$data.pipe.phases.cards_count.1)+
                          c(response13$data.pipe.phases.cards_count.2)+
                          c(response13$data.pipe.phases.cards_count.3)+
                          c(response13$data.pipe.phases.cards_count.4)+
                          c(response13$data.pipe.phases.cards_count.5))
  
  tratInc <- data.frame("Incidentes"= c(response14$data.pipe.phases.cards_count)+
                          c(response14$data.pipe.phases.cards_count.1)+
                          c(response14$data.pipe.phases.cards_count.2)+
                          c(response14$data.pipe.phases.cards_count.3)+
                          c(response14$data.pipe.phases.cards_count.4)+
                          c(response14$data.pipe.phases.cards_count.5))
  
  labelsCount <- data.frame("High"= tratHigh, "Medium"= tratMedium, "Low"= tratLow, 
                            "Nivel 1"= tratNivel1, "Nivel 2"= tratNivel2, "Nivel 3"= tratNivel3,
                            "Problemas"= tratProb, "Requisicoes"= tratReq, "Incidentes"= tratInc,
                            "DtColeta"= Sys.Date())
  
  
  #labels <- data.frame("ID"= c(response5$data.pipe.labels.id, response5$data.pipe.labels.id.1, 
  #                          response5$data.pipe.labels.id.2, response5$data.pipe.labels.id.3, 
  #                          response5$data.pipe.labels.id.4, response5$data.pipe.labels.id.5, 
  #                          response5$data.pipe.labels.id.6, response5$data.pipe.labels.id.7, 
  #                          response5$data.pipe.labels.id.8, response5$data.pipe.labels.id.9),
  #                  "Nomes"= c(response5$data.pipe.labels.name, response5$data.pipe.labels.name.1,
  #                          response5$data.pipe.labels.name.2, response5$data.pipe.labels.name.3,
  #                          response5$data.pipe.labels.name.4, response5$data.pipe.labels.name.5,
  #                          response5$data.pipe.labels.name.6, response5$data.pipe.labels.name.7,
  #                          response5$data.pipe.labels.name.8, response5$data.pipe.labels.name.9))
  
  #fases <- data.frame("ID"= c(response3$data.pipe.phases.id, response3$data.pipe.phases.id.1, 
  #                          response3$data.pipe.phases.id.2, response3$data.pipe.phases.id.3, 
  #                          response3$data.pipe.phases.id.4, response3$data.pipe.phases.id.5),
  #                  "Nomes"= c(response3$data.pipe.phases.name, response3$data.pipe.phases.name.1,
  #                          response3$data.pipe.phases.name.2, response3$data.pipe.phases.name.3,
  #                          response3$data.pipe.phases.name.4, response3$data.pipe.phases.name.5))
  
  fasesCard <- data.frame("Nome"= c(response3$data.pipe.phases.name, response3$data.pipe.phases.name.1,
                                    response3$data.pipe.phases.name.2, response3$data.pipe.phases.name.3,
                                    response3$data.pipe.phases.name.4, response3$data.pipe.phases.name.5),
                    "QtCards"= c(response3$data.pipe.phases.cards_count, response3$data.pipe.phases.cards_count.1,
                                   response3$data.pipe.phases.cards_count.2, response3$data.pipe.phases.cards_count.3,
                                   response3$data.pipe.phases.cards_count.4, response3$data.pipe.phases.cards_count.5),
                    "DataVisual"= Sys.Date())
  
  cardsTotais <- data.frame("Nome Suporte"= c(response2$data.pipe.name),
                       "Cards Total"= c(response2$data.pipe.cards_count), 
                       "Cards Aberto"= c(response2$data.pipe.opened_cards_count),
                       "Cards Finalizados"= c(response3$data.pipe.phases.cards_count.3)+ 
                         c(response3$data.pipe.phases.cards_count.5),
                       "Cards Atrasados"= c(response3$data.pipe.phases.cards_count.4),
                       "Datas"= Sys.Date())
  
  #cardsPipe <- data.frame("ID"= c(response4$data.cards.edges.node.id, response4$data.cards.edges.node.id.1,
  #                        response4$data.cards.edges.node.id.2, response4$data.cards.edges.node.id.3, 
  #                        response4$data.cards.edges.node.id.4, response4$data.cards.edges.node.id.5),
  #                "Titulo"= c(response4$data.cards.edges.node.title, response4$data.cards.edges.node.title.1,
  #                        response4$data.cards.edges.node.title.2, response4$data.cards.edges.node.title.3,
  #                        response4$data.cards.edges.node.title.4, response4$data.cards.edges.node.title.5),
  #                  "FkFase"= c(response4$data.cards.edges.node.id, response4$data.cards.edges.node.1,
  #                        response4$data.cards.edges.node.id.2, response4$data.cards.edges.node.3,
  #                        response4$data.cards.edges.node.id.4, response4$data.cards.edges.id.5),
  #                "DataColeta"= Sys.Date())
  
  
  geraisCount <- data.frame("qtdTotal"=  c(response2$data.pipe.cards_count),
                            "qtdAnalise"= c(response3$data.pipe.phases.cards_count),
                            "qtdAnd"= c(response3$data.pipe.phases.cards_count.1),
                            "qtdManu"= c(response3$data.pipe.phases.cards_count.2),
                            "qtdConc"= c(response3$data.pipe.phases.cards_count.3),
                            "qtdArq"= c(response3$data.pipe.phases.cards_count.4),
                            "qtdAtras"= c(response3$data.pipe.phases.cards_count.5),
                            "dtDatas"= Sys.Date())
  
  
  dbBegin(conn)
  
  #Inserindo no banco da Azure os dados dos data.frames
  #dbExecute(
  #  conn,
  #  "INSERT INTO Fases VALUES (?, ?)",
  #  params = list(fases$ID, fases$Nomes)
  #)
  
  dbExecute(
    conn,
    "INSERT INTO FasesCards VALUES (?, ?, ?)",
    params = list(fasesCard$Nome, fasesCard$QtCards, fasesCard$DataVisual)
  )
  
  #dbExecute(
  #  conn,
  #  "INSERT INTO Cards VALUES (?, ?, ?, ?)",
  #  params = list(cardsPipe$ID, cardsPipe$Titulo, cardsPipe$FkFase, cardsPipe$DataColeta)
  #)
  
  dbExecute(
    conn,
    "INSERT INTO CardsTotais VALUES (?, ?, ?, ?, ?, ?)",
    params = list(cardsTotais$Nome.Suporte, cardsTotais$Cards.Total, 
                  cardsTotais$Cards.Aberto, cardsTotais$Cards.Atrasados, 
                  cardsTotais$Cards.Finalizados, cardsTotais$Datas)
  )
  
  #dbExecute(
  #  conn,
  #  "INSERT INTO rotulos VALUES (?, ?)",
  #  params = list(labels$ID, labels$Nomes)
  #)
  
  dbExecute(
    conn,
    "INSERT INTO rotulosCount VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    params = list(labelsCount$High, labelsCount$Medium, labelsCount$Low, labelsCount$Nivel.1,
                  labelsCount$Nivel.2, labelsCount$Nivel.3, labelsCount$Problemas, labelsCount$Requisicoes,
                  labelsCount$Incidentes, labelsCount$DtColeta)
  )
  
  dbExecute(
    conn,
    "INSERT INTO geraisCount VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    params = list(geraisCount$qtdTotal, geraisCount$qtdAnalise, geraisCount$qtdAnd, geraisCount$qtdManu, 
                  geraisCount$qtdConc, geraisCount$qtdArq, geraisCount$qtdAtras, geraisCount$dtDatas)
  )
  
  dbCommit(conn)
  
  Sys.sleep(3600)
}