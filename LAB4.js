LAB 4 (3/2/24)

Q1
db.createCollection('student_4');

Q2
// insert data into collection

Q3. 
// Project Student name, CGPA and year only

db.student_4.aggregate( [
    { $project: {name: 1, CGPA: 1, year: 1} }
] );

Q4
// project student name, CGPA and Course where course = 'Big Data'

db.student_4.aggregate( [
    {$match: {course: 'Big Data'} },
    {$project: {name: 1, CGPA: 1, course: 1}}
] );

Q5
// Display student's percentage where percentage: cgpa*10 (using $multiply)

db.student_4.aggregate( [
    {$project: {name: 1, CGPA: 1, percentage: {$multiply: ["$CGPA", 10]}}}
]);

Q6
// match all the documents where CPGA < 7.5 and display count of such students

db.student_4.aggregate( [
    {$match: {CGPA: {$lt: 7.5}}},
    {$group:{_id: null, count: {$sum: 1}}}
] );

Q7
// group documents {yearwise, coursewise} and also display average CGPA and count of such
db.student_4.aggregate([
    {$group: {_id: "$year", count: {$sum: 1}, average_CGPA: {$avg: "$CGPA"}}}, 
    {$project: {_id: 0, year: "$_id", average_CGPA: 1, count: 1}},
    {$sort: {year: 1}}
]);

db.student_4.aggregate([
    {$group: {_id: "$course", count: {$sum: 1}, average_CGPA: {$avg: "$CGPA"}}}, 
    {$project: {_id: 0, course: "$_id", average_CGPA: 1, count: 1}},
    {$sort: {course: 1}}
]);

// testing
db.student_4.aggregate( [
    {$group: {_id: {year: "$year", course: "$course"}, count: {$sum: 1}, average_CGPA: {$avg: "$CGPA"} }},
    {$project: {_id: 0, year: "$_id", average_CGPA: 1, count: 1}}
] );

Q8
// display all unique courses in the collection

db.student_4.aggregate( [
    {$group: {_id: "$course"}},
    {$project: {_id: 0, course: "$_id"}}
] );

// another option
db.student_4.distinct('course');
db.student_4.distinct('course', {course: 'Big Data'});

Q9
// using push and out: store names of students from each course in a new collection. display the details from new collection using find()

db.student_4.aggregate( [
    {$group: {_id: "$course", students: {$push: "$name"}}},
    {$out: "course_students"}
] );