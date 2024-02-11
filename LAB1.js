LAB 1 (13/1/2024)

Q1
db.createCollection("product");

Q2
db.product.insertMany([
    {name: "pencil", price: 10, units: 10, discount: 5},
    {name: "book", price: 30, units: 20, discount: 15},
    {name: "rubber", price: 1, units: 10, discount: 1},
    {name: "stickers", price: 100, units: 100, discount: 50},
    {name: "pen", price: 10, units: 1, discount: 0},
    {name: "Lenovo Legion 5i base model", price: 100000, units: 200, discount: 20},
    {name: "Lenovo Legion 7i base model", price: 150000, units: 100, discount: 15},
    {name: "Lenovo Legion 9i base model", price: 200000, units: 20, discount: 10},
    {name: "Dell Alienware x15", price: 165000, units: 8, discount: 5},
    {name: "Dell Alienware x17", price: 225000, units: 50, discount: 20}
]);

Q3
db.product.find();

Q4
db.product.find({price:{ $gt : 200 }});

Q5
db.product.find( {units : {$lte : 10}} );

Q6
db.product.find( {$and : [ {price:{ $gt : 100 }}, {discount : {$gt : 10}} ]} );

Q7
db.product.find( {$or : [{discount : 10}, {discount : 20}, {discount : 25}] } );

Q8
db.product.insertOne({name: "Balaji Wafers", price: 250, units: 100, discount: 5});
db.product.find({$and : [{name: "Balaji Wafers"}, {price : {$gt : 200}}, {discount: {$lt: 10}}]});


