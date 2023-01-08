// const intervalId = setInterval(() => {
  //  console.log("salom") 
// }, 1000)    

// setTimeout(() => {
  // clearInterval(intervalId)
// }, 5000)


// clearTimeout(timerid)


// const person = {
   // sleepTime: 10,
   // name: 'asad',
   // age: 16,
 //   adress: {
       // city: 'tashkent',
     //   fleet: 12
   // } 
// }


// let { name, age, sleepTime, adress: {city, fleet}} = person;
// console.log(city)

// const [first, ...hammasi] = [10, 20, 30, 40]

// console.log(first, hammasi)


// function func(...rest) {
//    console.log(rest)
// }

// func(10, 20, 30, 40)



// 1 elektron soat yasash 

const intervalId = setInterval(() => {
    let date = new Date()
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("h1").innerHTML = hour + ":" + minutes + ":" + seconds;
}, 1000)

// 2




function func1 () {
  var time = 60;
function func2 () {
  const timer = document.getElementById("timer")
  time--;
  
  timer.innerHTML =  "0:" + time;
  if (time > 0) {
    setTimeout(func2, 1000);
     }
  else {
    document.getElementById("timer").innerHTML = 'END'
  }
     

  }   
func2()
}
func1()

//3

let mas = [45, 33, 94, 7, 23, 34, 76]

function func3(elem) {
    return Math.max(elem);
}
console.log(func3(...mas))