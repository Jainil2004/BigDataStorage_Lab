LAB 3 (27/1/24)

Q1
db.createCollection('book');

Q2
// insert required data into the collection

Q3
db.book.find();

Q4
db.book.insertOne({author: "ballu singh", title: "depression is in my religion", year: 2013, price: 250});
db.book.find({$and: [{price: {$gt: 200}}, {year: {$lt: 2015}}]});

Q5
db.book.find().sort({year: -1});

Q6
db.book.find({$or: [{year : 2019}, {year : 2020}]} ).sort({price: 1});

Q7
db.book.find().limit(3);

Q8
db.book.find().sort({price: -1}).limit(3);

Q9
db.book.createIndex({year: 1});
db.book.getIndexes();