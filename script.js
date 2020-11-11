// console.log('start loading resources');
// setTimeout(function(){
//   console.log('executing stuff')
//   setTimeout(function(){
//     console.log('show the results')
//   },1500)
// }, 3000)
// let myTimer = {
//   name: 'Marc',
//   run: function(){
//     let that = this
//     setTimeout(function(){
//       console.log('hello ' + that.name)
//     },1500)
//   }
// }
// myTimer.run()
// const go = document.querySelector('.go');
// // // This element is a button that will change during the time
// // // Change the text to GO when clicked
// go.addEventListener('click', function(e) {
//     const el = e.currentTarget;
//     el.textcontent = 'GO!';
//     setTimeout(function() {
//         el.classList.add('circle');
//         setTimeout(function(){
//             el.classList.add('red');
//             setTimeout(function(){
//                 el.classList.remove('circle');
//                 setTimeout(function(){
//                     el.classList.remove('red');
//                     el.classList.add('purple');
//                     setTimeout(function(){
//                         el.classList.add('fadeout');
//                     }, 500)
//                 }, 300)
//             }, 250)
//         }, 500);
//     }, 2000);
// });
// function makePizza(ingredient1, ingredient2) {
//   const pizzaPromise = new Promise(function(resolve, reject) {
//     resolve(`Your pizza with ${ingredient1} and ${ingredient2} is ready!`)
//   })
//   return pizzaPromise
// }
// const goodPizza = makePizza('cheese', 'bacon');
// const badPizza = makePizza('ham', 'pineapple');
// console.log(goodPizza, badPizza)
// goodPizza.then(function(pizza){
//   console.log(pizza)
// })
//  function makePizza(ingredient1, ingredient2) {
//    const pizzaPromise = new Promise(function(resolve, reject) {
//      if(ingredient1 === 'pineapple' || ingredient2 === 'pineapple'){
//        reject('We are not friends anymore')
//      }
//      setTimeout(function(){
//        resolve(`Your pizza with ${ingredient1} and ${ingredient2} is ready!`)
//      }, 2000)
//    })
//    return pizzaPromise
//  }
// makePizza('cheese', 'bacon')
//   .then(function(pizza){
//     console.log('1st pizza')
//     console.log(pizza)
//     return makePizza('bacon', 'chicken')
//   })
//   .then(function(pizza){
//     console.log('other pizza')
//     console.log(pizza)
//     return makePizza('ham', 'pineapple')
//   })
//   .then(function(pizza){
//     console.log('2nd pizza')
//     console.log(pizza)
//     return makePizza('veggies', 'meat')
//   })
//   .then(function(pizza){
//     console.log('3rd pizza')
//     console.log(pizza)
//   })
//   .catch((error) => console.log(error))



// function waitForIt(miliseconds) {
//     return new Promise(resolve => setTimeout(resolve,miliseconds))
// }

// async function startThis() {
//     console.log('start')
//     await waitForIt(1000)
//     console.log('do something')
//     await waitForIt(2000)
//     console.log('done')
// }

// startThis()

// async function makeDinner() {
//     const pizza = makePizza('bacon', 'chicken')
//     console.log('pizza is here! : ' + pizza1)
//     const pizza = makePizza('bacon', 'cheese')
//     console.log('pizza is here! : ' + pizza2)
//     const pizza = makePizza('meat', 'chicken')
//     console.log('pizza is here! : ' + pizza3)
//     const pizza = makePizza('ham', 'cheese')
//     console.log('pizza is here! : ' + pizza4)
//     const pizza = makePizza('cheese', 'veggie')
//     console.log('pizza is here! : ' + pizza5)
// }

// makeDinner()

// async function giveMePizza() {
//     try{
//          const pizza = makePizza('pineapple', 'ham')
//     console.log(pizza)
//  }
//    catch (error){
// console.log("ERRROR: " + error)
//    }
// }
// giveMePizza()

// let test = [1,2,43,4,23,23]
// try{
//     let newTest = test.map(num => num+2)
//     console.log(newTest)
// }
// catch(error){
//     console.log(error)
//}


