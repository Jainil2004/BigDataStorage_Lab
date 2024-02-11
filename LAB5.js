LAB5 (10/2/24)

Q1
db.createCollection("students_5");

Q2
// insert required data into the collection

Q3
// find sample of 4 studnets
db.student_5.aggregate({$sample: {size: 4}});

Q4
// create new fields: End_marks(sum of physics, chemistry, maths), final_marks(sum of internal and end mark)
db.student_5.aggregate( [ 
    {$set: {end_marks: {$add: ["$marks.physics", "$marks.chemistry", "$marks.maths"]}}},
    {$set: {final_marks: {$add: ["$end_marks", "$internalmarks"]}}},
    {$out: "mod_student_5"}
]);

Q5
// replace id field of all students with rollnumber
db.mod_student_5.aggregate( [
    {$set: { _id : "$roll_no" }}
] );

Q6
// add a new subject physical_education and set values as "Pass" for each document
db.mod_student_5.aggregate( [
    {$set: {"marks.physical_education": "Pass"}}
] );

Q7
// skip first 3 documents and display _id, name and final_marks of each student
db.mod_student_5.aggregate( [
    {$project: {rollno: 1, name: 1, final_marks: 1}},
    {$skip: 3}
] );

Q8
// sort the documents in the ascending order of they year and descending order of their final_marks
db.mod_student_5.aggregate( [
    {$sort: {year: 1, final_marks: -1}}
] );