function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const idade = document.getElementById('idade').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
 
    // Abrir o banco de dados SQLite
    const db = openDatabase('seu_banco_de_dados.db', '1.0', 'Descrição do banco de dados', 1);
 
    // Executar a transação de inserção
    db.transaction(function(tx) {
       tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, telefone TEXT, dataNascimento TEXT, idade INTEGER, endereco TEXT, email TEXT)');
 
       tx.executeSql('INSERT INTO usuarios (nome, telefone, dataNascimento, idade, endereco, email) VALUES (?, ?, ?, ?, ?, ?)', [nome, telefone, dataNascimento, idade, endereco, email], function(tx, results) {
          console.log('Usuário cadastrado com sucesso. ID:', results.insertId);
       }, function(error) {
          console.error('Erro ao inserir no SQLite:', error.message);
       });
    });
 } 