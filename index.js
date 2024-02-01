const express= require('express');
const app = express();
const port = 4875 ;
const cave = require('./API/grotte.json')
app.use(express.json());
const cors = require("cors");
app.use(cors());
const path = require('path');


const assetsFolderPath = path.join(__dirname, 'assets');

app.use('/assets', express.static(assetsFolderPath));

app.get('/cave/all', (req,res) => {
    res.json(cave)
})

app.listen(port, () => {
    console.log(`Ecoute du port ${port}`);
})
.on("error", (err)=> {
    console.log('Error',err.message);
});

