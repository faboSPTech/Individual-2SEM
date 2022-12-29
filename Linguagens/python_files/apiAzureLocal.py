from datetime import datetime
import psutil
import mysql.connector
import time 
import os
from mysql.connector import errorcode
import pyodbc
import textwrap


try:
        cnxn = pyodbc.connect(driver='{SQL Server}', host='greeneye.database.windows.net',
                        database='greeneye', user='GreeneyeADM', password='Greeneye123@')
        print("Conectei no banco! (Azure)")
<<<<<<< HEAD
        # db_connection = mysql.connector.connect(
        #         host='localhost', user='aluno', password='sptech', database='greeneye')
        # print("Conectei no banco! (Local)")
=======
        db_connection = mysql.connector.connect(
                host='localhost', user='aluno', password='sptech', database='greeneye')
        print("Conectei no banco! (Local)")
>>>>>>> bddfacc3af14a5e406667cb4deb0d8b3d2101f51
except mysql.connector.Error as error:
        if error.errno == errorcode.ER_BAD_DB_ERROR:
                print("Não encontrei o banco")
        elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                print("Credenciais erradas")
        else:
                print(error)

while (True):

        #Captura do sistema operacional da máquina, utilizando a própria psutil 
        # sistemaoperacional = psutil.disk_partitions()[0][2] 
        if(os.name == 'nt'):
            sistemaoperacional = 'NTFS'
        elif(os.name == 'posix'):
            sistemaoperacional = 'EXT4'
        else:
            sistemaoperacional = 'Sistema não Identificado.'


        # Processador
        processador = psutil.cpu_count()
        porcentagem_cpu = psutil.cpu_percent()


        # Disco
        if(sistemaoperacional == 'NTFS'):
            discoTotal =(psutil.disk_usage("C:\\")[0] / 10**9)
        elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3'):
            discoTotal =(psutil.disk_usage("/")[0] / 10**9)
        
        if(sistemaoperacional == 'NTFS' or sistemaoperacional == 'Windows'):
            discoUso = (psutil.disk_usage("C:\\")[1] / 10**9)
        elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3' or sistemaoperacional == 'Linux'):
            discoUso = (psutil.disk_usage("/")[1] / 10**9)

        if(sistemaoperacional == 'NTFS' or sistemaoperacional == 'Windows'):
            discoLivre = (psutil.disk_usage("C:\\")[2] / 10**9)
        elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3' or sistemaoperacional == 'Linux'):
            discoLivre = (psutil.disk_usage("/")[2] / 10**9)

        if(sistemaoperacional == 'NTFS'):
            disk = psutil.disk_usage('C:\\')
        elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3'):
            disk = psutil.disk_usage('/')

        diskPercent = disk.percent


        # Ram
        ramTotal = (psutil.virtual_memory() [0] / 10**9)
        ramUso =  (psutil.virtual_memory() [3] / 10**9)
        ramUso2 = ramUso * 1.15
        ramUso3 = ramUso2 * 1.05
        ram = (psutil.virtual_memory())
        ramPercent = ram.percent

        #CURSOR
<<<<<<< HEAD
        # cursorLocal = db_connection.cursor()
=======
        cursorLocal = db_connection.cursor()
>>>>>>> bddfacc3af14a5e406667cb4deb0d8b3d2101f51
        cursorAzure = cnxn.cursor()

    #AZURE
        fkMaquina = 50000
        sql = f"INSERT INTO Leitura (fkMaquina, sistemaOperacional, cpuMedia, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, dataHora) VALUES ({fkMaquina},'{sistemaoperacional}', {porcentagem_cpu}, {processador}, {ramTotal}, {ramUso},{ram.percent},{discoTotal},{discoUso},{discoLivre},{disk.percent},(CURRENT_TIMESTAMP))"
        cursorAzure.execute(sql)
    #LOCAL
<<<<<<< HEAD
        # fkMaquina = 50000
        # sql = f"INSERT INTO Leitura (fkMaquina, sistemaOperacional, cpuMedia, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, dataHora) VALUES ({fkMaquina},'{sistemaoperacional}', {porcentagem_cpu}, {processador}, {ramTotal}, {ramUso},{ram.percent},{discoTotal},{discoUso},{discoLivre},{disk.percent},(CURRENT_TIMESTAMP))"
        # cursorLocal.execute(sql)
=======
        fkMaquina = 50000
        sql = f"INSERT INTO Leitura (fkMaquina, sistemaOperacional, cpuMedia, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, dataHora) VALUES ({fkMaquina},'{sistemaoperacional}', {porcentagem_cpu}, {processador}, {ramTotal}, {ramUso},{ram.percent},{discoTotal},{discoUso},{discoLivre},{disk.percent},(CURRENT_TIMESTAMP))"
        cursorLocal.execute(sql)
>>>>>>> bddfacc3af14a5e406667cb4deb0d8b3d2101f51
        

        print("\n")
        print(cursorAzure.rowcount, "Inserindo no banco (Azure).")
        cnxn.commit()

<<<<<<< HEAD
        # print(cursorLocal.rowcount, "Inserindo no banco (Local).")
        # db_connection.commit()
=======
        print(cursorLocal.rowcount, "Inserindo no banco (Local).")
        db_connection.commit()
>>>>>>> bddfacc3af14a5e406667cb4deb0d8b3d2101f51
        time.sleep(5)