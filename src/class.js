class Person {
  // #x; 私有属性，现为提案，babel还不支持转译
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`Hello, I am ${this.name}, ${this.age} years old`);
  }
}

class Student extends Person {
  // 静态属性，es7的提案，babel支持转译
  static exercise = 8;

  // 实例属性，es7的提案，babel支持转译
  grade = "一年级";

  // 静态方法
  static setExercise(val) {
    // 静态方法，这里this指向类本身
    this.exercise = val;
  }

  constructor(props, grade) {
    super(props);
    // new.target属性允许你检测函数或构造方法是否是通过new运算符被调用的。
    // 在通过new运算符被初始化的函数或构造方法中，new.target返回一个指向构造方法或函数的引用。
    // 在普通的函数调用中，new.target 的值是undefined。
    this.grade = grade || this.grade;
  }
}

export { Person, Student };
