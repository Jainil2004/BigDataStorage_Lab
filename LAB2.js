LAB 2 (27/1/2024)

Q1
db.createCollection("product_1");

Q2
db.product_1.insertMany([
    {name: "pencil", price: 10, units: 10, discount: 5},
    {name: "book", price: 30, units: 20, discount: 15},
    {name: "rubber", price: 1, units: 10, discount: 1},
    {name: "stickers", price: 100, units: 100, discount: 50},
    {name: "pen", price: 10, units: 1, discount: 0},
    {name: "Lenovo Legion 5i base model", price: 100000, units: 200, discount: 20},
    {name: "Lenovo Legion 7i base model", price: 150000, units: 100, discount: 15},
    {name: "Lenovo Legion 9i base model", price: 200000, units: 20, discount: 10},
    {name: "Dell Alienware x15", price: 165000, units: 17, discount: 5},
    {name: "Dell Alienware x17", price: 225000, units: 50, discount: 20}
]);

Q3
db.product_1.find();

Q4
db.product_1.update(
    {"price": {$gt: 200}}, // query the results here
    {$set: {"discount" : 10}} // change the results here
);

Q5
db.product_1.updateOne( {}, {$set: {"name": "chair"}}, {sort: {_id: -1}} );

Q6
db.product_1.updateMany(
    {"units": {$gt : 10}},
    {$set: {"units" : 10}}
);

Q7
db.product_1.deleteone({units : 8});

Q8
db.product_1.find({discount: {$gt: 3}}).limit(5); // use limit to limit the number of documents displayed 

Q9
db.product_1.find({}).sort({_id: -1}).skip(3).limit(4);
