console.clear();

const express = require('express');
const consign = require('consign');

const app = express();

const cors = require('cors');

app.use(express.json())
app.use(cors())
consign()
    .include('src/routes')
    .then('src/repositories')
    .then('src/controllers')
    .into(app);

app.listen(3003, function(){
    console.log('APP rodando na porta 3003');
});