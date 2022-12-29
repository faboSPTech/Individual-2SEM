#!/bin/bash

PURPLE='0;35'
NC='\033[0m' 
VERSAO18=18
VERSAO11=11
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Olá sou seu assistente de instalação irei acompanhar os processos e te notificar dos passos a seguir!"
sleep 2.0
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Sendo eles Java, Kotlin, ODBC Driver SQL, Python3 e Python3-PIP."
sleep 2.0
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Vamos atualizar seu sistema antes para verificar se temos algumas das aplicações instalada."
sudo apt update && sudo apt upgrade -y
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Sistema atualizado"
sleep 2.0

echo  "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Verificando aqui se você possui o Java instalado...;"
sleep 2.0

#INSTALANDO JAVA 18
java -version
if [ $? -eq 0 ]
	then
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) : Você já tem o Java instalado!."
		sleep 2.0
	else
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Opa! Não identifiquei nenhuma versão do Java instalado, mas sem problemas, irei resolver isso agora!"
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Confirme se realmente deseja instalar o Java (S/N)?"
		sleep 2.0
	read inst
	if [ \"$inst\" == \"S\" ]
		then
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Ok! Você escolheu instalar o Java"
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Adicionando o repositório!"
			sleep 2
			sudo add-apt-repository ppa:webupd8team/java -y
			clear
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Atualizando! Quase lá"
			sleep 2
			sudo apt update -y
			clear
			if [ $VERSAO18 -eq 18 ]
				then
					echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Preparando para instalar a versão 18 do Java"
					sudo apt install default-jre ; apt install openjdk-18-jre-headless; -y
					clear
					echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Java instalado com sucesso!"
				fi
		else 	
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Você optou por não instalar o Java por enquanto, até a próxima então!"
	fi
fi
sleep 2.0

#INSTALANDO JAVA 11
# if [ $? -eq 0 ]
# 	then
# 		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) : Você já tem o Java instalado!"
# 		sleep 2.0
# 	else
# 		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Opa! Não identifiquei nenhuma versão do Java instalado, mas sem problemas, irei resolver isso agora!"
# 		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Confirme se realmente deseja instalar o Java (S/N)?"
# 		sleep 2.0
# 	read inst
# 	if [ \"$inst\" == \"S\" ]
# 		then
# 			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Ok! Você escolheu instalar o Java"
# 			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Adicionando o repositório!"
# 			sleep 2
# 			sudo add-apt-repository ppa:webupd8team/java -y
# 			clear
# 			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Atualizando! Quase lá."
# 			sleep 2
# 			sudo apt update -y
# 			clear
# 			if [ $VERSAO11 -eq 11 ]
# 				then
# 					echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Preparando para instalar a versão 11 do Java."
# 					sudo apt install default-jre ; apt install openjdk-11-jre-headless; -y
# 					clear
# 					echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Java instalado com sucesso!"
# 				fi
# 		else 	
# 		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Você optou por não instalar o Java por enquanto, até a próxima então!"
# 	fi
# fi
# sleep 2.0

#INSTALANDO KOTLIN
kotlin -version
if [ $? -eq 0 ]
	then
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Você já tem o Kotlin instalado!."
		sleep 2.0
	else
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Opa! Não identifiquei nenhuma versão do Kotlin instalado, mas sem problemas, irei resolver isso agora!"
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Confirme se realmente deseja instalar o Kotlin (S/N)?"
		sleep 2.0
	read inst
	if [ \"$inst\" == \"S\" ]
		then
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Ok! Você escolheu instalar o Kotlin"
			sudo apt install zip
			sudo apt update -y
			curl -s https://get.sdkman.io | bash
			clear
			sdk install kotlin
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Atualizando! Quase lá"
			sleep 2
			sudo apt update -y
			clear
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Kotlin instalado com sucesso!"
		else 	
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Você optou por não instalar o Kotlin por enquanto, até a próxima então!"
	fi
fi
sleep 2.0


#INSTALANDO ODBC Driver SQL driver para rodar sql na azure
echo  "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Verificando aqui se você possui o ODBC instalado...;"
sleep 2.0
odbcinst -q -d -n
if [ $? -eq 0 ]
	then
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) : Você já tem o ODBC instalado!!!"
		sleep 2.0
	else
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Opa! Não identifiquei nenhuma versão do ODBC instalado, mas sem problemas, irei resolver isso agora!"
		sleep 2.0
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Confirme para mim se realmente deseja instalar o ODBC (S/N)?"
		sleep 2.0
	read inst
	if [ \"$inst\" == \"S\" ]
		then
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Você escolheu instalar o ODBC"
			sleep 2.0
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Adicionando o repositório!"
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
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Atualizando! Quase lá."
			sleep 2.0
			sudo apt update -y
			clear
			if [ $VERSAO18 -eq 18 ]
				then
					echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Preparando para instalar a versão 18 do ODBC. Confirme a instalação quando solicitado"
					sudo apt-get update
					clear
					echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) ODBC instalado com sucesso!"
					echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Atualizando pacotes..."
                    sudo apt update -y 
                    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Pacotes atualizados"
				fi
		else 	
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Você optou por não instalar o ODBC por enquanto, até a próxima então!"
	fi
fi
sleep 2.0


#INSTALANDO PYTHON E PIP
PURPLE='0;35'
NC='\033[0m' 

echo  "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Verificando aqui se você possui o Python3 e o PIP instalado..."
sleep 2

python3 --version
if [ $? -eq 0 ]
	then
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) : Você já tem o Python3 instalado!"
		sleep 2.0
	else
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Opa! Não identifiquei nenhuma versão do Python3 instalado, mas sem problemas, irei resolver isso agora!"
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Confirme para mim se realmente deseja instalar o Python3 e o PIP (S/N)?"
		sleep 2.0
	read inst
	if [ \"$inst\" == \"S\" ]
		then
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Ok! Você escolheu instalar o Python3 e o PIP"
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Adicionando o repositório!"
			sleep 2
			sudo apt install python-is-python3
			sudo apt install python3-pip
			clear
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Atualizando! Quase lá."
			sleep 2
			sudo apt update -y
			clear
			echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Python3 instalado com sucesso!"
		else 	
		echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7)  Você optou por não instalar o Python3 e o PIP por enquanto, até a próxima então!"
	fi
fi
sleep 2.0
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Atualizando pacotes..."
sudo apt update && sudo apt upgrade -y
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Pacotes atualizados..."
sleep 2.0

