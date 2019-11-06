function decorator(bool = true) {
  return function(target) {
    target.prototype.isTest = bool;
  }
}

@decorator(false)
class DecoratorClass {}

class DecoratorPerson {
  constructor(name) {
    this.name = name;
  }
  // es7的提案，静态属性的写法
  @readonly
  static alive = true;

  @readonly 
  getName() { 
    return this.name;
  }
}
function readonly(target, name, descriptor) {
 /**
  * descriptor是属性的描述对象，原来的值如下：
  * {
  *   value: specifiedFunction,
  *   enumerable: false,
  *   configurable: true,
  *   writable: true
  * };
  */
  descriptor.writable = false;
  return descriptor
}

export {
  DecoratorClass,
  DecoratorPerson
}