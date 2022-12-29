#GRUPO 04

import psutil
import time
from datetime import datetime
import mysql.connector
import matplotlib.pyplot

#Troque o user e a senha do MYSQL para utilizar.
con = mysql.connector.connect(host='localhost', database='Greeneye', user='aluno', password='sptech')
#Envio de dados estáticos ao banco
if con.is_connected :
    print('Conectou no MYSQL')    
    dados_estaticos = str(psutil.cpu_freq()[2]) + ', ' + str(psutil.cpu_count()) + ', ' + str(psutil.cpu_count(logical=False)) + ', ' + str(psutil.virtual_memory()[0]*10**-9) + ', ' + str(psutil.disk_usage('/')[0]*10**-9) + ');'
    insert_sintax = 'INSERT INTO DadoEstatico VALUES(NULL, 1, 1, NOW(), '
    sql = insert_sintax + dados_estaticos

    cursor = con.cursor()
    cursor.execute(sql)
    con.commit()  

#Envio de dados dinamicos ao banco e exibição de dados ao usuário
media_cpu = 0
tempoparar = float(input("Quantas vezes você deseja capturar os dados?"))
dados_cput = []
dados_cpu = []
dados_hd = []
dados_ram = []
medida = []
i = 1
    
#Captura do sistema operacional da máquina, utilizando a própria psutil 
sistemaoperacional = psutil.disk_partitions()[0][2] 
if(sistemaoperacional == 'NTFS'):
    sistemaoperacional = 'Windows'
elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3'):
    sistemaoperacional = 'Linux'
else:
    sistemaoperacional = 'Sistema não Identificado.'
