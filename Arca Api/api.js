const express = require('express') //jalamos a express
const cors = require('cors')
const app = express()
//Esto es para el puerto seguro
const dotenv = require('dotenv')
dotenv.config();
const port = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(cors());


// esto es para las direcciones de la api que nos regresan los json 
app.get('/', (req, res) => {
  res.send('Página Inicial')
})

app.use(require('./routes/routes.js')); //


app.listen(port, () => {
  console.log(`Escuchando del Puerto ${port}`)
})