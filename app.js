const express = require('express');
const mongoose = require('mongoose');
const app = express();


//establish connection to database with mongoose
mongoose.connect('mongodb://localhost/imageGallery', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


///creating a schema with mongoose to set the structure for the data [received]?
// const ItemSchema = new mongoose.Schema({
//     url: {
//         type: String,
//         required: true
//     }
// });

const ItemSchema = new mongoose.Schema({
    url: String,
});


const Item = mongoose.model('Item', ItemSchema);



//set view engine to ejs
app.set('view engine', 'ejs');



// const { MongoClient } = require("mongodb");
// const { application } = require('express');
// const uri = "mongodb://localhost/imageGallery";
// const client = new MongoClient(uri);



// async function run(){
//     try {
//         await client.connect();
//             const db = client.db("imageGallery");
//             const coll = db.collection("images");

//             // coll.insertMany([
//             //     {url: 'https://cdna.artstation.com/p/assets/images/images/057/757/868/large/junggeun-yoon-dejah-thoris-final-junggeun-yoon-1.jpg?1672593121'},
//             //     {url: 'https://cdna.artstation.com/p/assets/images/images/058/999/814/large/sun-man-.jpg?1675402424'},
//             //     {url: 'https://cdnb.artstation.com/p/assets/images/images/058/593/043/large/leslie-van-den-broeck-boa.jpg?1674527511'},
//             //     {url: 'https://cdnb.artstation.com/p/assets/images/images/058/632/265/large/leslie-van-den-broeck-bigmom.jpg?1674611557'},
//             //     {url: 'https://cdnb.artstation.com/p/assets/images/images/058/961/237/large/erfan-abdi-test13.jpg?1675330273s'},
//             //     {url: 'https://cdnb.artstation.com/p/assets/images/images/056/906/447/large/robert-guillen-assasin-lady-fhd.jpg?1670508789'},
//             //     {url: 'https://cdna.artstation.com/p/assets/images/images/058/788/856/large/shubham-bhosale-clay-wire.jpg?1674992864'},
//             //     {url: 'https://cdnb.artstation.com/p/assets/images/images/058/606/525/large/magic-vision-rok-a14-02.jpg?1674564197'},
//             // ])
//             const cursor = coll.find();
//             await cursor.forEach(console.log);
//     } finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);




app.get('/', async (req, res) => {
    //need to get images from database here
    const items = await Item.find();
    console.log("test")
    // console.log(items[0].url);
    res.render('index', {items});
})

app.listen(8080, ()=> {
    console.log('app listening on port 8080');
})




