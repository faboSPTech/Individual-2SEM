import psutil
from psutil import process_iter
import time
from datetime import datetime
import colorama
import mysql.connector
from mysql.connector import errorcode
import pyodbc

try:
        cnxn = pyodbc.connect(driver='{SQL Server}', host='greeneye.database.windows.net',
                        database='greeneye', user='GreeneyeADM', password='Greeneye123@')
        print("Conectei no banco! (Azure)")
        db_connection = mysql.connector.connect(
                host='localhost', user='root', password='Fabo12345@', database='greeneye')
        print("Conectei no banco! (Local)")
except mysql.connector.Error as error:
        if error.errno == errorcode.ER_BAD_DB_ERROR:
                print("Não encontrei o banco")
        elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                print("Credenciais erradas")
        else:
                print(error)

# bytes para gigas
def bytes_to_giga(value):
    return value / 1024 / 1024 / 1024

# barra de progresso
# https://www.youtube.com/watch?v=x1eaT88vJUA&ab_channel=NeuralNine
def progress_bar(progresso, total, color=colorama.Fore.CYAN):
    porcentagem = 100 * (progresso/float(total))
    barra = '█' * int(porcentagem) + '-' * (100 - int(porcentagem))
    print(color + f"\r|{barra}| {porcentagem:.2f}%", end="\r")
    if progresso == total:
        print(colorama.Fore.BLUE +
              f"\r|{barra}| {porcentagem:.2f}%", end="\r")

# def Leitura():
while True:
        # Processos
        dados_proc = [] # array dados completos dos processos
        pid_proc = [] # array dos pids dos processos 
        for proc in psutil.process_iter(['pid']): # estrutura de repetição para ler os pids dos processos 
            pid_proc.append(proc.pid)
        
        print("\n")
        print('Fazendo leitura dos processos!')   
        cores = psutil.cpu_count() 

        for i, proc in enumerate(psutil.process_iter()):
            nome = proc.name()
            pid = proc.pid
            status = proc.status()
            cpu = round(float(proc.cpu_percent(interval=1)/cores),2)
            ram = round(proc.memory_percent(),2)
            data = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
            dado = {"nome":nome, "pid":pid, "status_proc":status, "cpu_percent":cpu, "ram_percent":ram, "data_hora":data}
            dados_proc.append(dado)

            progress_bar(i+1, len(pid_proc))
        progress_bar(1, 1)

        print(colorama.Fore.RESET)
        # print(dados_proc)

        #CURSOR
        # cursorLocal = db_connection.cursor()
        cursorAzure = cnxn.cursor()

        try:
                sqlDelete = f"TRUNCATE TABLE Processos"
                cursorAzure.execute(sqlDelete)
        except pyodbc.Error as err:
                    cnxn.rollback()
                    print("Algo está errado: {}".format(err))

        print("\n")
        print("Inserindo processos no banco! (Azure)")
        for i, a in enumerate(dados_proc):
            # fkMaquina = a["fkMaquina"]
            nome = a["nome"]
            pid = a["pid"]
            status_proc = a["status_proc"]
            cpu_percent = a["cpu_percent"]
            ram_percent = a["ram_percent"]
            data = a["data_hora"]
            try:
                #PROCESSOS AZURE 
                fkMaquina = 50000
                sqlProc = f"INSERT INTO Processos (fkMaquina, nome, pid, status_proc, cpu_percent, ram_percent, data_hora) VALUES (?,?,?,?,?,?,?)"
                valuesProc = (fkMaquina, nome, pid, status_proc, cpu_percent, ram_percent, data)
                cursorAzure.execute(sqlProc, valuesProc)
                cnxn.commit()
                progress_bar(i+1, len(dados_proc))
            except pyodbc.Error as err:
                    cnxn.rollback()
                    print("Algo está errado: {}".format(err))
        print(colorama.Fore.RESET)
        print("Processos inseridos no banco (Azure).")
        time.sleep(1)   



# TESTES

# for proc in psutil.process_iter(['name']):
#     print(proc.info)
# print(f'Quantidade de processos: {len(psutil.pids())}')



# p = psutil.Process(8104)
# with p.oneshot():
#     p.name()
#     p.cpu_percent()  
#     p.memory_percent()
# print(f"Nome:{p.name()}\n",f"CPU%:{p.cpu_percent()}\n",f"RAM%:{p.memory_percent()}")


# def bytes_to_gigas(value):
#     return f'{value / 1024 / 1024 / 1024: .2f}'

# print(bytes_to_gigas(psutil.virtual_memory().used))

# for proc in psutil.process_iter(['ppid','cpu_percent','name', 'memory_percent']):
#     print(proc.info)

# p_list = []
# for proc in process_iter():
#     proc_info = proc.as_dict(['name', 'cpu_percent', 'memory_percent'])
#     if proc_info['cpu_percent'] > 0:
#         p_list.append(proc_info)
# print(p_list)

# ordenados = sorted(p_list, key=lambda p: p['cpu_percent'], reverse=True)[:10]
# proc_text = f"{'Nome'}CPU"

# for proc in ordenados:
#     proc_text += f"\n{proc['name']} {proc['cpu_percent']}"

# print(proc_text)