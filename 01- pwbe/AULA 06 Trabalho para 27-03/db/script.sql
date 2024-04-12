-- Criar a tabela de usuários
CREATE TABLE IF NOT EXISTS Users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL
);

-- Inserir dados de exemplo na tabela de usuários
INSERT INTO Users (Name, Email, Password) VALUES
('João', 'joao@example.com', 'senha123'),
('Maria', 'maria@example.com', 'senha456'),
('Pedro', 'pedro@example.com', 'senha789');

-- Criar a tabela de tarefas
CREATE TABLE IF NOT EXISTS Tasks (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Description TEXT NOT NULL,
    DueDate DATE,
    Status VARCHAR(50) DEFAULT 'A fazer',
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Users(ID)
);

-- Inserir dados de exemplo na tabela de tarefas
INSERT INTO Tasks (Description, DueDate, Status, UserID) VALUES
('Fazer compras de supermercado', '2024-03-15', 'A fazer', 1),
('Preparar apresentação para reunião', '2024-03-20', 'Em andamento', 2),
('Enviar relatório financeiro', '2024-03-25', 'Concluído', 1),
('Revisar contrato de fornecedor', '2024-03-18', 'A fazer', 2),
('Atualizar documentação do projeto', '2024-03-28', 'A fazer', 1),
('Treinar novos funcionários', '2024-03-21', 'Concluído', 3);
