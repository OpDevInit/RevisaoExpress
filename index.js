let util = require("./uteis");
console.log("iniciando meu  Servidor!!");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send("To de Volta!!");
})

app.listen(port, () =>{
    console.log(`Porta em execucao...${port}`);
})





