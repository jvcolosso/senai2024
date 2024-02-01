-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS transportadora_pedreiraa;

-- Seleção do banco de dados
USE transportadora_pedreiraa;

-- Criação da tabela de pedidos
CREATE TABLE IF NOT EXISTS pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco_entrega VARCHAR(255) NOT NULL,
    produto INT NOT NULL,
    peso DECIMAL(10, 2) NOT NULL,
    quantidade INT NOT NULL,
    prioridade ENUM('alta', 'normal') NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserção de dados de exemplo
INSERT INTO pedidos (nome, endereco_entrega, produto, peso, quantidade, prioridade)
VALUES
    ('Exemplo Nome 1', 'Rua Exemplo, 123', 1, 500.00, 2, 'alta'),
    ('Exemplo Nome 2', 'Avenida Exemplo, 456', 3, 200.50, 1, 'normal');

