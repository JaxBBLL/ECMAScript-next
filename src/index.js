import { Person, Student } from "./class.js";
import { DecoratorClass, DecoratorPerson } from "./decorator.js";
import { url } from "./function-bind.js";
import { total } from "./spread";
// import '@babel/polyfill';

/* 1. class 语法糖 */
const tom = new Student(
  {
    name: "tom",
    age: 10
  },
  "三年级"
);

const peter = new Student({
  name: "peter",
  age: 6
});

tom.speak();
Student.setExercise(9);
console.log(peter, Student.exercise);

/* 2. decorator 装饰器 */

const decoratorClass = new DecoratorClass();
console.log(decoratorClass.isTest); // false

// DecoratorPerson.alive = false; // 报错，@readonly修饰了属性，只读
const decoratorPerson = new DecoratorPerson("Jack");

/* 3. 函数bind表达符 :: */

console.log(url);

/* 4. 收集展开运算符... */
console.log(total(1, 2, 3, 4));

var p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(0);
  });
});