#
while tempoparar != 0:
 tempo = float(input("Qual o tempo que você deseja em segundos?"))
 componente = (input("Qual componente você deseja capturar os dados?(OPÇOES: CPU HD MEMORIA OU TUDO)"))
 contador = 0
 contadorcpu = 0
 if(componente == "cpu" or componente == "CPU" or componente == "Cpu"):
  while (contador < 1):
   contadorcpu = 0
   contador_cont = 0
   soma_cpu = 0
   while (contadorcpu < 1) :
       dado_atual = psutil.cpu_percent()
       dados_cpu.append(dado_atual)
       contadorcpu += 1
       while (contador_cont < len(dados_cpu)):
        soma_cpu = soma_cpu + dados_cpu[contador_cont]
        contador_cont += 1
        datahora = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
   media_cpu = round ((soma_cpu/len(dados_cpu)),2)


   if con.is_connected :
    print('Conectou no MYSQL')
    dados_dinamicos = str(psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent) + ', ' + str(psutil.cpu_freq()[0]) + ', ' + str(media_cpu) + ', ' + str(dados_cpu[len(dados_cpu)-1]) + ');'
    dados_dinamicos2 = str(psutil.virtual_memory().percent + 0.15*psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent - 0.05*psutil.disk_usage('/').percent) + ', ' + str(psutil.cpu_freq()[0]) +  ', ' + str(media_cpu + media_cpu*0.1) + ', ' + str(dados_cpu[len(dados_cpu)-1] + (dados_cpu[len(dados_cpu)-1])*0.1) + ');'
    dados_dinamicos3 = str(psutil.virtual_memory().percent + 0.05*psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent/3) + ', ' + str(psutil.cpu_freq()[0]) + ', '  + str(media_cpu - media_cpu*0.05) + ', ' + str(dados_cpu[len(dados_cpu)-1] - (dados_cpu[len(dados_cpu)-1])*0.05) + ');'
    insert_sintax = 'INSERT INTO DadoDinamico VALUES(NULL, 1, 1, NOW(), '
    insert_sintax2 = 'INSERT INTO DadoDinamico VALUES(NULL, 2, 1, NOW(), '
    insert_sintax3 = 'INSERT INTO DadoDinamico VALUES(NULL, 3, 1, NOW(), '
    sql = insert_sintax + dados_dinamicos
    sql2 = insert_sintax2 + dados_dinamicos2
    sql3 = insert_sintax3 + dados_dinamicos3
    cursor = con.cursor()
    cursor.execute(sql)
    cursor.execute(sql2)
    cursor.execute(sql3)
    con.commit()  
   print('_____MAQUINA1_____')
   print('_____CPU_____')
   print()
   print("Medida", i, "-", datahora)
   print()
   print("Frequência atual da CPU:", psutil.cpu_freq()[0],'Mhz --', "Frequência Max da CPU:", psutil.cpu_freq()[2],'Mhz',
      "\nNucleos incluindo os lógicos:", psutil.cpu_count(), "\nNucleos Físicos:", psutil.cpu_count(logical=False),"\nPercentual :", dados_cpu[len(dados_cpu)-1],'%', "\nMédia da CPU recorrente:", round(float(media_cpu), 2), "%","Sistema Operacional:", sistemaoperacional)
   print()
   
   print('_____MAQUINA2_____')
   print('_____CPU_____')
   print()
   print("Medida", i, "-", datahora)
   print()
   print("Frequência atual da CPU:", psutil.cpu_freq()[0],'Mhz --', "Frequência Max da CPU:", psutil.cpu_freq()[2],'Mhz',
      "\nNucleos incluindo os lógicos:", psutil.cpu_count(), "\nNucleos Físicos:", psutil.cpu_count(logical=False),"\nPercentual :", (dados_cpu[len(dados_cpu)-1]) + (dados_cpu[len(dados_cpu)-1])*0.1,'%', "\nMédia da CPU recorrente:", round(float(media_cpu), 2), "%","\nSistema Operacional: Linux")
   print()
   print('_____MAQUINA3_____')
   print('_____CPU_____')
   print("Frequência atual da CPU:", psutil.cpu_freq()[0],'Mhz --', "Frequência Max da CPU:", psutil.cpu_freq()[2],'Mhz',
      "\nNucleos incluindo os lógicos:", psutil.cpu_count(), "\nNucleos Físicos:", psutil.cpu_count(logical=False),"\nPercentual :", (dados_cpu[len(dados_cpu)-1]) + (dados_cpu[len(dados_cpu)-1])*0.05,'%', "\nMédia da CPU recorrente:", round(float(media_cpu), 2), "%","\nSistema Operacional", sistemaoperacional)
   print()
   nmrmedida = str(i)
   medida.append(nmrmedida)
   i+=1
   time.sleep(tempo)
   tempoparar = tempoparar - 1
   
   if(tempoparar == 0):
       matplotlib.pyplot.title('Porcentagem da CPU')
       matplotlib.pyplot.xlabel('Numero de Identificação do Dado')
       matplotlib.pyplot.ylabel('Porcentagem')
       matplotlib.pyplot.plot(medida, dados_cpu)
       matplotlib.pyplot.ylim(0, 100)
       matplotlib.pyplot.show()
       dados_cpu = []
       medida = []
       desejo = (input("  Deseja continuar printando?(SIM/TROCAR/SAIR)"))
       if (desejo == "sim" or desejo == "SIM" or desejo == "Sim"):
           tempoparar = float(input("Quantas vezes você deseja capturar os dados?"))
       elif (desejo == "Trocar" or desejo == "TROCAR" or desejo == "trocar"):
           tempoparar = float(input("Quantas vezes você deseja capturar os dados?"))
           contador = 1
       else:
           print("Você não selecionou nenhuma opção para continuar, Desligando a API em 3 segundos.")
           time.sleep(3)
           break

 if(componente == "HD" or componente == "hd" or componente == "Hd"):
     while contador < 1:
      datahora = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
      contadorcpu = 0
      contador_cont = 0
      soma_cpu = 0
      dado_atual = psutil.cpu_percent()
      dados_cpu.append(dado_atual)
      contadorcpu += 1
      while (contador_cont < len(dados_cpu)):
        soma_cpu = soma_cpu + dados_cpu[contador_cont]
        contador_cont += 1
      media_cpu = round ((soma_cpu/len(dados_cpu)),2)

      
      if con.is_connected :
        print('Conectou no MYSQL')
        dados_dinamicos = str(psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent) + ', ' + str(psutil.cpu_freq()[0]) + ', ' + str(media_cpu) + ', ' + str(dados_cpu[len(dados_cpu)-1]) + ');'
        dados_dinamicos2 = str(psutil.virtual_memory().percent + 0.15*psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent - 0.05*psutil.disk_usage('/').percent) + ', ' + str(psutil.cpu_freq()[0]) +  ', ' + str(media_cpu + media_cpu*0.1) + ', ' + str(dados_cpu[len(dados_cpu)-1] + (dados_cpu[len(dados_cpu)-1])*0.1) + ');'
        dados_dinamicos3 = str(psutil.virtual_memory().percent + 0.05*psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent/3) + ', ' + str(psutil.cpu_freq()[0]) + ', '  + str(media_cpu - media_cpu*0.05) + ', ' + str(dados_cpu[len(dados_cpu)-1] - (dados_cpu[len(dados_cpu)-1])*0.05) + ');'
        insert_sintax = 'INSERT INTO DadoDinamico VALUES(NULL, 1, 1, NOW(), '
        insert_sintax2 = 'INSERT INTO DadoDinamico VALUES(NULL, 2, 1, NOW(), '
        insert_sintax3 = 'INSERT INTO DadoDinamico VALUES(NULL, 3, 1, NOW(), '
        sql = insert_sintax + dados_dinamicos
        sql2 = insert_sintax2 + dados_dinamicos2
        sql3 = insert_sintax3 + dados_dinamicos3
        cursor = con.cursor()
        cursor.execute(sql)
        cursor.execute(sql2)
        cursor.execute(sql3)
        con.commit()

                         
      print('_____MAQUINA1_____')
      print('_____HD_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("\nUso de Disco:", psutil.disk_usage('/').percent,'%', "\nSistema de Arquivo:", psutil.disk_partitions()[0][2], "\nPartições:", psutil.disk_partitions()[0][1],"\nSistema Operacional:", sistemaoperacional)
      print()

      print('_____MAQUINA2_____')
      print('_____HD_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("\nUso de Disco:", psutil.disk_usage('/').percent - psutil.disk_usage('/').percent*0.05,'%', "\nSistema de Arquivo:", psutil.disk_partitions()[0][2], "\nPartições:", psutil.disk_partitions()[0][1],"\nSistema Operacional: Linux")
      print()
      
      print('_____MAQUINA3_____')
      print('_____HD_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("\nUso de Disco:", psutil.disk_usage('/').percent/3,'%', "\nSistema de Arquivo:", psutil.disk_partitions()[0][2], "\nPartições:", psutil.disk_partitions()[0][1],"\nSistema Operacional:", sistemaoperacional)
      print()
                         
      nmrmedida = str(i)
      medida.append(nmrmedida)
      dadohd = psutil.disk_usage('/').percent
      dados_hd.append(dadohd)
      i+=1
      time.sleep(tempo)
      tempoparar = tempoparar - 1
                         
      if(tempoparar == 0):
       matplotlib.pyplot.title('Porcentagem do HD')
       matplotlib.pyplot.xlabel('Numero de Identificação do Dado')
       matplotlib.pyplot.ylabel('Porcentagem')
       matplotlib.pyplot.plot(medida, dados_hd)
       matplotlib.pyplot.ylim(0, 100)
       matplotlib.pyplot.show()
       medida = []
       dados_hd = []
                         
       desejo = (input("  Deseja continuar printando?(SIM/TROCAR/SAIR)"))
       if (desejo == "sim" or desejo == "SIM" or desejo == "Sim"):
           tempoparar = float(input("Quantas vezes você deseja capturar os dados?"))
       elif (desejo == "Trocar" or desejo == "TROCAR" or desejo == "trocar"):
           tempoparar = float(input("Quantas vezes você deseja capturar os dados?"))
           contador = 1
       else:
           print("Você não selecionou nenhuma opção para continuar, Desligando a API em 3 segundos.")
           time.sleep(3)
           break

 if(componente == "memoria" or componente == "Memoria" or componente == "MEMORIA"):
   while contador < 1:
      contadorcpu = 0
      contador_cont = 0
      soma_cpu = 0
      dado_atual = psutil.cpu_percent()
      dados_cpu.append(dado_atual)
      contadorcpu += 1
      while (contador_cont < len(dados_cpu)):
        soma_cpu = soma_cpu + dados_cpu[contador_cont]
        contador_cont += 1
      datahora = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
      media_cpu = (soma_cpu/len(dados_cpu))
      
      if con.is_connected :
        print('Conectou no MYSQL')    
   
        dados_dinamicos = str(psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent) + ', ' + str(psutil.cpu_freq()[0]) + ', ' + str(media_cpu) + ', ' + str(dados_cpu[len(dados_cpu)-1]) + ');'
        dados_dinamicos2 = str(psutil.virtual_memory().percent + 0.15*psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent - 0.05*psutil.disk_usage('/').percent) + ', ' + str(psutil.cpu_freq()[0]) +  ', ' + str(media_cpu + media_cpu*0.1) + ', ' + str(dados_cpu[len(dados_cpu)-1] + (dados_cpu[len(dados_cpu)-1])*0.1) + ');'
        dados_dinamicos3 = str(psutil.virtual_memory().percent + 0.05*psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent/3) + ', ' + str(psutil.cpu_freq()[0]) + ', '  + str(media_cpu - media_cpu*0.05) + ', ' + str(dados_cpu[len(dados_cpu)-1] - (dados_cpu[len(dados_cpu)-1])*0.05) + ');'
        insert_sintax = 'INSERT INTO DadoDinamico VALUES(NULL, 1, 1, NOW(), '
        insert_sintax2 = 'INSERT INTO DadoDinamico VALUES(NULL, 2, 1, NOW(), '
        insert_sintax3 = 'INSERT INTO DadoDinamico VALUES(NULL, 3, 1, NOW(), '
        sql = insert_sintax + dados_dinamicos
        sql2 = insert_sintax2 + dados_dinamicos2
        sql3 = insert_sintax3 + dados_dinamicos3
        cursor = con.cursor()
        cursor.execute(sql)
        cursor.execute(sql2)
        cursor.execute(sql3)
        con.commit()

        
      print('_____MAQUINA1_____')
      print('_____MEMÓRIA_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("\nUso da Memória RAM:", psutil.virtual_memory().percent,'%')
      print( "Total RAM:", round( (psutil.virtual_memory()[0]) * (10 ** -9),1) )
      print("Quantidade RAM em Uso:", round((psutil.virtual_memory().used*10**-9),1),"GB","\nSistema Operacional", sistemaoperacional)
      print()

      print('_____MAQUINA2_____')
      print('_____MEMÓRIA_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("\nUso da Memória RAM:", psutil.virtual_memory().percent + psutil.virtual_memory().percent*0.15,'%')
      print( "Total RAM:", round( (psutil.virtual_memory()[0]) * (10 ** -9),1) )
      print("Quantidade RAM em Uso:", round((psutil.virtual_memory().used*10**-9 + psutil.virtual_memory().used*10**-9*0.15),1),"GB","\nSistema Operacional: Linux")
      print()

      print('_____MAQUINA3_____')
      print('_____MEMÓRIA_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("\nUso da Memória RAM:", psutil.virtual_memory().percent - psutil.virtual_memory().percent*0.05,'%')
      print( "Total RAM:", round( (psutil.virtual_memory()[0]) * (10 ** -9),1) )
      print("Quantidade RAM em Uso:", round((psutil.virtual_memory().used*10**-9 - psutil.virtual_memory().used*10**-9*0.05),1),"GB","\nSistema Operacional", sistemaoperacional)
      print()
      
      dados_ram.append(psutil.virtual_memory().percent)
      nmrmedida = str(i)
      medida.append(nmrmedida)
      i+=1
      time.sleep(tempo)
      tempoparar = tempoparar - 1
      
      if(tempoparar == 0):
         matplotlib.pyplot.title('Porcentagem da RAM')
         matplotlib.pyplot.xlabel('Numero de Identificação do Dado')
         matplotlib.pyplot.ylabel('Porcentagem')
         matplotlib.pyplot.plot(medida, dados_ram)
         matplotlib.pyplot.ylim(0, 100)
         matplotlib.pyplot.show()
         medida = []
         dados_ram = []

         
         desejo =  (input("Deseja continuar printando?(SIM/TROCAR/SAIR)"))
         if(desejo == "sim" or desejo == "SIM" or desejo == "Sim"):
             tempoparar = float(input("Quantas vezes você deseja capturar os dados?"))
         elif(desejo == "Trocar" or desejo == "TROCAR" or desejo == "trocar"):
             tempoparar = float(input("Quantas vezes você deseja capturar os dados?"))
             contador = 1
         else:
             print("Você não selecionou nenhuma opção para continuar, Desligando a API em 3 segundos.")
             time.sleep(3)
             break

      
 if(componente == "tudo" or componente == "Tudo" or componente == "TUDO" or componente == "todos" or componente == "TODOS" or componente == "Todos"):
   while contador < 1:
      datahora = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
      contadorcpu = 0
      contador_cont = 0
      soma_cpu = 0
      dado_atual = psutil.cpu_percent()
      dados_cpu.append(dado_atual)
      contadorcpu += 1
      while (contador_cont < len(dados_cpu)):
        soma_cpu = soma_cpu + dados_cpu[contador_cont]
        contador_cont += 1
        media_cpu = soma_cpu/len(dados_cpu)
  
      if con.is_connected :
        print('Conectou no MYSQL')    
        dados_dinamicos = str(psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent) + ', ' + str(psutil.cpu_freq()[0]) + ', ' + str(media_cpu) + ', ' + str(dados_cpu[len(dados_cpu)-1]) + ');'
        dados_dinamicos2 = str(psutil.virtual_memory().percent + 0.15*psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent - 0.05*psutil.disk_usage('/').percent) + ', ' + str(psutil.cpu_freq()[0]) +  ', ' + str(media_cpu + media_cpu*0.1) + ', ' + str(dados_cpu[len(dados_cpu)-1] + (dados_cpu[len(dados_cpu)-1])*0.1) + ');'
        dados_dinamicos3 = str(psutil.virtual_memory().percent + 0.05*psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('/').percent/3) + ', ' + str(psutil.cpu_freq()[0]) + ', '  + str(media_cpu - media_cpu*0.05) + ', ' + str(dados_cpu[len(dados_cpu)-1] - (dados_cpu[len(dados_cpu)-1])*0.05) + ');'
        insert_sintax = 'INSERT INTO DadoDinamico VALUES(NULL, 1, 1, NOW(), '
        insert_sintax2 = 'INSERT INTO DadoDinamico VALUES(NULL, 2, 1, NOW(), '
        insert_sintax3 = 'INSERT INTO DadoDinamico VALUES(NULL, 3, 1, NOW(), '
        sql = insert_sintax + dados_dinamicos
        sql2 = insert_sintax2 + dados_dinamicos2
        sql3 = insert_sintax3 + dados_dinamicos3
        cursor = con.cursor()
        cursor.execute(sql)
        cursor.execute(sql2)
        cursor.execute(sql3)
        con.commit()

        
      print('_____MÁQUINA1')
      print('_____CPU_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("Frequência atual da CPU:", psutil.cpu_freq()[0],'Mhz --',
        "Frequência Max da CPU:", psutil.cpu_freq()[2],'Mhz',"\nNucleos incluindo os lógicos:", psutil.cpu_count(), "\nNucleos Físicos:", psutil.cpu_count(logical=False),
       "\nPercentual medio de uso por Nucleo:", psutil.cpu_percent(),'%',"\nSistema Operacional", sistemaoperacional)
      print()
      print('_____DISCO_____')
      print()
      print("\nUso de Disco:", psutil.disk_usage('/').percent,'%',"\nSistema de Arquivo:", psutil.disk_partitions()[0][2], "\nPartições:", psutil.disk_partitions()[0][1])
      print()
      print('_____MEMÓRIA_____')
      print()
      print("\nUso da Memória Virtual:", psutil.virtual_memory().percent,'%')
      print( "Total RAM:", round( (psutil.virtual_memory()[0]) * (10 ** -9),1) )
      print("Quantidade RAM em Uso:", round((psutil.virtual_memory().used*10**-9),1),"GB")
      print()

      print('_____MÁQUINA2_____')
      print('_____CPU_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("Frequência atual da CPU:", psutil.cpu_freq()[0],'Mhz --',
        "Frequência Max da CPU:", psutil.cpu_freq()[2],'Mhz',"\nNucleos incluindo os lógicos:", psutil.cpu_count(), "\nNucleos Físicos:", psutil.cpu_count(logical=False),
       "\nPercentual medio de uso por Nucleo:", psutil.cpu_percent() + psutil.cpu_percent()*0.1,'%',"\nSistema Operacional: Linux")
      print()
      print('_____DISCO_____')
      print()
      print("\nUso de Disco:", psutil.disk_usage('/').percent - psutil.disk_usage('/').percent*0.05,'%',"\nSistema de Arquivo:", psutil.disk_partitions()[0][2], "\nPartições:", psutil.disk_partitions()[0][1])
      print()
      print('_____MEMÓRIA_____')
      print()
      print("\nUso da Memória Virtual:", psutil.virtual_memory().percent + psutil.virtual_memory().percent*0.15,'%')
      print( "Total RAM:", round( (psutil.virtual_memory()[0]) * (10 ** -9),1) )
      print("Quantidade RAM em Uso:", round((psutil.virtual_memory().used*10**-9 + psutil.virtual_memory().used*10**-9*0.15),1),"GB")
      print()

      print('_____MÁQUINA3_____')
      print('_____CPU_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("Frequência atual da CPU:", psutil.cpu_freq()[0],'Mhz --',
        "Frequência Max da CPU:", psutil.cpu_freq()[2],'Mhz',"\nNucleos incluindo os lógicos:", psutil.cpu_count(), "\nNucleos Físicos:", psutil.cpu_count(logical=False),
       "\nPercentual medio de uso por Nucleo:", psutil.cpu_percent() - psutil.cpu_percent()*0.05,'%',"\nSistema Operacional", sistemaoperacional)
      print()
      print('_____DISCO_____')
      print()
      print("\nUso de Disco:", psutil.disk_usage('/').percent/3,'%',"\nSistema de Arquivo:", psutil.disk_partitions()[0][2], "\nPartições:", psutil.disk_partitions()[0][1])
      print()
      print('_____MEMÓRIA_____')
      print()
      print("\nUso da Memória Virtual:", psutil.virtual_memory().percent + psutil.virtual_memory().percent*0.05,'%')
      print( "Total RAM:", round( (psutil.virtual_memory()[0]) * (10 ** -9),1) )
      print("Quantidade RAM em Uso:", round((psutil.virtual_memory().used*10**-9 + psutil.virtual_memory().used*10**-9*0.05),1),"GB")
      print()

      
      dados_cput.append(psutil.cpu_percent())
      dados_hd.append(psutil.disk_usage('/').percent)
      dados_ram.append(psutil.virtual_memory().percent)
      nmrmedida = str(i)
      medida.append(nmrmedida)
      i+=1
      time.sleep(tempo)
      tempoparar = tempoparar - 1

      
      if(tempoparar == 0):
         matplotlib.pyplot.title('Porcentagem da CPU')
         matplotlib.pyplot.xlabel('Numero de Identificação do Dado')
         matplotlib.pyplot.ylabel('Porcentagem')
         matplotlib.pyplot.plot(medida, dados_cput)
         matplotlib.pyplot.ylim(0, 100)
         matplotlib.pyplot.show()
         dados_cput = []
         dados_cpu = []
         
         matplotlib.pyplot.title('Porcentagem da RAM')
         matplotlib.pyplot.xlabel('Numero de Identificação do Dado')
         matplotlib.pyplot.ylabel('Porcentagem')
         matplotlib.pyplot.plot(medida, dados_ram)
         matplotlib.pyplot.ylim(0, 100)
         matplotlib.pyplot.show()
         dados_ram = []
         
         matplotlib.pyplot.title('Porcentagem do HD')
         matplotlib.pyplot.xlabel('Numero de Identificação do Dado')
         matplotlib.pyplot.ylabel('Porcentagem')
         matplotlib.pyplot.plot(medida, dados_hd)
         matplotlib.pyplot.ylim(0, 100)
         matplotlib.pyplot.show()
         dados_hd = []
         medida = []


         desejo =  (input("  Deseja continuar printando?(SIM/TROCAR/SAIR)"))
         if(desejo == "sim" or desejo == "SIM" or desejo == "Sim" or desejo == "s"):
             tempoparar = float(input("Quantas vezes você deseja capturar os dados?"))
         elif(desejo == "Trocar" or desejo == "TROCAR" or desejo == "trocar"):
             tempoparar = float(input("Quantas vezes você deseja capturar os dados?"))
             contador = 1
         else:
             print("Você não selecionou nenhuma opção para continuar, Desligando a API em 3 segundos.")
             time.sleep(3)
             break
