var express = require('express');
var UserDataRoute = require('./routes/updateUserDataRouter')

const app = express();
const PORT = 3000;

app.use(express.json())
app.use('/userData', UserDataRoute) 

app.listen(PORT, () =>{
  console.log(`running on port ${PORT} ...`)
})