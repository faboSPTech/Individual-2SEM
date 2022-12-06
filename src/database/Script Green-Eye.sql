create database greeneye;
use greeneye;

create table Perfil(
idPerfil int primary key,
permissao varchar(10)
);

insert into Perfil values ('111','ADM'),
						  ('222','FUNC'),
						  ('333','DEV');

create table Empresa(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45),
CNPJ char(14)
)auto_increment = 10000;

insert into Empresa values (null, 'Greeneye','12345678900000');

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

insert into Usuario values (null,'Lucas','lucas.navasconi@sptech.school','123',10000,333),
						   (null,'Fabio','fabio.seabra@sptech.school','123',10000,333),
                           (null,'Nathalia','nathalia.marques@sptech.school','123',10000,333),
                           (null,'Thais','thais.inacio@sptech.school','123',10000,333),
                           (null,'Gabriela','gabriela.dias@sptech.school','123',10000,333),
                           (null,'Lourenzo','lourenzo.silva@sptech.school','123',10000,333);

create table Especificacoes(
idEspecificacao int primary key auto_increment,
Processador_modelo int,
Ram_modelo varchar(45),
Disco_modelo varchar(45),
Cpu_modelo varchar(45),
Placamae_modelo varchar(45)
)auto_increment = 1000;

insert into Especificacoes values (null, 12,'LPDDR5 5200MHZ 32GB','SSD 1TB PCIE NVME M.2','i712600p','GigaByte H510MH DDR4');

create table Lote(
idLote int primary key auto_increment,
datacriacao date,
modelo varchar(45),
quantidade int,
fkEmpresa int,
fkEspecificacao int,
foreign key (fkEmpresa) references Empresa(idEmpresa),
foreign key (fkEspecificacao) references Especificacoes(idEspecificacao)
)auto_increment = 20000;

insert into Lote values (null, '21-09-22','Inspiron 660', 200,10000,1000);

create table Maquina(
idMaquina int primary key auto_increment,
serialnumber varchar(20),
fkLote int,
foreign key (fkLote) references Lote(idLote)
)auto_increment = 50000;

insert into Maquina values (null, '12345678901234',20000);

create table Leitura(
idLeitura int primary key auto_increment,
Cpu_Media int,
qtdProcessador int,
ram_Total decimal(3,2),
ram_Uso decimal (3,2),
ram_UsoPercent int,
disco_Total decimal(5,2),
disco_Uso decimal(5,2),
disco_Livre decimal(5,2),
disco_Percent decimal(5,2),
fkMaquina int,
foreign key (fkMaquina) references Maquina(idMaquina)
)auto_increment = 1;

select * from Perfil;
select * from Empresa;
select * from Usuario;
select * from Especificacoes;
select * from Lote;
select * from maquina;
select * from Leitura;

-- SELECT * FROM usuario WHERE email = 'nathalia.marques@sptech.school' AND senha = '123' AND fkPerfil = 333;

                          



                           




