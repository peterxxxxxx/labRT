const express = require ('express');
const mysql = require('mysql2');
const cors = require("cors") 

const app = express();
const port = 4000;

app.use(express.json());

app.use(cors({origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE","UPDATE"],
    allowedHeaders:["Content-Type","Authorization","x-csrf-token"],
    exposedHeaders:["*","Authorization"]}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nolosemen777!',
    database: 'photoblog',
});

db.connect((e) => {
    if(e){
        console.error('Error en la conexion... ', e);
        return;
    }
    console.log('Conexion establecida con exito')
});

app.listen(port, () =>{
    console.log('Servidor corriendo  en el puerto:4000');
});

app.get('/', (req,res) => {
    res.send('Hola mundo desde GET');
    console.log('Hola mundo desde el GET');
});



app.get('/packs', (req,res) => {
    db.query('SELECT * FROM packs', (e,results) => {
        if(e) throw e;
        res.json(results);
    });
});

//post
app.post('/packs', (req, res) => {
    const { title, price, photos } = req.body;
    db.query('INSERT INTO packs (title, price, photos) VALUES (?, ?, ?)', [title, price, photos], (err, result) => {
      if (err) throw err;
      res.json({ message: 'Se agrego correctamente el paquete', id: result.insertId }); 
    });
  });


  //obtener elemento especifico
  app.get('/packs/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM packs WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    });
  });

  //update

  app.put('/packs/:id', (req, res) => {
    const { id } = req.params;
    const { title, price, photos } = req.body;
    db.query('UPDATE packs SET title = ?, price = ?, photos = ? WHERE id = ?', [id, title, price, photos], (err) => {
      if (err) throw err;
      res.json({ message: 'Se actualizo correctamente' });
    });
  });


// Eliminar elemento
app.delete('/packs/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM packs WHERE id = ?', [id], (err) => {
      if (err) throw err;
      res.json({ message: 'Elemeto eliminado correctamente' });
    });
  });


app.post('/', (req,res) => {
    res.send('Hola mundo desde POST');
    console.log('Hola mundo desde el POST');
});

app.put('/', (req,res) => {
    res.send('Hola mundo desde PUT');
    console.log('Hola mundo desde el PUT');
});