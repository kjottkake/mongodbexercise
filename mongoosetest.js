const mongoose = require('mongoose');

//establish connection to database with mongoose
mongoose.connect('mongodb://localhost/imageGallery', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number, 
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 7,
//     review: "nice",
// });

// fruit.save();

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    } else {
        console.log(fruits);
    }
});
