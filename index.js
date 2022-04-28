
const person = {
    name: 'Mike',
    age: 30
};

for(let key in person)
// console.log(key);
console.log(key, person[key]);

const colors = ['red','green','blue'];

for (let index in colors)
console.log(index, colors[index]);