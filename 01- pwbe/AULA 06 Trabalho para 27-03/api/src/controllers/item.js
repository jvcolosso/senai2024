// Definição da classe Item (representando uma tarefa)
class Item {
    constructor(id, description, dueDate, status, userId) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.userId = userId;
    }

    // Métodos para atualizar propriedades da tarefa
    updateDescription(newDescription) {
        this.description = newDescription;
    }

    updateDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }

    assignToUser(newUserId) {
        this.userId = newUserId;
    }

    // Método para formatar a tarefa como uma string
    toString() {
        return `ID: ${this.id}, Description: ${this.description}, Due Date: ${this.dueDate}, Status: ${this.status}, User ID: ${this.userId}`;
    }
}

// Exportar a classe Item para uso em outros arquivos
module.exports = Item;
