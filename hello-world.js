const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
res.send('Hola mundo doloroso, desde el modulo express');
});
app.listen(port, () => console.log(`Un hola mundo app escuchando en el puerto ${port}!`))
