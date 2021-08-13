import { compose, pipe } from "lodash/fp"



function sayHello(){
  return function(){
    return "Hello World"
  }
}

let fn = sayHello()
let message = fn()

console.log(message)
