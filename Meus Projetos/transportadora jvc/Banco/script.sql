
drop database if exists transporte;
create database transporte;
use transporte;
create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null,
    produto varchar(50) not null,
    entrega varchar(50) not null
);
describe Clientes;

-- DML - Popular com dados de teste
insert into Clientes(cpf, nome, sobrenome, nascimento, produto, entrega)
values
("111.111.111-11","Jair","Silva","1980-01-01","congelados","Mercado do José"),
("222.222.222-22","Jafoi","Solza","1990-02-25","móveis","Casas Bahia"),
("333.333.333-33","Javai","Santos","1985-03-18","soja","Fazenda Bom Jardim"),
("444.444.444-44","Jaera","Silveira","1982-04-13","produtos limpeza","Ype"),
("555.555.555-55","Jacinto","Pena","2005-05-15","àcido","Quimica Jordan");

select * from Clientes;