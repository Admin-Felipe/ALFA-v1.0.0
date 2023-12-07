const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const path = require('path'); // Importa o módulo 'path' para lidar com caminhos de arquivos.

const app = express();
const port = 22;

app.use(cors());
app.use(express.json());

const conexao = new sqlite3.Database('seu_banco_de_dados.db');

conexao.serialize(() => {
  conexao.run(`
    CREATE TABLE IF NOT EXISTS
    usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT
    )
  `);
});

app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email || nome.length < 2 || email.length < 2) {
    return res.status(400).json({ success: false, message: 'Nome e email são obrigatórios e devem ter pelo menos 2 caracteres' });
  }

  conexao.run('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email], (err) => {
    if (err) {
      console.error('Erro ao inserir no SQLite:', err);
      return res.status(500).json({ success: false, message: 'Erro interno do servidor' });
    }
    res.json({ success: true, message: 'Usuário cadastrado com sucesso' });
  });
});

// Adiciona roteamento estático para a pasta 'public'
app.use(express.static(path.join(__dirname, 'index.html')));

// Rota para redirecionar o acesso à raiz para 'index.html'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'public', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://195.35.17.132:${port}`);
});