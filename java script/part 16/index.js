var names = ["Fuwad", "Akashi", "Sowrav", "Ovi"];
console.log(names);
// shift opposite of pop
//names.shift();
//console.log(names);
//unshift opposite of push
//names.unshift("Sagor");
//console.log(names);
// adding elements using splice
//names.splice(2,1,"Karim","Rahim");
//console.log(names);
//names.splice(1,2);
//console.log(names);
//var sortedNames = names.sort();
//names.reverse();
//console.log(sortedNames);
var numbers = [20,44,33,99,5];
numbers.sort(function(a,b){
  return b-a;
});
console.log(numbers);
