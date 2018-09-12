var pets = ['cat', 'dog', 'rat'];
var arrayLength = pets.length;


for (var i = 0; i < arrayLength; i++) {
  pets[i] = pets[i] + 's'
} ;

pets[0] = 'cats'

console.log(pets)