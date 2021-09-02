// student details.
//var name = "Fuwad Hasan";
//var age = 35;
//var lang = ["Bangla", "Hindi", "English"];
//console.log(age);
// how to creat an Object
// how to print the value of an Object.
// adding a constructor
// adding function inside a constructor,
/*var student1 ={
  name : "Fuwad Hasan",
  age : 35,
  cgpa : 3.92,
  lang : ["Bangla", "Hindi", "English"],
}
var student2 ={
  name : "Umme Salma",
  age : 27,
  cgpa : 3.92,
  lang : ["Bangla", "Hindi", "English"],
}
var student3 ={
  name : "Rafiqul Islam",
  age : 28,
  cgpa : 3.92,
  lang : ["Bangla", "Hindi", "English"],
}
var student4 ={
  name : "Muzammel Haque",
  age : 36,
  cgpa : 3.99,
  lang : ["Bangla", "Hindi", "English"],
}*/

function Student(name,age,cgpa,lang){
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;

  this.display = function (){
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  }
}
var student1 = new Student("Fuwad Hasan", 35, 3.92,["Bangla", "Hindi", "English"]);
var student2 = new Student("Umme Salma", 26, 4.92,["Bangla", "Hindi", "English"]);
var student3 = new Student("Rafiqul Islam", 27, 2.92,["Bangla", "Hindi", "English"]);
var student4 = new Student("Mahdi Hasan", 38, 5.92,["Bangla", "Urdu", "English"]);

student1.display();
student3.display();
student2.display();
