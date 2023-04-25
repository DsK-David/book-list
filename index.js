const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function addTask(task) {
  tasks.push(task);
  console.log(`Tarefa "${task}" adicionada.`);
}

function removeTask(index) {
  tasks.splice(index, 1);
  console.log(`Tarefa ${index} removida.`);
}

function listTasks() {
  console.log('Tarefas:');
  tasks.forEach((task, index) => {
    console.log(`${index}: ${task}`);
  });
}

function promptForAction() {
  rl.question('O que você quer fazer? (adicionar/remover/listar/sair) ', (answer) => {
    if (answer === 'adicionar') {
      rl.question('Qual tarefa você deseja adicionar? ', (task) => {
        addTask(task);
        promptForAction();
      });
    } else if (answer === 'remover') {
      rl.question('Qual é o índice da tarefa que você deseja remover? ', (index) => {
        removeTask(index);
        promptForAction();
      });
    } else if (answer === 'listar') {
      listTasks();
      promptForAction();
    } else if (answer === 'sair') {
      rl.close();
    } else {
      console.log('Comando inválido. Tente novamente.');
      promptForAction();
    }
  });
}

console.log('Bem-vindo ao book-list!');

promptForAction();
