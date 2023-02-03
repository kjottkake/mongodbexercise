const express = require('express');
const mongoose = require('mongoose');
const app = express();


//establish connection to database with mongoose
mongoose.connect('mongodb://localhost/imageGallery', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const ItemSchema = new mongoose.Schema({
    url: String,
});

const Item = mongoose.model('Item', ItemSchema);

//set view engine to ejs
app.set('view engine', 'ejs');


app.get('/', async (req, res) => {
    try {
        //need to get images from database here
        const items = await Item.find();
        console.log("test")
        res.render('index', { items });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching items from database, something fucky happened');
    }
})

app.listen(8080, () => {
    console.log('app listening on port 8080');
    console.log(Item.find());
})

mongoose.connection.on('error', (error) => {
    console.error(error);
    process.exit(1);
});




