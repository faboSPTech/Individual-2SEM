from datetime import datetime
import psutil
import mysql.connector
import time 
import os
from mysql.connector import errorcode

while (True):
    try:
        db_connection = mysql.connector.connect(
            host='localhost', user='root', password='#Gf40928326802', database='greeneye')
        print("Conectei no banco!")
    except mysql.connector.Error as error:
        if error.errno == errorcode.ER_BAD_DB_ERROR:
             print("Não encontrei o banco")
        elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
           print("Credenciais erradas")
        else:
           print(error)

    #Captura do sistema operacional da máquina, utilizando a própria psutil 
    # sistemaoperacional = psutil.disk_partitions()[0][2] 
    if(os.name == 'nt'):
        sistemaoperacional = 'NFTS'
    elif(os.name == 'posix'):
        sistemaoperacional = 'EXT4'
    else:
        sistemaoperacional = 'Sistema não Identificado.'

    # Processador
    processador = psutil.cpu_count()
    porcentagem_cpu = psutil.cpu_percent()
    # porcentagem_cpu2 = porcentagem_cpu * 1.10
    # porcentagem_cpu3 = porcentagem_cpu * 0.95

    # Disco
    if(sistemaoperacional == 'NFTS'):
        discoTotal =(psutil.disk_usage("C:\\")[0] / 10**9)
    elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3'):
        discoTotal =(psutil.disk_usage("/")[0] / 10**9)
    
    if(sistemaoperacional == 'NFTS' or sistemaoperacional == 'Windows'):
        discoUso = (psutil.disk_usage("C:\\")[1] / 10**9)
    elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3' or sistemaoperacional == 'Linux'):
        discoUso = (psutil.disk_usage("/")[1] / 10**9)
    
    # discoUso2 = discoUso * 0.95
    # discoUso3 = discoTotal

    if(sistemaoperacional == 'NFTS' or sistemaoperacional == 'Windows'):
        discoLivre = (psutil.disk_usage("C:\\")[2] / 10**9)
    elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3' or sistemaoperacional == 'Linux'):
        discoLivre = (psutil.disk_usage("/")[2] / 10**9)

    # discoLivre2 = discoTotal - discoUso2
    # discoLivre3 = discoTotal - discoUso3

    if(sistemaoperacional == 'NFTS'):
        disk = psutil.disk_usage('C:\\')
    elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3'):
        disk = psutil.disk_usage('/')

    diskPercent = disk.percent
    # diskPercent2 = diskPercent * 0.95
    # diskPercent3 = 100

    # Ram
    ramTotal = (psutil.virtual_memory() [0] / 10**9)
    ramUso =  (psutil.virtual_memory() [3] / 10**9)
    ramUso2 = ramUso * 1.15
    ramUso3 = ramUso2 * 1.05
    # ramUsoPercent = "%0.2f" % (psutil.virtual_memory() [2])
    ram = (psutil.virtual_memory())
    ramPercent = ram.percent
    # ramPercent2 = ramPercent * 1.15
    # ramPercent3 = ramPercent2 * 1.05


    cursor = db_connection.cursor()

    fkMaquina = 50000
    sql = "INSERT INTO Leitura (fkMaquina, sistemaOperacional, cpuMedia, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, dataHora) VALUES (%s,%s, %s, %s, %s, %s,%s,%s,%s,%s,%s,(SELECT NOW()))"
    values = [fkMaquina, sistemaoperacional,  porcentagem_cpu, processador, ramTotal, ramUso, ram.percent, discoTotal, discoUso, discoLivre, disk.percent]
    cursor.execute(sql, values)
    
    # fkMaquina = 50001
    # sql = "INSERT INTO Leitura (fkMaquina,sistemaOperacional, cpuMedia, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, dataHora) VALUES (%s,%s,%s, %s, %s, %s, %s,%s,%s,%s,%s,(SELECT NOW()))"
    # values = [fkMaquina, sistemaoperacional,porcentagem_cpu2, processador, ramTotal, ramUso2, ramPercent2, discoTotal, discoUso2, discoLivre2, diskPercent2]
    # cursor.execute(sql, values)

    # fkMaquina = 50002
    # sql = "INSERT INTO Leitura (fkMaquina, sistemaOperacional, cpuMedia, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, dataHora) VALUES (%s,%s,%s, %s, %s, %s, %s,%s,%s,%s,%s,(SELECT NOW()))"
    # values = [fkMaquina,sistemaoperacional, porcentagem_cpu3, processador, ramTotal, ramUso3, ramPercent3, discoTotal, discoUso3, discoLivre3, diskPercent3]
    # cursor.execute(sql, values)


    print("\n")
    print(cursor.rowcount, "Inserindo no banco.")
    db_connection.commit()
    time.sleep(5)