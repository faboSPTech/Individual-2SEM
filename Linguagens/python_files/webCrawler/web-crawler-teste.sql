create database teste;
use teste;

create table webcrawler(
id int primary key auto_increment,
tempMin decimal(5,2),
tempValor decimal(5,2),
tempMax decimal(5,2)
);
select * from webcrawler;

-- drop table webcrawler;