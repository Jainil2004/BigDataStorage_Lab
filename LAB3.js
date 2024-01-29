LAB 3 (27/1/24)

Q1
db.createCollection('book');

Q2
db.book.insertMany( [
    { author: "Jainil Jain", title: "Ultima GEN3", year : 2024, price: 500},
    { author: "Ayush Jain", title: "Intel Xeon SOC designing", year : 2022, price: 5000},
    { author: "Dhruvi Mehta", title: "Basics of Designing", year: 2023, price: 100},
    { author: "John Doe", title: "Advanced Designing", year: 2019, price: 150 },
    { author: "Jane Smith", title: "Designing for Beginners", year: 2018, price: 120 },
    { author: "Robert Johnson", title: "Designing Masterclass", year: 2017, price: 180 },
    { author: "Emily Davis", title: "Designing Essentials", year: 2016, price: 130 },
    { author: "Michael Miller", title: "The Art of Designing", year: 2015, price: 140 },
    { author: "Sarah Brown", title: "Designing Techniques", year: 2014, price: 160 },
    { author: "David Wilson", title: "Designing Principles", year: 2013, price: 170 }
]);

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