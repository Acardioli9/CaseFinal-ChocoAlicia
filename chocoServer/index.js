const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "desenv",
  database: "chocoalicia",
});

app.use(express.json());
app.use(cors());

// Login área de aministrador
app.post("/login", (req, res) => {
  const username = req.body.username;
  const senha = req.body.senha;

  db.query(
    "SELECT * FROM login WHERE username = ? AND senha = ?",
    [username, senha],
    (err, result) => {
      if (result.length > 0) {
        res.send({ msg: "Usuário Logado!" });
        // window.location.replace("http://127.0.0.1:5173/Admin")
      } else {
        res.status(401).send("Dados não Conferem!");
      }
    }
  );
});

// Cadastro de produtos
app.post("/AdcProduto", (req, res) => {
  const { linha } = req.body;
  const { produto } = req.body;
  const { descricao } = req.body;
  const { tamanho } = req.body;
  const { sabor } = req.body;
  const { valor } = req.body;
  let mysql =
    "INSERT INTO produtos (linha, produto, descricao, tamanho, sabor, valor) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    mysql,
    [linha, produto, descricao, tamanho, sabor, valor],
    (err, result) => {
      res.send(result);
    }
  );
});

// Cadastro de linha
app.post("/AdcLinha", (req, res) => {
  const { nomelinha } = req.body;
  const { descricaolinha } = req.body;
  let mysql =
    "INSERT INTO linhascomerciais (nomelinha, descricaolinha) VALUES (?, ?)";
  db.query(mysql, [nomelinha, descricaolinha], (err, result) => {
    res.send(result);
  });
});

// leitura tabela de produtos
app.post("/busca", (req, res) => {
  const { linha } = req.body;
  const { produto } = req.body;
  const { descricao } = req.body;
  const { tamanho } = req.body;
  const { sabor } = req.body;
  const { valor } = req.body;
  let mysql =
    "SELECT * FROM produtos WHERE linha = ? AND produto = ? AND descricao = ? AND tamanho = ? AND sabor = ? AND valor = ?";
  db.query(
    mysql,
    [linha, produto, descricao, tamanho, sabor, valor],
    (err, result) => {
      if (err) res.send(err);
      res.send(result);
    }
  );
});

app.get("/getProdutos", (req, res) => {
  let mysql = "SELECT * FROM produtos";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// leitura tabela de linhas comerciais
app.post("/buscaLinhas", (req, res) => {
  const { nomelinha } = req.body;
  const { descricaolinha } = req.body;
  let mysql =
    "SELECT * FROM linhascomerciais WHERE nomelinha = ? AND descricaolinha = ?";
  db.query(mysql, [nomelinha, descricaolinha], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getLinhas", (req, res) => {
  let mysql = "SELECT * FROM linhascomerciais";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// editar e/ou deletar um produto
app.put("/edit", (req, res) => {
  const { idprod } = req.body;
  const { linha } = req.body;
  const { produto } = req.body;
  const { descricao } = req.body;
  const { tamanho } = req.body;
  const { sabor } = req.body;
  const { valor } = req.body;
  let mysql =
    "UPDATE produtos SET linha = ?, produto = ?, descricao = ?, tamanho = ?, sabor = ?, valor = ? WHERE idprod = ?";
  db.query(
    mysql,
    [linha, produto, descricao, tamanho, sabor, valor, idprod],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:idprod", (req, res) => {
  const { idprod } = req.params;
  let mysql = "DELETE FROM produtos WHERE idprod = ?";
  db.query(mysql, idprod, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// porta localhost do back
app.listen(3001, () => {
  console.log("Servidor Rodando na Porta 3001");
});
