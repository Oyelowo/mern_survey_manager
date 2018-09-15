const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({yes: 'Oyelowo is cool, calm and collected'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
