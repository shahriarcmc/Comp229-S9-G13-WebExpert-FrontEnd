const express = require('express'); 
const path = require('path'); 
const app = express(); 

app.use(express.static(__dirname + '/static')); 

app.get('/*', function (req, res) { 
    res.sendFile(path.join(__dirname + '/static/')); 
}); 

app.listen(process.env.PORT || 8080, () => {
    console.log(`====> Angular app is running.`)
})