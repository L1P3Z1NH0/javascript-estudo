function cuzinho({min=0, max=1000}){
    const pinto = Math.random() * (max - min) + min
    return Math.floor(pinto)
}

console.log(cuzinho({}));
console.log(cuzinho({max: 75}));
console.log(cuzinho({min: 960}));

const fodace = {min:0 , max:10}
console.log(cuzinho(fodace));