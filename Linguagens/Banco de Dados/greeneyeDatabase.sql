create database greeneye;
use greeneye;
-- drop database greeneye;

-- Criação das tabelas:

create table Perfil(
idPerfil int primary key,
permissao varchar(10)
);

create table Empresa(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45),
cnpj char(14)
)auto_increment = 1000;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(15),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa),
fkPerfil int,
foreign key (fkPerfil) references Perfil(idPerfil)
);

create table Especificacoes(
idEspecificacao int primary key auto_increment,
processador_modelo varchar(50),
ram_modelo varchar(45),
disco_modelo varchar(45)
)auto_increment = 10000;

create table Lote(
idLote int primary key auto_increment,
datacriacao date,
modelo varchar(45),
quantidade int,
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa),
fkEspecificacao int,
foreign key (fkEspecificacao) references Especificacoes(idEspecificacao)
)auto_increment = 20000;

create table Maquina(
idMaquina int primary key auto_increment,
fkLote int,
foreign key (fkLote) references Lote(idLote)
)auto_increment = 50000;

create table Leitura(
idLeitura int primary key auto_increment,
fkMaquina int,
foreign key (fkMaquina) references Maquina(idMaquina),
sistemaOperacional varchar(10),
cpuMedia int,
qtdProcessador int,
ramTotal decimal(3,2),
ramUso decimal (3,2),
ramUsoPercent int,
discoTotal decimal(5,2),
discoUso decimal(5,2),
discoLivre decimal(5,2),
discoPercent decimal(5,2),
dataHora datetime
)auto_increment = 1;

create table Processos(
idProcesso int primary key auto_increment,
fkMaquina int,
foreign key (fkMaquina) references Maquina(idMaquina),
nome varchar(45),
pid int,
status_proc varchar(20),
cpu_percent varchar(40),
ram_percent varchar(40),
data_hora datetime
);

-- Inserção de dados:
insert into Perfil values ('111','ADM'),
						  ('222','FUNC'),
						  ('333','DEV');

insert into Empresa values (null, 'Greeneye','12345678900000');

insert into Usuario values (null,'Desenvolvedor','dev@sptech.school','123',1000,333);

insert into Especificacoes values (null,'i712600p','LPDDR5 5200MHZ 32GB','SSD 1TB PCIE NVME M.2');

insert into Lote values (null, '21-09-22','Inspiron 660', 200,1000,10000);

insert into Maquina values (null,20000),
						   (null,20000),
						   (null,20000);

-- Puxando dados das tabelas:

select * from Perfil;
select * from Empresa;
select * from Usuario;
select * from Especificacoes;
select * from Lote;
select * from maquina;
select * from Leitura;
select * from Processos;

truncate table leitura;
