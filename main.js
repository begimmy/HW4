console.log("Task#1______________________________________________");
console.log([1,2,3,].map((item)=>{
    return item*2;
}));



console.log("Task#2______________________________________________");
console.log([1,2,-3,4,-5].map((item)=>{
        return item*(-1)   
}));



console.log("Task#3______________________________________________");
console.log([4, 6, 'Ivan', 5, 'Denis '].map((item)=>{
    if(typeof item=='string'){
        return null
    }
    else{
        return item
    }
}));


console.log("Task#4______________________________________________");
console.log(['Евдоким','Ivan', 'Игнат', 'Denis'].filter((item)=>{
   return item.length <= 5;
}));


console.log("Task#5______________________________________________");
console.log([7, 8, 2].map((item)=>{
    return Math.pow(item,3);
 }));



console.log("Task#6______________________________________________");
console.log(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'].map((item)=>{
    return item.length;
}));


console.log("Task#7______________________________________________");
console.log([1, 2, 3, 4, 5].map((item)=>{

    return document.write(`<p>Цифры: ${item}</p>`);
    
 }));


console.log("Task#8______________________________________________");

   const friends = [{ name: 'alex', pizzas: ['cheese', 'pepperoni'] },
                    { name: 'mike', pizzas: ['salami', 'margarita'] },
                    { name: 'stas', pizzas: ['meat'] },
                    { name: 'anna', pizzas: ['fish'] }];
console.log(friends.map((item)=>{
        return item.pizzas      
}));



  
    
