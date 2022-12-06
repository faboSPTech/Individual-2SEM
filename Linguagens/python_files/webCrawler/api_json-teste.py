from bdb import set_trace
from json import loads
from time import sleep
from tokenize import String
from urllib3 import PoolManager
from mysql.connector import errorcode
import mysql.connector
import time
# import pyodbc

def conversor(valor):
    return float(valor[0:4].replace(",", '.'))
    
def leitura(connect_bd):
    cursor = connect_bd.cursor()
    
    cursor.execute(
        "SELECT COUNT(id) FROM webcrawler")
    row = cursor.fetchone()
    Equip = int(''.join(map(str, row)))


    with PoolManager() as pool:
        while True:
            for i in range(3):
                i = i + 1
                a = i - 1         
                response = pool.request('GET', 'http://localhost:8085/data.json')
                data = loads(response.data.decode('utf-8'))


                temp_min = conversor(data['Children'][0]['Children'][1]['Children'][1]['Children'][4]['Min'])
                temp_value = conversor(data['Children'][0]['Children'][1]['Children'][1]['Children'][4]['Value'])
                temp_max = conversor(data['Children'][0]['Children'][1]['Children'][1]['Children'][4]['Max'])

                print(temp_min)
                print(temp_value)
                print(temp_max)
                
                vetor_tempMin = [temp_min * 1.15, temp_min, temp_min * 1.10]
                vetor_tempValor = [temp_value * 1.05,temp_value, temp_value * 1.10]
                vetor_tempMax = [temp_max * 1.15, temp_max, temp_value * 1.10]
                sql = f"INSERT INTO webcrawler(tempMin, tempValor, tempMax) VALUES ({round(vetor_tempMin[a], 2)}, {round(vetor_tempValor[a], 2)}, {round(vetor_tempMax[a],2)});" 
                cursor.execute(sql)
                print("Inserindo dados de Temperatura!")
                connect_bd.commit()
                sleep(1)

try:    
    # Deixando a variavel com mysql.local, sera setada a configuração de acesso no banco de dados Local MySQL
    # banco = "mysql.local"
    # Deixando a variavel com sql.nuvem, sera setada a configuração de acesso no banco de dados na nuvem SQL Server
    db_connection = mysql.connector.connect
    if db_connection == mysql.connector.connect:
        connect_bd = mysql.connector.connect(host='localhost', user='root', password='160891', database='teste')
        print("Conectando com o Banco de Dados MySQL!")
        leitura(connect_bd)

    # if banco == "sql.nuvem":
    #     server = 'healthsystem.database.windows.net'
    #     database = 'healthsystem'
    #     username = 'grupo01sis'
    #     password = '#GfHealthSystem01'
    #     connect_bd = pyodbc.connect('DRIVER={ODBC Driver 18 for SQL Server};SERVER='+server +
    #                           ';DATABASE='+database+';ENCRYPT=yes;UID='+username+';PWD=' + password)

    #     print("Conexão com o Banco de Dados SQL Server Azure efetuada com sucesso.")
    #     leitura(connect_bd)

    # Validações de Erro:
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Algo está errado com o Usuário do Banco ou a Senha.")
        time.sleep(1)
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("O banco de dados direcionado não existe.")
        time.sleep(1)
    else:
        print(err)
        time.sleep(1)
# else:
#     cursor = connect_bd.cursor()
