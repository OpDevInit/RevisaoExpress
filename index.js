let util = require("./uteis");
console.log("iniciando meu  Servidor!!");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
})
//pega os dados listados na url
app.get('/teste/algo/:nome/:idade', (req, res) => {
  
  console.log("Alguem acessou a rota /teste/algo");
  console.log(req.params);
  
  res.send(`
    <div style="width: 300px; border: 1px solid black; padding: 4px;">
        <p style="font-weight: 800;">Você acessou a rota</p> 
        /teste/algo
        <p>nome: ${req.params.nome}</p>
        <p>idade: ${req.params.idade}</p>
    </div>
  `)

})

app.listen(port, () => {
    console.log(`Porta em execucao...${port}`);
})





