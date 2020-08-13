const express = require('express');
const path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('/', function(req, res) {
 
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});





const port = 5000;
let portInfo = app.listen(port,()=>{ console.log('Server started at port: '+ portInfo.address().port)});
