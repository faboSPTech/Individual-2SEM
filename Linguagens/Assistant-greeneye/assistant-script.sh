#!/bin/bash

VERSAO=11
VERSAO=10
VERSAO18=18

echo "[---Greeneye Assistant---]: Ol� vamos comecar a configurar nosso ambiente..."
sudo apt update && sudo apt upgrade

echo "[---Greeneye Assistant---]: Virtual Machine atualizada com sucesso!"
sleep 5
clear

echo "[---Greeneye Assistant---]: Verificando se j� possui o Java..."
sleep 3

java -version
if [ $? -eq 0 ]
        then
                echo "[---Greeneye Assistant---]: Voc� j� tem o java Instalado!"
        else
                echo "[---Greeneye Assistant---]: N�o foi identificado nenhum java instalado!"
                echo "[--Greeneye Assistant---]: Deseja instalar (sim ou nao)?"
        read inst
        if [\'$inst\' == \'sim\']
                then
                        echo "[---Greeneye Assistant---]: Ok, vamos instalar o Java!"
                        sudo add-apt-repository ppa:webupd8team/java -y
                        clear
                        echo "[---Greeneye Assistant]: Finalizando atualizacao..."
                        sudo apt update -y
                        echo "[---Greeneye Assistant---]: Instalado com sucesso!"
                        sleep 2

                        if [ $VERSAO -eq 11 ]
                                then
                                        echo "Instalando a versao 11 do Java! Confirme quando solicitado!"
                                        sudo apt install default-jre ; apt install openjdk-11-jre-headless; -y
                                        echo "Instala��o do Java concluida!"
                                fi
                else
                echo "Voc� escolheu n�o fazer a instala��o do Java!"
        fi
fi
sleep 3
clear

echo "[---Greeneye Assistant---]: Verificando se j� possui o python instalado em sua virtual machine..."
python3 --version
if [ $? -eq 0 ]
        then
                echo "[---Greeneye Assistant---]: Voc� j� tem o python Instalado!"
        else
                echo "[---Greeneye Assistant---]: N�o foi identificado nenhum python instalado!"
                echo "[--Greeneye Assistant---]: Deseja instalar (sim ou nao)?"
        read inst
        if [\'$inst\' == \'sim\']
                then
                        echo "[---Greeneye Assistant---]: Ok, vamos instalar o Python3!"
                        sudo apt update
                        sudo apt install python3
                        echo "[---Greeneye Assistant---]: Instalado com sucesso!"
                        sleep 2
                else
                echo "Voc� escolheu n�o fazer a instala��o do Python3!"
        fi
fi
sleep 3
clear

echo "[---Greeneye Assistant---]: Baixando as bibliotecas do python..."
pip install psutil
pip install pip
echo "[---Greeneye Assistant---]: Bibliotecas instaladas com sucesso, verifique!"
pip list
sleep 3

echo "[---Greeneye Assistant---]: Verificando se j� possui o mysql instalado em sua virtual machine..."
mysql -V
if [ $? -eq 0 ]
        then
                echo "[---Greeneye Assistant---]: Voc� j� tem o mysql Instalado!"
        else
                echo "[---Greeneye Assistant---]: N�o foi identificado nenhum mysql instalado!"
                echo "[--Greeneye Assistant---]: Deseja instalar (Sim ou Nao)?"
        read inst
        if [\'$inst\' == \'sim\']
                then
                        echo "[---Greeneye Assistant---]: Ok, vamos instalar o Mysql!"
                        sudo apt update
                        sudo apt install mysql-server
                        echo "[---Greeneye Assistant---]: MySQL instalado com sucesso!"
                        sleep 2
                else
                echo "[---Greeneye Assistant---]: Voc� escolheu n�o fazer a instala��o do MySQL!"
        fi
fi
sleep 3
clear

echo  "[---Greeneye assistant---]: Verificando aqui se voc� possui o ODBC instalado...;"
sleep 2.0
odbcinst -q -d -n
if [ $? -eq 0 ]
        then
                echo "[---Greeneye assistant---]: Voc� j� tem o ODBC instalado!!!"
                sleep 2
        else
                echo "[---Greeneye assistant---]:  N�o foi identificado nenhum ODBC instalado!"
                sleep 2
                echo "[---Greeneye assistant---]: Confirme se deseja instalar o ODBC (sim ou nao)?"
                sleep 2
        read inst
        if [ \"$inst\" == \"sim\" ]
                then
                        echo "[---Greeneye assistant---]: Voc� escolheu instalar o ODBC"
                        sleep 2.0
                        echo "[---Greeneye assistant---]: Adicionando o reposit�rio!"
                        sleep 2.0
                        curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
                        curl https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/prod.list > /etc/apt/sources.list.d/mssql-release.list
                        sudo apt-get update
                        sudo ACCEPT_EULA=Y apt-get install -y msodbcsql18
                        #for bcp and sqlcmd
                        sudo ACCEPT_EULA=Y apt-get install -y mssql-tools18
                        echo 'export PATH="$PATH:/opt/mssql-tools18/bin"' >> ~/.bashrc
                        source ~/.bashrc
                        #for unixODBC development headers
                        sudo apt-get install -y unixodbc-dev
                        clear
                        echo "[---Greeneye assistant---]: Atualizando!"
                        sleep 2.0
                        sudo apt update -y
                        clear
                        if [ $VERSAO18 -eq 18 ]
                                then
                                        echo "[---Greeneye assistant---]: Preparando para instalar a vers�o 18 do ODBC. Confirme a instala��o quando solicitado"
                                        sudo apt-get update
                                        clear
                                        echo "[---Greneye assistant---]: ODBC instalado com sucesso!"
                                        echo "[---Greeneye assistant---]: Atualizando pacotes..."
                    sudo apt update -y
                    echo "[---Greeneye assistant---]: Pacotes atualizados"
                                fi
                else
                echo "[---Greeneye assistant---]: Voc� escolheu n�o fazer a instala��o do ODBC!"
        fi
fi
sleep 3
clear

echo "[---Greeneye Assistant---]: Verificando se j� existe projeto GREENEYE..."
ls GREENEYE-OFICIAL
if [ $? -eq 0 ]
        then
                echo "[---Greeneye Assistant---]: Voc� j� tem o projeto Greeneye!"
        else
                echo "[---Greeneye Assistant---]: N�o foi identificado nenhum projeto Greeneye!"
                echo "[--Greeneye Assistant---]: Deseja baixar (Sim ou Nao)?"
        read inst
        if [\'$inst\' == \'sim\']
                then
                        echo "[---Greeneye Assistant---]: Ok, vamos baixar o projeto!"
                        git clone https://github.com/Burlina/GREENEYE-OFICIAL.git
                        echo "[---Greeneye Assistant---]: Baixado com sucesso!"
                        sleep 2
                else
                echo "Voc� escolheu n�o baixar o Projeto Greeneye!"
        fi
fi
sleep 3
clear

echo "[---Greeneye Assistant---]: Acessando projeto..."
cd GREENEYE-OFICIAL/Linguagens/python_files
ls
