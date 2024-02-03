const name = "mani"
const repoCount = 50

// console.log(name + repoCount); // + is used to concatanate

console.log(`hello my name is ${name} and my repo count is ${repoCount} `);//better syntax (modern)
//string interpolation

const gameName = new String('mani')
const gn = new String("rah")
console.log(gameName.length);
console.log(gameName.charAt(1));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf(`a`));
console.log(gameName.substring(0,3));//first and end number tak string milega
console.log(gameName.replace('mani','manii'));// replaces searche value with replace value